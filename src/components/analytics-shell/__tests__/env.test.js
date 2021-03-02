import env from '../env';

describe('AnalyticsShell, env()', () => {
  test('staging', () => {
    expect(env()).toEqual('staging');
    expect(window.location.host).toEqual('localhost');
  });

  test('production', () => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        host: 'docs.mapbox.com'
      }
    });
    expect(env()).toEqual('production');
    expect(window.location.host).toEqual('docs.mapbox.com');
  });
});
