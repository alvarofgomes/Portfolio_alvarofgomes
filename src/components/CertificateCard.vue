<script setup lang="ts">
import { computed } from "vue";
import type { Certificado } from "@/types/models";
import { categorias } from "@/data/categorias";
import { useLanguage } from "@/composables/useLanguage";
import { asset } from "@/utils/asset";

const props = defineProps<{ certificado: Certificado }>();
const { idioma, t } = useLanguage();

const info = computed(() => categorias[props.certificado.categoria]);
const arquivo = computed(() => asset(`assets/certificados/${encodeURIComponent(props.certificado.arquivo)}`));
</script>

<template>
  <article class="cert-card" :data-categoria="certificado.categoria">
    <div class="cert-icon-area" :style="{ background: info.cor }">
      <i class="cert-icon" :class="info.icon"></i>
    </div>
    <div class="cert-body">
      <span class="cert-badge">{{ info.label[idioma] }}</span>
      <h3 class="cert-title">{{ certificado.titulo }}</h3>
      <a class="cert-link" :href="arquivo" target="_blank" rel="noopener">
        <i class="fas fa-file-pdf"></i> {{ t.open_pdf }}
      </a>
    </div>
  </article>
</template>

<style scoped>
.cert-card {
    display: flex;
    flex-direction: column;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    transition: transform .25s, border-color .25s, box-shadow .25s;
}
.cert-card:hover {
    transform: translateY(-5px);
    border-color: var(--border-2);
    box-shadow: 0 20px 44px rgba(0,0,0,0.45);
}
.cert-icon-area {
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}
.cert-icon-area::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(7,10,20,0.34);
}
.cert-icon {
    font-size: 2.3rem;
    color: #fff;
    z-index: 1;
    filter: drop-shadow(0 3px 10px rgba(0,0,0,0.4));
}
.cert-body {
    padding: 15px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}
.cert-badge {
    align-self: flex-start;
    font-family: var(--font-mono);
    font-size: 0.64rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--muted);
    padding: 3px 9px;
    border-radius: 20px;
    background: var(--surface-2);
    border: 1px solid var(--border);
}
.cert-title {
    font-size: 0.92rem;
    font-weight: 600;
    line-height: 1.4;
    color: var(--text);
    flex: 1;
}
</style>
