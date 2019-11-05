import React from 'react';
import GlossarySection from '../glossary-section/glossary-section';
import PropTypes from 'prop-types';

export default class GlossaryPage extends React.PureComponent {
  makeSectionComponents(terms) {
    return terms.map(term => {
      return (
        <GlossarySection
          key={term.letter}
          letter={term.letter}
          entries={term.entries}
        />
      );
    });
  }

  render() {
    const sortBy = key => (a, b) =>
      a[key].toLowerCase() > b[key].toLowerCase()
        ? 1
        : b[key].toLowerCase() > a[key].toLowerCase()
        ? -1
        : 0;

    // alphabetized the list of terms
    const alphabetizedTerms = this.props.entries
      .reduce((arr, entry) => {
        // get the first letter
        const letter = entry.title[0].toLowerCase();
        // find all the entries that start with "letter" and then sort by title
        const entries = this.props.entries
          .filter(e => e.title[0].toLowerCase() === letter)
          .sort(sortBy('title'));
        // if the letter doesn't exist in "arr" yet, push the letter with matching entries
        if (!arr.filter(l => l.letter === letter).length)
          arr.push({ letter, entries });
        return arr;
      }, [])
      .sort(sortBy('letter'));

    return (
      <div className="mt36">
        {this.makeSectionComponents(alphabetizedTerms)}
      </div>
    );
  }
}

GlossaryPage.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};
