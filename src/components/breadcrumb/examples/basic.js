/*
Display breadcrumbs for a page.
All docs > Site > Subsite > Section > Page title
*/
import React from 'react';
import Breadcrumb from '../breadcrumb';

export default class Basic extends React.Component {
  render() {
    return (
      <Breadcrumb
        currentPage={{
          title: 'Display a map',
          path: '/mapbox-gl-js/examples/display-a-map/'
        }}
        site={{
          title: 'Mapbox GL JS',
          path: '/mapbox-gl-js/'
        }}
        section={{
          title: 'Examples',
          path: '/mapbox-gl-js/examples/'
        }}
      />
    );
  }
}
