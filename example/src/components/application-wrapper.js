import React from 'react';
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
    return this.props.children;
  }
}

export default ApplicationWrapper;
