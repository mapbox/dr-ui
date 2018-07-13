import NavigationAccordion from '../navigation-accordion';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    contents: {
      firstLevelItems: [
        {
          title: 'Title one',
          path: 'page-one'
        },
        {
          title: 'Title two',
          path: 'page-two'
        }
      ],
      secondLevelItems: [
        {
          title: 'Heading one',
          path: 'heading-one'
        },
        {
          title: 'Heading two',
          path: 'heading-two'
        }
      ]
    }
  }
};

testCases.noSecondLevelItems = {
  description: 'No second level items',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    contents: {
      firstLevelItems: [
        {
          title: 'Title one',
          path: 'page-one'
        },
        {
          title: 'Title two',
          path: 'page-two'
        }
      ]
    }
  }
};

export { testCases };
