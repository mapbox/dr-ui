/* eslint-disable xss/no-mixed-html */

import React from 'react';
import PropTypes from 'prop-types';
import { getParameters } from 'codesandbox/lib/api/define';
import { Button } from '../edit/edit';

export default class JsxEdit extends React.PureComponent {
  render() {
    const { code } = this.props;
    const parameters = getParameters({
      files: {
        'package.json': {
          content: {
            dependencies: {
              react: 'latest',
              'react-dom': 'latest',
              'mapbox-gl': 'latest'
            }
          }
        },
        'App.js': {
          content: code
        },
        'index.js': {
          content: `import React, { StrictMode } from "react";
          import { createRoot } from "react-dom/client";
          import "./styles.css";
          
          import App from "./App";
          
          const root = createRoot(document.getElementById("root"));
          root.render(
            <StrictMode>
              <App />
            </StrictMode>
          );
          `
        },
        'index.html': {
          content: '<div id="root"></div>'
        },
        'styles.css': {
          content: `body {
            margin: 0;
            padding: 0;
          }
          #map {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
          }
          `
        }
      }
    });

    return (
      <>
        <form
          action="https://codesandbox.io/api/v1/sandboxes/define"
          method="POST"
          target="_blank"
        >
          <input type="hidden" name="parameters" value={parameters} />
          <input type="hidden" name="query" value="file=/App.js" />
          <Button platform="CodeSandbox" />
        </form>
      </>
    );
  }
}

Button.propTypes = {
  platform: PropTypes.oneOf(['JSFiddle', 'CodePen']).isRequired
};

JsxEdit.propTypes = {
  code: PropTypes.string
};
