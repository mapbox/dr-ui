/*
Basic.
*/
import React from 'react';
import MapWrapper from '../map-wrapper';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <MapWrapper height={300}>Your browser supports Mapbox GL!</MapWrapper>
    );
  }
}
