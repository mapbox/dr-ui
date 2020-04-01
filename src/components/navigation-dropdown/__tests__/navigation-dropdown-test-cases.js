import NavigationDropdown from '../navigation-dropdown';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  component: NavigationDropdown,
  props: {
    currentPath: 'Feedback',
    options: [
      {
        label: 'NavigationAccordion',
        value: 'NavigationAccordion'
      },
      {
        label: 'Feedback',
        value: 'Feedback'
      }
    ]
  }
};

export { testCases };
