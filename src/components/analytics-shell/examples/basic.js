/*
The AnalyticsShell adds [Sentry](https://docs.sentry.io/error-reporting/configuration/?platform=browser) and initializes [@mapbox/web-analytics](https://github.com/mapbox/web-analytics) from [docs-page-shell](https://github.com/mapbox/docs-page-shell#page-shell-scriptjs).
*/
import React from 'react';
import AnalyticsShell from '../analytics-shell';

export default class Basic extends React.Component {
  render() {
    return (
      <AnalyticsShell location={{ pathname: '/dr-ui/' }}>
        Hello world!
      </AnalyticsShell>
    );
  }
}
