import SectionedNavigation from '../sectioned-navigation';

const testCases = {};

testCases.standard = {
  description: 'With a title, linked section headings, and counts',
  component: SectionedNavigation,
  props: {
    title: 'Examples',
    sections: [
      {
        title: 'Getting started',
        url: '#getting-started',
        items: [
          {
            text: 'Camera animation',
            url: '#foo'
          },
          {
            text: 'Mark a place',
            url: '#foo'
          },
          {
            text: 'Apply a style',
            url: '#foo'
          }
        ]
      },
      {
        title: 'Markers and callouts',
        url: '#markers',
        items: [
          {
            text: 'Annotation models',
            url: '#foo'
          },
          {
            text: 'Callouts',
            url: '#foo'
          }
        ]
      },
      {
        title: 'Getting started again',
        url: '#getting-started-again',
        items: [
          {
            text: 'Apply a style',
            url: '#foo'
          }
        ]
      }
    ]
  }
};

testCases.minimal = {
  description: 'Without title, without linked section headings, without counts',
  component: SectionedNavigation,
  props: {
    includeCount: false,
    sections: [
      {
        title: 'Getting started',
        items: [
          {
            text: 'Camera animation',
            url: '#foo'
          },
          {
            text: 'Mark a place',
            url: '#foo'
          },
          {
            text: 'Apply a style',
            url: '#foo'
          }
        ]
      },
      {
        title: 'Markers and callouts',
        items: [
          {
            text: 'Annotation models',
            url: '#foo'
          },
          {
            text: 'Callouts',
            url: '#foo'
          }
        ]
      },
      {
        title: 'Getting started again',
        url: '#getting-started-again',
        items: [
          {
            text: 'Apply a style',
            url: '#foo'
          }
        ]
      }
    ]
  }
};

export { testCases };
