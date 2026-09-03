<script setup lang="ts">
import { useLanguage } from "@/composables/useLanguage";
import { projetos } from "@/data/projetos";
import ProjectCard from "@/components/ProjectCard.vue";

const { t } = useLanguage();
</script>

<template>
  <section class="section active" id="projects" data-screen-label="Projetos">
    <div class="section-head">
      <span class="kicker">{{ t.projects_kicker }}</span>
      <h2 class="section-title">{{ t.projects_title }}</h2>
      <p class="section-sub">{{ t.projects_sub }}</p>
    </div>
    <div class="projects-grid">
      <ProjectCard v-for="p in projetos" :key="p.id" :project="p" />
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 20px;
}
</style>
