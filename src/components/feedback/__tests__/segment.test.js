const { createSegmentEvent } = require('../segment.js');

describe('createSegmentEvent', () => {
  describe('anonymous user', () => {
    test('1 - Open feedback', () => {
      expect(
        createSegmentEvent({
          state: {
            anonymousId: '7a6b4852-bacf-40e1-ae42-d91c4003f464',
            sessionId: '1624292376749-7a6b4852-bacf-40e1-ae42-d91c4003f464',
            isOpen: true,
            sentFeedback: false,
            contactSupport: false
          },
          props: {
            site: 'dr-ui',
            webhook: { staging: 'webhook', production: 'webhook' },
            preferredLanguage: 'Swift',
            section: 'LngLat',
            location: { pathname: '/dr-ui/feedback/', hash: '#lnglat' },
            type: 'page',
            feedbackSentryDsn: 'https://abce@sentry.io/123'
          }
        })
      ).toMatchSnapshot();
    });

    test('2 - Report a problem', () => {
      expect(
        createSegmentEvent({
          state: {
            anonymousId: '7a6b4852-bacf-40e1-ae42-d91c4003f464',
            sessionId: '1624292376749-7a6b4852-bacf-40e1-ae42-d91c4003f464',
            isOpen: true,
            category: 'Report a problem',
            sentFeedback: false,
            contactSupport: false,
            helpful: false
          },
          props: {
            site: 'dr-ui',
            webhook: {
              staging: 'webhook',
              production: 'webhook'
            },
            preferredLanguage: 'Swift',
            section: 'LngLat',
            location: { pathname: '/dr-ui/feedback/', hash: '#lnglat' },
            type: 'page',
            feedbackSentryDsn: 'https://abce@sentry.io/123'
          }
        })
      ).toMatchSnapshot();
    });

    test('3 - Something is missing', () => {
      expect(
        createSegmentEvent({
          state: {
            anonymousId: '7a6b4852-bacf-40e1-ae42-d91c4003f464',
            sessionId: '1624292376749-7a6b4852-bacf-40e1-ae42-d91c4003f464',
            isOpen: true,
            category: 'Report a problem',
            categoryType: 'Something is missing',
            feedback: 'My mind!',
            sentFeedback: true,
            contactSupport: false,
            helpful: false
          },
          props: {
            site: 'dr-ui',
            webhook: {
              staging: 'webhook',
              production: 'webhook'
            },
            preferredLanguage: 'Swift',
            section: 'LngLat',
            location: { pathname: '/dr-ui/feedback/', hash: '#lnglat' },
            type: 'page',
            feedbackSentryDsn: 'https://abce@sentry.io/123'
          }
        })
      ).toMatchSnapshot();
    });
  });

  describe('logged in user', () => {
    test('1 - Open feedback', () => {
      expect(
        createSegmentEvent({
          state: {
            anonymousId: '7a6b4852-bacf-40e1-ae42-d91c4003f464',
            user: {
              id: 'friend-of-the-docs',
              plan: { id: 'starter' }
            },
            sessionId: '1624292376749-7a6b4852-bacf-40e1-ae42-d91c4003f464',
            isOpen: true,
            sentFeedback: false,
            contactSupport: false
          },
          props: {
            site: 'dr-ui',
            webhook: { staging: 'webhook', production: 'webhook' },
            preferredLanguage: 'Swift',
            section: 'LngLat',
            location: { pathname: '/dr-ui/feedback/', hash: '#lnglat' },
            type: 'page',
            feedbackSentryDsn: 'https://abce@sentry.io/123'
          }
        })
      ).toMatchSnapshot();
    });

    test('2 - Report a problem', () => {
      expect(
        createSegmentEvent({
          state: {
            anonymousId: '7a6b4852-bacf-40e1-ae42-d91c4003f464',
            sessionId: '1624292376749-7a6b4852-bacf-40e1-ae42-d91c4003f464',
            user: {
              id: 'friend-of-the-docs',
              plan: { id: 'starter' }
            },
            isOpen: true,
            category: 'Report a problem',
            sentFeedback: false,
            contactSupport: false,
            helpful: false
          },
          props: {
            site: 'dr-ui',
            webhook: {
              staging: 'webhook',
              production: 'webhook'
            },
            preferredLanguage: 'Swift',
            section: 'LngLat',
            location: { pathname: '/dr-ui/feedback/', hash: '#lnglat' },
            type: 'page',
            feedbackSentryDsn: 'https://abce@sentry.io/123'
          }
        })
      ).toMatchSnapshot();
    });

    test('3 - Something is missing', () => {
      expect(
        createSegmentEvent({
          state: {
            anonymousId: '7a6b4852-bacf-40e1-ae42-d91c4003f464',
            sessionId: '1624292376749-7a6b4852-bacf-40e1-ae42-d91c4003f464',
            user: {
              id: 'friend-of-the-docs',
              plan: { id: 'starter' }
            },
            isOpen: true,
            category: 'Report a problem',
            categoryType: 'Something is missing',
            feedback: 'My mind!',
            sentFeedback: true,
            contactSupport: false,
            helpful: false
          },
          props: {
            site: 'dr-ui',
            webhook: {
              staging: 'webhook',
              production: 'webhook'
            },
            preferredLanguage: 'Swift',
            section: 'LngLat',
            location: { pathname: '/dr-ui/feedback/', hash: '#lnglat' },
            type: 'page',
            feedbackSentryDsn: 'https://abce@sentry.io/123'
          }
        })
      ).toMatchSnapshot();
    });
  });
});
