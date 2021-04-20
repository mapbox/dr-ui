export default function onCopy() {
  console.log('Copied example with clipboard');
  if (window && window.analytics) {
    analytics.track('Copied example with clipboard');
  }
}
