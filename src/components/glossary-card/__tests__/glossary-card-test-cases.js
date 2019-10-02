import GlossaryCard from '../glossary-card';

const testCases = {};

testCases.basic = {
  component: GlossaryCard,
  description: 'Basic',
  props: {
    entryUrl: '#donut',
    entryTitle: 'Donut',
    entryDescription:
      'A delicious fried dough treat typically shaped as a circle with a hole in the middle.'
  }
};

export { testCases };
