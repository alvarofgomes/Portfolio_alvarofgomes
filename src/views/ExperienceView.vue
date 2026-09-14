<script setup lang="ts">
import { useLanguage } from "@/composables/useLanguage";
import { asset } from "@/utils/asset";

const { t } = useLanguage();
</script>

<template>
  <section class="section" id="experience" data-screen-label="Experiência">
    <div class="section-head">
      <span class="kicker">{{ t.exp_kicker }}</span>
      <h2 class="section-title">{{ t.exp_title }}</h2>
      <p class="section-sub">{{ t.exp_sub }}</p>
    </div>

    <div class="exp-layout">
      <aside class="exp-profile">
        <div class="exp-photo-wrap">
          <img :src="asset('assets/images/foto-perfil.jpg')" alt="Alvaro Gomes" class="exp-photo" />
        </div>
        <div>
          <div class="exp-name">Alvaro Gomes</div>
          <div class="exp-role">{{ t.exp_profile_role }}</div>
        </div>
        <div class="exp-loc"><i class="fas fa-location-dot"></i> {{ t.exp_loc }}</div>
        <div class="exp-divider"></div>
        <a :href="asset('assets/curriculo.pdf')" target="_blank" class="btn btn-primary" style="width:100%;justify-content:center;">
          <i class="fas fa-file-arrow-down"></i> {{ t.cv_btn }}
        </a>
      </aside>

      <div class="timeline">
        <article class="exp-item">
          <div class="exp-item-top">
            <div class="exp-company">GW Sistemas <span class="badge-live">{{ t.exp_now }}</span></div>
            <div class="exp-period">{{ t.exp_period }}</div>
          </div>
          <div class="exp-jobrole">{{ t.exp_role }}</div>
          <ul>
            <li v-for="bullet in t.exp_bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 32px;
    align-items: start;
}
.exp-profile {
    position: sticky;
    top: calc(var(--nav-h) + 28px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 30px 24px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    text-align: center;
}
.exp-photo-wrap {
    width: 156px; height: 156px;
    border-radius: 50%;
    padding: 3px;
    background: var(--grad);
    box-shadow: 0 12px 36px rgba(0,0,0,0.45);
}
.exp-photo {
    width: 100%; height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;
    display: block;
    border: 3px solid var(--bg-2);
}
.exp-name { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em; }
.exp-role {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--blue-bright);
}
.exp-loc {
    font-size: 0.82rem;
    color: var(--faint);
    display: flex;
    align-items: center;
    gap: 6px;
}
.exp-divider { width: 100%; height: 1px; background: var(--border); }

.timeline { display: flex; flex-direction: column; gap: 20px; }
.exp-item {
    position: relative;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 26px 28px;
    transition: border-color .25s, transform .25s;
}
.exp-item:hover { border-color: var(--border-2); transform: translateY(-3px); }
.exp-item-top {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 6px;
}
.exp-company {
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
}
.exp-company .badge-live {
    font-family: var(--font-mono);
    font-size: 0.64rem;
    color: #34d399;
    border: 1px solid rgba(52,211,153,0.35);
    background: rgba(52,211,153,0.08);
    padding: 2px 8px;
    border-radius: 20px;
    letter-spacing: 0.04em;
}
.exp-period {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--faint);
    white-space: nowrap;
}
.exp-jobrole {
    font-size: 0.98rem;
    font-weight: 600;
    color: var(--blue-bright);
    margin-bottom: 14px;
}
.exp-item ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 9px;
}
.exp-item li {
    position: relative;
    padding-left: 22px;
    color: var(--muted);
    font-size: 0.93rem;
    line-height: 1.55;
}
.exp-item li::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: var(--purple-br);
}

@media (max-width: 920px) {
    .exp-layout { grid-template-columns: 1fr; }
    .exp-profile { position: static; flex-direction: row; flex-wrap: wrap; text-align: left; justify-content: flex-start; }
    .exp-photo-wrap { width: 110px; height: 110px; }
    .exp-divider { display: none; }
}
</style>
