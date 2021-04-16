/*
Basic.
*/
import React from 'react';
import OverviewHeader from '../overview-header';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <OverviewHeader
        features={[
          'Smooth scrambled eggs',
          'Vegetarian sausage',
          'Fruit syrups'
        ]}
        title="Mapbox SDK for Breakfast"
        version="0.1.0"
        changelogLink="https://keepachangelog.com/en/0.3.0/"
        installLink="https://www.mapbox.com/install"
        ghLink="https://github.com/mapbox"
        image={
          <img
            alt=""
            src="https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg"
          />
        }
      />
    );
  }
}
