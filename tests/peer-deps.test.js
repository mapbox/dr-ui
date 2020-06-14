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

  test(`@mapbox/mr-ui`, () => {
    expect(
      dependencies['@mapbox/mr-ui'] ===
        peerDependencies['@mapbox/mr-ui']
    ).toBeTruthy();
  });

  test(`@mapbox/mbx-assembly`, () => {
    expect(
      devDependencies['@mapbox/mbx-assembly'] ===
        peerDependencies['@mapbox/mbx-assembly']
    ).toBeTruthy();
  });
});
