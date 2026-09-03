import { ref, watch, onUnmounted, type Ref } from "vue";

export function useTypingEffect(roles: Ref<string[]>) {
  const texto = ref("");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId: number | undefined;

  function tick() {
    const current = roles.value[roleIndex] ?? "";
    charIndex += isDeleting ? -1 : 1;
    texto.value = current.substring(0, charIndex);

    let delay = isDeleting ? 45 : 90;
    if (!isDeleting && charIndex === current.length) {
      delay = 1900;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.value.length;
      delay = 320;
    }
    timeoutId = window.setTimeout(tick, delay);
  }

  function restart() {
    window.clearTimeout(timeoutId);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    texto.value = "";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      texto.value = roles.value[0] ?? "";
      return;
    }
    tick();
  }

  watch(roles, restart, { immediate: true });
  onUnmounted(() => window.clearTimeout(timeoutId));

  return { texto };
}
