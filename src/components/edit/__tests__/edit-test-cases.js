import Edit from '../edit';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: Edit,
  description: 'Basic example',
  props: {
    html: "<div id='map'></div>",
    css:
      'body { margin: 0; padding: 0; }\n        #map { position: absolute; top: 0; bottom: 0; width: 100%; };',
    frontMatter: {
      description: 'Initialize a map in an HTML element with Mapbox GL JS.',
      pathname: '/mapbox-gl-js/example/simple-map/',
      title: 'Display a map'
    },
    head:
      "<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />",
    js:
      "var map = new mapboxgl.Map({\n    container: 'map', // container id\n    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location\n    center: [-74.50, 40], // starting position [lng, lat]\n    zoom: 9 // starting zoom\n});",
    resources: {
      js: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'],
      css: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css']
    }
  }
};

export { testCases, noRenderCases };
