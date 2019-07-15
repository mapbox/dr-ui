// builds secondLevelItems for NavigationAccordion
// `headings` = this.props.frontMatter.headings || this.props.headings
export function buildSecondLevelItems(headings) {
  const orderedHeadings = headings.map((heading, index) => {
    return {
      level: heading.level,
      text: heading.text,
      slug: heading.slug,
      order: index
    };
  });
  const topLevelHeadings = orderedHeadings.filter(h => h.level === 2);
  return topLevelHeadings.map((h2, index) => {
    const nextH2 = topLevelHeadings[index + 1];
    return {
      title: h2.text,
      path: h2.slug,
      thirdLevelItems: orderedHeadings
        .filter(
          f =>
            f.level === 3 &&
            f.order > h2.order &&
            (nextH2 ? f.order < nextH2.order : true)
        )
        .map(h3 => {
          return {
            title: h3.text.replace(/i2157|i2860/, ''),
            path: h3.slug
          };
        })
    };
  });
}
