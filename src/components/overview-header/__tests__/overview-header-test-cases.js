import React from 'react';
import OverviewHeader from '../overview-header';

const testCases = {};

testCases.one = {
  description: 'Variant one',
  component: OverviewHeader,
  props: {
    sdkFeatures: [
      'Smooth scrambled eggs',
      'Vegetarian sausage',
      'Fruit syrups'
    ],
    productName: 'Mapbox SDK for Breakfast',
    version: '0.1.0',
    changelogLink: 'https://keepachangelog.com/en/0.3.0/',
    installLink: 'https://www.mapbox.com/install',
    ghLink: 'https://github.com/mapbox',
    image: (
      <img
        height={300}
        src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg"
      />
    )
  }
};

testCases.two = {
  description: 'Variant two',
  component: OverviewHeader,
  props: {
    sdkFeatures: [
      'a',
      'b',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tristique orci, eget blandit justo. In quis ultrices ante. Mauris et vehicula arcu, et tincidunt mi. Integer eget tristique risus, eu tristique risus. Aliquam vel lectus eu magna finibus malesuada non a felis. Integer tincidunt rutrum urna ac mattis. Phasellus consequat tempus hendrerit.',
      'c',
      'd'
    ],
    productName: "Mapbox SDK that You've Never Heard Of",
    version: '99.3.2',
    changelogLink: 'https://keepachangelog.com/en/0.3.0/',
    installLink: 'https://www.mapbox.com/install',
    ghLink: 'https://github.com/mapbox',
    image: (
      <img
        width={800}
        height={499}
        src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg"
      />
    )
  }
};

export { testCases };
