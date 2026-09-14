<script setup lang="ts">
import { ref } from "vue";
import { useLanguage } from "@/composables/useLanguage";

const { idioma, t, setIdioma } = useLanguage();
const menuAberto = ref(false);

function closeMenu() {
  menuAberto.value = false;
}
</script>

<template>
  <nav class="nav">
    <div class="brand">
      <span class="dot"></span>
      <span
        ><span class="accent">alvaro</span><span class="muted">@</span>gomes<span class="muted"
          >:~$</span
        ></span
      >
    </div>

    <div class="nav-tabs" :class="{ open: menuAberto }">
      <RouterLink to="/" class="tab" exact-active-class="active" @click="closeMenu">
        <span class="tab-num">01</span> <i class="fas fa-terminal"></i>
        <span>{{ t.nav_home }}</span>
      </RouterLink>
      <RouterLink to="/projetos" class="tab" active-class="active" @click="closeMenu">
        <span class="tab-num">02</span> <i class="fas fa-folder-open"></i>
        <span>{{ t.nav_projects }}</span>
      </RouterLink>
      <RouterLink to="/experiencia" class="tab" active-class="active" @click="closeMenu">
        <span class="tab-num">03</span> <i class="fas fa-briefcase"></i>
        <span>{{ t.nav_experience }}</span>
      </RouterLink>
      <RouterLink to="/certificados" class="tab" active-class="active" @click="closeMenu">
        <span class="tab-num">04</span> <i class="fas fa-certificate"></i>
        <span>{{ t.nav_certs }}</span>
      </RouterLink>
    </div>

    <div class="nav-right">
      <div class="lang-toggle">
        <button :class="{ active: idioma === 'pt' }" @click="setIdioma('pt')">PT</button>
        <button :class="{ active: idioma === 'en' }" @click="setIdioma('en')">EN</button>
      </div>
      <button class="nav-toggle" aria-label="Menu" @click="menuAberto = !menuAberto">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-h);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 clamp(18px, 4vw, 48px);
  background: rgba(8, 11, 22, 0.62);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.96rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
}
.brand .dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.16);
  flex-shrink: 0;
}
.brand .accent {
  color: var(--purple-br);
}
.brand .muted {
  color: var(--faint);
}

.nav-tabs {
  display: flex;
  align-items: center;
  gap: 4px;
}
.tab {
  appearance: none;
  background: transparent;
  border: 1px solid transparent;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  padding: 8px 14px;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition:
    color 0.18s,
    background 0.18s,
    border-color 0.18s;
}
.tab i {
  font-size: 0.86rem;
  opacity: 0.85;
}
.tab:hover {
  color: var(--text);
  background: var(--surface);
}
.tab.active {
  color: var(--text);
  background: var(--surface-2);
  border-color: var(--border-2);
}
.tab .tab-num {
  color: var(--purple-br);
  opacity: 0.8;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.lang-toggle {
  display: inline-flex;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 3px;
  font-family: var(--font-mono);
}
.lang-toggle button {
  appearance: none;
  background: transparent;
  border: none;
  color: var(--faint);
  font-family: inherit;
  font-size: 0.74rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 7px;
  cursor: pointer;
  transition:
    color 0.18s,
    background 0.18s;
}
.lang-toggle button.active {
  color: #fff;
  background: var(--grad);
}

.nav-toggle {
  display: none;
  appearance: none;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
}

@media (max-width: 720px) {
  .nav-tabs {
    position: fixed;
    top: var(--nav-h);
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 12px clamp(18px, 4vw, 48px);
    background: rgba(8, 11, 22, 0.96);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(16px);
    transform: translateY(-130%);
    transition: transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  .nav-tabs.open {
    transform: translateY(0);
  }
  .tab {
    font-size: 0.9rem;
    padding: 12px 14px;
  }
  .nav-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .brand .muted {
    display: none;
  }
}
</style>
