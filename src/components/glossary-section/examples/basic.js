/*
Basic.
*/
import React from 'react';
import GlossarySection from '../glossary-section';

export default class Basic extends React.Component {
  render() {
    return (
      <GlossarySection
        letter="C"
        entries={[
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
        ]}
      />
    );
  }
}
