import React from 'react';
import GlossarySection from '../glossary-section/glossary-section';
import PropTypes from 'prop-types';

export default class GlossaryPage extends React.PureComponent {
  makeSectionComponents(termsArr) {
    let builtSections = [];
    let currentLetterEntries = [];

    for (let i = 0; i < termsArr.length; i++) {
      const thisLetter = termsArr[i].title.charAt(0).toLowerCase();
      const nextLetter =
        i === termsArr.length - 1
          ? termsArr[i].title.charAt(0).toLowerCase()
          : termsArr[i + 1].title.charAt(0).toLowerCase();

      if (thisLetter < nextLetter) {
        currentLetterEntries.push(termsArr[i]);
        const thisLetterSectionComp = (
          <GlossarySection
            key={thisLetter}
            letter={thisLetter}
            entries={currentLetterEntries}
          />
        );
        builtSections.push(thisLetterSectionComp);
        currentLetterEntries = [];
      } else if (thisLetter === nextLetter) {
        if (i === termsArr.length - 1) {
          // last entry
          currentLetterEntries.push(termsArr[i]);
          const thisLetterSectionComp = (
            <GlossarySection
              key={thisLetter}
              letter={thisLetter}
              entries={currentLetterEntries}
            />
          );
          builtSections.push(thisLetterSectionComp);
        } else {
          currentLetterEntries.push(termsArr[i]);
        }
      }
    }
    return builtSections;
  }

  render() {
    // double-check for sorted terms
    const alphabetizedTerms = this.props.entries.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });

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
