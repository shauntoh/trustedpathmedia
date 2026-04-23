// Astro sets BASE_URL to the configured base path (e.g. '/trustedpathmedia/')
// This helper strips the trailing slash and prepends it to any path
export function url(path) {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return `${base}${path}`;
}
