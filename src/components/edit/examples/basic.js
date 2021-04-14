/*
Basic.
*/
import React from 'react';
import Edit from '../edit';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <Edit
        html={`<h1>hello world!</h1><div id='map'></div>`}
        css={`
          body {
            margin: 0;
            padding: 0;
            background: yellow;
          }
          #map {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
          }
        `}
        frontMatter={{
          description: 'Initialize a map in an HTML element with Mapbox GL JS.',
          pathname: '/mapbox-gl-js/example/simple-map/',
          title: 'Display a map'
        }}
        head={`<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />`}
        js={`var map = new mapboxgl.Map({
          container: 'map', // container id
          style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
          center: [-74.50, 40], // starting position [lng, lat]
          zoom: 9 // starting zoom
});`}
        resources={{
          js: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'],
          css: [
            'https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css'
          ]
        }}
      />
    );
  }
}
