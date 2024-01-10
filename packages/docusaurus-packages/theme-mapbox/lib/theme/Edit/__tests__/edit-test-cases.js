/* eslint-disable xss/no-mixed-html */
import React from 'react';
import Edit from '../edit';
import Basic from '../examples/basic';
import * as helpers from '../helpers.js';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic example',
  element: <Basic />
};

const code = helpers.extractor(
  "<!DOCTYPE html>\n<html>\n<head>\n<meta charset='utf-8' />\n<title>Display a map</title>\n<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />\n<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>\n<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />\n<style>\n    body { margin: 0; padding: 0; }\n        #map { position: absolute; top: 0; bottom: 0; width: 100%; }\n</style><style>h1 {color: red;}</style>\n</head>\n<body>\n<h1>Hello world!</h1><div id='map'></div>\n<script>\nconsole.log('hi')</script>\n\n</body>\n</html>"
);

testCases.basicWithHelpers = {
  component: Edit,
  description: 'Basic example using helpers',
  props: {
    html: code.html,
    css: code.css,
    frontMatter: {
      description: 'Initialize a map in an HTML element with Mapbox GL JS.',
      pathname: '/mapbox-gl-js/example/simple-map/',
      title: 'Display a map'
    },
    head: `<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />`,
    js: code.js,
    resources: code.resources
  }
};

testCases.noCss = {
  component: Edit,
  description: 'No CSS',
  props: {
    html: "<h1>hello world!</h1><div id='map'></div>",
    frontMatter: {
      description: 'Initialize a map in an HTML element with Mapbox GL JS.',
      pathname: '/mapbox-gl-js/example/simple-map/',
      title: 'Display a map'
    },
    head: `<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />`,
    js: "var map = new mapboxgl.Map({\n    container: 'map', // container id\n    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location\n    center: [-74.50, 40], // starting position [lng, lat]\n    zoom: 9 // starting zoom\n});",
    resources: {
      js: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'],
      css: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css']
    }
  }
};

export { testCases, noRenderCases };
