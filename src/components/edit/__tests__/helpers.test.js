/* eslint-disable xss/no-mixed-html */

import * as helpers from '../helpers.js';

describe('edit helpers', () => {
  test('simple example', () => {
    const fullHtml =
      "<!DOCTYPE html>\n<html>\n<head>\n<meta charset='utf-8' />\n<title>Display a map</title>\n<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />\n<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>\n<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />\n<style>\n    body { margin: 0; padding: 0; }\n        #map { position: absolute; top: 0; bottom: 0; width: 100%; };\n</style>\n</head>\n<body>\n<div id='map'></div>\n<script>\nmapboxgl.accessToken = '<your access token here>';\nvar map = new mapboxgl.Map({\n    container: 'map', // container id\n    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location\n    center: [-74.50, 40], // starting position [lng, lat]\n    zoom: 9 // starting zoom\n});\n</script>\n\n</body>\n</html>";
    const css =
      'body { margin: 0; padding: 0; }\n#map { position: absolute; top: 0; bottom: 0; width: 100%; };';
    const snippet =
      "<div id='map'></div>\n<script>\nvar map = new mapboxgl.Map({\n    container: 'map', // container id\n    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location\n    center: [-74.50, 40], // starting position [lng, lat]\n    zoom: 9 // starting zoom\n});\n</script>";
    const resources = {
      js: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'],
      css: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css']
    };
    expect(helpers.extractor(resources, fullHtml, snippet, css)).toEqual({
      css: `body { margin: 0; padding: 0; }
#map { position: absolute; top: 0; bottom: 0; width: 100%; };`,
      html: `<div id='map'></div>
`,
      js: `
mapboxgl.accessToken = '<your access token here>';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
`,
      resources: {
        css: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css'],
        js: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js']
      }
    });
  });

  test('complex example', () => {
    const fullHtml =
      "<!DOCTYPE html>\n<html>\n<head>\n<meta charset='utf-8' />\n<title>Accept coordinates as input to a geocoder</title>\n<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />\n<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.1/mapbox-gl.js'></script>\n<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.1/mapbox-gl.css' rel='stylesheet' />\n<style>\n    body { margin: 0; padding: 0; }\n        #map { position: absolute; top: 0; bottom: 0; width: 100%; };\n</style>\n</head>\n<body>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.min.js'></script>\n<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css' type='text/css' />\n<!-- Promise polyfill script required to use Mapbox GL Geocoder in IE 11 -->\n<script src=\"https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js\"></script>\n<div id='map'></div>\n\n<script>\nmapboxgl.accessToken = '<your access token here>';\nvar map = new mapboxgl.Map({\n    container: 'map',\n    style: 'mapbox://styles/mapbox/streets-v11',\n    center: [-79.4512, 43.6568],\n    zoom: 13\n});\n\n/* given a query in the form \"lng, lat\" or \"lat, lng\" returns the matching\n * geographic coordinate(s) as search results in carmen geojson format,\n * https://github.com/mapbox/carmen/blob/master/carmen-geojson.md\n */\nvar coordinatesGeocoder = function (query) {\n    // match anything which looks like a decimal degrees coordinate pair\n    var matches = query.match(/^[ ]*(?:Lat: )?(-?\\d\\.?\\d*)[, ](?:Lng: )?(-?\\d\\.?\\d*)[ ]*$/i);\n    if (!matches) {\n        return null;\n    }\n\n    function coordinateFeature(lng, lat) {\n        return {\n            center: [lng, lat],\n            geometry: {\n                type: \"Point\",\n                coordinates: [lng, lat]\n            },\n            place_name: 'Lat: ' + lat + ' Lng: ' + lng,\n            place_type: ['coordinate'],\n            properties: {},\n            type: 'Feature'\n        };\n    }\n\n    var coord1 = Number(matches[1]);\n    var coord2 = Number(matches[2]);\n    var geocodes = [];\n\n    if (coord1 < -90 || coord1 > 90) {\n        // must be lng, lat\n        geocodes.push(coordinateFeature(coord1, coord2));\n    }\n\n    if (coord2 < -90 || coord2 > 90) {\n        // must be lat, lng\n        geocodes.push(coordinateFeature(coord2, coord1));\n    }\n\n    if (geocodes.length === 0) {\n        // else could be either lng, lat or lat, lng\n        geocodes.push(coordinateFeature(coord1, coord2));\n        geocodes.push(coordinateFeature(coord2, coord1));\n    }\n\n    return geocodes;\n};\n\nmap.addControl(new MapboxGeocoder({\n    accessToken: mapboxgl.accessToken,\n    localGeocoder: coordinatesGeocoder,\n    zoom: 4,\n    placeholder: \"Try: -40, 170\",\n    mapboxgl: mapboxgl\n}));\n</script>\n\n</body>\n</html>";
    const css =
      'body { margin: 0; padding: 0; }\n#map { position: absolute; top: 0; bottom: 0; width: 100%; };';
    const snippet =
      "<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.min.js'></script>\n<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css' type='text/css' />\n<!-- Promise polyfill script required to use Mapbox GL Geocoder in IE 11 -->\n<script src=\"https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js\"></script>\n<div id='map'></div>\n\n<script>\nvar map = new mapboxgl.Map({\n    container: 'map',\n    style: 'mapbox://styles/mapbox/streets-v11',\n    center: [-79.4512, 43.6568],\n    zoom: 13\n});\n\n/* given a query in the form \"lng, lat\" or \"lat, lng\" returns the matching\n * geographic coordinate(s) as search results in carmen geojson format,\n * https://github.com/mapbox/carmen/blob/master/carmen-geojson.md\n */\nvar coordinatesGeocoder = function (query) {\n    // match anything which looks like a decimal degrees coordinate pair\n    var matches = query.match(/^[ ]*(?:Lat: )?(-?\\d\\.?\\d*)[, ](?:Lng: )?(-?\\d\\.?\\d*)[ ]*$/i);\n    if (!matches) {\n        return null;\n    }\n\n    function coordinateFeature(lng, lat) {\n        return {\n            center: [lng, lat],\n            geometry: {\n                type: \"Point\",\n                coordinates: [lng, lat]\n            },\n            place_name: 'Lat: ' + lat + ' Lng: ' + lng,\n            place_type: ['coordinate'],\n            properties: {},\n            type: 'Feature'\n        };\n    }\n\n    var coord1 = Number(matches[1]);\n    var coord2 = Number(matches[2]);\n    var geocodes = [];\n\n    if (coord1 < -90 || coord1 > 90) {\n        // must be lng, lat\n        geocodes.push(coordinateFeature(coord1, coord2));\n    }\n\n    if (coord2 < -90 || coord2 > 90) {\n        // must be lat, lng\n        geocodes.push(coordinateFeature(coord2, coord1));\n    }\n\n    if (geocodes.length === 0) {\n        // else could be either lng, lat or lat, lng\n        geocodes.push(coordinateFeature(coord1, coord2));\n        geocodes.push(coordinateFeature(coord2, coord1));\n    }\n\n    return geocodes;\n};\n\nmap.addControl(new MapboxGeocoder({\n    accessToken: mapboxgl.accessToken,\n    localGeocoder: coordinatesGeocoder,\n    zoom: 4,\n    placeholder: \"Try: -40, 170\",\n    mapboxgl: mapboxgl\n}));\n</script>\n";
    const resources = {
      js: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'],
      css: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css']
    };
    expect(helpers.extractor(resources, fullHtml, snippet, css)).toEqual({
      css: `body { margin: 0; padding: 0; }
#map { position: absolute; top: 0; bottom: 0; width: 100%; };`,
      html: `

<!-- Promise polyfill script required to use Mapbox GL Geocoder in IE 11 -->


<div id='map'></div>


`,
      js: `
mapboxgl.accessToken = '<your access token here>';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-79.4512, 43.6568],
    zoom: 13
});

/* given a query in the form "lng, lat" or "lat, lng" returns the matching
 * geographic coordinate(s) as search results in carmen geojson format,
 * https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
 */
var coordinatesGeocoder = function (query) {
    // match anything which looks like a decimal degrees coordinate pair
    var matches = query.match(/^[ ]*(?:Lat: )?(-?\\d\\.?\\d*)[, ](?:Lng: )?(-?\\d\\.?\\d*)[ ]*$/i);
    if (!matches) {
        return null;
    }

    function coordinateFeature(lng, lat) {
        return {
            center: [lng, lat],
            geometry: {
                type: "Point",
                coordinates: [lng, lat]
            },
            place_name: 'Lat: ' + lat + ' Lng: ' + lng,
            place_type: ['coordinate'],
            properties: {},
            type: 'Feature'
        };
    }

    var coord1 = Number(matches[1]);
    var coord2 = Number(matches[2]);
    var geocodes = [];

    if (coord1 < -90 || coord1 > 90) {
        // must be lng, lat
        geocodes.push(coordinateFeature(coord1, coord2));
    }

    if (coord2 < -90 || coord2 > 90) {
        // must be lat, lng
        geocodes.push(coordinateFeature(coord2, coord1));
    }

    if (geocodes.length === 0) {
        // else could be either lng, lat or lat, lng
        geocodes.push(coordinateFeature(coord1, coord2));
        geocodes.push(coordinateFeature(coord2, coord1));
    }

    return geocodes;
};

map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    localGeocoder: coordinatesGeocoder,
    zoom: 4,
    placeholder: "Try: -40, 170",
    mapboxgl: mapboxgl
}));
`,
      resources: {
        css: [
          'https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css',
          'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css'
        ],
        js: [
          'https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js',
          'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.min.js',
          'https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js',
          'https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js'
        ]
      }
    });
  });
});
