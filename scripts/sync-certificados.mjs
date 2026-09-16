import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import prettier from "prettier";

const MANIFEST_URL =
  "https://raw.githubusercontent.com/alvarofgomes/Certificados/main/certificados.json";
const RAW_BASE = "https://raw.githubusercontent.com/alvarofgomes/Certificados/main/";
const CONTENTS_API_URL = "https://api.github.com/repos/alvarofgomes/Certificados/contents/";

const ROOT = path.resolve(import.meta.dirname, "..");
const CERT_DIR = path.join(ROOT, "public", "assets", "certificados");
const OUT_FILE = path.join(ROOT, "src", "data", "certificados.ts");

const VALID_CATEGORIAS = ["java", "web", "git", "ia", "office", "python", "sql", "outros"];

async function fetchManifest() {
  const res = await fetch(MANIFEST_URL, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Falha ao buscar certificados.json: HTTP ${res.status}`);
  }
  const manifest = await res.json();
  if (!Array.isArray(manifest) || manifest.length === 0) {
    throw new Error("certificados.json vazio ou em formato inválido");
  }
  return manifest;
}

function validateEntry(entry, index, errors) {
  const required = ["arquivo", "titulo_pt", "titulo_en", "categoria"];
  for (const field of required) {
    if (!entry[field] || typeof entry[field] !== "string") {
      errors.push(`Entrada ${index} do manifesto sem campo "${field}" válido`);
      return;
    }
  }
  if (!VALID_CATEGORIAS.includes(entry.categoria)) {
    errors.push(
      `Entrada ${index} ("${entry.arquivo}") tem categoria inválida: "${entry.categoria}". ` +
        `Válidas: ${VALID_CATEGORIAS.join(", ")}`
    );
  }
}

async function fetchRepoFileNames() {
  const res = await fetch(CONTENTS_API_URL, {
    headers: { Accept: "application/vnd.github+json" },
    cache: "no-store"
  });
  if (!res.ok) {
    throw new Error(`Falha ao listar arquivos do repo Certificados: HTTP ${res.status}`);
  }
  const items = await res.json();
  return new Set(items.filter((i) => i.type === "file").map((i) => i.name));
}

function validateFilesExist(manifest, realFiles, errors) {
  for (const entry of manifest) {
    if (entry.arquivo && !realFiles.has(entry.arquivo)) {
      errors.push(
        `Arquivo "${entry.arquivo}" (título: "${entry.titulo_pt}") não existe no repo Certificados. ` +
          `Confira acentos/espaços/maiúsculas no campo "arquivo" do manifesto.`
      );
    }
  }
}

async function downloadPdf(arquivo) {
  const url = RAW_BASE + encodeURIComponent(arquivo);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Falha ao baixar "${arquivo}": HTTP ${res.status}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(CERT_DIR, arquivo), buffer);
}

function escapeString(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function toTsSource(entries) {
  const items = entries
    .map(
      (e) => `  {
    titulo: { pt: "${escapeString(e.titulo_pt)}", en: "${escapeString(e.titulo_en)}" },
    arquivo: "${escapeString(e.arquivo)}",
    categoria: "${e.categoria}"
  }`
    )
    .join(",\n");

  return `import type { Certificado } from "@/types/models";

// Gerado automaticamente por scripts/sync-certificados.mjs a partir de
// https://github.com/alvarofgomes/Certificados/blob/main/certificados.json
// Não editar à mão — a próxima sincronização sobrescreve este arquivo.

const raw: Certificado[] = [
${items}
];

export const certificados: Certificado[] = [...raw].sort((a, b) =>
  a.titulo.pt.localeCompare(b.titulo.pt, "pt-BR")
);
`;
}

async function formatWithPrettier(source) {
  const configPath = path.join(ROOT, ".prettierrc.json");
  const config = JSON.parse(await readFile(configPath, "utf-8"));
  return prettier.format(source, { ...config, parser: "typescript" });
}

async function main() {
  console.log("Buscando manifesto em", MANIFEST_URL);
  const manifest = await fetchManifest();

  const errors = [];
  manifest.forEach((entry, index) => validateEntry(entry, index, errors));

  console.log("Conferindo se todos os arquivos do manifesto existem no repo...");
  const realFiles = await fetchRepoFileNames();
  validateFilesExist(manifest, realFiles, errors);

  if (errors.length > 0) {
    throw new Error(
      `${errors.length} problema(s) no manifesto:\n` + errors.map((e) => `  - ${e}`).join("\n")
    );
  }

  console.log(`${manifest.length} certificados no manifesto, todos validados.`);

  await mkdir(CERT_DIR, { recursive: true });

  for (const entry of manifest) {
    console.log("Baixando:", entry.arquivo);
    await downloadPdf(entry.arquivo);
  }

  const tsSource = toTsSource(manifest);
  const formatted = await formatWithPrettier(tsSource);
  await writeFile(OUT_FILE, formatted, "utf-8");

  console.log("Sincronização concluída:", OUT_FILE);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
