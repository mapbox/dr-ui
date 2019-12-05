/**
 * Extracts additional JS and CSS from HTML code block
 * @param {object} resources - an object with arrays for JS and CSS CDNs`{js: [], css: []}`
 * @param {string} fullHtml - the full HTML code you want to extra from
 * @param {string} additionalHtml - an additional HTML code block to pull from (optional)
 * @param {string} additionalCss - an additional CSS code block to pull from (optional)
 */
export function extractor(resources, fullHtml, additionalHtml, additionalCss) {
  const htmlTemp = additionalHtml ? additionalHtml : fullHtml;
  let css = additionalCss;

  // regex to find and extract css and scripts in html
  const srcRegex = /src=("|')([^']*?)("|')/g,
    hrefRegex = /href=("|')([^']*?)("|')/g,
    scriptRegex = /<script>((.|\n)*)<\/script>/,
    cssRegex = /<style>((.|\n)*)<\/style>/,
    moreCss = htmlTemp.match(cssRegex);
  // output for code panels
  let html = `${htmlTemp.replace(scriptRegex, '')}`,
    js = fullHtml.match(scriptRegex)[1];

  // extract inline css from html, append to css var, then remove from html output
  if (moreCss) {
    css += `${moreCss[0].replace(/<[^>]*>/g, '')}`;
    html = `${html.replace(cssRegex, '')}`;
  }
  // extract inline scripts from html, add them as resources, then remove from html output
  if (htmlTemp.match(srcRegex)) {
    const srcArr = htmlTemp
      .match(srcRegex)
      .map(src => src.replace('src=', '').replace(/["']/g, ''));
    resources.js = resources.js.concat(srcArr);
    html = `${html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g, '')}`;
  }
  // extract inline stylesheets from html, add them as resources, then remove from html output
  if (htmlTemp.match(hrefRegex)) {
    const hrefArr = htmlTemp
      .match(hrefRegex)
      .map(src => src.replace('href=', '').replace(/["']/g, ''));
    resources.css = resources.css.concat(hrefArr);
    html = `${html.replace(/<link[\s\S]*?>/g, '')}`;
  }
  return {
    html,
    css,
    js,
    resources
  };
}
