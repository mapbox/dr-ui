import { CardTextOnly } from '../card-text-only';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: CardTextOnly,
  description: 'Plain ol card',
  props: {
    title: 'Title',
    path: 'url',
    description: 'described.'
  }
};

export default { testCases, noRenderCases };
