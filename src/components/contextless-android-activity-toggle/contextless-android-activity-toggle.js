import React from 'react';
import PropTypes from 'prop-types';
import ToggleableCodeBlock from '../toggleable-code-block/toggleable-code-block';
import { highlightJava } from '../highlight/java';
import { highlightKotlin } from '../highlight/kotlin';

export default class ContextlessAndroidActivityToggle extends React.Component {
  checkPreference = language => {
    return this.props.context.preferredLanguage.android === language;
  };

  render() {
    const {
      context,
      id,
      java,
      kotlin,
      copyRanges,
      filename,
      link,
      limitHeight
    } = this.props;

    let selectedCode = '';
    if (context) {
      if (kotlin === undefined) {
        /* If there is no kotlin code, use java. */
        selectedCode = java;
      } else if (java === undefined) {
        /* If there is no java code, use kotlin. */
        selectedCode = kotlin;
      } else if (this.checkPreference('kotlin')) {
        /** If there is both java and kotlin code,
         * use the preferred language. */
        selectedCode = kotlin;
      } else {
        selectedCode = java;
      }
    }

    const snippetProps = {
      copyRanges: copyRanges || undefined,
      filename: filename || undefined,
      link: link || undefined,
      options:
        kotlin && java
          ? [
              {
                label: 'Java',
                language: 'java',
                preferredLanguage: this.checkPreference('java')
              },
              {
                label: 'Kotlin',
                language: 'kotlin',
                preferredLanguage: this.checkPreference('kotlin')
              }
            ]
          : undefined
    };

    return (
      <div className="my24 prose">
        <ToggleableCodeBlock
          {...snippetProps}
          id={id}
          code={selectedCode}
          highlightedCode={
            this.checkPreference('kotlin')
              ? highlightKotlin(selectedCode)
              : highlightJava(selectedCode)
          }
          changeLanguage={context.changeLanguage['android']}
          limitHeight={limitHeight}
          selectedLanguage={context.preferredLanguage.android}
        />
      </div>
    );
  }
}

ContextlessAndroidActivityToggle.propTypes = {
  /* Intended to be hooked up to `context` in the format
  used throughout Mapbox docs sites. */
  context: PropTypes.shape({
    languages: PropTypes.shape({
      android: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.oneOf(['Kotlin', 'Java']).isRequired,
          value: PropTypes.oneOf(['kotlin', 'java']).isRequired
        }).isRequired
      ).isRequired
    }).isRequired,
    preferredLanguage: PropTypes.shape({
      android: PropTypes.oneOf(['kotlin', 'java']).isRequired
    }).isRequired,
    changeLanguage: PropTypes.shape({
      android: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  /* A unique `id` is required for the language toggle. */
  id: PropTypes.string.isRequired,
  /* Every code snippet must include raw Java code. */
  java: PropTypes.string,
  /* Optionally, the code snippet can include raw Kotlin code.
  If this is included, the language toggle will be displayed. */
  kotlin: PropTypes.string,
  /* Optional code ranges can be included to highlight specific
  lines within the code snippet. */
  copyRanges: PropTypes.shape({
    /* Lines that should be highlighted when the Java code is displayed.
    This is an array of arrays. For example, `[[2,3],[5,10]]` indicates that
    lines 2-3 and 5-10 should be highlighted. */
    java: PropTypes.array,
    /* Lines that should be highlighted when the Kotlin code is displayed.
    This is an array of arrays. For example, `[[2,3],[5,10]]` indicates that
    lines 2-3 and 5-10 should be highlighted. */
    kotlin: PropTypes.array
  }),
  /* Optional `filename` to be displayed as a kind of title for the code snippet. */
  filename: PropTypes.string,
  /* Optional `link` to a GitHub file. */
  link: PropTypes.string,
  /* Whether or not a code snippet's height should be limited. Typically
  inline code snippets should be set to `true` and code snippets on examples
  pages should be set to `false`. Default is `true`. */
  limitHeight: PropTypes.bool
};
