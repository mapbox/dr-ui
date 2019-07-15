// builds firstLevelItems for NavigationAccordion
// should be used in batfish.config.js `dataSelectors`:
// orderedPages: data => buildOrderedPages(data, productPageOrder)
// productPageOrder = object of paths
export function buildOrderedPages(data, productPageOrder) {
  const pages = data.pages.map(p => ({
    title: p.frontMatter.title,
    path: p.path,
    tag: p.frontMatter.tag || '',
    description: p.frontMatter.description
  }));

  return Object.keys(productPageOrder).reduce((reduced, order) => {
    const items = productPageOrder[order];
    reduced[order] = items.map(item => {
      return pages.find(p => {
        const urlEnding = item === 'index' ? '' : `${item}/`;
        return new RegExp(`${order}${urlEnding}$`).test(p.path);
      });
    });
    return reduced;
  }, {});
}
