import React from 'react';
import renderer from 'react-test-renderer';
import AnalyticsShell from '../analytics-shell';
import { testCases } from './analytics-shell-test-cases.js';
import * as Sentry from '@sentry/browser';
import { Integrations as TracingIntegrations } from '@sentry/tracing';
import { mount } from 'enzyme';

jest.mock('@sentry/browser');

describe('AnalyticsShell', () => {
  beforeEach(() => {
    window.initializeMapboxAnalytics = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe(testCases.basic.description, () => {
    const testCase = testCases.basic;

    test('renders as expected', () => {
      const wrapper = renderer.create(testCase.element).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    test('sentry init', () => {
      mount(testCase.element);
      expect(Sentry.init).toHaveBeenCalledWith({
        dsn: 'https://6ba8cfeeedad4fb7acb8576f0fd6e266@sentry.io/1384508',
        environment: 'staging',
        integrations: [new TracingIntegrations.BrowserTracing()],
        tracesSampleRate: 0.2
      });
    });

    test('mbxMetadata', () => {
      const wrapper = mount(testCase.element);
      expect(global.mbxMetadata).toEqual({
        product: 'Documentation',
        service: 'Platform'
      });
      wrapper.unmount();
      expect(global.mbxMetadata).toBeUndefined();
    });

    test('web-analytics init', () => {
      mount(testCase.element);
      expect(window.initializeMapboxAnalytics).toHaveBeenCalledWith({
        segmentIntegrations: {
          Drift: false
        }
      });
    });
  });

  test('No Sentry', () => {
    mount(
      <AnalyticsShell disableSentry={true} location={{ pathname: '/dr-ui/' }}>
        Hello world!
      </AnalyticsShell>
    );
    expect(Sentry.init).not.toHaveBeenCalled();
  });

  test('Custom Sentry', () => {
    mount(
      <AnalyticsShell
        sentry={{ dsn: 'abcd!' }}
        sentryPerformance={{}} // disable performance
        location={{ pathname: '/dr-ui/' }}
      >
        Hello world!
      </AnalyticsShell>
    );
    expect(Sentry.init).toHaveBeenCalledWith({
      dsn: 'abcd!',
      environment: 'staging'
    });
  });

  test('No web-analytics', () => {
    mount(
      <AnalyticsShell
        disableWebAnalytics={true}
        location={{ pathname: '/dr-ui/' }}
      >
        Hello world!
      </AnalyticsShell>
    );
    expect(window.initializeMapboxAnalytics).not.toHaveBeenCalled();
  });

  test('Custom webAnalytics', () => {
    mount(
      <AnalyticsShell
        webAnalytics={{ marketoMunchkin: false }}
        location={{ pathname: '/dr-ui/' }}
      >
        Hello world!
      </AnalyticsShell>
    );
    expect(window.initializeMapboxAnalytics).toHaveBeenCalledWith({
      marketoMunchkin: false
    });
  });
});
