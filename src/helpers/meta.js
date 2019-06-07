// this function return meta obj for ReactPageShell

// fields to return if data is available
const fields = [
  'title',
  'description',
  'pathname',
  'contentType',
  'language',
  'level',
  'hideFromSearchEngines'
];
// metamaker accepts three objects: frontmatter, location, meta
// these are props passed to the PageShell
export function metaMaker(frontMatter, location, meta) {
  return fields.reduce((obj, field) => {
    const value = meta[field] || frontMatter[field] || location[field];
    if (value) obj[field] = value;
    return obj;
  }, {});
}
