import React from 'react';
import PropTypes from 'prop-types';
import CodeSnippet from '@mapbox/mr-ui/code-snippet';
import NumberedCodeSnippet from '../numbered-code-snippet/numbered-code-snippet';
import CodeSnippetTitle from '../code-snippet-title/code-snippet-title';
import CodeToggle from '../code-toggle/code-toggle';
import onCopy from '../code-snippet/on-copy';
import { highlightThemeCss } from '../highlight/theme-css.js';

export default class ToggleableCodeBlock extends React.PureComponent {
  renderSnippet = (code) => {
    const { highlightedCode, limitHeight, copyRanges, selectedLanguage } =
      this.props;
    const snippetProps = {
      code: code,
      highlightedCode: highlightedCode,
      maxHeight: limitHeight ? 480 : undefined,
      highlightThemeCss: highlightThemeCss
    };
    if (copyRanges) {
      snippetProps.copyRanges = copyRanges[selectedLanguage];
      return <NumberedCodeSnippet {...snippetProps} />;
    } else {
      return <CodeSnippet onCopy={onCopy} {...snippetProps} />;
    }
  };

  renderTitle = () => {
    const { filename, link, options } = this.props;
    const titleProps = {
      filename: filename,
      link: link ? link : undefined,
      toggle: options && options.length > 1 ? this.renderToggle() : undefined
    };
    return <CodeSnippetTitle {...titleProps} />;
  };

  renderToggle = () => {
    const { id, changeLanguage, options } = this.props;
    return <CodeToggle id={id} onChange={changeLanguage} options={options} />;
  };

  checkPreference = (language) => {
    const { selectedLanguage } = this.props;
    return selectedLanguage === language;
  };

  render() {
    const { filename, options, code } = this.props;
    const multipleOptions = options && options.length > 1;
    return (
      <div className="my24">
        {filename || multipleOptions ? this.renderTitle() : ''}
        {code && this.renderSnippet(code)}
      </div>
    );
  }
}

ToggleableCodeBlock.defaultProps = {
  limitHeight: true
};

ToggleableCodeBlock.propTypes = {
  /* A unique `id` is required for the language toggle. */
  id: PropTypes.string.isRequired,
  /* Language that is currently selected. */
  selectedLanguage: PropTypes.string.isRequired,
  /* Raw (unhighlighted) code. When the user clicks a copy
  button, this is what they'll get. */
  code: PropTypes.string.isRequired,
  /* The HTML output of running code through a syntax highlighter.
  This should use a /helper/higlight-* function. */
  highlightedCode: PropTypes.string.isRequired,
  /* Optional ranges can be included to highlight specific lines within
  the code snippet. This is an array of arrays. For example,
  `[[2,3],[5,10]]` indicates that lines 2-3 and 5-10 should be highlighted. */
  copyRanges: PropTypes.object,
  /* Languages to be toggled. */
  options: PropTypes.array,
  /* What should happen when the language is toggled. */
  changeLanguage: PropTypes.func,
  /* Optional `filename` to be displayed as a kind of title for the code snippet. */
  filename: PropTypes.string,
  /* Optional `link` to a GitHub file. */
  link: PropTypes.string,
  /* Whether or not a code snippet's height should be limited. Typically
  inline code snippets should be set to `true` and code snippets on examples
  pages should be set to `false`. Default is `true`. */
  limitHeight: PropTypes.bool
};
