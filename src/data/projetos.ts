import type { Project } from "@/types/models";

export const projetos: Project[] = [
  {
    id: "DS-LIST",
    path: "~/spring/dslist",
    name: { pt: "DS List", en: "DS List" },
    desc: {
      pt: "API REST em Spring Boot para catalogar jogos e organizá-los em listas personalizáveis, com reordenação manual dos itens (drag-and-drop) via endpoint dedicado. Arquitetura em camadas (Controller/Service/Repository) com DTOs e PostgreSQL em produção. Hospedado no plano free do Render — o serviço dorme após 15 min de inatividade; se o primeiro acesso demorar ~30-50s pra carregar, é isso, é só aguardar.",
      en: "Spring Boot REST API to catalog games and organize them into custom lists, with manual reordering (drag-and-drop) via a dedicated endpoint. Layered architecture (Controller/Service/Repository) with DTOs and PostgreSQL in production. Hosted on Render's free tier — the service sleeps after 15 min of inactivity; if the first load takes ~30-50s, that's why, just give it a moment."
    },
    tags: ["Java", "Spring Boot", "PostgreSQL", "JPA"],
    links: [
      { type: "live", url: "https://dslist-15tq.onrender.com/" },
      { type: "repo", url: "https://github.com/alvarofgomes/dslist" }
    ]
  },
  {
    id: "WA-BOT",
    path: "~/spring/whatsapp-bot",
    name: { pt: "Bot WhatsApp", en: "WhatsApp Bot" },
    desc: {
      pt: "Bot de contagem regressiva para WhatsApp integrado com Twilio. A cada 12h enviava automaticamente quantos dias, horas e minutos faltavam para uma viagem — com mensagem especial no dia D.",
      en: "WhatsApp countdown bot integrated with Twilio. Every 12h it automatically sent how many days, hours and minutes were left until a trip — with a special message on departure day."
    },
    tags: ["Java", "Spring Boot", "Twilio", "Scheduler"],
    links: [{ type: "repo", url: "https://github.com/alvarofgomes/bot-whatsapp" }]
  },
  {
    id: "TC-ENT",
    path: "~/java/tartaruga-cometa",
    name: { pt: "Tartaruga Cometa", en: "Tartaruga Cometa" },
    desc: {
      pt: "Sistema de gerenciamento de entregas em Java Web (Servlets, JSP, PostgreSQL), com foco em regras de negócio e organização.",
      en: "Delivery management system in Java Web (Servlets, JSP, PostgreSQL), focused on business rules and clean organization."
    },
    tags: ["Java", "JSP", "Servlets", "PostgreSQL"],
    links: [
      { type: "repo", url: "https://github.com/alvarofgomes/TartarugaCometa" },
      {
        type: "video",
        url: "https://www.linkedin.com/posts/alvarofgomes_projeto-em-desenvolvimento-sistema-de-activity-7412247750647463937-D_Xp"
      }
    ]
  },
  {
    id: "FX-CALC",
    path: "~/javafx/calculator",
    name: { pt: "Calculadora JavaFX", en: "JavaFX Calculator" },
    desc: {
      pt: "Calculadora com interface gráfica em JavaFX, explorando layouts (VBox, GridPane), eventos de mouse e estilização com CSS.",
      en: "Calculator with a JavaFX GUI, exploring layouts (VBox, GridPane), mouse events and CSS styling."
    },
    tags: ["Java", "JavaFX", "CSS"],
    links: [
      { type: "repo", url: "https://lnkd.in/dnsV6_js" },
      {
        type: "video",
        url: "https://www.linkedin.com/posts/alvarofgomes_praticando-javafx-na-pr%C3%A1tica-hoje-dediquei-activity-7421207745980182528-sLzr"
      }
    ]
  },
  {
    id: "FX-CRONO",
    path: "~/javafx/stopwatch",
    name: { pt: "Cronômetro JavaFX", en: "JavaFX Stopwatch" },
    desc: {
      pt: "Cronômetro em JavaFX usando Timeline, KeyFrame, eventos de botões e organização com VBox e HBox.",
      en: "Stopwatch in JavaFX using Timeline, KeyFrame, button events and layout with VBox and HBox."
    },
    tags: ["Java", "JavaFX", "Timeline"],
    links: [
      { type: "repo", url: "https://lnkd.in/dnsV6_js" },
      {
        type: "video",
        url: "https://www.linkedin.com/posts/alvarofgomes_praticando-javafx-na-pr%C3%A1tica-criando-um-activity-7428860959399632896-c1Ju"
      }
    ]
  },
  {
    id: "FX-QUIZ",
    path: "~/javafx/quiz",
    name: { pt: "Quiz JavaFX", en: "JavaFX Quiz" },
    desc: {
      pt: "Quiz interativo em JavaFX, explorando RadioButton, ToggleGroup, controle de fluxo entre perguntas e lógica de pontuação.",
      en: "Interactive quiz in JavaFX, exploring RadioButton, ToggleGroup, question-flow control and scoring logic."
    },
    tags: ["Java", "JavaFX", "UI"],
    links: [
      { type: "repo", url: "https://lnkd.in/dnsV6_js" },
      {
        type: "video",
        url: "https://www.linkedin.com/posts/alvarofgomes_praticando-javafx-na-pr%C3%A1tica-criando-um-activity-7429215696657473538-qVgf"
      }
    ]
  },
  {
    id: "BC-HUB",
    path: "~/web/black-clover",
    name: { pt: "Black Clover Hub", en: "Black Clover Hub" },
    desc: {
      pt: "Site dedicado ao anime Black Clover, com animações leves e foco total na experiência visual e interativa.",
      en: "A site dedicated to the anime Black Clover, with light animations and a strong focus on the visual, interactive experience."
    },
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      { type: "live", url: "https://alvarofgomes.github.io/site-simples/" },
      { type: "repo", url: "https://github.com/alvarofgomes/site-simples" }
    ]
  },
  {
    id: "FC-CALC",
    path: "~/web/freelancer-calc",
    name: { pt: "Calculadora Freelancer", en: "Freelancer Calculator" },
    desc: {
      pt: "Calculadora em JavaScript para estimar o valor da hora trabalhada de um freelancer.",
      en: "A JavaScript calculator to estimate a freelancer's hourly work rate."
    },
    tags: ["JavaScript", "HTML", "CSS"],
    links: [
      { type: "live", url: "https://alvarofgomes.github.io/calculadora-freelancer/" },
      { type: "repo", url: "https://github.com/alvarofgomes/calculadora-freelancer" }
    ]
  },
  {
    id: "AM-SEC",
    path: "~/web/amigo-secreto",
    name: { pt: "Amigo Secreto", en: "Secret Friend" },
    desc: {
      pt: "Aplicação web interativa para organizar sorteios de amigo secreto de forma simples e dinâmica.",
      en: "Interactive web app to organize Secret Friend draws in a simple, dynamic way."
    },
    tags: ["JavaScript", "DOM", "HTML"],
    links: [
      { type: "live", url: "https://alvarofgomes.github.io/amigos-secreto/" },
      { type: "repo", url: "https://github.com/alvarofgomes/amigos-secreto" }
    ]
  }
];
