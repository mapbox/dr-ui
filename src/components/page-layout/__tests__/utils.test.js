import { createUniqueCrumbs } from '../utils.js';

describe('createUniqueCrumbs', () => {
  test('unique titles', () => {
    expect(
      createUniqueCrumbs([
        {
          title: 'Maps service',
          path: '/api/maps/'
        },
        {
          title: 'Overview',
          path: '/api/'
        },
        {
          title: 'API',
          path: '/api/'
        }
      ])
    ).toEqual([
      { path: '/api/maps/', title: 'Maps service' },
      { path: '/api/', title: 'Overview' }
    ]);
  });
});
