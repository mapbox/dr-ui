/*
Display breadcrumbs for a page.
*/
import React from 'react';
import Breadcrumb from '../breadcrumb';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <Breadcrumb
        links={[
          {
            title: 'Mapbox GL JS',
            path: '/mapbox-gl-js/'
          },
          {
            title: 'Examples',
            path: '/mapbox-gl-js/examples/'
          },
          {
            title: 'Display a map',
            path: '/mapbox-gl-js/examples/display-a-map/'
          }
        ]}
        location={{
          pathname: '/mapbox-gl-js/examples/display-a-map/'
        }}
      />
    );
  }
}
