import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import posthtml from 'posthtml';

import { renderCopiableCode, renderIframe } from '../example-utils/index.js';

import { productionToken } from './mapbox-shell-token.js';

const examplesAccessToken =
  process.env.DEPLOY_ENV === 'local'
    ? process.env.MAPBOX_ACCESS_TOKEN
    : productionToken;

const exampleAssetsPlugin = () => ({
  configureWebpack() {
    return {
      module: {
        rules: [
          {
            test: /\.html$/,
            oneOf: [
              /* generates the example's copiable code  */
              {
                resourceQuery: /code/, // example: simple-map.html?code
                use: [
                  {
                    loader: 'html-loader',
                    options: {
                      minimize: false,
                      preprocessor: (content, loaderContext) => {
                        let result;
                        try {
                          result = posthtml().process(
                            renderCopiableCode(content),
                            { sync: true }
                          );
                        } catch (error) {
                          loaderContext.emitError(error);
                          return content;
                        }
                        return result.html;
                      }
                    }
                  }
                ]
              },
              /* generates the example's iframe demo */
              {
                resourceQuery: /iframe/, // example: simple-map.html?iframe
                use: [
                  // name the iframe file
                  'file-loader?name=[name]-demo.[ext]',
                  '@mapbox/docusaurus-packages/example-assets-plugin/extract-loader',
                  // wrap the html snippet in HTML document and add Mapbox token
                  {
                    loader: 'html-loader',
                    options: {
                      esModule: false,
                      minimize: true,
                      preprocessor: (content, loaderContext) => {
                        let result;
                        try {
                          result = posthtml().process(
                            renderIframe(content, examplesAccessToken),
                            { sync: true }
                          );
                        } catch (error) {
                          loaderContext.emitError(error);
                          return content;
                        }
                        return result.html;
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            test: /.\/node_modules\/@mapbox\/mapbox-gl-style-spec\S*.js$/,
            sideEffects: true,
            use: [
              {
                loader: 'babel-loader'
              }
            ]
          }
        ]
      },
      plugins: [new NodePolyfillPlugin()]
    };
  }
});

export default exampleAssetsPlugin;
