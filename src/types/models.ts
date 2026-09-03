export type Idioma = "pt" | "en";

export interface Localized<T = string> {
  pt: T;
  en: T;
}

export type LinkType = "live" | "repo" | "video";

export interface ProjectLink {
  type: LinkType;
  url: string;
}

export interface Project {
  id: string;
  path: string;
  name: Localized;
  desc: Localized;
  tags: string[];
  links: ProjectLink[];
}

export type CategoriaKey =
  | "todos"
  | "java"
  | "web"
  | "git"
  | "ia"
  | "office"
  | "python"
  | "sql"
  | "outros";

export interface Categoria {
  label: Localized;
  icon: string;
  cor: string;
}

export interface Certificado {
  titulo: string;
  arquivo: string;
  categoria: Exclude<CategoriaKey, "todos">;
}
