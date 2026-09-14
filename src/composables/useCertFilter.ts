import { ref, computed } from "vue";
import { certificados } from "@/data/certificados";
import { categorias, ordemCategorias } from "@/data/categorias";
import type { CategoriaKey } from "@/types/models";

const filtro = ref<CategoriaKey>("todos");

export function useCertFilter() {
  const certificadosFiltrados = computed(() =>
    filtro.value === "todos"
      ? certificados
      : certificados.filter((c) => c.categoria === filtro.value)
  );

  const categoriasDisponiveis = computed(() =>
    ordemCategorias
      .map((key) => ({
        key,
        count:
          key === "todos"
            ? certificados.length
            : certificados.filter((c) => c.categoria === key).length,
        info: categorias[key]
      }))
      .filter((c) => c.key === "todos" || c.count > 0)
  );

  function setFiltro(cat: CategoriaKey) {
    filtro.value = cat;
  }

  return { filtro, certificadosFiltrados, categoriasDisponiveis, setFiltro };
}
