import type { Categoria, CategoriaKey } from "@/types/models";

export const categorias: Record<CategoriaKey, Categoria> = {
  todos: { label: { pt: "Todos", en: "All" }, icon: "fas fa-border-all", cor: "linear-gradient(135deg, #2A6FDB, #8B5CF6)" },
  java: { label: { pt: "Java", en: "Java" }, icon: "fab fa-java", cor: "linear-gradient(135deg, #f89820, #c84b31)" },
  web: { label: { pt: "HTML/CSS/JS", en: "HTML/CSS/JS" }, icon: "fas fa-code", cor: "linear-gradient(135deg, #e44d26, #2A6FDB)" },
  git: { label: { pt: "Git & GitHub", en: "Git & GitHub" }, icon: "fab fa-git-alt", cor: "linear-gradient(135deg, #f05032, #2d333b)" },
  ia: { label: { pt: "Inteligência Artificial", en: "Artificial Intelligence" }, icon: "fas fa-robot", cor: "linear-gradient(135deg, #8B5CF6, #06b6d4)" },
  office: { label: { pt: "Microsoft Office", en: "Microsoft Office" }, icon: "fas fa-file-lines", cor: "linear-gradient(135deg, #d83b01, #0078d4)" },
  python: { label: { pt: "Python", en: "Python" }, icon: "fab fa-python", cor: "linear-gradient(135deg, #3776ab, #ffd43b)" },
  sql: { label: { pt: "Banco de Dados", en: "Databases" }, icon: "fas fa-database", cor: "linear-gradient(135deg, #336791, #00758f)" },
  outros: { label: { pt: "Bootcamps", en: "Bootcamps" }, icon: "fas fa-graduation-cap", cor: "linear-gradient(135deg, #1da5bd, #4b5563)" }
};

export const ordemCategorias: CategoriaKey[] = [
  "todos",
  "java",
  "web",
  "git",
  "ia",
  "office",
  "python",
  "sql",
  "outros"
];
