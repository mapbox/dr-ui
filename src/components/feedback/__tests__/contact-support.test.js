import React from 'react';
import Feedback from '../feedback';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import forwardEvent from '../forward-event';
import * as Sentry from '@sentry/browser';

jest.mock('@sentry/browser');
jest.mock('../forward-event');

const SentryMockScope = { setTag: jest.fn(), setLevel: jest.fn() };
Sentry.configureScope.mockImplementation((callback) => {
  callback(SentryMockScope);
});

describe('Workflow', () => {
  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  const feedback = mount(
    <Feedback
      site="dr-ui"
      location={{
        pathname: '/mapbox-gl-js/api/',
        hash: '#lnglat'
      }}
      webhook={{
        production: '',
        staging: ''
      }}
    />
  );

  describe('1 - Open feedback', () => {
    test('Click button, then set state', () => {
      const btn = feedback.find('button');
      btn.simulate('click');
      expect(feedback.state().isOpen).toBeTruthy();
    });
    test('Do not send data to Sentry', () => {
      expect(Sentry.init).not.toHaveBeenCalled();
    });
    test('Send data to Segment', () => {
      expect(forwardEvent).toHaveBeenCalledWith(
        {
          anonymousId: expect.anything(),
          event: 'Sent docs feedback',
          properties: {
            anonymousId: expect.anything(),
            category: undefined,
            categoryType: undefined,
            contactSupport: false,
            environment: 'staging',
            helpful: undefined,
            page: { hash: '#lnglat', pathname: '/mapbox-gl-js/api/' },
            section: undefined,
            sessionId: expect.anything(),
            site: 'dr-ui'
          }
        },
        { production: '', staging: '' },
        expect.any(Function)
      );
    });
  });

  describe('2 - Contact support', () => {
    test('Click button, then set state', () => {
      delete global.window.location;
      window.location = { assign: jest.fn() };
      const btn = feedback.find('button[value="Contact support"]');
      btn.simulate('click');
      expect(feedback.state().category).toBeUndefined();
      expect(feedback.state().contactSupport).toBeTruthy();
      expect(feedback.state().helpful).toBeUndefined();
      expect(toJson(feedback)).toMatchSnapshot();
      expect(window.location.assign).toBeCalledWith(
        'https://support.mapbox.com/'
      );
    });

    test('Then send to Segment', () => {
      expect(forwardEvent).toHaveBeenCalledWith(
        {
          anonymousId: expect.anything(),
          event: 'Sent docs feedback',
          properties: {
            anonymousId: expect.anything(),
            category: undefined,
            categoryType: undefined,
            contactSupport: true,
            environment: 'staging',
            helpful: undefined,
            page: { hash: '#lnglat', pathname: '/mapbox-gl-js/api/' },
            section: undefined,
            sessionId: expect.anything(),
            site: 'dr-ui'
          }
        },
        { production: '', staging: '' },
        expect.any(Function)
      );
    });
  });
});
