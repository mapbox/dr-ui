const { formatTopics } = require('../index.js');
const mts = require('./fixtures/related-mts.json');
const android = require('./fixtures/related-android.json');

describe('formatTopics', () => {
  it('mts, single product', () => {
    expect(
      formatTopics('/mapbox-tiling-service', 'help', mts)
    ).toMatchSnapshot();
  });

  it('android, many products', () => {
    expect(
      formatTopics('/android', 'help', android, [
        'maps',
        'navigation',
        'vision'
      ])
    ).toMatchSnapshot();
  });
});
