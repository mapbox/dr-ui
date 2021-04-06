import React from 'react';
import PropTypes from 'prop-types';
import CodeSnippet from '@mapbox/mr-ui/code-snippet';
import CodeSnippetTitle from '../code-snippet-title/code-snippet-title';
import { highlightXml } from '../highlight/xml';
import { highlightThemeCss } from '../highlight/theme-css.js';

export default class AndroidLayoutCodeBlock extends React.Component {
  renderTitle = () => {
    const titleProps = {
      filename: this.props.filename,
      link: this.props.link ? this.props.link : undefined
    };
    return <CodeSnippetTitle {...titleProps} />;
  };

  render() {
    function onCopy() {
      if (window && window.analytics) {
        analytics.track('Copied AndroidLayoutCodeBlock to clipboard');
      }
    }

    return (
      <div className="my24">
        {this.props.filename && this.renderTitle()}
        {this.props.code && (
          <div className="prose">
            <CodeSnippet
              code={this.props.code}
              highlightedCode={highlightXml(this.props.code)}
              highlightThemeCss={highlightThemeCss}
              onCopy={onCopy}
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
