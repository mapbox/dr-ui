import React from 'react';
import { ProductMenu } from '../product-menu';
// You could import this list from, say, a data selector if you like
// On Mapbox docs pages, categories data is imported from a central location
// to keep menus in sync across the site.
import { ProductMenuItems } from '../../../data/product-menu-items';
import { ProductMenuDropdown } from '../../product-menu-dropdown/product-menu-dropdown';

const testCases = {};
const noRenderCases = {};

function renderMenu() {
  return <ProductMenuDropdown categories={ProductMenuItems} />;
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
    children: renderMenu()
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
