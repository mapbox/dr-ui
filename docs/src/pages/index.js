import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../app';

if (typeof window !== 'undefined') {
  import(
    /* webpackChunkName: "assembly-js" */ '@mapbox/mbx-assembly/dist/assembly.js'
  );
}

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="robots" content="noindex" />
          <title>Dr. UI</title>
        </Helmet>
        <App />
      </div>
    );
  }
}
