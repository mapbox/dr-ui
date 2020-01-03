/* eslint-disable xss/no-mixed-html */

import React from 'react';
import PropTypes from 'prop-types';
import MrCodeSnippet from '@mapbox/mr-ui/code-snippet';
import CodeSnippetTitle from '../code-snippet-title';
import Edit from '../edit';
import { highlightThemeCss } from '../highlight/theme-css.js';

class CodeSnippet extends React.Component {
  editButtons = () => {
    // show edit buttons if edit object and all required props are present
    const edit = this.props.edit;
    return edit &&
      edit.css &&
      edit.html &&
      edit.js &&
      edit.frontMatter.title &&
      edit.frontMatter.description ? (
      <div
        className="absolute-mm mb6 mb0-mm top right mr36-mm z2"
        style={{ marginTop: '4px' }}
      >
        <Edit
          css={edit.css}
          html={edit.html}
          js={edit.js}
          head={edit.head}
          resources={edit.resources}
          frontMatter={edit.frontMatter}
        />
      </div>
    ) : (
      ''
    );
  };
  codeSnippetTitle = () => {
    // show CodeSnippetTitle if filename is present
    const filename = this.props.filename;
    return filename && <CodeSnippetTitle filename={filename} />;
  };
  render() {
    const { code, maxHeight, highlighter } = this.props;
    const highlightedCode = highlighter()(code);
    // only load the component if we have `code` and `highlighter`
    if (!highlighter && !code) return;
    // wrap the component in appcontext so we can get the user's token
    return (
      <div data-swiftype-index="false">
        {this.codeSnippetTitle()}
        <div className="relative prose">
          {this.editButtons()}
          <MrCodeSnippet
            maxHeight={maxHeight}
            code={code}
            {...this.props}
            highlightThemeCss={highlightThemeCss}
            highlightedCode={highlightedCode}
            onCopy={() => {}}
          />
        </div>
      </div>
    );
  }
}

CodeSnippet.propTypes = {
  code: PropTypes.string.isRequired, // raw code
  highlighter: PropTypes.func.isRequired, // the dr-ui/highlight function, example: highlighter={() => highlightJson}. You must also import the function in your frontmatter.
  filename: PropTypes.string, // (optional) name of the file to add context to the code block
  maxHeight: PropTypes.number, // (optional) maximum height of the code block, default is set at 300
  edit: PropTypes.shape({
    css: PropTypes.string.isRequired, // CSS panel contents
    js: PropTypes.string.isRequired, // JS panel contents
    html: PropTypes.string.isRequired, // HTML panel contents
    head: PropTypes.string, // extra html to add to the head of the document (CodePen)
    frontMatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired
    }),
    resources: PropTypes.shape({
      // absolute URLs to CDNs
      js: PropTypes.array,
      css: PropTypes.array
    })
  })
};

export default CodeSnippet;
