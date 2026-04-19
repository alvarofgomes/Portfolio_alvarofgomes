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

const certificados = [
    { titulo: "A Era da IA Machine Learning LLMs IA Generativa e Agentes", arquivo: "A Era da IA Machine Learning LLMs IA Generativa e Agentes.pdf" },
    { titulo: "Algoritmos e Lógica de Programação", arquivo: "Algoritmos e Lógica de Programação.pdf" },
    { titulo: "Ambiente de Desenvolvimento e Primeiros Passos com Python", arquivo: "Ambiente de Desenvolvimento e Primeiros Passos com Python.pdf" },
    { titulo: "Aplicações Práticas da Inteligência Artificial", arquivo: "Aplicações Práticas da Inteligência Artificial.pdf" },
    { titulo: "Bootcamp Deloitte", arquivo: "Bootcamp_Deloitte.pdf" },
    { titulo: "Certificado - Java do básico ao avançado - com exercícios e projetos", arquivo: "Certificado - Java do básico ao avançado - com exercícios e projetos.pdf" },
    { titulo: "CERTIFICADO", arquivo: "CERTIFICADO.pdf" },
    { titulo: "ChatGPT otimizando a qualidade dos resultados", arquivo: "ChatGPT_otimizando a qualidade dos resultados.pdf" },
    { titulo: "Configurando e Usando o GitHub", arquivo: "Configurando e Usando o GitHub.pdf" },
    { titulo: "Conhecendo o GitHub Copilot Aumentando sua Produtividade na Programação", arquivo: "Conhecendo o GitHub Copilot Aumentando sua Produtividade na Programação.pdf" },
    { titulo: "Crie um site simples usando HTML, CSS e JavaScript", arquivo: "Crie um site simples usando HTML, CSS e JavaScript.pdf" },
    { titulo: "Dominando Interfaces e Lambda em Java", arquivo: "Dominando Interfaces e Lambda em Java.pdf" },
    { titulo: "Estruturas de Controle em Java", arquivo: "Estruturas de Controle em Java.pdf" },
    { titulo: "Fundamentos da Linguagem de Programação Java", arquivo: "Fundamentos da Linguagem de Programação Java.pdf" },
    { titulo: "Git e GitHub compartilhando e colaborando em projetos", arquivo: "Git e GitHub compartilhando e colaborando em projetos.pdf" },
    { titulo: "Herança e Polimorfismo em Java", arquivo: "Herança e Polimorfismo em Java.pdf" },
    { titulo: "HTML - Avançado", arquivo: "HTML - Avançado.pdf" },
    { titulo: "HTML - Básico", arquivo: "HTML - Básico.pdf" },
    { titulo: "HTML e CSS ambientes de desenvolvimento, estrutura de arquivos e tags", arquivo: "HTML e CSS ambientes de desenvolvimento, estrutura de arquivos e tags.pdf" },
    { titulo: "HTML e CSS cabeçalho, footer e variáveis CSS", arquivo: "HTML e CSS cabeçalho, footer e variáveis CSS.pdf" },
    { titulo: "HTML e CSS Classes, posicionamento e Flexbox", arquivo: "HTML e CSS Classes, posicionamento e Flexbox.pdf" },
    { titulo: "HTML e CSS trabalhando com responsividade e publicação de projetos", arquivo: "HTML e CSS trabalhando com responsividade e publicação de projetos.pdf" },
    { titulo: "Iniciante em Programação G8 - ONE", arquivo: "Iniciante em Programação G8 - ONE.pdf" },
    { titulo: "Introducao a Experiencia Decola Tech", arquivo: "Introducao a Experiencia Decola Tech.pdf" },
    { titulo: "Introdução à Experiência Santander 2025 - 2º Semestre", arquivo: "Introdução à Experiência Santander 2025 - 2º Semestre.pdf" },
    { titulo: "Introdução ao Java e seu Ambiente de Desenvolvimento", arquivo: "Introdução ao Java e seu Ambiente de Desenvolvimento.pdf" },
    { titulo: "Introdução e objetivos", arquivo: "Introdução e objetivos.pdf" },
    { titulo: "Java e a Arte da Abstração com Classes e Encapsulamento", arquivo: "Java e a Arte da Abstração com Classes e Encapsulamento.pdf" },
    { titulo: "Java e IA para Iniciantes com a NTT DATA", arquivo: "Java e IA para Iniciantes com a NTT DATA.pdf" },
    { titulo: "Lógica de programação explore funções e listas", arquivo: "Lógica de programação explore funções e listas.pdf" },
    { titulo: "Lógica de programação mergulhe em programação com JavaScript", arquivo: "Lógica de programação mergulhe em programação com JavaScript.pdf" },
    { titulo: "Lógica e Pensamento", arquivo: "Lógica e Pensamento.pdf" },
    { titulo: "Microsoft Excel 2016 - Básico", arquivo: "Microsoft Excel 2016 - Básico.pdf" },
    { titulo: "Microsoft Excel 2016 - Intermediário", arquivo: "Microsoft Excel 2016 - Intermediário.pdf" },
    { titulo: "Microsoft PowerPoint 2016 - Avançado", arquivo: "Microsoft PowerPoint 2016 - Avançado.pdf" },
    { titulo: "Microsoft PowerPoint 2016 - Básico", arquivo: "Microsoft PowerPoint 2016 - Básico.pdf" },
    { titulo: "Microsoft Word 2016 - Intermediário", arquivo: "Microsoft Word 2016 - Intermediário.pdf" },
    { titulo: "Performa", arquivo: "Performa.pdf" },
    { titulo: "Primeiros Passos da sua Jornada com Java e Cloud", arquivo: "Primeiros Passos da sua Jornada com Java e Cloud.pdf" },
    { titulo: "SHAREPOINT", arquivo: "SHAREPOINT.pdf" },
    { titulo: "Técnicas de Engenharia de Prompt", arquivo: "Técnicas de Engenharia de Prompt.pdf" },
    { titulo: "Versionamento de Código com Git", arquivo: "Versionamento de Código com Git.pdf" }
];

certificados.sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"));

const textos = {
    pt: {
        home: "Início",
        project: "Projetos",
        certificate: "Certificados",
        projects_title: "Projetos",
        description: "Futuro desenvolvedor back-end apaixonado por Java e pela criação de códigos que proporcionem interações confortáveis aos usuários.",
        skill: "Habilidades Técnicas",
        connect: "Vamos nos Conectar?",
        open_pdf: "Abrir PDF"
    },
    en: {
        home: "Home",
        project: "Projects",
        certificate: "Certificates",
        projects_title: "Projects",
        description: "Future back-end developer passionate about Java and creating code that provides comfortable interactions for users.",
        skill: "Technical Skills",
        connect: "Let's connect?",
        open_pdf: "Open PDF"
    }
};

let idiomaAtual = "pt";

//para resolver erro 404 no github
function getBasePath() {
    return window.location.hostname.includes("github.io")
        ? "/Portfolio_Alvaro_Gomes/"
        : "/";
}

function renderCertificates() {
    const container = document.getElementById("certificates-grid");
    if (!container) return;

    const basePath = getBasePath();

    container.innerHTML = "";

    certificados.forEach(certificado => {
        const caminhoArquivo = `${basePath}assets/certificados/${encodeURIComponent(certificado.arquivo)}`;

        const card = document.createElement("article");
        card.className = "certificate-card";

        card.innerHTML = `
            <iframe src="${caminhoArquivo}" loading="lazy"></iframe>
            <h3>${certificado.titulo}</h3>
            <a class="certificate-link" href="${caminhoArquivo}" target="_blank">
                ${textos[idiomaAtual].open_pdf}
            </a>
        `;

        container.appendChild(card);
    });
}

function getDescricaoResponsiva() {
    if (window.innerWidth <= 480) {
        return idiomaAtual === "pt"
            ? "Apaixonado por Java e pela criação de códigos."
            : "Passionate about Java and building code.";
    }
    return textos[idiomaAtual].description;
}

function UpdateLanguage(idioma) {
    idiomaAtual = idioma;

    document.getElementById("home").textContent = textos[idioma].home;
    document.getElementById("project").textContent = textos[idioma].project;
    document.getElementById("certificate").textContent = textos[idioma].certificate;
    document.getElementById("projects_title").textContent = textos[idioma].projects_title;
    document.getElementById("description").textContent = getDescricaoResponsiva();
    document.getElementById("skill").textContent = textos[idioma].skill;
    document.getElementById("connect").textContent = textos[idioma].connect;

    renderCertificates();
}

window.addEventListener("resize", () => {
    const frase = document.getElementById("description");
    if (frase) frase.textContent = getDescricaoResponsiva();
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("select-idioma")
        .addEventListener("change", function () {
            UpdateLanguage(this.value);
        });

    UpdateLanguage("pt");
});