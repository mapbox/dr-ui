/*
Use `cardColSize` to show 4 items per row.
*/
import React from 'react';
import CardContainer from '../card-container';
import Card from '../../card/card';

export default class Example extends React.PureComponent {
  render() {
    return (
      <CardContainer
        title="Another category"
        path="#another-category"
        cardColSize="1/4"
        cards={[
          <Card
            key="0"
            title="Example one"
            path="path"
            description="description"
            thumbnail={
              <div
                className="relative h120 mb12"
                style={{
                  backgroundImage: "url('../files/simple-map.png')",
                  backgroundSize: '100% auto',
                  backgroundPosition: 'center'
                }}
              />
            }
          />,
          <Card
            key="1"
            title="Example two"
            path="path"
            description="description"
            thumbnail={
              <div
                className="relative h120 mb12"
                style={{
                  backgroundImage: "url('../files/simple-map.png')",
                  backgroundSize: '100% auto',
                  backgroundPosition: 'center'
                }}
              />
            }
          />,
          <Card
            key="2"
            title="Example one"
            path="path"
            description="description"
            thumbnail={
              <div
                className="relative h120 mb12"
                style={{
                  backgroundImage: "url('../files/simple-map.png')",
                  backgroundSize: '100% auto',
                  backgroundPosition: 'center'
                }}
              />
            }
          />,
          <Card
            key="3"
            title="Example two"
            path="path"
            description="description"
            thumbnail={
              <div
                className="relative h120 mb12"
                style={{
                  backgroundImage: "url('../files/simple-map.png')",
                  backgroundSize: '100% auto',
                  backgroundPosition: 'center'
                }}
              />
            }
          />
        ]}
      />
    );
  }
}
