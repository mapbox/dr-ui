import React, { useState, useEffect } from 'react';
import Image from '@theme/IdealImage';

import { usePluginData } from '@docusaurus/useGlobalData';

// This component wraps docusaurus' IdealImage component and provides a local lookup
// for a specified `imageId`.  `imageId` corresponds to the image filename in src/img

const IdealImage = ({ imageId, alt, className, style }) => {
  const [image, setImage] = useState(null);

  // get the imageConfig for easy lookup by imageId
  const { imageConfig } = usePluginData('image-config-plugin');

  useEffect(() => {
    async function fetchImage() {
      let filename = imageConfig[imageId];

      if (!filename) {
        throw new Error(`No image found with id ${imageId}`);
      }

      let { default: image } = await import(`@site/src/img/${filename}`);
      setImage(image);
    }

    fetchImage();
  }, []);

  if (!image) return null;

  return (
    <div
      className={className}
      style={{
        ...style,
        overflow: 'hidden'
      }}
    >
      <Image alt={alt} img={image} />
    </div>
  );
};

export default IdealImage;
