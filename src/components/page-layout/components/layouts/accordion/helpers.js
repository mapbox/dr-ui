// frontmatter (require) object. This is the page's generated frontMatter.
// headings (optional) array. This is used by api-documentation to combine multiple markdown files.

export function buildSecondLevel(frontMatter, headings) {
  if (!frontMatter.headings && !headings) return [];
  // parse headings
  const orderedHeadings = frontMatter.headings
    ? parseHeadings(frontMatter, frontMatter.headings)
    : parseHeadings(frontMatter, headings);
  // find top level headings (h2)
  const topLevelHeadings = orderedHeadings.filter((h) => h.level === 2);
  // return data
  return buildItems(topLevelHeadings, orderedHeadings);
}

function buildItems(topLevelHeadings, orderedHeadings) {
  return topLevelHeadings.map((heading, index) => {
    const nextHeading = topLevelHeadings[index + 1];
    return {
      title: heading.text,
      path: heading.slug,
      ...(heading.tag && { tag: heading.tag }),
      thirdLevelItems: buildThirdLevel(orderedHeadings, nextHeading, heading)
    };
  });
}

function buildThirdLevel(orderedHeadings, nextHeading, h2) {
  const items = orderedHeadings.filter(
    (f) =>
      f.level === 3 &&
      f.order > h2.order &&
      (nextHeading ? f.order < nextHeading.order : true)
  );
  return items.map((heading) => {
    return {
      title: heading.text,
      path: heading.slug,
      ...(heading.tag && { tag: heading.tag || undefined })
    };
  });
}

function parseHeadings(frontMatter, headings) {
  return headings.map((heading, index) => {
    const tag = parseBeta(frontMatter, heading);
    return {
      level: heading.level,
      text: heading.text,
      slug: heading.slug,
      order: index,
      ...(tag && { tag: tag })
    };
  });
}

function parseBeta(frontMatter, heading) {
  return frontMatter.beta && frontMatter.beta.indexOf(heading.text) > -1
    ? 'beta'
    : undefined;
}
