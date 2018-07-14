import React from 'react';
import { ProductMenu } from '../product-menu';
import { ProductMenuItems } from '../../../data/product-menu-items';
import { ProductMenuDropdown } from '../../product-menu-dropdown/product-menu-dropdown';

const testCases = {};
const noRenderCases = {};
const locationTestItems = [
  {
    productCategory: 'Foo',
    icon: 'map',
    products: [
      {
        url: '/mapbox-gl-js/',
        name: 'Foo1'
      },
      {
        url: '/ios-sdk/maps/',
        name: 'Foo2'
      }
    ]
  },
  {
    productCategory: 'Bar',
    icon: 'compass',
    products: [
      {
        url: '/ProductMenu',
        name: 'ProductMenu'
      }
    ]
  }
];

function renderMenu(items) {
  return <ProductMenuDropdown categories={items} />;
}

function renderBoring() {
  return <img src={'https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.webp'} />;
}

testCases.mapboxMenu = {
  component: ProductMenu,
  description: 'Mapbox product menu',
  props: {
    platform: 'Geography',
    product: 'Globes',
    children: renderMenu(ProductMenuItems)
  }
};

testCases.locationMenu = {
  component: ProductMenu,
  description: "Fake items, but one matches this test case's location",
  props: {
    platform: 'Fake',
    product: 'Location',
    children: renderMenu(locationTestItems)
  }
};

testCases.arbitraryElement = {
  component: ProductMenu,
  description: 'Product menu with something arbitrary in it',
  props: {
    platform: 'Pizza',
    product: 'Hut',
    children: renderBoring()
  }
};

export default { testCases, noRenderCases };
