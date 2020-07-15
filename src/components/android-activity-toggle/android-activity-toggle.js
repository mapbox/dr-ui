import React from 'react';
import PropTypes from 'prop-types';
import ToggleableCodeBlock from '../toggleable-code-block/toggleable-code-block';
import { highlightJava } from '../highlight/java';
import { highlightKotlin } from '../highlight/kotlin';
import ContextConsumer from '../page-layout/context/user-context';
import findSelectedCode from './find-selected';

export default class AndroidActivityToggle extends React.Component {
  render() {
    const {
      id,
      java,
      kotlin,
      copyRanges,
      filename,
      link,
      limitHeight
    } = this.props;

    return (
      <div className="my24 prose">
        <ContextConsumer>
          {({ setLanguage, userPreferredLanguage }) => {
            const language = userPreferredLanguage['android'];
            const selectedCode = findSelectedCode({ kotlin, java }, language);
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
                        preferredLanguage: language === 'java'
                      },
                      {
                        label: 'Kotlin',
                        language: 'kotlin',
                        preferredLanguage: language === 'kotlin'
                      }
                    ]
                  : undefined
            };
            return (
              <ToggleableCodeBlock
                {...snippetProps}
                id={id}
                code={selectedCode}
                highlightedCode={
                  language === 'kotlin'
                    ? highlightKotlin(selectedCode)
                    : highlightJava(selectedCode)
                }
                changeLanguage={(language) => {
                  setLanguage({ android: language });
                }}
                limitHeight={limitHeight}
                selectedLanguage={language}
              />
            );
          }}
        </ContextConsumer>
      </div>
    );
  }
}

AndroidActivityToggle.propTypes = {
  /** A unique `id` is required for the language toggle. */
  id: PropTypes.string.isRequired,
  /** Every code snippet must include raw Java code. */
  java: PropTypes.string,
  /** Optionally, the code snippet can include raw Kotlin code.
  If this is included, the language toggle will be displayed. */
  kotlin: PropTypes.string,
  /** Optional code ranges can be included to highlight specific
  lines within the code snippet. */
  copyRanges: PropTypes.shape({
    /** Lines that should be highlighted when the Java code is displayed.
    This is an array of arrays. For example, `[[2,3],[5,10]]` indicates that
    lines 2-3 and 5-10 should be highlighted. */
    java: PropTypes.array,
    /** Lines that should be highlighted when the Kotlin code is displayed.
    This is an array of arrays. For example, `[[2,3],[5,10]]` indicates that
    lines 2-3 and 5-10 should be highlighted. */
    kotlin: PropTypes.array
  }),
  /** Optional `filename` to be displayed as a kind of title for the code snippet. */
  filename: PropTypes.string,
  /** Optional `link` to a GitHub file. */
  link: PropTypes.string,
  /** Whether or not a code snippet's height should be limited. Typically
  inline code snippets should be set to `true` and code snippets on examples
  pages should be set to `false`. Default is `true`. */
  limitHeight: PropTypes.bool
};
