import React from 'react';
import ProductMenu from '../product-menu';
import Basic from '../examples/basic';
import Beta from '../examples/beta';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
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

testCases.beta = {
  description: 'Beta product',
  element: <Beta />
};

testCases.betaLong = {
  component: ProductMenu,
  description: 'Beta product',
  props: {
    productName: 'Navigation SDK for Android',
    tag: 'beta',
    homePage: '/vision/'
  }
};

testCases.customTag = {
  component: ProductMenu,
  description: 'Beta product',
  props: {
    productName: 'Potato SDK',
    tag: 'custom',
    customTagProps: {
      customLabel: 'Custom',
      customTooltipText: 'This is a custom tag.',
      customStyles: {
        background: '#FEDADA',
        color: '#bb2224',
        borderColor: '#FD8383'
      }
    },
    homePage: '#'
  }
};

export { testCases };
