import fs from 'fs-extra';
import path from 'path';

const imageConfigPlugin = (context) => {
  return {
    name: 'image-config-plugin',
    async loadContent() {
      // get all files in the `src/img` directory and prepare an object for
      // easy lookup using the imageId: imageConfig[imageId] = filename
      const images = fs.readdirSync(path.join(context.siteDir, 'src/img'));
      let imageConfig = {};

      images.forEach((d) => {
        const imageId = path.parse(d).name;
        imageConfig[imageId] = d;
      });

      return imageConfig;
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      // make this plugin's data available globally as `imageConfig`
      setGlobalData({ imageConfig: content });
    }
  };
};

export default imageConfigPlugin;
