import { ref, computed } from "vue";
import { textos } from "@/data/textos";
import type { Idioma } from "@/types/models";

const idioma = ref<Idioma>("pt");

export function useLanguage() {
  const t = computed(() => textos[idioma.value]);

  function setIdioma(novo: Idioma) {
    idioma.value = novo;
    document.documentElement.lang = novo === "pt" ? "pt-BR" : "en";
  }

  return { idioma, t, setIdioma };
}
