/*
Video.
*/
import React from 'react';
import RelatedPage from '../related-page';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <RelatedPage
        contentType="video"
        title="How to create a map style with a template"
        youtubeId="tTw358pE6qk"
      >
        Learn how to use the Mapbox Studio style editor to create a new custom
        style based on a template style.
      </RelatedPage>
    );
  }
}
