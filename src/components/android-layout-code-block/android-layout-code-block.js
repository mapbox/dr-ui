import React from 'react';
import PropTypes from 'prop-types';
import CodeSnippet from '@mapbox/mr-ui/code-snippet';
import CodeSnippetTitle from '../code-snippet-title/code-snippet-title';
import { highlightXml } from '../highlight/xml';

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
`;

export default class AndroidLayoutCodeBlock extends React.Component {
  renderTitle = () => {
    const titleProps = {
      filename: this.props.filename,
      link: this.props.link ? this.props.link : undefined
    };
    return <CodeSnippetTitle {...titleProps} />;
  };

  render() {
    return (
      <div className="my24">
        {this.props.filename && this.renderTitle()}
        {this.props.code && (
          <div className="round prose" style={{ backgroundColor: '#f4f7fb' }}>
            <CodeSnippet
              code={this.props.code}
              highlightedCode={highlightXml(this.props.code)}
              highlightThemeCss={highlightTheme}
              onCopy={() => {}}
            />
          </div>
        )}
      </div>
    );
  }
}

AndroidLayoutCodeBlock.propTypes = {
  /* Optional `filename` to be displayed as a kind of title for the code snippet. */
  filename: PropTypes.string,
  /* Optional `link` to a GitHub file. */
  link: PropTypes.string,
  /* Raw (unhighlighted) code. When the user clicks a copy
  button, this is what they'll get. If no highlightedCode
  is provided, code is displayed. */
  code: PropTypes.string.isRequired
};
