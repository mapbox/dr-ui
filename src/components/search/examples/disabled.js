/*
Disable modal, only show input.
*/
import React from 'react';
import Search from '../search';

export default class Example extends React.Component {
  render() {
    return <Search disableModal={true} />;
  }
}
