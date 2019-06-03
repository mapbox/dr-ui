/*
Basic.
*/
import React from 'react';
import ProductMenu from '../product-menu';

export default class Example extends React.Component {
  render() {
    return <ProductMenu productName="Egg SDK" homePage="/egg-sdk/" />;
  }
}
