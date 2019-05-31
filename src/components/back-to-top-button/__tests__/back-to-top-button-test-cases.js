import BackToTopButton from '../back-to-top-button';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: BackToTopButton,
  description: 'Just the button',
  props: {}
};

noRenderCases.basic = {
  component: BackToTopButton,
  description: 'Just the button',
  props: {}
};

export { testCases, noRenderCases };
