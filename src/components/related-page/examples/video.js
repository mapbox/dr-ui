/*
Video.
*/
import React from 'react';
import RelatedPage from '../related-page';
import { scopeAppropriateImage } from '@mapbox/appropriate-images-react';

const AppropriateImage = scopeAppropriateImage({
  'vimeo-thumb': {
    basename: 'vimeo-thumb.jpg',
    sizes: [{ width: 480 }, { width: 960 }]
  }
});

export default class Basic extends React.PureComponent {
  render() {
    return (
      <RelatedPage
        contentType="video"
        title="How to eject a Style Component in Mapbox Studio"
        vimeoId="378704089"
        vimeoThumbnail={<AppropriateImage imageId="vimeo-thumb" alt="" />}
      >
        Style Components provide sensible defaults and quick opportunities for
        customization by optimizing the most common property changes for styles
        and packaging them into simple drop-down options, sliders, and toggles.
      </RelatedPage>
    );
  }
}
