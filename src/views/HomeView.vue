<script setup lang="ts">
import { computed } from "vue";
import { useLanguage } from "@/composables/useLanguage";
import { useTypingEffect } from "@/composables/useTypingEffect";

const { t } = useLanguage();
const roles = computed(() => t.value.typing_roles);
const { texto: role } = useTypingEffect(roles);
</script>

<template>
  <section id="home" class="section" data-screen-label="Home">
    <div class="hero">
      <div class="hero-left">
        <div class="eyebrow">
          <span class="pulse"></span>
          <span>{{ t.avail }}</span>
        </div>

        <div>
          <div
            style="
              font-family: var(--font-mono);
              color: var(--muted);
              font-size: 1rem;
              margin-bottom: 8px;
            "
          >
            {{ t.hero_hello }}
          </div>
          <h1>Alvaro <span class="grad">Gomes</span></h1>
        </div>

        <div class="hero-role">
          <span class="prompt">&gt;</span>
          <span>{{ role }}</span
          ><span class="cursor"></span>
        </div>

        <p class="hero-desc">{{ t.hero_desc }}</p>

        <div class="chips">
          <span class="chip"><i class="fab fa-java"></i> Java</span>
          <span class="chip"><i class="fas fa-leaf"></i> Spring Boot</span>
          <span class="chip"><i class="fab fa-js"></i> JavaScript</span>
          <span class="chip"><i class="fas fa-database"></i> SQL</span>
          <span class="chip"><i class="fas fa-code-branch"></i> Git</span>
        </div>

        <div class="hero-actions">
          <div class="socials">
            <a
              href="https://github.com/alvarofgomes"
              target="_blank"
              class="social"
              aria-label="GitHub"
              ><i class="fab fa-github"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/alvarofgomes"
              target="_blank"
              class="social"
              aria-label="LinkedIn"
              ><i class="fab fa-linkedin-in"></i
            ></a>
            <a
              href="https://www.instagram.com/_alvarogomes_/"
              target="_blank"
              class="social"
              aria-label="Instagram"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="hero-right">
        <div class="terminal">
          <div class="terminal-bar">
            <span class="tdot r"></span><span class="tdot y"></span><span class="tdot g"></span>
            <span class="tname">developer.java</span>
          </div>
          <!-- prettier-ignore -->
          <div class="terminal-body">
            <span class="line"><span class="t-comment">// perfil do desenvolvedor</span></span>
            <span class="line"><span class="t-kw">public class</span> <span class="t-fn">Developer</span> <span class="t-punc">{</span></span>
            <span class="line">&nbsp;&nbsp;<span class="t-kw">String</span> <span class="t-key">nome</span> <span class="t-punc">=</span> <span class="t-str">"Alvaro Gomes"</span><span class="t-punc">;</span></span>
            <span class="line">&nbsp;&nbsp;<span class="t-kw">String</span> <span class="t-key">cargo</span> <span class="t-punc">=</span> <span class="t-str">"Full Stack Dev"</span><span class="t-punc">;</span></span>
            <span class="line">&nbsp;&nbsp;<span class="t-kw">String</span> <span class="t-key">local</span> <span class="t-punc">=</span> <span class="t-str">"Recife, BR"</span><span class="t-punc">;</span></span>
            <span class="line">&nbsp;&nbsp;<span class="t-kw">String</span><span class="t-punc">[]</span> <span class="t-key">stack</span> <span class="t-punc">=</span> <span class="t-punc">{</span></span>
            <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-str">"Java"</span><span class="t-punc">,</span> <span class="t-str">"Spring"</span><span class="t-punc">,</span> <span class="t-str">"SQL"</span><span class="t-punc">,</span> <span class="t-str">"JS"</span></span>
            <span class="line">&nbsp;&nbsp;<span class="t-punc">};</span></span>
            <span class="line">&nbsp;&nbsp;<span class="t-kw">boolean</span> <span class="t-key">openToWork</span> <span class="t-punc">=</span> <span class="t-kw">true</span><span class="t-punc">;</span></span>
            <span class="line"><span class="t-punc">}</span></span>
            <span class="line">&nbsp;</span>
            <span class="line"><span class="t-prompt">$</span> <span class="t-comment">run Developer.build()</span></span>
            <span class="line"><span class="t-fn">✓ compilando o futuro...</span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#home {
  min-height: calc(100vh - var(--nav-h));
  display: flex;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--muted);
  letter-spacing: 0.02em;
}
.eyebrow .pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.45);
  }
  70% {
    box-shadow: 0 0 0 9px rgba(52, 211, 153, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
  }
}

.hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(28px, 5vw, 64px);
  align-items: center;
  width: 100%;
}

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.hero h1 {
  font-size: clamp(2.7rem, 6.4vw, 4.4rem);
  line-height: 1;
  letter-spacing: -0.035em;
  font-weight: 700;
  margin: 0;
}
.hero h1 .grad {
  background: var(--grad);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-role {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 2.2vw, 1.3rem);
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 1.6em;
}
.hero-role .prompt {
  color: var(--blue-bright);
}
.cursor {
  display: inline-block;
  width: 9px;
  height: 1.05em;
  background: var(--purple-br);
  translate: 0 2px;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.hero-desc {
  color: var(--muted);
  font-size: 1.04rem;
  line-height: 1.65;
  max-width: 50ch;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text);
  padding: 7px 13px;
  border-radius: 9px;
  background: var(--surface);
  border: 1px solid var(--border);
  transition:
    border-color 0.2s,
    background 0.2s,
    transform 0.2s;
}
.chip i {
  color: var(--blue-bright);
  font-size: 0.92rem;
}
.chip:hover {
  border-color: var(--border-2);
  background: var(--surface-2);
  transform: translateY(-2px);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.socials {
  display: flex;
  gap: 10px;
}
.social {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 1.15rem;
  text-decoration: none;
  transition:
    color 0.2s,
    border-color 0.2s,
    transform 0.2s,
    background 0.2s;
}
.social:hover {
  color: #fff;
  border-color: var(--border-2);
  background: var(--surface-2);
  transform: translateY(-3px);
}

/*Terminal card*/
.hero-right {
  display: flex;
  justify-content: center;
}
.terminal {
  width: 100%;
  max-width: 460px;
  background: linear-gradient(180deg, rgba(13, 17, 30, 0.92), rgba(10, 13, 24, 0.92));
  border: 1px solid var(--border-2);
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(139, 92, 246, 0.06);
  font-family: var(--font-mono);
  backdrop-filter: blur(6px);
}
.terminal-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid var(--border);
}
.terminal-bar .tdot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.tdot.r {
  background: #ff5f57;
}
.tdot.y {
  background: #febc2e;
}
.tdot.g {
  background: #28c840;
}
.terminal-bar .tname {
  margin-left: 8px;
  font-size: 0.78rem;
  color: var(--faint);
}
.terminal-body {
  padding: 18px 20px 22px;
  font-size: 0.84rem;
  line-height: 1.85;
}
.terminal-body .line {
  display: block;
  white-space: pre-wrap;
}
.t-comment {
  color: var(--faint);
}
.t-prompt {
  color: #34d399;
}
.t-key {
  color: var(--blue-bright);
}
.t-str {
  color: #f0b46b;
}
.t-kw {
  color: var(--purple-br);
}
.t-punc {
  color: var(--muted);
}
.t-fn {
  color: #5fd3c4;
}

@media (max-width: 920px) {
  .hero {
    grid-template-columns: 1fr;
  }
  .hero-right {
    order: -1;
  }
  .terminal {
    max-width: 520px;
  }
}

@media (max-width: 420px) {
  .hero h1 {
    font-size: 2.4rem;
  }
  .hero-actions {
    width: 100%;
  }
}
</style>
