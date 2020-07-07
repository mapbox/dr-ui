import { buildScollspyItems, buildSections, buildToc } from '../helpers.js';

it('buildSections', () => {
  expect(
    buildSections([
      { text: 'Heading 1', slug: 'heading-1', level: 2 },
      { text: 'Heading a', slug: 'heading-a', level: 3 },
      { text: 'Heading b', slug: 'heading-b', level: 3 },
      { text: 'Heading c', slug: 'heading-c', level: 3 },
      { text: 'Heading 2', slug: 'heading-2', level: 2 },
      { text: 'Heading a', slug: 'heading-a-1', level: 3 },
      { text: 'Heading b', slug: 'heading-b-1', level: 3 },
      { text: 'Heading c', slug: 'heading-c-1', level: 3 }
    ])
  ).toEqual([
    { title: 'Heading 1', url: '#heading-1', level: 2 },
    { title: 'Heading a', url: '#heading-a', level: 3 },
    { title: 'Heading b', url: '#heading-b', level: 3 },
    { title: 'Heading c', url: '#heading-c', level: 3 },
    { title: 'Heading 2', url: '#heading-2', level: 2 },
    { title: 'Heading a', url: '#heading-a-1', level: 3 },
    { title: 'Heading b', url: '#heading-b-1', level: 3 },
    { title: 'Heading c', url: '#heading-c-1', level: 3 }
  ]);
});

it('buildToc', () => {
  expect(
    buildToc([
      { title: 'Heading 1', url: '#heading-1', level: 2 },
      { title: 'Heading a', url: '#heading-a', level: 3 },
      { title: 'Heading b', url: '#heading-b', level: 3 },
      { title: 'Heading c', url: '#heading-c', level: 3 },
      { title: 'Heading 2', url: '#heading-2', level: 2 },
      { title: 'Heading a', url: '#heading-a-1', level: 3 },
      { title: 'Heading b', url: '#heading-b-1', level: 3 },
      { title: 'Heading c', url: '#heading-c-1', level: 3 }
    ])
  ).toMatchSnapshot();
});

it('buildScollspyItems', () => {
  expect(
    buildScollspyItems([
      { title: 'Heading 1', url: '#heading-1', level: 2 },
      { title: 'Heading a', url: '#heading-a', level: 3 },
      { title: 'Heading b', url: '#heading-b', level: 3 },
      { title: 'Heading c', url: '#heading-c', level: 3 },
      { title: 'Heading 2', url: '#heading-2', level: 2 },
      { title: 'Heading a', url: '#heading-a-1', level: 3 },
      { title: 'Heading b', url: '#heading-b-1', level: 3 },
      { title: 'Heading c', url: '#heading-c-1', level: 3 }
    ])
  ).toEqual([
    'heading-1',
    'heading-a',
    'heading-b',
    'heading-c',
    'heading-2',
    'heading-a-1',
    'heading-b-1',
    'heading-c-1'
  ]);
});
