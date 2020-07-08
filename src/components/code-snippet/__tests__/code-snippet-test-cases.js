/* eslint-disable xss/no-mixed-html */
import React from 'react';
import CodeSnippet from '../code-snippet';
import { highlightHtml } from '../../highlight/html';
import * as helpers from '../../edit/helpers.js';
import Basic from '../examples/basic';
import Everything from '../examples/everything';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'A basic CodeSnippey',
  element: <Basic />
};

testCases.everything = {
  description: 'A CodeSnippet with every feature (edit buttons, title)',
  element: <Everything />
};

testCases.noEdit = {
  component: CodeSnippet,
  description: 'CodeSnippet without edit buttons',
  props: {
    code: `<h1>hi</h1>`,
    highlighter: () => highlightHtml,
    filename: 'index.html'
  }
};

testCases.noTitle = {
  component: CodeSnippet,
  description: 'CodeSnippet without title',
  props: {
    code: `<h1>hi</h1>`,
    highlighter: () => highlightHtml
  }
};

const fullHtml =
  "<!DOCTYPE html>\n<html>\n<head>\n<meta charset='utf-8' />\n<title>Display a map</title>\n<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />\n<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>\n<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />\n<style>\n    body { margin: 0; padding: 0; }\n        #map { position: absolute; top: 0; bottom: 0; width: 100%; };\n</style>\n</head>\n<body>\n<div id='map'></div>\n<script>\nmapboxgl.accessToken = '<your access token here>';\nvar map = new mapboxgl.Map({\n    container: 'map', // container id\n    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location\n    center: [-74.50, 40], // starting position [lng, lat]\n    zoom: 9 // starting zoom\n});\n</script>\n\n</body>\n</html>";

const code = helpers.extractor(fullHtml);

testCases.withHelpers = {
  component: CodeSnippet,
  description: 'CodeSnippet with edit buttons and extractor',
  props: {
    code: fullHtml,
    edit: {
      html: code.html,
      css: code.css,
      js: code.js,
      resources: code.resources,
      frontMatter: {
        description: 'Initialize a map in an HTML element with Mapbox GL JS.',
        pathname: '/mapbox-gl-js/example/simple-map/',
        title: 'Display a map'
      }
    },
    highlighter: () => highlightHtml,
    filename: 'index.html'
  }
};

export { testCases, noRenderCases };
