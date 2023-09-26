import React from 'react';
import PropTypes from 'prop-types';
import ToggleableCodeBlock from '../toggleable-code-block/toggleable-code-block';
import { highlightGroovy } from '../highlight/groovy';
import { highlightKotlin } from '../highlight/kotlin';

export function findSelectedCode(kotlin, groovy, preference) {
  let selectedCode = '';
  if (kotlin === undefined) {
    /* If there is no kotlin code, use groovy. */
    selectedCode = groovy;
  } else if (groovy === undefined) {
    /* If there is no groovy code, use kotlin. */
    selectedCode = kotlin;
  } else if (preference === 'groovy') {
    /** If there is both groovy and kotlin code,
     * use the preferred language. */
    selectedCode = groovy;
  } else {
    selectedCode = kotlin;
  }
  return selectedCode;
}

export default class ContextlessGradleConfigToggle extends React.PureComponent {
  checkPreference = (language) => {
    return this.props.context.preferredLanguage.gradle === language;
  };

  render() {
    const {
      context,
      id,
      groovy,
      kotlin,
      copyRanges,
      filename,
      link,
      limitHeight
    } = this.props;

    const selectedCode = findSelectedCode(
      kotlin,
      groovy,
      context.preferredLanguage.gradle
    );

    const snippetProps = {
      copyRanges: copyRanges || undefined,
      filename: filename || undefined,
      link: link || undefined,
      options:
        kotlin && groovy
          ? [
              {
                label: 'Kotlin',
                language: 'kotlin',
                preferredLanguage: this.checkPreference('kotlin')
              },
              {
                label: 'Groovy',
                language: 'groovy',
                preferredLanguage: this.checkPreference('groovy')
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
              : highlightGroovy(selectedCode)
          }
          changeLanguage={context.changeLanguage['gradle']}
          limitHeight={limitHeight}
          selectedLanguage={context.preferredLanguage.gradle}
        />
      </div>
    );
  }
}

ContextlessGradleConfigToggle.propTypes = {
  /* Intended to be hooked up to `context` in the format
  used throughout Mapbox docs sites. */
  context: PropTypes.shape({
    languages: PropTypes.shape({
      gradle: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.oneOf(['Kotlin', 'Groovy']).isRequired,
          value: PropTypes.oneOf(['kotlin', 'groovy']).isRequired
        }).isRequired
      ).isRequired
    }).isRequired,
    preferredLanguage: PropTypes.shape({
      gradle: PropTypes.oneOf(['kotlin', 'groovy']).isRequired
    }).isRequired,
    changeLanguage: PropTypes.shape({
      gradle: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  /* A unique `id` is required for the language toggle. */
  id: PropTypes.string.isRequired,
  /* Every code snippet must include raw Groovy code. */
  groovy: PropTypes.string,
  /* Optionally, the code snippet can include raw Kotlin code.
  If this is included, the language toggle will be displayed. */
  kotlin: PropTypes.string,
  /* Optional code ranges can be included to highlight specific
  lines within the code snippet. */
  copyRanges: PropTypes.shape({
    /* Lines that should be highlighted when the Groovy code is displayed.
    This is an array of arrays. For example, `[[2,3],[5,10]]` indicates that
    lines 2-3 and 5-10 should be highlighted. */
    groovy: PropTypes.array,
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
