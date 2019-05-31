import React from 'react';
import OverviewHeader from '../overview-header';

const testCases = {};

testCases.basic = {
  description: 'All props',
  component: OverviewHeader,
  props: {
    features: ['Smooth scrambled eggs', 'Vegetarian sausage', 'Fruit syrups'],
    title: 'Mapbox SDK for Breakfast',
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

testCases.none = {
  description: 'No optional props',
  component: OverviewHeader,
  props: {
    features: [
      'a',
      'b',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tristique orci, eget blandit justo. In quis ultrices ante. Mauris et vehicula arcu, et tincidunt mi. Integer eget tristique risus, eu tristique risus. Aliquam vel lectus eu magna finibus malesuada non a felis. Integer tincidunt rutrum urna ac mattis. Phasellus consequat tempus hendrerit.',
      'c',
      'd'
    ],
    title: "Mapbox SDK that You've Never Heard Of",
    image: (
      <img
        width={800}
        height={499}
        src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg"
      />
    )
  }
};

testCases.some = {
  description: 'Some optional props',
  component: OverviewHeader,
  props: {
    features: ['Smooth scrambled eggs', 'Vegetarian sausage', 'Fruit syrups'],
    title: 'Mapbox SDK for Breakfast',
    version: '0.1.0',
    ghLink: 'https://github.com/mapbox',
    image: (
      <img
        height={300}
        src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg"
      />
    )
  }
};

testCases.beta = {
  description: 'Beta product',
  component: OverviewHeader,
  props: {
    features: ['Chips', 'Tots', 'Fries'],
    title: 'Mapbox Potato SDK',
    beta: true,
    image: (
      <img
        width={800}
        height={499}
        src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg"
      />
    )
  }
};

testCases.allContactUs = {
  description: 'All, plus Contact Us button',
  component: OverviewHeader,
  props: {
    features: ['Smooth scrambled eggs', 'Vegetarian sausage', 'Fruit syrups'],
    title: 'Mapbox SDK for Breakfast',
    version: '0.1.0',
    changelogLink: 'https://keepachangelog.com/en/0.3.0/',
    installLink: 'https://www.mapbox.com/install',
    ghLink: 'https://github.com/mapbox',
    contactLink: 'https://www.mapbox.com/contact/',
    image: (
      <img
        height={300}
        src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg"
      />
    )
  }
};

testCases.contactUs = {
  description: 'Adds Contact Us button',
  component: OverviewHeader,
  props: {
    features: ['Smooth scrambled eggs', 'Vegetarian sausage', 'Fruit syrups'],
    title: 'Mapbox SDK for Breakfast',
    version: '0.1.0',
    changelogLink: 'https://keepachangelog.com/en/0.3.0/',
    contactLink: 'https://www.mapbox.com/contact/',
    image: (
      <img
        height={300}
        src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg"
      />
    )
  }
};

export { testCases };
