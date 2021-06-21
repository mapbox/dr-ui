/*
Basic.
*/
import React from 'react';
import Feedback from '../feedback';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <Feedback
        site="dr-ui"
        webhook={{
          staging: 'staging-webhook',
          production: 'production-webhook'
        }}
        preferredLanguage="Swift"
        section="LngLat"
        location={{
          pathname: '/dr-ui/feedback/',
          hash: '#lnglat'
        }}
      />
    );
  }
}
