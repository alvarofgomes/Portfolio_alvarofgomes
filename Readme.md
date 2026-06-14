# Portfólio Pessoal — Álvaro Gomes

Portfólio desenvolvido para apresentar minha experiência profissional, projetos e certificados de forma moderna, responsiva e bilíngue.

🔗 **[Ver online](https://alvarofgomes.github.io/Portfolio_Alvaro_Gomes-/)**

---

## Funcionalidades

- **Início** — terminal widget com syntax-highlighted, efeito de digitação nas roles, chips de stack técnica e links para redes sociais
- **Projetos** — cards data-driven com path estilo terminal, tags de tecnologia e links para repositório/demo
- **Experiência** — layout com perfil fixo (sticky), foto profissional com borda gradiente, timeline de responsabilidades e botão para currículo em PDF
- **Certificados** — cards organizados por categoria com filtros interativos
- **Bilíngue** — alternância PT/EN via atributos `data-i18n`, sem recarregar a página
- **Responsivo** — adaptado para mobile, tablet e desktop com media queries em arquivo único

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica e atributos `data-i18n` para i18n |
| CSS3 | Design system com variáveis, Grid, Flexbox, multi-layer background |
| JavaScript ES6+ | Renderização data-driven, filtros, typing effect, Web Animations API |
| Font Awesome 6.5 | Ícones |
| Space Grotesk | Tipografia principal (Google Fonts) |
| JetBrains Mono | Tipografia mono no terminal widget e elementos de código (Google Fonts) |

> Projeto 100% vanilla — sem frameworks ou dependências de build.

---

## Estrutura

```
Portfolio_alvaro/
├── index.html
├── css/
│   └── style.css          # Todos os estilos (desktop + responsivo)
├── js/
│   └── handler.js         # Lógica JS: dados, renderização, i18n, animações
└── assets/
    ├── certificados/      # PDFs dos certificados
    ├── images/
    │   └── foto-perfil.jpg      # Foto profissional
    └── curriculo.pdf            # Currículo para visualização
```

---

## Destaques técnicos

**Background multi-layer** — três camadas sobrepostas: gradiente radial (`.bg-glow`), grid de pontos (`.bg-grid`) e canvas com animação de constelações (`#bg-canvas`).

**Terminal widget** — bloco de código Java com syntax highlighting feito puramente em HTML/CSS, sem biblioteca de highlight, exibido no hero da home como identidade visual dev-tools.

**Arquitetura data-driven** — projetos e certificados são definidos como arrays de objetos em `handler.js` e renderizados via funções (`renderProjects`, `renderCertificates`). Para adicionar um projeto basta inserir um objeto no array.

**Sistema i18n** — textos em PT/EN ficam no objeto `textos` em JS. O HTML usa `data-i18n="chave"` e a função de troca de idioma percorre todos os elementos e substitui o conteúdo sem recarregar.

**Acessibilidade** — suporte a `prefers-reduced-motion` para desativar animações em dispositivos que pedem menos movimento.

---

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/alvarofgomes/Portfolio_Alvaro_Gomes-.git
   ```

2. Acesse a pasta:
   ```bash
   cd Portfolio_Alvaro_Gomes-/Portfolio_alvaro
   ```

3. Abra o `index.html` no navegador — não precisa de servidor ou instalação.

---

## Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Álvaro%20Gomes-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/alvarofgomes)
[![GitHub](https://img.shields.io/badge/GitHub-alvarofgomes-181717?style=flat&logo=github)](https://github.com/alvarofgomes)