import React from 'react';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';
import pageLoadingIndicator from '@mapbox/mr-ui/page-loading-indicator';
import {
  addRouteChangeStartListener,
  addRouteChangeEndListener
} from '@mapbox/batfish/modules/route-change-listeners';

if (typeof window !== 'undefined') {
  import(
    /* webpackChunkName: "assembly-js" */ '@mapbox/mbx-assembly/dist/assembly.js'
  );
}

addRouteChangeStartListener(() => {
  pageLoadingIndicator.start();
});
addRouteChangeEndListener(() => {
  pageLoadingIndicator.end();
});

class ApplicationWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="robots" content="noindex" />
          <title>Dr. UI</title>
        </Helmet>
        {this.props.children}
      </div>
    );
  }
}

ApplicationWrapper.propTypes = {
  children: PropTypes.node
};

export default ApplicationWrapper;
