import React from 'react';
import Map from '../map';
import mapboxgl from 'mapbox-gl';

const testCases = {};

testCases.basic = {
  component: Map,
  description: 'Default map.',
  props: {
    accessToken: process.env.MapboxAccessToken
  }
};

testCases.opts = {
  component: Map,
  description: 'Change options',
  props: {
    zoom: 1,
    height: 200,
    width: 400,
    accessToken: process.env.MapboxAccessToken,
    scrollZoom: false,
    navControls: true,
    themeMapContainer: 'round shadow-darken25 mx-auto my30'
  }
};

testCases.onMapLoad = {
  component: Map,
  description: 'Pass function on map load',
  props: {
    accessToken: process.env.MapboxAccessToken,
    center: [-96, 37.8],
    zoom: 3,
    onMapLoad: map => {
      map.addSource('points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              // feature for Mapbox DC
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-77.03238901390978, 38.913188059745586]
              },
              properties: {
                title: 'Mapbox DC',
                icon: 'monument'
              }
            },
            {
              // feature for Mapbox SF
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-122.414, 37.776]
              },
              properties: {
                title: 'Mapbox SF',
                icon: 'harbor'
              }
            }
          ]
        }
      });
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: 'points',
        layout: {
          // get the icon name from the source's "icon" property
          // concatenate the name to get an icon from the style's sprite sheet
          'icon-image': ['concat', ['get', 'icon'], '-15'],
          // get the title name from the source's "title" property
          'text-field': ['get', 'title'],
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      });
    }
  }
};

function addMarker(map) {
  let marker = new mapboxgl.Marker({
    draggable: true
  })
    .setLngLat([0, 0])
    .addTo(map);

  marker.on('dragend', onDragEnd);
}

function onDragEnd() {
  const coordinates = document.getElementById('coordinates');
  const lngLat = this.getLngLat();
  coordinates.style.display = 'block';
  coordinates.innerText = `Longitude: ${lngLat.lng}\nLatitude: ${lngLat.lat}`;
}

testCases.onMapLoadAnother = {
  component: Map,
  description: 'Pass function on map load and return data from the map',
  element: (
    <div className="relative">
      <div
        style={{ display: 'none' }}
        className="absolute top left mt6 ml6 bg-white py6 px12 txt-s txt-mono round z3 color-gray"
        id="coordinates"
      />
      <Map
        accessToken={process.env.MapboxAccessToken}
        center={[0, 0]}
        onMapLoad={addMarker}
      />
    </div>
  )
};

export { testCases };
