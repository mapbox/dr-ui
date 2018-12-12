import React from 'react';
import ProductMenu from '../product-menu';

const testCases = {};

testCases.mapboxMenu = {
  component: ProductMenu,
  description: 'Mapbox product menu',
  props: {
    productName: 'Mapbox product names',
    homePage: '/api-documentation/'
  }
};

testCases.locationMenu = {
  component: ProductMenu,
  description: "Fake items, but one matches this test case's location",
  props: {
    productName: 'Items in here',
    homePage: '/api-documentation/'
  }
};

testCases.arbitraryElement = {
  component: ProductMenu,
  description: 'Product menu with something arbitrary in it',
  props: {
    productName: 'Pizza pie',
    homePage: '/api-documentation/'
  }
};

testCases.customStyle = {
  description: 'Custom trigger style - display only',
  element: (
    <div className="bg-gray-dark py6">
      <ProductMenu
        productName="Light on dark"
        lightText={true}
        homePage="/api-documentation/"
      />
    </div>
  )
};

export default { testCases };
