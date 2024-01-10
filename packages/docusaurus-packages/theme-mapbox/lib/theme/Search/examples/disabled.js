/*
Disable modal, only show input.
*/
import React from 'react';
import Search from '../search';

export default class Example extends React.PureComponent {
  render() {
    return <Search inputId="disabled-example" disableModal={true} />;
  }
}
