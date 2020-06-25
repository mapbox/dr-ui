/*
No image
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
        description="This card is still cool despite not having a thumbnail."
      />
    );
  }
}
