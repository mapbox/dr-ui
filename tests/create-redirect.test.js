'use strict';

const { createRedirect } = require('../src/helpers/create-redirect');

describe('createRedirect', () => {
  it('works', () => {
    const fn = createRedirect('/maps/overview/');
    expect(fn).toEqual(expect.any(Function));
  });
});
