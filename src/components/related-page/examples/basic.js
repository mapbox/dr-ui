/*
Basic.
*/
import React from 'react';
import RelatedPage from '../related-page';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <RelatedPage
        contentType="tutorial"
        title="First steps with the Mapbox Maps SDK for Android"
        url="https://docs.mapbox.com/help/tutorials/first-steps-android-sdk/"
      >
        Walk through installing the Mapbox Maps SDK for Android, getting a map
        on the screen, and changing the map style.
      </RelatedPage>
    );
  }
}
