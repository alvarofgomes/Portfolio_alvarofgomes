export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`;
}

const CERT_CDN_BASE = "https://cdn.jsdelivr.net/gh/alvarofgomes/Certificados@main/";

// Os PDFs dos certificados moram no repo alvarofgomes/Certificados e são servidos
// pelo CDN do jsDelivr, em vez de duplicados aqui dentro de public/.
export function certificadoUrl(arquivo: string): string {
  return CERT_CDN_BASE + encodeURIComponent(arquivo);
}
