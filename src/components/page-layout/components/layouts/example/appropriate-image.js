import { scopeAppropriateImage } from '@mapbox/appropriate-images-react';

// See https://github.com/mapbox/appropriate-images-react#appropriateimage
// The required prop is `imageId`, which must correspond to a key in the
// imageConfig.
const AppropriateImage = ({ imageConfig }) =>
  scopeAppropriateImage(imageConfig, {
    // eslint-disable-next-line
    transformUrl: (url) => require(`../img/dist/${url}`).default
  });

export default AppropriateImage;
