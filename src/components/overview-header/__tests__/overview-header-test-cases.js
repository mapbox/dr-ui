import React from 'react';
import Basic from '../examples/basic';
import Custom from '../examples/custom';
import OverviewHeader from '../overview-header';

import { GettingStartedIcon } from '../../../helpers/icons';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.custom = {
  description: 'Custom background',
  element: <Custom />
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
        alt=""
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
        alt=""
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
    tag: 'beta',
    image: (
      <img
        alt=""
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
        alt=""
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
        alt=""
        src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg"
      />
    )
  }
};

testCases.customTag = {
  description: 'Custom tag',
  component: OverviewHeader,
  props: {
    features: ['Chips', 'Tots', 'Fries'],
    title: 'Mapbox Potato SDK',
    tag: 'custom',
    customTagProps: {
      customLabel: 'Custom',
      customTooltipText: 'This is a custom tag.',
      customBackground: 'bg-red-light',
      customColor: 'color-red-dark',
      customBorder: 'border--red'
    },
    image: (
      <img
        alt=""
        src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg"
      />
    )
  }
};

testCases.everything = {
  description: 'Everything.',
  component: OverviewHeader,
  props: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    features: ['Smooth scrambled eggs', 'Vegetarian sausage', 'Fruit syrups'],
    title: 'Mapbox SDK for Breakfast',
    version: '0.1.0',
    theme: 'bg-gray-dark',
    tag: 'beta',
    lightText: true,
    changelogLink: 'https://keepachangelog.com/en/0.3.0/',
    installLink: 'https://www.mapbox.com/install',
    ghLink: 'https://github.com/mapbox',
    contactLink: 'https://www.mapbox.com/contact/',
    image: (
      <img
        alt=""
        src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg"
      />
    )
  }
};

testCases.card = {
  description:
    'Card Mode (adds an icon and highlight color, used in the help docs)',
  component: OverviewHeader,
  props: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Mapbox SDK for Breakfast',
    highlightColor: 'blue',
    titleIcon: <GettingStartedIcon />,
    card: true
  }
};

export { testCases };
