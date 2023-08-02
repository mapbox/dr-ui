const contextlessTitles = ['Introduction', 'Overview', 'Guides'];
export function titleGenerator(title, subsite, site) {
  // create array for formatted title: {title} | {subsite} | {site}
  const titleArr = [];
  // do not push a title that is "Introduction" or "Overview"
  if (title && contextlessTitles.indexOf(title) === -1 && (
  // do not push a title that lacks context
  subsite || site)) titleArr.push(title);
  // push subsite, if same value doesn't exist yet, strip "for (Product)" from name
  if (subsite && titleArr.indexOf(subsite) === -1) titleArr.push(subsite.replace(/\sfor\s(iOS|Android|Vision|Unity)/, ''));
  // push site, if same value doesn't exist yet
  if (site && titleArr.indexOf(site) === -1) titleArr.push(site);
  return titleArr;
}