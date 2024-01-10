/* eslint-disable xss/no-mixed-html */
/* 
This file is used in a webpack loader in batfish.config.js 
to generate the copyable code and iframe demo for each example.

If you make changes to this file, you must restart Batfish (npm start) to see your changes.
*/

import packageJson from '../package.json';

const { dependencies } = packageJson;

export const viewport = `<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />`;
const css = `body { margin: 0; padding: 0; }
#map { position: absolute; top: 0; bottom: 0; width: 100%; }`;

const version = dependencies['mapbox-gl'].replace('^', '');

/* This code is displayed under each example iframe as the copiable code */
/* The <title></title> and (user) access token or place holder is set in example.js */
export function renderCopiableCode(html) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title></title>
${viewport}
<link href='https://api.mapbox.com/mapbox-gl-js/v${version}/mapbox-gl.css' rel='stylesheet' />
<script src='https://api.mapbox.com/mapbox-gl-js/v${version}/mapbox-gl.js'></script>
<style>
${css}
</style>
</head>
<body>
${html}
</body>
</html>`;
}

/* Generates a new HTML file to be used as the `src` in each example iframe */
export function renderIframe(html, MapboxAccessToken) {
  return `<!DOCTYPE html>
  <html>
  <head>
  <meta charset=utf-8 />
  <title>Mapbox GL JS example</title>
  ${viewport}
  <meta name='robots' content='noindex, nofollow' />
  <link href='https://api.mapbox.com/mapbox-gl-js/v${version}/mapbox-gl.css' rel='stylesheet' />
  <script src='https://api.mapbox.com/mapbox-gl-js/v${version}/mapbox-gl.js'></script>
  <style>
  ${css}
  </style>
  <script>mapboxgl.accessToken = '${MapboxAccessToken}'</script>
  </head>
  <body>
  ${html}
  </body>
  </html>`;
}
