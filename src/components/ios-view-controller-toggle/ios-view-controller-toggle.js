import React from 'react';
import PropTypes from 'prop-types';
import ToggleableCodeBlock from '../toggleable-code-block/toggleable-code-block';
import { highlightSwift } from '../highlight/swift';
import { highlightObjectivec } from '../highlight/objectivec';
import ContextConsumer from '../page-layout/context/user-context';

export default class IosViewControllerToggle extends React.Component {
  static defaultProps = {
    limitHeight: true
  };

  render() {
    const { id, objectiveC, swift, limitHeight } = this.props;

    return (
      <div className="my24 prose">
        <ContextConsumer>
          {({ setLanguage, userPreferredLanguage }) => {
            const language = userPreferredLanguage['ios'];
            const selectedCode = language === 'objectiveC' ? objectiveC : swift;
            const snippetProps = {
              copyRanges: this.props.copyRanges || undefined,
              filename: this.props.filename || undefined,
              link: this.props.link || undefined,
              options:
                objectiveC && swift
                  ? [
                      {
                        label: 'Swift',
                        language: 'swift',
                        preferredLanguage: language === 'swift'
                      },
                      {
                        label: 'Objective-C',
                        language: 'objectiveC',
                        preferredLanguage: language === 'objectiveC'
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
                  language === 'objectiveC'
                    ? highlightObjectivec(selectedCode)
                    : highlightSwift(selectedCode)
                }
                changeLanguage={(language) => {
                  setLanguage({ ios: language });
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

IosViewControllerToggle.propTypes = {
  /** A unique `id` is required for the language toggle. */
  id: PropTypes.string.isRequired,
  /** Every code snippet must include raw Swift code. */
  swift: PropTypes.string.isRequired,
  /** Optionally, the code snippet can include raw Objective-C code.
  If this is included, the language toggle will be displayed. */
  objectiveC: PropTypes.string,
  /** Optional code ranges can be included to highlight specific
  lines within the code snippet. */
  copyRanges: PropTypes.shape({
    /** Lines that should be highlighted when the Swift code is displayed.
    This is an array of arrays. For example, `[[2,3],[5,10]]` indicates that
    lines 2-3 and 5-10 should be highlighted. */
    swift: PropTypes.array,
    /** Lines that should be highlighted when the Objective-C code is displayed.
    This is an array of arrays. For example, `[[2,3],[5,10]]` indicates that
    lines 2-3 and 5-10 should be highlighted. */
    objectiveC: PropTypes.array
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
