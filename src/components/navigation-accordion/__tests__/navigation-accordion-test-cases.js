import NavigationAccordion from '../navigation-accordion';

const testCases = {};

const navigation = {
  navTabs: [
    {
      label: 'Overview',
      id: '/dr-ui/overview/',
      href: '/dr-ui/overview/'
    },
    {
      label: 'Examples',
      id: '/dr-ui/examples/',
      href: '/dr-ui/examples/'
    }
  ],
  accordion: {
    '/dr-ui/overview/': [
      {
        path: '/dr-ui/overview/permissions/',
        title: 'Permissions'
      }
    ],
    '/dr-ui/examples/': [
      {
        path: '/dr-ui/examples/basic/',
        title: 'Basic example'
      },
      {
        path: '/dr-ui/examples/fancy/',
        title: 'Fancy example'
      }
    ]
  }
};

const constants = {
  SITE: 'Dr. UI',
  BASEURL: '/dr-ui/'
};

testCases.basic = {
  description: 'Basic NavigationAccordion',
  component: NavigationAccordion,
  props: {
    navigation: { navigation },
    location: { pathName: '/dr-ui/sample/' },
    parentPage: '/dr-ui/',
    constants: { constants }
  }
};

testCases.withThirdLevelItems = {
  description: 'Shows third level items',
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
    },
    onDropdownChange: () => {}
  }
};

testCases.withThirdLevelItemsWithIcons = {
  description: 'Shows third level items with icons',
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
    },
    onDropdownChange: () => {}
  }
};

testCases.withTags = {
  description: 'Titles with tags',
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
    },
    onDropdownChange: () => {}
  }
};

export { testCases };
