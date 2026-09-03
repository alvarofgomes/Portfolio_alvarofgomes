export interface Textos {
  nav_home: string;
  nav_projects: string;
  nav_experience: string;
  nav_certs: string;
  hero_hello: string;
  hero_desc: string;
  hero_cv: string;
  hero_projects: string;
  avail: string;
  projects_kicker: string;
  projects_title: string;
  projects_sub: string;
  live: string;
  repo: string;
  video: string;
  exp_kicker: string;
  exp_title: string;
  exp_sub: string;
  exp_loc: string;
  exp_profile_role: string;
  cv_btn: string;
  exp_now: string;
  certs_kicker: string;
  certs_title: string;
  certs_sub: string;
  certs_total: string;
  open_pdf: string;
  empty: string;
  typing_roles: string[];
  exp_role: string;
  exp_period: string;
  exp_bullets: string[];
}

export const textos: Record<"pt" | "en", Textos> = {
  pt: {
    nav_home: "início",
    nav_projects: "projetos",
    nav_experience: "experiência",
    nav_certs: "certificados",
    hero_hello: "olá, eu sou",
    hero_desc:
      "Desenvolvedor back-end apaixonado por Java e pela criação de códigos que proporcionem interações confortáveis aos usuários. Atualmente construindo sistemas de logística no mundo real.",
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
    typing_roles: [
      "Desenvolvedor Back-end",
      "Entusiasta de Java",
      "Estudante de Spring Boot",
      "Full Stack na GW Sistemas"
    ],
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
    hero_desc:
      "Back-end developer passionate about Java and writing code that gives users comfortable, reliable interactions. Currently building real-world logistics systems.",
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
    typing_roles: [
      "Back-end Developer",
      "Java Enthusiast",
      "Spring Boot Learner",
      "Full Stack at GW Sistemas"
    ],
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
