/*
Beta.
*/
import React from 'react';
import ProductMenu from '../product-menu';

export default class Example extends React.PureComponent {
  render() {
    return (
      <ProductMenu
        productName="Vision SDK for Android"
        homePage="/vision/"
        tag="beta"
      />
    );
  }
}
