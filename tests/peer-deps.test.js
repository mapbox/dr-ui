'use strict';

const { dependencies, peerDependencies } = require('../package.json');

describe('peerDependencies are up-to-date', () => {
  test(`@sentry/browser`, () => {
    expect(
      dependencies['@sentry/browser'] ===
        `^${peerDependencies['@sentry/browser']}`
    ).toBeTruthy();
  });
});
