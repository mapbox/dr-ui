import BetaFlag from '../beta-flag';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: BetaFlag,
  description: 'Basic',
  props: {}
};

noRenderCases.custom = {
  component: BetaFlag,
  description: 'Custom note',
  props: {
    tooltipText: 'Hello. This is custom text.'
  }
};

export default { testCases, noRenderCases };
