import imageConfig from '../img/dist/image.config.json';

const appropriateImagesReact = require('@mapbox/appropriate-images-react');

// See https://github.com/mapbox/appropriate-images-react#appropriateimage
// The required prop is `imageId`, which must correspond to a key in the
// imageConfig.
const AppropriateImage = appropriateImagesReact.scopeAppropriateImage(
  imageConfig,
  {
    transformUrl: (url) => require(`../img/dist/${url}`).default, // eslint-disable-line
    hiResRatio: 1.5
  }
);

export default AppropriateImage;
