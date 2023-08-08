/*
Basic.
*/
import React from 'react';
import Plugins from '../plugins';

const exampleData = {
  "iOS plugins": {
    "description": "Plugins offer features and functionality related to map controls and other things that users can touch or interact with, like draw tools, map export tools, directions and geocoding controls, and more.",
    "plugins": {
      "mapbox-gl-compare": {
        "website": "https://github.com/mapbox/mapbox-gl-compare",
        "description": "Enables users to compare two maps by swiping left and right."
      },
      "mapbox-gl-controls": {
        "website": "https://github.com/bravecow/mapbox-gl-controls",
        "description": "Adds controls for a ruler, style inspector, localization, and style switcher.",
        "image": "header-image"
      }
    }
  }
}

export default class Basic extends React.Component {
render() {
  return <Plugins pluginData={exampleData} />;
}
}
