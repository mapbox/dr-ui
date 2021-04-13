/*
Basic.
*/
import React from 'react';
import Card from '../card';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <Card
        title="My cool card"
        path="url"
        level={2}
        language="JavaScript"
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
        description="This card is very cool."
      />
    );
  }
}
