import { buildSections } from '../helpers.js';

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
    {
      level: 2,
      subItems: [
        { level: 3, text: 'Heading a', slug: 'heading-a' },
        { level: 3, text: 'Heading b', slug: 'heading-b' },
        { level: 3, text: 'Heading c', slug: 'heading-c' }
      ],
      text: 'Heading 1',
      slug: 'heading-1'
    },
    {
      level: 2,
      subItems: [
        { level: 3, text: 'Heading a', slug: 'heading-a-1' },
        { level: 3, text: 'Heading b', slug: 'heading-b-1' },
        { level: 3, text: 'Heading c', slug: 'heading-c-1' }
      ],
      text: 'Heading 2',
      slug: 'heading-2'
    }
  ]);
});
