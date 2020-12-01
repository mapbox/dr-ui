/*
No description.
*/
import React from 'react';
import Card from '../card';

export default class Basic extends React.Component {
  render() {
    return (
      <Card
        title="My cool card without a description"
        path="url"
        level={2}
        language="JavaScript"
        thumbnail={
          <div
            className="relative h120 mb12"
            style={{
              backgroundImage: "url('/files/simple-map.png')",
              backgroundSize: '100% auto',
              backgroundPosition: 'center'
            }}
          />
        }
      />
    );
  }
}
