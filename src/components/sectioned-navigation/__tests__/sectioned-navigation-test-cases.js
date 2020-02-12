import React from 'react';
import SectionedNavigation from '../sectioned-navigation';
import PageLayout from '../../page-layout/page-layout';
import examples from './examples';

const testCases = {};

testCases.basic = {
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
            url: '#footoo',
            active: true
          },
          {
            text: 'Apply a style',
            url: '#fooandyou'
          }
        ]
      },
      {
        title: 'Markers and callouts',
        url: '#markers',
        items: [
          {
            text: 'Annotation models',
            url: '#fooboo'
          },
          {
            text: 'Callouts',
            url: '#foocrew'
          }
        ]
      },
      {
        title: 'Getting started again',
        url: '#getting-started-again',
        items: [
          {
            text: 'Apply a style',
            url: '#fooblue'
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
            url: '#footwo'
          },
          {
            text: 'Mark a place',
            url: '#foo-to'
          },
          {
            text: 'Apply a style',
            url: '#footoo'
          }
        ]
      },
      {
        title: 'Markers and callouts',
        items: [
          {
            text: 'Annotation models',
            url: '#foot'
          },
          {
            text: 'Callouts',
            url: '#fooz'
          }
        ]
      },
      {
        title: 'Getting started again',
        url: '#getting-started-again',
        items: [
          {
            text: 'Apply a style',
            url: '#foobles'
          }
        ]
      }
    ]
  }
};

testCases.headingsOnly = {
  description: 'Without title, without sub items',
  component: SectionedNavigation,
  props: {
    hideSubItems: true,
    sections: [
      {
        title: 'Getting started',
        url: '#getting-started',
        items: [
          {
            text: 'Camera animation',
            url: '#footwo'
          },
          {
            text: 'Mark a place',
            url: '#foo-to'
          },
          {
            text: 'Apply a style',
            url: '#footoo'
          }
        ]
      },
      {
        title: 'Markers and callouts',
        url: '#markers-and-callouts',
        items: [
          {
            text: 'Annotation models',
            url: '#foot'
          },
          {
            text: 'Callouts',
            url: '#fooz'
          }
        ]
      },
      {
        title: 'Getting started again',
        url: '#getting-started-again',
        items: [
          {
            text: 'Apply a style',
            url: '#foobles'
          }
        ]
      }
    ]
  }
};

testCases.filter = {
  description: 'With a title, linked section headings, counts, and filter',
  component: SectionedNavigation,
  props: {
    title: 'Examples',
    includeFilterBar: true,
    sections: [
      {
        title: 'Getting started',
        url: '#getting-started',
        items: [
          {
            text: 'Camera animation',
            url: '#foo',
            description: 'pizza'
          },
          {
            text: 'Mark a place',
            url: '#footoo',
            active: true
          },
          {
            text: 'Apply a style',
            url: '#fooandyou',
            description: 'pretzels'
          }
        ]
      },
      {
        title: 'Markers and callouts',
        url: '#markers',
        items: [
          {
            text: 'Annotation models',
            url: '#fooboo',
            description: 'pretzels'
          },
          {
            text: 'Callouts',
            url: '#foocrew',
            description: 'pretzels'
          }
        ]
      },
      {
        title: 'Getting started again',
        url: '#getting-started-again',
        items: [
          {
            text: 'Apply a style',
            url: '#fooblue',
            description: 'ice cream'
          }
        ]
      }
    ]
  }
};

testCases.page = {
  description: 'PageLayout',
  component: PageLayout,
  props: {
    sidebarContent: (
      <SectionedNavigation
        title="Examples"
        includeFilterBar={true}
        sections={examples}
      />
    ),
    sidebarContentStickyTop: 0,
    sidebarContentStickyTopNarrow: 0,
    children: <div>Doc content</div>
  }
};

export { testCases };
