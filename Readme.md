# Portfólio Pessoal — Álvaro Gomes

Portfólio desenvolvido para apresentar minha experiência profissional, projetos e certificados de forma moderna, responsiva e bilíngue.

🔗 **[Ver online](https://alvarofgomes.github.io/Portfolio_alvarofgomes/)**

---

## Funcionalidades

- **Início** — terminal widget com syntax-highlighted, efeito de digitação nas roles, chips de stack técnica e links para redes sociais
- **Projetos** — cards data-driven com path estilo terminal, tags de tecnologia e links para repositório/demo, com os projetos de foco back-end em destaque
- **Experiência** — layout com perfil fixo (sticky), foto profissional com borda gradiente, timeline de responsabilidades e botão para currículo em PDF
- **Certificados** — cards organizados por categoria com filtros interativos
- **Bilíngue** — alternância PT/EN via composable de i18n, sem recarregar a página
- **Navegação com deep link** — cada aba tem sua própria rota (Vue Router, modo hash), então dá pra linkar direto pra uma seção
- **Responsivo** — adaptado para mobile, tablet e desktop

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| Vue 3 | Composition API (`<script setup>`), componentização por seção |
| TypeScript | Tipagem dos dados (projetos, certificados, textos) e composables |
| Vite | Build, dev server e code-splitting por rota |
| Vue Router | Roteamento em modo hash (compatível com GitHub Pages) |
| ESLint + Prettier | Lint (`eslint-plugin-vue` + `@vue/eslint-config-typescript`) e formatação padronizada |
| Font Awesome 6.5 | Ícones |
| Space Grotesk | Tipografia principal (Google Fonts) |
| JetBrains Mono | Tipografia mono no terminal widget e elementos de código (Google Fonts) |

---

## Estrutura

```
Portfolio_alvaro/
├── .github/workflows/
│   ├── deploy.yml              # CI: build + deploy no GitHub Pages (push na main)
│   ├── build-deploy.yml        # workflow reutilizável de build + deploy
│   └── sync-certificados.yml   # sincroniza certificados do repo Certificados
├── scripts/
│   └── sync-certificados.mjs   # busca o manifesto e regenera src/data/certificados.ts
├── index.html                     # entrada do Vite
├── vite.config.ts
├── eslint.config.js
├── .prettierrc.json
├── .editorconfig
├── tsconfig*.json
├── src/
│   ├── main.ts
│   ├── App.vue
│   ├── router/            # rotas (home, projetos, experiência, certificados)
│   ├── views/              # uma view por seção/rota
│   ├── components/         # NavBar, cards, fundo animado, footer
│   ├── composables/        # useLanguage, useCertFilter, useTypingEffect, useNetworkBackground
│   ├── data/                # projetos, certificados, categorias e textos i18n (tipados)
│   ├── types/                # interfaces compartilhadas
│   ├── utils/                 # helpers (paths de assets e URL dos certificados no CDN)
│   └── styles/                 # base.css (tokens/reset) + layout.css (compartilhado), agregados em index.css
└── public/
    └── assets/
        ├── images/
        │   └── foto-perfil.jpg
        └── curriculo.pdf
```

---

## Destaques técnicos

**Background multi-layer** — três camadas sobrepostas: gradiente radial (`.bg-glow`), grid de pontos (`.bg-grid`) e canvas com animação de constelações (`#bg-canvas`), encapsuladas no componente `BackgroundLayers.vue`.

**Terminal widget** — bloco de código Java com syntax highlighting feito puramente em HTML/CSS, sem biblioteca de highlight, exibido no hero da home como identidade visual dev-tools.

**Arquitetura data-driven e tipada** — projetos e certificados são arrays tipados em `src/data/`. Para adicionar um projeto, basta inserir um objeto em `src/data/projetos.ts`.

**Certificados vêm de outro repositório** — os PDFs e seus metadados moram em
[alvarofgomes/Certificados](https://github.com/alvarofgomes/Certificados), não aqui. Ao commitar um
certificado novo lá (PDF + entrada no `certificados.json`), um workflow avisa este repositório, que
regenera `src/data/certificados.ts` e publica sozinho. Os PDFs em si são servidos pelo CDN do
jsDelivr direto do repo de origem (`certificadoUrl` em `src/utils/asset.ts`), então não ficam
duplicados aqui.

**Sistema i18n** — textos em PT/EN ficam no objeto `textos` (`src/data/textos.ts`). O composable `useLanguage` expõe o idioma atual de forma reativa para qualquer componente.

**CSS por componente** — cada componente/view carrega só o CSS que usa (`<style scoped>`), com tokens e estilos verdadeiramente globais centralizados em `src/styles/` (`base.css` + `layout.css`, importados via `index.css`).

**Acessibilidade** — suporte a `prefers-reduced-motion` para desativar animações em dispositivos que pedem menos movimento.

**Deploy automático** — todo push na `main` dispara um workflow do GitHub Actions (`.github/workflows/deploy.yml`) que builda o projeto e publica o `dist/` no GitHub Pages, sem passo manual.

---

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/alvarofgomes/Portfolio_alvarofgomes.git
   cd Portfolio_alvarofgomes
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Suba o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Ou gere o build de produção:
   ```bash
   npm run build
   npm run preview
   ```

### Outros comandos

| Comando | O que faz |
|---|---|
| `npm run type-check` | Roda só a checagem de tipos (`vue-tsc`) |
| `npm run lint` | ESLint com autofix em todo o projeto |
| `npm run format` | Formata `src/` com Prettier |

---

## Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Álvaro%20Gomes-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/alvarofgomes)
[![GitHub](https://img.shields.io/badge/GitHub-alvarofgomes-181717?style=flat&logo=github)](https://github.com/alvarofgomes)
