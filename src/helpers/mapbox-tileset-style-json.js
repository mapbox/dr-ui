const brandColors = {
  pink: {
    fullOpacity: 'rgba(238,78,139,1)',
    semiTransparent: 'rgba(238,78,139,0.4)'
  },
  blue: {
    fullOpacity: 'rgba(66,100,251,1)',
    semiTransparent: 'rgba(66,100,251,0.3)'
  },
  white: {
    fullOpacity: 'rgba(255,255,255,1)'
  },
  black: {
    fullOpacity: 'rgba(0,0,0,1)'
  },
  pinkDark: {
    fullOpacity: '#b43b71'
  },
  blueLight: {
    fullOpacity: '#aab7ef'
  }
};

const streetsV8 = {
  version: 8,
  name: 'Mapbox Streets tileset v8',
  sources: {
    'mapbox-streets': {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-streets-v8'
    }
  },
  layers: [
    {
      id: 'admin',
      source: 'mapbox-streets',
      'source-layer': 'admin',
      type: 'line',
      paint: {
        'line-color': brandColors.white.fullOpacity
      }
    },
    {
      id: 'aeroway',
      source: 'mapbox-streets',
      'source-layer': 'aeroway',
      type: 'line',
      paint: {
        'line-color': brandColors.white.fullOpacity
      }
    },
    {
      id: 'airport_label',
      source: 'mapbox-streets',
      'source-layer': 'airport_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': brandColors.pink.semiTransparent,
        'circle-stroke-color': brandColors.pink.fullOpacity,
        'circle-stroke-width': 1
      }
    },
    {
      id: 'building',
      source: 'mapbox-streets',
      'source-layer': 'building',
      type: 'fill',
      paint: {
        'fill-color': brandColors.blue.semiTransparent,
        'fill-outline-color': brandColors.blue.fullOpacity
      }
    },
    {
      id: 'housenum_label',
      source: 'mapbox-streets',
      'source-layer': 'housenum_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': brandColors.pink.semiTransparent,
        'circle-stroke-color': brandColors.pink.fullOpacity,
        'circle-stroke-width': 1
      }
    },
    {
      id: 'landuse_overlay',
      source: 'mapbox-streets',
      'source-layer': 'landuse_overlay',
      type: 'fill',
      paint: {
        'fill-color': brandColors.blue.semiTransparent,
        'fill-outline-color': brandColors.blue.fullOpacity
      }
    },
    {
      id: 'landuse',
      source: 'mapbox-streets',
      'source-layer': 'landuse',
      type: 'fill',
      paint: {
        'fill-color': brandColors.blue.semiTransparent,
        'fill-outline-color': brandColors.blue.fullOpacity
      }
    },
    {
      id: 'motorway_junction',
      source: 'mapbox-streets',
      'source-layer': 'motorway_junction',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': brandColors.pink.semiTransparent,
        'circle-stroke-color': brandColors.pink.fullOpacity,
        'circle-stroke-width': 1
      }
    },
    {
      id: 'natural_label',
      source: 'mapbox-streets',
      'source-layer': 'natural_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': brandColors.pink.semiTransparent,
        'circle-stroke-color': brandColors.pink.fullOpacity,
        'circle-stroke-width': 1
      }
    },
    {
      id: 'place_label',
      source: 'mapbox-streets',
      'source-layer': 'place_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': brandColors.pink.semiTransparent,
        'circle-stroke-color': brandColors.pink.fullOpacity,
        'circle-stroke-width': 1
      }
    },
    {
      id: 'poi_label',
      source: 'mapbox-streets',
      'source-layer': 'poi_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': brandColors.pink.semiTransparent,
        'circle-stroke-color': brandColors.pink.fullOpacity,
        'circle-stroke-width': 1
      }
    },
    {
      id: 'road',
      source: 'mapbox-streets',
      'source-layer': 'road',
      type: 'line',
      paint: {
        'line-color': brandColors.white.fullOpacity
      }
    },
    {
      id: 'structure',
      source: 'mapbox-streets',
      'source-layer': 'structure',
      type: 'fill',
      paint: {
        'fill-color': brandColors.blue.semiTransparent,
        'fill-outline-color': brandColors.blue.fullOpacity
      }
    },
    {
      id: 'transit_stop_label',
      source: 'mapbox-streets',
      'source-layer': 'transit_stop_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': brandColors.pink.semiTransparent,
        'circle-stroke-color': brandColors.pink.fullOpacity,
        'circle-stroke-width': 1
      }
    },
    {
      id: 'water',
      source: 'mapbox-streets',
      'source-layer': 'water',
      type: 'fill',
      paint: {
        'fill-color': brandColors.blue.semiTransparent,
        'fill-outline-color': brandColors.blue.fullOpacity
      }
    },
    {
      id: 'waterway',
      source: 'mapbox-streets',
      'source-layer': 'waterway',
      type: 'line',
      paint: {
        'line-color': brandColors.white.fullOpacity
      }
    }
  ]
};

const terrainV2 = {
  version: 8,
  name: 'Mapbox Terrain tileset v2',
  sources: {
    'mapbox-terrain': {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-terrain-v2'
    }
  },
  layers: [
    {
      id: 'landcover',
      source: 'mapbox-terrain',
      'source-layer': 'landcover',
      type: 'fill',
      paint: {
        'fill-color': brandColors.blue.semiTransparent,
        'fill-outline-color': brandColors.blue.fullOpacity
      }
    },
    {
      id: 'hillshade',
      source: 'mapbox-terrain',
      'source-layer': 'hillshade',
      type: 'fill',
      paint: {
        'fill-color': brandColors.blue.semiTransparent,
        'fill-outline-color': brandColors.blue.fullOpacity
      }
    },
    {
      id: 'contour',
      source: 'mapbox-terrain',
      'source-layer': 'contour',
      type: 'line',
      paint: {
        'line-color': brandColors.white.fullOpacity
      }
    }
  ]
};

const trafficV1 = {
  version: 8,
  name: 'Mapbox Traffic tileset v1',
  sources: {
    'mapbox-traffic': {
      url: 'mapbox://mapbox.mapbox-traffic-v1',
      type: 'vector'
    }
  },
  layers: [
    {
      id: 'traffic',
      source: 'mapbox-traffic',
      'source-layer': 'traffic',
      type: 'line',
      paint: {
        'line-width': 1.5,
        'line-color': [
          'case',
          ['==', 'low', ['get', 'congestion']],
          brandColors.blueLight.fullOpacity,
          ['==', 'moderate', ['get', 'congestion']],
          brandColors.blue.fullOpacity,
          ['==', 'heavy', ['get', 'congestion']],
          brandColors.pink.fullOpacity,
          ['==', 'severe', ['get', 'congestion']],
          brandColors.pinkDark.fullOpacity,
          brandColors.black.fullOpacity
        ]
      }
    }
  ]
};

export { streetsV8, terrainV2, trafficV1 };
