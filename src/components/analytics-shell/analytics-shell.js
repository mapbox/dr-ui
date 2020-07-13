import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import env from './env';

export default class AnalyticsShell extends React.Component {
  componentDidMount() {
    const {
      disableWebAnalytics,
      disableSentry,
      webAnalytics,
      sentry
    } = this.props;
    // initialize analytics
    if (window && window.initializeMapboxAnalytics && !disableWebAnalytics) {
      window.initializeMapboxAnalytics({
        ...webAnalytics
      });
    }
    // initialize Sentry
    if (!disableSentry) {
      Sentry.init({
        ...sentry,
        environment: env()
      });
    }
  }

  render() {
    const { location, children, domain } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href={`${domain}${location.pathname}`} />
        </Helmet>
        {children}
      </React.Fragment>
    );
  }
}

AnalyticsShell.defaultProps = {
  // production website domain
  domain: 'https://docs.mapbox.com',
  // do no disable sentry by default
  disableSentry: false,
  // default Sentry options, docs-subdomain project
  sentry: {
    dsn: 'https://6ba8cfeeedad4fb7acb8576f0fd6e266@sentry.io/1384508'
  },
  // do not disable web-analytics by default
  disableWebAnalytics: false,
  // default web-analytics options, disable Drift by default
  webAnalytics: {
    segmentIntegrations: {
      Drift: false
    }
  }
};

AnalyticsShell.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  domain: PropTypes.string,
  sentry: PropTypes.shape({
    // Customize Sentry options: https://docs.sentry.io/error-reporting/configuration/?platform=browser
    dsn: PropTypes.string
  }),
  webAnalytics: PropTypes.object, // Customize web-analytics options: https://github.com/mapbox/web-analytics
  disableSentry: PropTypes.bool, // If true, Sentry will not initialize.
  disableWebAnalytics: PropTypes.bool // If true, Mapbox analytics (initializeMapboxAnalytics) will not initialize.
};
