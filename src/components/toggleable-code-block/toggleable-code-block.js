import React from 'react';
import PropTypes from 'prop-types';
import CodeSnippet from '@mapbox/mr-ui/code-snippet';
import NumberedCodeSnippet from '../numbered-code-snippet/numbered-code-snippet';
import CodeSnippetTitle from '../code-snippet-title/code-snippet-title';
import CodeToggle from '../code-toggle/code-toggle';

let highlightTheme = `
code[class*='language-'],
pre[class*='language-'] {
  color: #273d56;
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #272822;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #53708e;
}

.token.punctuation {
  color: #273d56;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #314ccd;
}

.token.boolean,
.token.number {
  color: #7753eb;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #ce2c69;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #273d56;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
  color: #4264fb;
}

.token.keyword {
  color: #314ccd;
}

.token.regex,
.token.important {
  color: #fd971f;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

[data-content]::before {
  content: attr(data-content);
}
`;

export default class ToggleableCodeBlock extends React.Component {
  static defaultProps = {
    limitHeight: true
  };

  renderSnippet = code => {
    const {
      highlightedCode,
      limitHeight,
      copyRanges,
      selectedLanguage
    } = this.props;
    const snippetProps = {
      code: code,
      highlightedCode: highlightedCode,
      maxHeight: limitHeight ? 480 : undefined,
      highlightThemeCss: highlightTheme,
      onCopy: () => {}
    };
    if (copyRanges) {
      snippetProps.copyRanges = copyRanges[selectedLanguage];
      return <NumberedCodeSnippet {...snippetProps} />;
    } else {
      return <CodeSnippet {...snippetProps} />;
    }
  };

  renderTitle = () => {
    const { filename, link } = this.props;
    const titleProps = {
      filename: filename,
      link: link ? link : undefined
    };
    return <CodeSnippetTitle {...titleProps} />;
  };

  renderToggle = () => {
    const { id, changeLanguage, options } = this.props;
    return (
      <div className="mb12">
        <CodeToggle
          id={id}
          onChange={value => {
            changeLanguage(value);
          }}
          options={options}
        />
      </div>
    );
  };

  checkPreference = language => {
    const { selectedLanguage } = this.props;
    return selectedLanguage === language;
  };

  render() {
    const { filename, options, code } = this.props;

    return (
      <div className="my24">
        {filename && this.renderTitle()}
        {options && options.length > 1 ? this.renderToggle() : ''}
        {code && this.renderSnippet(code)}
      </div>
    );
  }
}

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
