// build metadata for each page
export function buildMeta(frontMatter, pathname, navigation) {
  const hasSection = findHasSection(navigation, pathname);
  let subsite =
    frontMatter.subsite || hasSection ? hasSection.title : undefined;
  return {
    pathname: pathname,
    ...(frontMatter.title && { title: frontMatter.title }),
    ...(frontMatter.description && { description: frontMatter.description }),
    ...(frontMatter.contentType && { contentType: frontMatter.contentType }),
    ...(frontMatter.language && { language: frontMatter.language }),
    ...(frontMatter.level && { level: frontMatter.level }),
    ...(subsite && {
      subsite: subsite
    }),
    ...(frontMatter.hideFromSearchEngines && {
      hideFromSearchEngines: frontMatter.hideFromSearchEngines
    })
  };
}

export function findHasSection(navigation, pathname) {
  if (!navigation || !pathname) return;
  return navigation.hierarchy &&
    navigation.hierarchy[pathname] &&
    navigation.hierarchy[pathname].section
    ? navigation.hierarchy[pathname].section
    : undefined;
}

export function findParentPath(navigation, pathname) {
  if (!navigation || !pathname) return;
  return navigation.hierarchy &&
    navigation.hierarchy[pathname] &&
    navigation.hierarchy[pathname].parent
    ? navigation.hierarchy[pathname].parent
    : undefined;
}

// cleans breadcrumbs
// does not add a link if the path or title already exists
export function createUniqueCrumbs(links) {
  return links.reduce((arr, item) => {
    const pathExists = arr.filter((f) => f.path === item.path).length > 0;
    const titleExists = arr.filter((f) => f.title === item.title).length > 0;
    if (!pathExists && !titleExists) arr.push(item);
    return arr;
  }, []);
}
