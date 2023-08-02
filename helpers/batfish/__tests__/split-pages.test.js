import { buildSplitPages } from '../split-pages';
import data from './fixtures/data.json';
it('buildSplitPages', () => {
  expect(buildSplitPages(data)).toMatchSnapshot();
});