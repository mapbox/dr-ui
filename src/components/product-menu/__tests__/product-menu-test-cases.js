import React from 'react';
import ProductMenu from '../product-menu';
import { ProductMenuItems } from '../../../data/product-menu-items';
import ProductMenuDropdown from '../../product-menu-dropdown/product-menu-dropdown';

const testCases = {};
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
    productName: 'Mapbox product names',
    children: renderMenu(ProductMenuItems)
  }
};

testCases.locationMenu = {
  component: ProductMenu,
  description: "Fake items, but one matches this test case's location",
  props: {
    productName: 'Items in here',
    children: renderMenu(locationTestItems)
  }
};

testCases.arbitraryElement = {
  component: ProductMenu,
  description: 'Product menu with something arbitrary in it',
  props: {
    productName: 'Pizza pie',
    children: renderBoring()
  }
};

export default { testCases };
