import GlossarySection from '../glossary-section';

const testCases = {};

testCases.basic = {
  component: GlossarySection,
  description: 'Basic',
  props: {
    letter: 'C',
    entries: [
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
      }
    ]
  }
};

export { testCases };
