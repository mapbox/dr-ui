import EnterpriseFlag from '../enterprise-flag';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: EnterpriseFlag,
  description: 'Basic',
  props: {}
};

noRenderCases.custom = {
  component: EnterpriseFlag,
  description: 'Custom note',
  props: {
    tooltipText: 'Hello. This is custom text.'
  }
};

export default { testCases, noRenderCases };
