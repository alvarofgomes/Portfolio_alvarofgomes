/* ============================================================
   Alvaro Gomes — Portfólio · lógica
   ============================================================ */

/* ---------- i18n ---------- */
const textos = {
    pt: {
        nav_home: "início",
        nav_projects: "projetos",
        nav_experience: "experiência",
        nav_certs: "certificados",
        hero_hello: "olá, eu sou",
        hero_desc: "Desenvolvedor back-end apaixonado por Java e pela criação de códigos que proporcionem interações confortáveis aos usuários. Atualmente construindo sistemas de logística no mundo real.",
        hero_cv: "Ver Currículo",
        hero_projects: "Ver Projetos",
        avail: "Disponível para oportunidades",
        projects_kicker: "// o que eu construí",
        projects_title: "Projetos",
        projects_sub: "Uma seleção de coisas que construí — da web ao desktop, passando por sistemas back-end.",
        live: "ver online",
        repo: "repositório",
        video: "vídeo",
        exp_kicker: "// minha trajetória",
        exp_title: "Experiência Profissional",
        exp_sub: "Onde eu apliquei o que sei na prática.",
        exp_loc: "Recife, PE — Brasil",
        exp_profile_role: "Desenvolvedor Full Stack",
        cv_btn: "Visualizar Currículo",
        exp_now: "ATUAL",
        certs_kicker: "// aprendizado contínuo",
        certs_title: "Certificados",
        certs_sub: "Cursos, bootcamps e formações que concluí ao longo da jornada.",
        certs_total: "certificados",
        open_pdf: "Abrir PDF",
        empty: "Nenhum certificado nesta categoria.",
        typing_roles: ["Desenvolvedor Back-end", "Entusiasta de Java", "Estudante de Spring Boot", "Full Stack na GW Sistemas"],
        exp_role: "Desenvolvedor Full Stack",
        exp_period: "03/11/2025 — Atual",
        exp_bullets: [
            "Desenvolvimento e manutenção de sistemas de logística com Java 8 e JSP",
            "Criação e otimização de relatórios SQL com consultas complexas em PostgreSQL",
            "Implementação de funcionalidades front-end com JavaScript, integrando interfaces JSP ao back-end",
            "Refinamentos técnicos de demandas para a equipe de desenvolvimento",
            "Identificação e correção de bugs e levantamento de requisitos com stakeholders",
            "Versionamento de código com Git/GitHub em ambiente de equipe"
        ]
    },
    en: {
        nav_home: "home",
        nav_projects: "projects",
        nav_experience: "experience",
        nav_certs: "certificates",
        hero_hello: "hi, I'm",
        hero_desc: "Back-end developer passionate about Java and writing code that gives users comfortable, reliable interactions. Currently building real-world logistics systems.",
        hero_cv: "View Resume",
        hero_projects: "View Projects",
        avail: "Open to opportunities",
        projects_kicker: "// what I've built",
        projects_title: "Projects",
        projects_sub: "A selection of things I've built — from the web to the desktop and back-end systems.",
        live: "live",
        repo: "repository",
        video: "video",
        exp_kicker: "// my track record",
        exp_title: "Professional Experience",
        exp_sub: "Where I've put what I know into practice.",
        exp_loc: "Recife, PE — Brazil",
        exp_profile_role: "Full Stack Developer",
        cv_btn: "View Resume",
        exp_now: "CURRENT",
        certs_kicker: "// continuous learning",
        certs_title: "Certificates",
        certs_sub: "Courses, bootcamps and trainings I've completed along the way.",
        certs_total: "certificates",
        open_pdf: "Open PDF",
        empty: "No certificates in this category.",
        typing_roles: ["Back-end Developer", "Java Enthusiast", "Spring Boot Learner", "Full Stack at GW Sistemas"],
        exp_role: "Full Stack Developer",
        exp_period: "03/2025 — Present",
        exp_bullets: [
            "Development and maintenance of logistics systems using Java 8 and JSP",
            "Creation and optimization of complex SQL reports in PostgreSQL",
            "Front-end development with JavaScript, integrating JSP interfaces with the Java back-end",
            "Technical refinements of demands for the development team",
            "Bug identification and fixing, and requirements gathering with stakeholders",
            "Code versioning with Git/GitHub in a team environment"
        ]
    }
};

/*projetos*/
const projetos = [
    {
        id: "WA-BOT", path: "~/spring/whatsapp-bot",
        name: { pt: "Bot WhatsApp", en: "WhatsApp Bot" },
        desc: {
            pt: "Bot de contagem regressiva para WhatsApp integrado com Twilio. A cada 12h enviava automaticamente quantos dias, horas e minutos faltavam para uma viagem — com mensagem especial no dia D.",
            en: "WhatsApp countdown bot integrated with Twilio. Every 12h it automatically sent how many days, hours and minutes were left until a trip — with a special message on departure day."
        },
        tags: ["Java", "Spring Boot", "Twilio", "Scheduler"],
        links: [
            { type: "repo", url: "https://github.com/alvarofgomes/bot-whatsapp" }
        ]
    },
    {
        id: "TC-ENT", path: "~/java/tartaruga-cometa",
        name: { pt: "Tartaruga Cometa", en: "Tartaruga Cometa" },
        desc: {
            pt: "Sistema de gerenciamento de entregas em Java Web (Servlets, JSP, PostgreSQL), com foco em regras de negócio e organização.",
            en: "Delivery management system in Java Web (Servlets, JSP, PostgreSQL), focused on business rules and clean organization."
        },
        tags: ["Java", "JSP", "Servlets", "PostgreSQL"],
        links: [
            { type: "repo", url: "https://github.com/alvarofgomes/TartarugaCometa" },
            { type: "video", url: "https://www.linkedin.com/posts/alvarofgomes_projeto-em-desenvolvimento-sistema-de-activity-7412247750647463937-D_Xp" }
        ]
    },
    {
        id: "FX-CALC", path: "~/javafx/calculator",
        name: { pt: "Calculadora JavaFX", en: "JavaFX Calculator" },
        desc: {
            pt: "Calculadora com interface gráfica em JavaFX, explorando layouts (VBox, GridPane), eventos de mouse e estilização com CSS.",
            en: "Calculator with a JavaFX GUI, exploring layouts (VBox, GridPane), mouse events and CSS styling."
        },
        tags: ["Java", "JavaFX", "CSS"],
        links: [
            { type: "repo", url: "https://lnkd.in/dnsV6_js" },
            { type: "video", url: "https://www.linkedin.com/posts/alvarofgomes_praticando-javafx-na-pr%C3%A1tica-hoje-dediquei-activity-7421207745980182528-sLzr" }
        ]
    },
    {
        id: "FX-CRONO", path: "~/javafx/stopwatch",
        name: { pt: "Cronômetro JavaFX", en: "JavaFX Stopwatch" },
        desc: {
            pt: "Cronômetro em JavaFX usando Timeline, KeyFrame, eventos de botões e organização com VBox e HBox.",
            en: "Stopwatch in JavaFX using Timeline, KeyFrame, button events and layout with VBox and HBox."
        },
        tags: ["Java", "JavaFX", "Timeline"],
        links: [
            { type: "repo", url: "https://lnkd.in/dnsV6_js" },
            { type: "video", url: "https://www.linkedin.com/posts/alvarofgomes_praticando-javafx-na-pr%C3%A1tica-criando-um-activity-7428860959399632896-c1Ju" }
        ]
    },
    {
        id: "FX-QUIZ", path: "~/javafx/quiz",
        name: { pt: "Quiz JavaFX", en: "JavaFX Quiz" },
        desc: {
            pt: "Quiz interativo em JavaFX, explorando RadioButton, ToggleGroup, controle de fluxo entre perguntas e lógica de pontuação.",
            en: "Interactive quiz in JavaFX, exploring RadioButton, ToggleGroup, question-flow control and scoring logic."
        },
        tags: ["Java", "JavaFX", "UI"],
        links: [
            { type: "repo", url: "https://lnkd.in/dnsV6_js" },
            { type: "video", url: "https://www.linkedin.com/posts/alvarofgomes_praticando-javafx-na-pr%C3%A1tica-criando-um-activity-7429215696657473538-qVgf" }
        ]
    },
    {
        id: "BC-HUB", path: "~/web/black-clover",
        name: { pt: "Black Clover Hub", en: "Black Clover Hub" },
        desc: {
            pt: "Site dedicado ao anime Black Clover, com animações leves e foco total na experiência visual e interativa.",
            en: "A site dedicated to the anime Black Clover, with light animations and a strong focus on the visual, interactive experience."
        },
        tags: ["HTML", "CSS", "JavaScript"],
        links: [{ type: "live", url: "https://alvarofgomes.github.io/site-simples/" }]
    },
    {
        id: "FC-CALC", path: "~/web/freelancer-calc",
        name: { pt: "Calculadora Freelancer", en: "Freelancer Calculator" },
        desc: {
            pt: "Calculadora em JavaScript para estimar o valor da hora trabalhada de um freelancer.",
            en: "A JavaScript calculator to estimate a freelancer's hourly work rate."
        },
        tags: ["JavaScript", "HTML", "CSS"],
        links: [{ type: "live", url: "https://alvarofgomes.github.io/calculadora-freelancer/" }]
    },
    {
        id: "AM-SEC", path: "~/web/amigo-secreto",
        name: { pt: "Amigo Secreto", en: "Secret Friend" },
        desc: {
            pt: "Aplicação web interativa para organizar sorteios de amigo secreto de forma simples e dinâmica.",
            en: "Interactive web app to organize Secret Friend draws in a simple, dynamic way."
        },
        tags: ["JavaScript", "DOM", "HTML"],
        links: [{ type: "live", url: "https://alvarofgomes.github.io/amigos-secreto/" }]
    }
];

/*categorias de certificados*/
const categorias = {
    todos:  { label: { pt: "Todos", en: "All" },        icon: "fas fa-border-all",     cor: "linear-gradient(135deg, #2A6FDB, #8B5CF6)" },
    java:   { label: { pt: "Java", en: "Java" },          icon: "fab fa-java",          cor: "linear-gradient(135deg, #f89820, #c84b31)" },
    web:    { label: { pt: "HTML/CSS/JS", en: "HTML/CSS/JS" }, icon: "fas fa-code",     cor: "linear-gradient(135deg, #e44d26, #2A6FDB)" },
    git:    { label: { pt: "Git & GitHub", en: "Git & GitHub" }, icon: "fab fa-git-alt", cor: "linear-gradient(135deg, #f05032, #2d333b)" },
    ia:     { label: { pt: "Inteligência Artificial", en: "Artificial Intelligence" }, icon: "fas fa-robot", cor: "linear-gradient(135deg, #8B5CF6, #06b6d4)" },
    office: { label: { pt: "Microsoft Office", en: "Microsoft Office" }, icon: "fas fa-file-lines", cor: "linear-gradient(135deg, #d83b01, #0078d4)" },
    python: { label: { pt: "Python", en: "Python" },     icon: "fab fa-python",        cor: "linear-gradient(135deg, #3776ab, #ffd43b)" },
    sql:    { label: { pt: "Banco de Dados", en: "Databases" }, icon: "fas fa-database", cor: "linear-gradient(135deg, #336791, #00758f)" },
    outros: { label: { pt: "Bootcamps", en: "Bootcamps" }, icon: "fas fa-graduation-cap", cor: "linear-gradient(135deg, #1da5bd, #4b5563)" }
};

const certificados = [
    { titulo: "A Era da IA Machine Learning LLMs IA Generativa e Agentes", arquivo: "A Era da IA Machine Learning LLMs IA Generativa e Agentes.pdf", categoria: "ia" },
    { titulo: "Algoritmos e Lógica de Programação", arquivo: "Algoritmos e Lógica de Programação.pdf", categoria: "outros" },
    { titulo: "Ambiente de Desenvolvimento e Primeiros Passos com Python", arquivo: "Ambiente de Desenvolvimento e Primeiros Passos com Python.pdf", categoria: "python" },
    { titulo: "Aplicações Práticas da Inteligência Artificial", arquivo: "Aplicações Práticas da Inteligência Artificial.pdf", categoria: "ia" },
    { titulo: "Bootcamp Deloitte", arquivo: "Bootcamp_Deloitte.pdf", categoria: "outros" },
    { titulo: "Bootcamp FAP 2026 - Formação Acelerada em Programação", arquivo: "Turma 06 - C4_Certificado BootCamp.pdf", categoria: "outros" },
    { titulo: "Java do básico ao avançado - com exercícios e projetos", arquivo: "Certificado - Java do básico ao avançado - com exercícios e projetos.pdf", categoria: "java" },
    { titulo: "Certificado de Conclusão", arquivo: "CERTIFICADO.pdf", categoria: "outros" },
    { titulo: "ChatGPT: otimizando a qualidade dos resultados", arquivo: "ChatGPT_otimizando a qualidade dos resultados.pdf", categoria: "ia" },
    { titulo: "Configurando e Usando o GitHub", arquivo: "Configurando e Usando o GitHub.pdf", categoria: "git" },
    { titulo: "Conhecendo o GitHub Copilot: Aumentando sua Produtividade", arquivo: "Conhecendo o GitHub Copilot Aumentando sua Produtividade na Programação.pdf", categoria: "git" },
    { titulo: "Crie um site simples usando HTML, CSS e JavaScript", arquivo: "Crie um site simples usando HTML, CSS e JavaScript.pdf", categoria: "web" },
    { titulo: "Dominando Interfaces e Lambda em Java", arquivo: "Dominando Interfaces e Lambda em Java.pdf", categoria: "java" },
    { titulo: "Estruturas de Controle em Java", arquivo: "Estruturas de Controle em Java.pdf", categoria: "java" },
    { titulo: "Fundamentos da Linguagem de Programação Java", arquivo: "Fundamentos da Linguagem de Programação Java.pdf", categoria: "java" },
    { titulo: "Git e GitHub: compartilhando e colaborando em projetos", arquivo: "Git e GitHub compartilhando e colaborando em projetos.pdf", categoria: "git" },
    { titulo: "Herança e Polimorfismo em Java", arquivo: "Herança e Polimorfismo em Java.pdf", categoria: "java" },
    { titulo: "HTML - Avançado", arquivo: "HTML - Avançado.pdf", categoria: "web" },
    { titulo: "HTML - Básico", arquivo: "HTML - Básico.pdf", categoria: "web" },
    { titulo: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags", arquivo: "HTML e CSS ambientes de desenvolvimento, estrutura de arquivos e tags.pdf", categoria: "web" },
    { titulo: "HTML e CSS: cabeçalho, footer e variáveis CSS", arquivo: "HTML e CSS cabeçalho, footer e variáveis CSS.pdf", categoria: "web" },
    { titulo: "HTML e CSS: Classes, posicionamento e Flexbox", arquivo: "HTML e CSS Classes, posicionamento e Flexbox.pdf", categoria: "web" },
    { titulo: "HTML e CSS: responsividade e publicação de projetos", arquivo: "HTML e CSS trabalhando com responsividade e publicação de projetos.pdf", categoria: "web" },
    { titulo: "Iniciante em Programação G8 - ONE", arquivo: "Iniciante em Programação G8 - ONE.pdf", categoria: "outros" },
    { titulo: "Introdução à Engenharia de Prompts e GitHub Copilot com Java", arquivo: "Introdução à Engenharia de Prompts e GitHub Copilot com Java.pdf", categoria: "ia" },
    { titulo: "Introdução à Engenharia de Prompts", arquivo: "Introdução à Engenharia de Prompts.pdf", categoria: "ia" },
    { titulo: "Introdução à Experiência Decola Tech", arquivo: "Introducao a Experiencia Decola Tech.pdf", categoria: "outros" },
    { titulo: "Introdução à Experiência Santander 2025 - 2º Semestre", arquivo: "Introdução à Experiência Santander 2025 - 2º Semestre.pdf", categoria: "outros" },
    { titulo: "Introdução ao Java e seu Ambiente de Desenvolvimento", arquivo: "Introdução ao Java e seu Ambiente de Desenvolvimento.pdf", categoria: "java" },
    { titulo: "Introdução e objetivos", arquivo: "Introdução e objetivos.pdf", categoria: "outros" },
    { titulo: "Java e a Arte da Abstração com Classes e Encapsulamento", arquivo: "Java e a Arte da Abstração com Classes e Encapsulamento.pdf", categoria: "java" },
    { titulo: "Java e IA para Iniciantes com a NTT DATA", arquivo: "Java e IA para Iniciantes com a NTT DATA.pdf", categoria: "java" },
    { titulo: "Lógica de programação: explore funções e listas", arquivo: "Lógica de programação explore funções e listas.pdf", categoria: "web" },
    { titulo: "Lógica de programação: mergulhe em JavaScript", arquivo: "Lógica de programação mergulhe em programação com JavaScript.pdf", categoria: "web" },
    { titulo: "Lógica e Pensamento Computacional", arquivo: "Lógica e Pensamento.pdf", categoria: "outros" },
    { titulo: "Microsoft Excel 2016 - Básico", arquivo: "Microsoft Excel 2016 - Básico.pdf", categoria: "office" },
    { titulo: "Microsoft Excel 2016 - Intermediário", arquivo: "Microsoft Excel 2016 - Intermediário.pdf", categoria: "office" },
    { titulo: "Microsoft PowerPoint 2016 - Avançado", arquivo: "Microsoft PowerPoint 2016 - Avançado.pdf", categoria: "office" },
    { titulo: "Microsoft PowerPoint 2016 - Básico", arquivo: "Microsoft PowerPoint 2016 - Básico.pdf", categoria: "office" },
    { titulo: "Microsoft Word 2016 - Intermediário", arquivo: "Microsoft Word 2016 - Intermediário.pdf", categoria: "office" },
    { titulo: "Performa", arquivo: "Performa.pdf", categoria: "outros" },
    { titulo: "Praticando Lógica: Challenge Amigo Secreto", arquivo: "Praticando Logica de programação Challenge amigo secreto.pdf", categoria: "web" },
    { titulo: "Primeiros Passos da sua Jornada com Java e Cloud", arquivo: "Primeiros Passos da sua Jornada com Java e Cloud.pdf", categoria: "java" },
    { titulo: "Roga DX 2026", arquivo: "certificado-participacao-GTM0u.pdf", categoria: "outros" },
    { titulo: "SharePoint", arquivo: "SHAREPOINT.pdf", categoria: "office" },
    { titulo: "SQL do básico ao avançado (com MySQL e Projeto)", arquivo: "SQL do básico ao avançado (com MySQL e Projeto).pdf", categoria: "sql" },
    { titulo: "Técnicas de Engenharia de Prompt", arquivo: "Técnicas de Engenharia de Prompt.pdf", categoria: "ia" },
    { titulo: "Versionamento de Código com Git", arquivo: "Versionamento de Código com Git.pdf", categoria: "git" },
    { titulo: "Certificado Softex", arquivo: "certificado softex.pdf", categoria: "outros" }
];
certificados.sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"));

let idiomaAtual = "pt";
let filtroAtual = "todos";
let typingTimeout = null;

/*entrada suave via Web Animations API*/
function animateIn(el) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!el.animate) return;
    el.animate(
        [{ transform: "translateY(16px)" }, { transform: "translateY(0)" }],
        { duration: 460, easing: "cubic-bezier(.2,.7,.2,1)" }
    );
}

/* ============================================================
   Navegação entre seções
   ============================================================ */
function showDiv(sectionId, clickedTab = null) {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

    const target = document.getElementById(sectionId);
    if (target) { target.classList.add("active"); animateIn(target); }
    if (clickedTab) clickedTab.classList.add("active");

    //fecha menu mobile
    document.querySelector(".nav-tabs")?.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

/* ============================================================
   Efeito de digitação
   ============================================================ */
function startTypingEffect() {
    clearTimeout(typingTimeout);
    const roles = textos[idiomaAtual].typing_roles;
    const el = document.getElementById("typing-role");
    if (!el) return;

    let roleIndex = 0, charIndex = 0, isDeleting = false;
    el.textContent = "";

    function type() {
        const current = roles[roleIndex];
        charIndex += isDeleting ? -1 : 1;
        el.textContent = current.substring(0, charIndex);

        let delay = isDeleting ? 45 : 90;
        if (!isDeleting && charIndex === current.length) { delay = 1900; isDeleting = true; }
        else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 320; }

        typingTimeout = setTimeout(type, delay);
    }
    type();
}

/* ============================================================
   Render: projetos
   ============================================================ */
function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    const t = textos[idiomaAtual];

    grid.innerHTML = projetos.map(p => {
        const links = p.links.map(l => {
            const icon = l.type === "live" ? "fas fa-arrow-up-right-from-square"
                       : l.type === "repo" ? "fab fa-github"
                       : "fab fa-linkedin";
            const label = t[l.type] || l.type;
            return `<a class="cert-link" href="${l.url}" target="_blank" rel="noopener"><i class="${icon}"></i> ${label}</a>`;
        }).join("");

        const tags = p.tags.map(tag => `<span class="ptag">${tag}</span>`).join("");

        return `
        <article class="project-card">
            <div class="project-top">
                <span class="project-path"><i class="fas fa-folder"></i> ${p.path}</span>
                <span class="project-id">${p.id}</span>
            </div>
            <div class="project-body">
                <div class="project-name">${p.name[idiomaAtual]}</div>
                <p class="project-desc">${p.desc[idiomaAtual]}</p>
                <div class="project-tags">${tags}</div>
                <div style="display:flex;gap:18px;flex-wrap:wrap;margin-top:4px;">${links}</div>
            </div>
        </article>`;
    }).join("");
}

/* ============================================================
   Render: experiência
   ============================================================ */
function renderExperience() {
    const t = textos[idiomaAtual];
    const bullets = t.exp_bullets.map(b => `<li>${b}</li>`).join("");
    const container = document.getElementById("timeline");
    if (!container) return;

    container.innerHTML = `
        <article class="exp-item">
            <div class="exp-item-top">
                <div class="exp-company">GW Sistemas <span class="badge-live">${t.exp_now}</span></div>
                <div class="exp-period">${t.exp_period}</div>
            </div>
            <div class="exp-jobrole">${t.exp_role}</div>
            <ul>${bullets}</ul>
        </article>`;
}

/* ============================================================
   Render: certificados
   ============================================================ */
function filterCertificates(categoria, btn) {
    filtroAtual = categoria;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");

    let visible = 0;
    document.querySelectorAll(".cert-card").forEach(card => {
        const show = categoria === "todos" || card.dataset.categoria === categoria;
        card.style.display = show ? "" : "none";
        if (show) visible++;
    });
    const empty = document.getElementById("cert-empty");
    if (empty) empty.style.display = visible === 0 ? "block" : "none";
}

function renderCertificates() {
    const grid = document.getElementById("cert-grid");
    const filterBox = document.getElementById("cert-filters");
    if (!grid) return;
    const t = textos[idiomaAtual];

    //filtros
    if (filterBox) {
        const ordem = ["todos", "java", "web", "git", "ia", "office", "python", "sql", "outros"];
        filterBox.innerHTML = ordem.map(cat => {
            const count = cat === "todos" ? certificados.length : certificados.filter(c => c.categoria === cat).length;
            if (count === 0 && cat !== "todos") return "";
            const info = categorias[cat];
            return `<button class="filter-btn ${filtroAtual === cat ? "active" : ""}" data-cat="${cat}">
                        <i class="${info.icon}"></i> ${info.label[idiomaAtual]}
                        <span class="filter-count">${count}</span>
                    </button>`;
        }).join("");
        filterBox.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", function () { filterCertificates(this.dataset.cat, this); });
        });
    }

    //cards
    grid.innerHTML = certificados.map(c => {
        const info = categorias[c.categoria];
        const file = `assets/certificados/${encodeURIComponent(c.arquivo)}`;
        const hidden = (filtroAtual !== "todos" && c.categoria !== filtroAtual) ? 'style="display:none"' : "";
        return `
        <article class="cert-card" data-categoria="${c.categoria}" ${hidden}>
            <div class="cert-icon-area" style="background:${info.cor}">
                <i class="${info.icon} cert-icon"></i>
            </div>
            <div class="cert-body">
                <span class="cert-badge">${info.label[idiomaAtual]}</span>
                <h3 class="cert-title">${c.titulo}</h3>
                <a class="cert-link" href="${file}" target="_blank" rel="noopener">
                    <i class="fas fa-file-pdf"></i> ${t.open_pdf}
                </a>
            </div>
        </article>`;
    }).join("") + `<div id="cert-empty" class="cert-empty" style="display:none">${t.empty}</div>`;
}

/* ============================================================
   Aplicar idioma
   ============================================================ */
function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function UpdateLanguage(idioma) {
    idiomaAtual = idioma;
    const t = textos[idioma];

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll(".lang-toggle button").forEach(b => {
        b.classList.toggle("active", b.dataset.lang === idioma);
    });
    document.documentElement.lang = idioma === "pt" ? "pt-BR" : "en";

    renderProjects();
    renderExperience();
    renderCertificates();
    startTypingEffect();
}

/* ============================================================
   Init
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    //idioma
    document.querySelectorAll(".lang-toggle button").forEach(btn => {
        btn.addEventListener("click", () => UpdateLanguage(btn.dataset.lang));
    });

    //menu mobile
    const toggle = document.querySelector(".nav-toggle");
    toggle?.addEventListener("click", () => {
        document.querySelector(".nav-tabs")?.classList.toggle("open");
    });

    UpdateLanguage("pt");
    animateIn(document.getElementById("home"));
    initNetwork();
});

/* ============================================================
   Canvas: rede de pontos (constelação)
   ============================================================ */
function initNetwork() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, nodes = [], mouse = { x: -9999, y: -9999 };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = canvas.clientWidth = window.innerWidth;
        h = canvas.clientHeight = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const count = Math.min(110, Math.floor((w * h) / 14000));
        nodes = Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.32,
            vy: (Math.random() - 0.5) * 0.32,
            r: Math.random() * 1.6 + 0.6
        }));
    }

    function step() {
        ctx.clearRect(0, 0, w, h);

        for (const n of nodes) {
            n.x += n.vx; n.y += n.vy;
            if (n.x < 0 || n.x > w) n.vx *= -1;
            if (n.y < 0 || n.y > h) n.vy *= -1;

            // leve atração ao mouse
            const dxm = mouse.x - n.x, dym = mouse.y - n.y;
            const dm = Math.hypot(dxm, dym);
            if (dm < 160) {
                n.x += dxm / dm * 0.4;
                n.y += dym / dm * 0.4;
            }
        }

        //linhas
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i], b = nodes[j];
                const dx = a.x - b.x, dy = a.y - b.y;
                const dist = Math.hypot(dx, dy);
                if (dist < 132) {
                    const op = (1 - dist / 132) * 0.5;
                    const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
                    grad.addColorStop(0, `rgba(91,149,245,${op})`);
                    grad.addColorStop(1, `rgba(139,92,246,${op})`);
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 0.7;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        //nós
        for (const n of nodes) {
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(155,182,230,0.85)";
            ctx.fill();
        }

        if (!reduce) requestAnimationFrame(step);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });

    resize();
    if (reduce) step(); else requestAnimationFrame(step);
}