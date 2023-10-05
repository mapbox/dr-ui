export default function onCopy() {
  if (window && window.analytics) {
    analytics.track('Copied example with clipboard');
  }
}