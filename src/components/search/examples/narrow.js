/*
Narrow.
*/
import React from 'react';
import Search from '../search';

export default class Example extends React.Component {
  render() {
    return <Search inputId="narrow-example" narrow={true} />;
  }
}
