// this function returns `meta` for ReactPageShell
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
// metamaker accepts three objects: frontmatter, location, meta (optional)
// these props come from PageShell
export function metaMaker(frontMatter, location, meta) {
  return fields.reduce((obj, field) => {
    // check if the field exists in the (existing) meta, frontMatter, or location objectys
    const value =
      (meta ? meta[field] : null) ||
      (frontMatter ? frontMatter[field] : null) ||
      (location ? location[field] : null);
    // if the field exists, push the field and value to the meta object
    if (value) obj[field] = value;
    return obj;
  }, {});
}
