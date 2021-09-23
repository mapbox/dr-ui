import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import { Integrations as TracingIntegrations } from '@sentry/tracing';
import env from './env';

export default class AnalyticsShell extends React.PureComponent {
  componentDidMount() {
    const {
      disableWebAnalytics,
      disableSentry,
      webAnalytics,
      sentry,
      sentryPerformance,
      mbxMetadata
    } = this.props;
    // set mapbox metadata before initializing analytics
    if (!disableWebAnalytics) window.mbxMetadata = mbxMetadata;
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
        environment: env(),
        ...sentryPerformance
      });
    }
  }

  componentWillUnmount() {
    // remove mapbox metadata when the component unmounts
    // this helps prevent unwanted data from being pushed to Segment
    // if the component doesn't mount properly
    if (window.mbxMetadata) window.mbxMetadata = undefined;
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
  sentryPerformance: {
    // This enables automatic instrumentation (highly recommended)
    integrations: [new TracingIntegrations.BrowserTracing()],
    // To set a uniform sample rate
    tracesSampleRate: 0.05
  },
  // do not disable web-analytics by default
  disableWebAnalytics: false,
  // default web-analytics options, disable Drift by default
  webAnalytics: {
    segmentIntegrations: {
      Drift: false
    }
  },
  mbxMetadata: {}
};

AnalyticsShell.propTypes = {
  children: PropTypes.node.isRequired,
  /** Location object (often provided by Batfish), `pathname` is current page's relative path. */
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  /** Production website domain. */
  domain: PropTypes.string,
  /** If `true`, Sentry will not initialize. */
  disableSentry: PropTypes.bool,
  /** Customize [Sentry options](https://docs.sentry.io/error-reporting/configuration/?platform=browser). */
  sentry: PropTypes.shape({
    dsn: PropTypes.string
  }),
  /** Customize [Sentry performance monitoring options](https://docs.sentry.io/platforms/javascript/performance/). To disable performance, set this value as an empty object: `sentryPerformance={{}}`*/
  sentryPerformance: PropTypes.shape({
    integrations: PropTypes.array,
    tracesSampleRate: PropTypes.number
  }),
  /** Customize [web-analytics options](https://github.com/mapbox/web-analytics). */
  webAnalytics: PropTypes.object,
  /** If `true`, Mapbox analytics (`initializeMapboxAnalytics`) will not initialize. */
  disableWebAnalytics: PropTypes.bool,
  /** Object of properties to send to Segment */
  mbxMetadata: PropTypes.shape({
    product: PropTypes.string,
    service: PropTypes.string,
    content_type: PropTypes.string,
    platform: PropTypes.string
  })
};
