import React from 'react';
import NavigationAccordion from '../navigation-accordion';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.noSecondLevelItems = {
  description: 'No second level items',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    navigationDropdownId: 'navigation-2',
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

testCases.withThirdLevelItems = {
  description: 'Shows third level items',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    navigationDropdownId: 'navigation-3',
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
          path: 'heading-one',
          thirdLevelItems: [
            {
              title: 'Subheading one',
              path: ''
            },
            {
              title: 'Subheading two',
              path: 'subheading-two'
            }
          ]
        },
        {
          title: 'Heading two',
          path: 'heading-two'
        }
      ]
    }
  }
};

testCases.withThirdLevelItemsWithIcons = {
  description: 'Shows third level items with icons',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    navigationDropdownId: 'navigation-4',
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
          path: 'heading-one',
          thirdLevelItems: [
            {
              title: 'Subheading one',
              path: '',
              icon: 'paint'
            },
            {
              title: 'Subheading two',
              path: 'subheading-two',
              icon: 'paint'
            },
            {
              title: 'Subheading three is long so we should wrap it nicely',
              path: 'subheading-three',
              icon: 'star'
            }
          ]
        },
        {
          title: 'Heading two',
          path: 'heading-two'
        }
      ]
    }
  }
};

testCases.withTags = {
  description: 'Titles with tags',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    navigationDropdownId: 'navigation-5',
    contents: {
      firstLevelItems: [
        {
          title: 'Title one',
          path: 'page-one'
        },
        {
          title: 'Title two',
          tag: 'beta',
          path: 'page-two'
        }
      ],
      secondLevelItems: [
        {
          title: 'Heading one',
          path: 'heading-one',
          thirdLevelItems: [
            {
              title: 'Subheading one',
              tag: 'legacy',
              path: ''
            },
            {
              title: 'Subheading two',
              path: 'subheading-two'
            }
          ]
        },
        {
          title: 'Heading two',
          tag: 'custom',
          customTagProps: {
            customLabel: 'Custom',
            customTooltipText: 'This is a custom tag.',
            customStyles: {
              background: '#FEDADA',
              color: '#bb2224',
              borderColor: '#FD8383'
            }
          },
          path: 'heading-two'
        }
      ]
    }
  }
};

export { testCases };
