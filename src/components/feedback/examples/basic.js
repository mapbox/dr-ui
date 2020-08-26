/*
Basic.
*/
import React from 'react';
import Feedback from '../feedback';

export default class Basic extends React.Component {
  render() {
    return (
      <Feedback
        site="dr-ui"
        webhook={{
          staging:
            'https://evj5gwoa8j.execute-api.us-east-1.amazonaws.com/hookshot/webhook',
          production:
            'https://2n40g6lyc9.execute-api.us-east-1.amazonaws.com/hookshot/webhook'
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
