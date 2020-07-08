/*
Basic.
*/
import React from 'react';
import Card from '../card';

export default class Basic extends React.Component {
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
              backgroundImage:
                "url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')",
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
