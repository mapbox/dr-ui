'use strict';

const { dependencies, peerDependencies, devDependencies } = require('../package.json');

describe('peerDependencies are up-to-date', () => {
  test(`@sentry/browser`, () => {
    expect(
      dependencies['@sentry/browser'] ===
        `^${peerDependencies['@sentry/browser']}`
    ).toBeTruthy();
  });

  test(`react`, () => {
    expect(
      devDependencies['react'] ===
        peerDependencies['react']
    ).toBeTruthy();
  });

  test(`react-dom`, () => {
    expect(
      devDependencies['react-dom'] ===
        peerDependencies['react-dom']
    ).toBeTruthy();
  });
});
