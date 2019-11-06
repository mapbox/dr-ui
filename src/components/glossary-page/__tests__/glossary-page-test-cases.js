import GlossaryPage from '../glossary-page';

const testCases = {};

testCases.basic = {
  component: GlossaryPage,
  description: 'GlossaryPage',
  props: {
    entries: [
      {
        path: '#donut',
        title: 'Donut',
        description:
          'A delicious fried dough treat typically shaped as a circle with a hole in the middle.'
      },
      {
        path: '#chip',
        title: 'Chip',
        description:
          'A thin, crispy, and typically savory snack. It can be made of potatoes, corn, or a variety of other foods.'
      },
      {
        path: '#candy',
        title: 'Candy',
        description:
          'A sweet snack that is often fruity or chocolately or both!'
      },
      {
        path: '#granola-bar',
        title: 'Granola bar',
        description:
          'Like granola, but pressed together in a rectangular bar. It can be crunchy or chewy.'
      }
    ]
  }
};

export { testCases };
