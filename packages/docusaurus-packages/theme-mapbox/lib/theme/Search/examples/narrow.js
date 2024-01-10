/*
Narrow.
*/
import React from 'react';
import Search from '../search';

export default class Example extends React.PureComponent {
  render() {
    return <Search inputId="narrow-example" narrow={true} />;
  }
}
