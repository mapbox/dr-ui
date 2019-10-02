import React from 'react';
import PropTypes from 'prop-types';
import GlossaryCard from '../glossary-card/glossary-card';

export default class GlossarySection extends React.PureComponent {
  render() {
    const { letter, entries } = this.props;

    const entryList = entries.map((entry, i) => {
      return (
        <GlossaryCard
          key={i}
          entryTitle={entry.title}
          entryUrl={entry.path}
          entryDescription={entry.description}
        />
      );
    });

    return (
      <div className="mb60">
        <h3 className="ml18 mb6 txt-l color-gray">{letter.toUpperCase()}</h3>
        <div className="flex-parent flex-parent--wrap">{entryList}</div>
      </div>
    );
  }
}

GlossarySection.propTypes = {
  letter: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};
