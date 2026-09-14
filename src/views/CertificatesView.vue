<script setup lang="ts">
import { useLanguage } from "@/composables/useLanguage";
import { useCertFilter } from "@/composables/useCertFilter";
import CertificateCard from "@/components/CertificateCard.vue";

const { idioma, t } = useLanguage();
const { filtro, certificadosFiltrados, categoriasDisponiveis, setFiltro } = useCertFilter();
</script>

<template>
  <section id="certificates" class="section" data-screen-label="Certificados">
    <div class="section-head">
      <span class="kicker">{{ t.certs_kicker }}</span>
      <h2 class="section-title">{{ t.certs_title }}</h2>
      <p class="section-sub">{{ t.certs_sub }}</p>
    </div>

    <div class="filters">
      <button
        v-for="cat in categoriasDisponiveis"
        :key="cat.key"
        class="filter-btn"
        :class="{ active: filtro === cat.key }"
        @click="setFiltro(cat.key)"
      >
        <i :class="cat.info.icon"></i> {{ cat.info.label[idioma] }}
        <span class="filter-count">{{ cat.count }}</span>
      </button>
    </div>

    <div class="cert-grid">
      <CertificateCard v-for="c in certificadosFiltrados" :key="c.arquivo" :certificado="c" />
      <div v-if="certificadosFiltrados.length === 0" class="cert-empty">{{ t.empty }}</div>
    </div>
  </section>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-bottom: 30px;
}
.filter-btn {
  appearance: none;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 8px 14px;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition:
    color 0.2s,
    background 0.2s,
    border-color 0.2s,
    transform 0.2s;
}
.filter-btn i {
  font-size: 0.82rem;
}
.filter-btn:hover {
  color: var(--text);
  background: var(--surface-2);
  transform: translateY(-2px);
}
.filter-btn.active {
  color: #fff;
  background: var(--grad);
  border-color: transparent;
}
.filter-count {
  opacity: 0.7;
  font-size: 0.72rem;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 18px;
}

.cert-empty {
  grid-column: 1 / -1;
  text-align: center;
  color: var(--faint);
  font-family: var(--font-mono);
  padding: 40px 0;
}
</style>
