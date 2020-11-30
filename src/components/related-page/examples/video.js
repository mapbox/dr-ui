/*
Video.
*/
import React from 'react';
import RelatedPage from '../related-page';

export default class Basic extends React.Component {
  render() {
    return (
      <RelatedPage
        contentType="video"
        title="How to eject a Style Component in Mapbox Studio"
        vimeoId="378704089"
        vimeoThumbnail="/files/vimeo_thumb.jpg"
      >
        Style Components provide sensible defaults and quick opportunities for
        customization by optimizing the most common property changes for styles
        and packaging them into simple drop-down options, sliders, and toggles.
      </RelatedPage>
    );
  }
}
