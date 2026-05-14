function showDiv(sectionId, clickedButton = null) {
    const sections = document.querySelectorAll(".content-section");
    const menuItems = document.querySelectorAll(".menu-item");

    sections.forEach(section => {
        section.classList.remove("active-section");
    });

    menuItems.forEach(item => {
        item.classList.remove("active");
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add("active-section");
    }

    if (clickedButton) {
        clickedButton.classList.add("active");
    }
}

const categorias = {
    todos: {
        label: { pt: "Todos", en: "All" },
        icon: "fas fa-border-all",
        cor: "linear-gradient(135deg, #1da5bd, #685c62)"
    },
    java: {
        label: { pt: "Java", en: "Java" },
        icon: "fab fa-java",
        cor: "linear-gradient(135deg, #f89820, #c84b31)"
    },
    web: {
        label: { pt: "HTML/CSS/JS", en: "HTML/CSS/JS" },
        icon: "fas fa-code",
        cor: "linear-gradient(135deg, #e44d26, #264de4)"
    },
    git: {
        label: { pt: "Git & GitHub", en: "Git & GitHub" },
        icon: "fab fa-git-alt",
        cor: "linear-gradient(135deg, #f05032, #333)"
    },
    ia: {
        label: { pt: "Inteligência Artificial", en: "Artificial Intelligence" },
        icon: "fas fa-robot",
        cor: "linear-gradient(135deg, #8b5cf6, #06b6d4)"
    },
    office: {
        label: { pt: "Microsoft Office", en: "Microsoft Office" },
        icon: "fas fa-file-lines",
        cor: "linear-gradient(135deg, #d83b01, #0078d4)"
    },
    python: {
        label: { pt: "Python", en: "Python" },
        icon: "fab fa-python",
        cor: "linear-gradient(135deg, #3776ab, #ffd43b)"
    },
    outros: {
        label: { pt: "Bootcamps", en: "Bootcamps" },
        icon: "fas fa-graduation-cap",
        cor: "linear-gradient(135deg, #1da5bd, #685c62)"
    }
};

const certificados = [
    { titulo: "A Era da IA Machine Learning LLMs IA Generativa e Agentes", arquivo: "A Era da IA Machine Learning LLMs IA Generativa e Agentes.pdf", categoria: "ia" },
    { titulo: "Algoritmos e Lógica de Programação", arquivo: "Algoritmos e Lógica de Programação.pdf", categoria: "outros" },
    { titulo: "Ambiente de Desenvolvimento e Primeiros Passos com Python", arquivo: "Ambiente de Desenvolvimento e Primeiros Passos com Python.pdf", categoria: "python" },
    { titulo: "Aplicações Práticas da Inteligência Artificial", arquivo: "Aplicações Práticas da Inteligência Artificial.pdf", categoria: "ia" },
    { titulo: "Bootcamp Deloitte", arquivo: "Bootcamp_Deloitte.pdf", categoria: "outros" },
    { titulo: "Certificado - Java do básico ao avançado - com exercícios e projetos", arquivo: "Certificado - Java do básico ao avançado - com exercícios e projetos.pdf", categoria: "java" },
    { titulo: "CERTIFICADO", arquivo: "CERTIFICADO.pdf", categoria: "outros" },
    { titulo: "ChatGPT otimizando a qualidade dos resultados", arquivo: "ChatGPT_otimizando a qualidade dos resultados.pdf", categoria: "ia" },
    { titulo: "Configurando e Usando o GitHub", arquivo: "Configurando e Usando o GitHub.pdf", categoria: "git" },
    { titulo: "Conhecendo o GitHub Copilot Aumentando sua Produtividade na Programação", arquivo: "Conhecendo o GitHub Copilot Aumentando sua Produtividade na Programação.pdf", categoria: "git" },
    { titulo: "Crie um site simples usando HTML, CSS e JavaScript", arquivo: "Crie um site simples usando HTML, CSS e JavaScript.pdf", categoria: "web" },
    { titulo: "Dominando Interfaces e Lambda em Java", arquivo: "Dominando Interfaces e Lambda em Java.pdf", categoria: "java" },
    { titulo: "Estruturas de Controle em Java", arquivo: "Estruturas de Controle em Java.pdf", categoria: "java" },
    { titulo: "Fundamentos da Linguagem de Programação Java", arquivo: "Fundamentos da Linguagem de Programação Java.pdf", categoria: "java" },
    { titulo: "Git e GitHub compartilhando e colaborando em projetos", arquivo: "Git e GitHub compartilhando e colaborando em projetos.pdf", categoria: "git" },
    { titulo: "Herança e Polimorfismo em Java", arquivo: "Herança e Polimorfismo em Java.pdf", categoria: "java" },
    { titulo: "HTML - Avançado", arquivo: "HTML - Avançado.pdf", categoria: "web" },
    { titulo: "HTML - Básico", arquivo: "HTML - Básico.pdf", categoria: "web" },
    { titulo: "HTML e CSS ambientes de desenvolvimento, estrutura de arquivos e tags", arquivo: "HTML e CSS ambientes de desenvolvimento, estrutura de arquivos e tags.pdf", categoria: "web" },
    { titulo: "HTML e CSS cabeçalho, footer e variáveis CSS", arquivo: "HTML e CSS cabeçalho, footer e variáveis CSS.pdf", categoria: "web" },
    { titulo: "HTML e CSS Classes, posicionamento e Flexbox", arquivo: "HTML e CSS Classes, posicionamento e Flexbox.pdf", categoria: "web" },
    { titulo: "HTML e CSS trabalhando com responsividade e publicação de projetos", arquivo: "HTML e CSS trabalhando com responsividade e publicação de projetos.pdf", categoria: "web" },
    { titulo: "Iniciante em Programação G8 - ONE", arquivo: "Iniciante em Programação G8 - ONE.pdf", categoria: "outros" },
    { titulo: "Introducao a Experiencia Decola Tech", arquivo: "Introducao a Experiencia Decola Tech.pdf", categoria: "outros" },
    { titulo: "Introdução à Experiência Santander 2025 - 2º Semestre", arquivo: "Introdução à Experiência Santander 2025 - 2º Semestre.pdf", categoria: "outros" },
    { titulo: "Introdução ao Java e seu Ambiente de Desenvolvimento", arquivo: "Introdução ao Java e seu Ambiente de Desenvolvimento.pdf", categoria: "java" },
    { titulo: "Introdução e objetivos", arquivo: "Introdução e objetivos.pdf", categoria: "outros" },
    { titulo: "Java e a Arte da Abstração com Classes e Encapsulamento", arquivo: "Java e a Arte da Abstração com Classes e Encapsulamento.pdf", categoria: "java" },
    { titulo: "Java e IA para Iniciantes com a NTT DATA", arquivo: "Java e IA para Iniciantes com a NTT DATA.pdf", categoria: "java" },
    { titulo: "Lógica de programação explore funções e listas", arquivo: "Lógica de programação explore funções e listas.pdf", categoria: "web" },
    { titulo: "Lógica de programação mergulhe em programação com JavaScript", arquivo: "Lógica de programação mergulhe em programação com JavaScript.pdf", categoria: "web" },
    { titulo: "Lógica e Pensamento", arquivo: "Lógica e Pensamento.pdf", categoria: "outros" },
    { titulo: "Microsoft Excel 2016 - Básico", arquivo: "Microsoft Excel 2016 - Básico.pdf", categoria: "office" },
    { titulo: "Microsoft Excel 2016 - Intermediário", arquivo: "Microsoft Excel 2016 - Intermediário.pdf", categoria: "office" },
    { titulo: "Microsoft PowerPoint 2016 - Avançado", arquivo: "Microsoft PowerPoint 2016 - Avançado.pdf", categoria: "office" },
    { titulo: "Microsoft PowerPoint 2016 - Básico", arquivo: "Microsoft PowerPoint 2016 - Básico.pdf", categoria: "office" },
    { titulo: "Microsoft Word 2016 - Intermediário", arquivo: "Microsoft Word 2016 - Intermediário.pdf", categoria: "office" },
    { titulo: "Performa", arquivo: "Performa.pdf", categoria: "outros" },
    { titulo: "Primeiros Passos da sua Jornada com Java e Cloud", arquivo: "Primeiros Passos da sua Jornada com Java e Cloud.pdf", categoria: "java" },
    { titulo: "SHAREPOINT", arquivo: "SHAREPOINT.pdf", categoria: "office" },
    { titulo: "Técnicas de Engenharia de Prompt", arquivo: "Técnicas de Engenharia de Prompt.pdf", categoria: "ia" },
    { titulo: "Versionamento de Código com Git", arquivo: "Versionamento de Código com Git.pdf", categoria: "git" }
];

certificados.sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"));

const textos = {
    pt: {
        home: "Início",
        project: "Projetos",
        certificate: "Certificados",
        certificates_title: "Certificados",
        projects_title: "Projetos",
        description: "Futuro desenvolvedor back-end apaixonado por Java e pela criação de códigos que proporcionem interações confortáveis aos usuários.",
        skill: "Habilidades Técnicas",
        connect: "Vamos nos Conectar?",
        bc_hub: `O site foi criado para destacar o anime Black Clover de forma simples, mas eficaz, usando animações leves e focando na experiência visual e interativa. Acesse o projeto <a href="https://alvarofgomes.github.io/site-simples/" target="_blank" style="color:#ccc; text-decoration:none;">aqui</a>.`,
        fc_calc: `A calculadora de freelancer foi desenvolvida com JavaScript para calcular o valor da hora trabalhada. Acesse o projeto <a href="https://alvarofgomes.github.io/calculadora-freelancer/" target="_blank" style="color:#ccc; text-decoration:none;">aqui</a>.`,
        amg_secret: `Aplicação web interativa para organizar sorteios de amigo secreto de forma simples e dinâmica. Acesse o projeto <a href="https://alvarofgomes.github.io/amigos-secreto/" target="_blank" style="color:#ccc; text-decoration:none;">aqui</a>.`,
        open_pdf: "Abrir PDF",
        typing_roles: ["Desenvolvedor Back-end", "Entusiasta de Java", "Estudante de Spring Boot"]
    },
    en: {
        home: "Home",
        project: "Projects",
        certificate: "Certificates",
        certificates_title: "Certificates",
        projects_title: "Projects",
        description: "Future back-end developer passionate about Java and creating code that provides comfortable interactions for users.",
        skill: "Technical Skills",
        connect: "Let's connect?",
        bc_hub: `The website was created to highlight the anime Black Clover in a simple yet effective way. Access the project <a href="https://alvarofgomes.github.io/site-simples/" target="_blank" style="color:#ccc; text-decoration:none;">here</a>.`,
        fc_calc: `The freelancer calculator was developed with JavaScript to calculate hourly work rates. Access the project <a href="https://alvarofgomes.github.io/calculadora-freelancer/" target="_blank" style="color:#ccc; text-decoration:none;">here</a>.`,
        amg_secret: `Interactive web app designed to organize the traditional Secret Friend game. Access the project <a href="https://alvarofgomes.github.io/amigos-secreto/" target="_blank" style="color:#ccc; text-decoration:none;">here</a>.`,
        open_pdf: "Open PDF",
        typing_roles: ["Back-end Developer", "Java Enthusiast", "Spring Boot Learner"]
    }
};

let idiomaAtual = "pt";
let filtroAtual = "todos";
let typingTimeout = null;

function getBasePath() {
    const path = window.location.pathname;

    if (path.endsWith("index.html")) {
        return path.replace("index.html", "");
    }

    if (!path.endsWith("/")) {
        return path + "/";
    }

    return path;
}

function getDescricaoResponsiva() {
    if (window.innerWidth <= 480) {
        return idiomaAtual === "pt"
            ? "Apaixonado por Java e pela criação de códigos."
            : "Passionate about Java and building code.";
    }

    return textos[idiomaAtual].description;
}

function startTypingEffect() {
    clearTimeout(typingTimeout);

    const roles = textos[idiomaAtual].typing_roles;
    const el = document.getElementById("typing-role");
    if (!el) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    el.textContent = "";

    function type() {
        const current = roles[roleIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        el.textContent = current.substring(0, charIndex);

        let delay = isDeleting ? 55 : 95;

        if (!isDeleting && charIndex === current.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 350;
        }

        typingTimeout = setTimeout(type, delay);
    }

    type();
}

function filterCertificates(categoria, btn) {
    filtroAtual = categoria;

    const cards = document.querySelectorAll(".certificate-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");

    cards.forEach(card => {
        card.style.display = (categoria === "todos" || card.dataset.categoria === categoria) ? "" : "none";
    });
}

function renderCertificates() {
    const container = document.getElementById("certificates-grid");
    const filterContainer = document.getElementById("certificates-filter");
    if (!container) return;

    const basePath = getBasePath();

    if (filterContainer) {
        filterContainer.innerHTML = "";
        const categoriaOrdem = ["todos", "java", "web", "git", "ia", "office", "python", "outros"];

        categoriaOrdem.forEach(cat => {
            const count = cat === "todos"
                ? certificados.length
                : certificados.filter(c => c.categoria === cat).length;

            const catInfo = categorias[cat];
            const label = catInfo.label[idiomaAtual];

            const btn = document.createElement("button");
            btn.className = "filter-btn" + (filtroAtual === cat ? " active" : "");
            btn.innerHTML = `<i class="${catInfo.icon}"></i> ${label} <span class="filter-count">(${count})</span>`;
            btn.addEventListener("click", function () { filterCertificates(cat, this); });

            filterContainer.appendChild(btn);
        });
    }

    container.innerHTML = "";

    certificados.forEach(certificado => {
        const caminhoArquivo = `${basePath}assets/certificados/${encodeURIComponent(certificado.arquivo)}`;
        const catInfo = categorias[certificado.categoria];
        const catLabel = catInfo.label[idiomaAtual];

        const card = document.createElement("article");
        card.className = "certificate-card";
        card.dataset.categoria = certificado.categoria;

        if (filtroAtual !== "todos" && certificado.categoria !== filtroAtual) {
            card.style.display = "none";
        }

        card.innerHTML = `
            <div class="certificate-icon-area" style="background: ${catInfo.cor}">
                <i class="${catInfo.icon} certificate-icon"></i>
            </div>
            <span class="certificate-badge">${catLabel}</span>
            <h3>${certificado.titulo}</h3>
            <a class="certificate-link" href="${caminhoArquivo}" target="_blank">
                ${textos[idiomaAtual].open_pdf}
            </a>
        `;

        container.appendChild(card);
    });
}

function UpdateLanguage(idioma) {
    idiomaAtual = idioma;

    document.getElementById("home").textContent = textos[idioma].home;
    document.getElementById("project").textContent = textos[idioma].project;
    document.getElementById("certificate").textContent = textos[idioma].certificate;
    document.getElementById("projects_title").textContent = textos[idioma].projects_title;
    document.getElementById("certificates_title").textContent = textos[idioma].certificates_title;
    document.getElementById("description").textContent = getDescricaoResponsiva();
    document.getElementById("skill").textContent = textos[idioma].skill;
    document.getElementById("connect").textContent = textos[idioma].connect;
    document.getElementById("bc_hub").innerHTML = textos[idioma].bc_hub;
    document.getElementById("fc_calc").innerHTML = textos[idioma].fc_calc;
    document.getElementById("amg_secret").innerHTML = textos[idioma].amg_secret;

    renderCertificates();
    startTypingEffect();
}

window.addEventListener("resize", () => {
    const frase = document.getElementById("description");
    if (frase) {
        frase.textContent = getDescricaoResponsiva();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const idiomaSelect = document.getElementById("select-idioma");

    if (idiomaSelect) {
        idiomaSelect.addEventListener("change", function () {
            UpdateLanguage(this.value);
        });
    }

    UpdateLanguage("pt");
});
