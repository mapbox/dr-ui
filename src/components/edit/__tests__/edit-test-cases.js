import Edit from '../edit';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: Edit,
  description: 'Basic example',
  props: {
    code:
      "<!DOCTYPE html>\n<html>\n<head>\n<meta charset='utf-8' />\n<title>Display a map</title>\n<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />\n<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>\n<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />\n<style>\n    body { margin: 0; padding: 0; }\n        #map { position: absolute; top: 0; bottom: 0; width: 100%; };\n</style>\n</head>\n<body>\n<div id='map'></div>\n<script>\nmapboxgl.accessToken = '<your access token here>';\nvar map = new mapboxgl.Map({\n    container: 'map', // container id\n    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location\n    center: [-74.50, 40], // starting position [lng, lat]\n    zoom: 9 // starting zoom\n});\n</script>\n\n</body>\n</html>",
    css:
      'body { margin: 0; padding: 0; }\n        #map { position: absolute; top: 0; bottom: 0; width: 100%; };',
    frontMatter: {
      contentType: 'example',
      description: 'Initialize a map in an HTML element with Mapbox GL JS.',
      language: ['JavaScript'],
      pathname: '/mapbox-gl-js/example/simple-map/',
      tags: ['styles'],
      title: 'Display a map'
    },
    head:
      "<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />",
    rawHtml:
      "<div id='map'></div>\n<script>\nvar map = new mapboxgl.Map({\n    container: 'map', // container id\n    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location\n    center: [-74.50, 40], // starting position [lng, lat]\n    zoom: 9 // starting zoom\n});\n</script>\n",
    urls: {
      js: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'],
      css: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css']
    }
  }
};

export { testCases, noRenderCases };
