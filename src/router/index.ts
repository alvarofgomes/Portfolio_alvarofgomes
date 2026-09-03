import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "home", component: () => import("@/views/HomeView.vue") },
    { path: "/projetos", name: "projects", component: () => import("@/views/ProjectsView.vue") },
    { path: "/experiencia", name: "experience", component: () => import("@/views/ExperienceView.vue") },
    { path: "/certificados", name: "certificates", component: () => import("@/views/CertificatesView.vue") }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
