/* eslint-disable xss/no-mixed-html */

export function extractor(fullHtml) {
  let css = '',
    resources = { js: [], css: [] };
  // regex to find and extract css and scripts in html
  const srcRegex = /src=("|')([^']*?)("|')/g,
    hrefRegex = /href=("|')([^']*?)("|')/g,
    scriptRegex = /<script>((.|\n)*)<\/script>/,
    cssRegex = /<style>((.|\n)*)<\/style>/,
    moreCss = fullHtml.match(cssRegex);
  // output for code panels
  let html = `${fullHtml.replace(scriptRegex, '')}`,
    js = fullHtml.match(scriptRegex)[1];

  // extract inline css from html, append to css var, then remove from html output
  if (moreCss) {
    css += `${moreCss[0].replace(/<[^>]*>/g, '')}`;
    html = `${html.replace(cssRegex, '')}`;
  }
  // extract inline scripts from html, add them as resources, then remove from html output
  if (fullHtml.match(srcRegex)) {
    const srcArr = fullHtml
      .match(srcRegex)
      .map(src => src.replace('src=', '').replace(/["']/g, ''));
    resources.js = resources.js.concat(srcArr);
    html = `${html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g, '')}`;
  }
  // extract inline stylesheets from html, add them as resources, then remove from html output
  if (fullHtml.match(hrefRegex)) {
    const hrefArr = fullHtml
      .match(hrefRegex)
      .map(src => src.replace('href=', '').replace(/["']/g, ''));
    resources.css = resources.css.concat(hrefArr);
    html = `${html.replace(/<link[\s\S]*?>/g, '')}`;
  }
  // only return between body tags
  html = html.match(/<body[\s\S]*?>((.|\n)*)<\/body>/)[1];

  return {
    html,
    css,
    js,
    resources
  };
}
