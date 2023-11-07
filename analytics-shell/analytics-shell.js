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
    const {
      location,
      children,
      domain
    } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Helmet, null, /*#__PURE__*/React.createElement("link", {
      rel: "canonical",
      href: `${domain}${location.pathname}`
    })), children);
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