/*
Basic.
*/
import React from 'react';
import ProductMenu from '../product-menu';

export default class Example extends React.PureComponent {
  render() {
    return <ProductMenu productName="Mapbox product menu" homePage="/dr-ui/" />;
  }
}
