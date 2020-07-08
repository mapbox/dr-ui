/*
Basic.
*/
import React from 'react';
import GlossaryCard from '../glossary-card';

export default class Basic extends React.Component {
  render() {
    return (
      <GlossaryCard
        entryUrl="#donut"
        entryTitle="Donut"
        entryDescription="A delicious fried dough treat typically shaped as a circle with a hole in the middle."
      />
    );
  }
}
