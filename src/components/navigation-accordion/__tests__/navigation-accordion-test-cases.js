import NavigationAccordion from '../navigation-accordion';

const testCases = {};

const navigation = [
  {
    title: 'Overview',
    id: 'overview',
    path: '/dr-ui/overview/',
    pages: [
      {
        path: '/dr-ui/overview/permissions/',
        title: 'Permissions'
      }
    ]
  },
  {
    title: 'Examples',
    id: 'examples',
    path: '/dr-ui/examples/',
    pages: [
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
];

const constants = {
  SITE: 'Dr. UI',
  BASEURL: '/dr-ui/'
};

testCases.basic = {
  description: 'Basic NavigationAccordion',
  component: NavigationAccordion,
  props: {
    navigation: navigation,
    location: { pathName: '/dr-ui/overview/' },
    parentPage: '/dr-ui/overview/',
    constants: { constants }
  }
};

testCases.withTags = {
  description: 'Titles with tags',
  component: NavigationAccordion,
  props: {
    location: { pathName: 'heading-one' },
    parentPage: 'page-one',
    navigation: [
      {
        title: 'Title one',
        path: 'page-one',
        id: 'title-one',
        pages: [
          {
            title: 'Heading one',
            path: 'heading-one',
            tag: 'beta'
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
              },
              customIcon: 'alert'
            },
            path: 'heading-two'
          }
        ]
      },
      {
        title: 'Title two',
        tag: 'beta',
        path: 'page-two',
        id: 'page-two'
      }
    ]
  }
};

export { testCases };
