import NavigationDropdown from '../navigation-dropdown';

const testCases = {};

function onChangeTest() {
  console.log('🐢 🐙 🍕');
}

testCases.basic = {
  description: 'Basic',
  component: NavigationDropdown,
  props: {
    currentPath: 'page-one',
    dropdownOptions: [
      {
        title: 'Title one',
        path: 'page-one'
      },
      {
        title: 'Title two',
        path: 'page-two'
      }
    ],
    onChange: onChangeTest
  }
};

export { testCases };
