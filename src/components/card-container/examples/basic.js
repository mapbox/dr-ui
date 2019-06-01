/*
Basic.
*/
import React from 'react';
import CardContainer from '../card-container';
import Card from '../../card/card';

export default class Example extends React.Component {
  render() {
    return (
      <CardContainer
        title="Another category"
        path="#another-category"
        fullWidthCards={true}
        cards={[
          <Card
            key="0"
            title="Example one"
            path="path"
            description="description"
          />,
          <Card
            key="1"
            title="Example two"
            path="path"
            description="description"
          />
        ]}
      />
    );
  }
}
