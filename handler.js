function showDiv(dvNumber) {
    var presentation = document.getElementById('presentation');
    var projects = document.getElementById('projects');

    var item1 = document.getElementById('menu-item-1');
    var item2 = document.getElementById('menu-item-2');

    var calc = document.getElementById('calc');
    var hub = document.getElementById('hub');
    var secret = document.getElementById('secret');
    
    if (dvNumber == 1) {
        presentation.style.display = 'block';
        projects.style.display = 'none';
        
        item1.style.display = 'block';
        item2.style.display = 'none';
    }
    
    if (dvNumber == 2) {
        presentation.style.display = 'none';
        projects.style.display = 'block';

        item1.style.display = 'none';
        item2.style.display = 'block';

        calc.style.display = 'block';
        hub.style.display = 'block';
        secret.style.display = 'block';

    }
}

window.addEventListener("resize", function() {
    const fraseElement = document.querySelector(".presentation-div .presentation-frase");

    if (window.innerWidth <= 480) {
        fraseElement.textContent = "apaixonado por Java e pela criação de códigos"; 
    } else {
        fraseElement.textContent = "Futuro desenvolvedor back-end apaixonado por Java e pela criação de códigos que proporcionem interações confortáveis aos usuários."; 
    }
});

const textos = {
    pt: {
        home: "Início",
        project: "Projetos",
        about: "Sobre",
        description: "Futuro desenvolvedor back-end apaixonado por Java e pela criação de códigos que proporcionem interações confortáveis aos usuários.",
        skill: "Habilidades Técnicas",
        connect: "Vamos nos Conectar?",
        bc_hub: `O site foi criado para destacar o anime Black Clover de forma simples, mas eficaz, usando animações leves e focando na experiência visual e interativa. É ideal para fãs que buscam explorar mais sobre o anime, assistir episódios ou relembrar trilhas sonoras icônicas. Acesse o projeto <a href="https://alvarofgomes.github.io/site-simples/" target="_blank" style="color:#ccc; text-decoration: none;">aqui</a>.`,
        fc_calc: `A calculadora de freelancer foi desenvolvida como parte de um projeto de curso, utilizando JavaScript para realizar os cálculos. Ela permite ao usuário inserir informações, como o valor total a ser recebido e o número de horas trabalhadas, para calcular o valor correspondente à hora de trabalho. Acesse o projeto <a href="https://alvarofgomes.github.io/calculadora-freelancer/" target="_blank" style="color:#ccc; text-decoration: none;">aqui</a>.`,
        amg_secret: `Desenvolvido como parte da imersão de Desenvolvimento Web oferecida pela Oracle em parceria com a Alura, o Amigo Secreto é uma aplicação web interativa que permite organizar o tradicional jogo de Amigo Secreto de forma simples e dinâmica <a href="https://alvarofgomes.github.io/amigos-secreto/" target="_blank" style="color:#ccc; text-decoration: none;">aqui</a>.`,
    },
    en: {
        home: "Home",
        project: "Projects",
        about: "About",
        description: "Future back-end developer passionate about Java and creating codes that provide comfortable interactions for users.",
        skill: "Technical Skill",
        connect: "Let's connect?",
        bc_hub: `The website was created to highlight the anime Black Clover in a simple yet effective way, using light animations and focusing on visual and interactive experience. It is ideal for fans looking to explore more about the anime, watch episodes, or revisit iconic soundtracks. Access the project <a href="https://alvarofgomes.github.io/site-simples/" target="_blank" style="color:#ccc; text-decoration: none;">here</a>.`,
        fc_calc: `The freelancer calculator was developed as part of a course project, using JavaScript to perform the calculations. It allows the user to input information such as the total amount to be received and the number of hours worked to calculate the corresponding hourly rate. Access the project <a href="https://alvarofgomes.github.io/calculadora-freelancer/" target="_blank" style="color:#ccc; text-decoration: none;">here</a>.`,
        amg_secret: `Developed as part of the Web Development immersion program offered by Oracle in partnership with Alura, Secret Friend is an interactive web application designed to organize the traditional Secret Friend game in a simple and dynamic way <a href="https://alvarofgomes.github.io/amigos-secreto/" target="_blank" style="color:#ccc; text-decoration: none;">here</a>.`,
    }
};

function UpdateLanguage(idioma) {
    document.getElementById("home").textContent = textos[idioma].home;
    document.getElementById("project").textContent = textos[idioma].project;
    document.getElementById("description").textContent = textos[idioma].description;
    document.getElementById("skill").textContent = textos[idioma].skill;
    document.getElementById("connect").textContent = textos[idioma].connect;
    document.getElementById("bc_hub").innerHTML = textos[idioma].bc_hub;
    document.getElementById("fc_calc").innerHTML = textos[idioma].fc_calc;
    document.getElementById("amg_secret").innerHTML = textos[idioma].amg_secret;


}

document.getElementById("select-idioma").addEventListener("change", function () {
    const idiomaSelecionado = this.value;
    UpdateLanguage(idiomaSelecionado); 
});