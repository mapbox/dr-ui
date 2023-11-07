// Returns "production" or "staging"
export default function env() {
  return typeof window !== 'undefined' ? /(^|\S+\.)mapbox\.com/.test(window.location.host) ? 'production' : 'staging' : undefined;
}