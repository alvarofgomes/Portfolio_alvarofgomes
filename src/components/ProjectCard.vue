<script setup lang="ts">
import { computed } from "vue";
import type { Project, LinkType } from "@/types/models";
import { useLanguage } from "@/composables/useLanguage";

const props = defineProps<{ project: Project }>();
const { idioma, t } = useLanguage();

const icons: Record<LinkType, string> = {
  live: "fas fa-arrow-up-right-from-square",
  repo: "fab fa-github",
  video: "fab fa-linkedin"
};

const nome = computed(() => props.project.name[idioma.value]);
const desc = computed(() => props.project.desc[idioma.value]);
</script>

<template>
  <article class="project-card">
    <div class="project-top">
      <span class="project-path"><i class="fas fa-folder"></i> {{ project.path }}</span>
      <span class="project-id">{{ project.id }}</span>
    </div>
    <div class="project-body">
      <div class="project-name">{{ nome }}</div>
      <p class="project-desc">{{ desc }}</p>
      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag" class="ptag">{{ tag }}</span>
      </div>
      <div style="display:flex;gap:18px;flex-wrap:wrap;margin-top:4px;">
        <a
          v-for="link in project.links"
          :key="link.type + link.url"
          class="cert-link"
          :href="link.url"
          target="_blank"
          rel="noopener"
        >
          <i :class="icons[link.type]"></i> {{ t[link.type] }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
    display: flex;
    flex-direction: column;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    transition: transform .25s cubic-bezier(.2,.7,.2,1), border-color .25s, box-shadow .25s;
    position: relative;
}
.project-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: var(--grad);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity .25s;
    pointer-events: none;
}
.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 22px 50px rgba(0,0,0,0.45);
}
.project-card:hover::before { opacity: 1; }

.project-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 18px;
    border-bottom: 1px solid var(--border);
    background: rgba(255,255,255,0.02);
}
.project-path {
    font-family: var(--font-mono);
    font-size: 0.76rem;
    color: var(--faint);
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.project-path i { color: var(--blue-bright); }
.project-id {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--purple-br);
    padding: 3px 9px;
    border-radius: 7px;
    border: 1px solid rgba(139,92,246,0.3);
    background: rgba(139,92,246,0.08);
    white-space: nowrap;
}
.project-body {
    padding: 20px 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
}
.project-name {
    font-size: 1.22rem;
    font-weight: 700;
    letter-spacing: -0.01em;
}
.project-desc {
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.6;
    flex: 1;
}
.project-tags { display: flex; flex-wrap: wrap; gap: 7px; }
.ptag {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--muted);
    padding: 4px 9px;
    border-radius: 7px;
    background: var(--surface-2);
    border: 1px solid var(--border);
}
</style>
