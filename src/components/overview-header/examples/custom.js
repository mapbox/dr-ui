/*
Change background and text with `background` and `lightText`.
*/
import React from 'react';
import OverviewHeader from '../overview-header';

export default class Custom extends React.Component {
  render() {
    return (
      <OverviewHeader
        title="How Mapbox Works"
        description="Learn about the building blocks that Mapbox provides so you can create custom mapping applications."
        theme="bg-blue"
        lightText={true}
        image={
          <img src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg" />
        }
      />
    );
  }
}
