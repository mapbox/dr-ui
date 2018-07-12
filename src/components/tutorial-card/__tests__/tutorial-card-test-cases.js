import { TutorialCard } from '../tutorial-card';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: TutorialCard,
  description: 'Plain ol card',
  props: {
    exampleTitle: 'Title',
    exampleUrl: 'url',
    exampleImgID: 'imgID',
    exampleDescription: 'described.'
  }
};

export default { testCases, noRenderCases };
