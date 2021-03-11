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
    const { edit, maxHeight } = this.props;
    let { editClasses, editStyles } = this.props;

    // if maxHeight is set, move the Edit buttons above the CodeSnippet
    if (maxHeight) {
      (editClasses = 'absolute-mm right mb3 mt-neg36-mm'), (editStyles = {});
    }

    return edit &&
      edit.css &&
      edit.html &&
      edit.js &&
      edit.frontMatter.title &&
      edit.frontMatter.description ? (
      <div className={editClasses} style={editStyles}>
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
            onCopy={() => {
              analytics.track('Copied example with clipboard');
            }}
          />
        </div>
      </div>
    );
  }
}

CodeSnippet.defaultProps = {
  editClasses: 'absolute-mm mb6 mb0-mm top right mr36-mm z2',
  editStyles: { marginTop: '4px' }
};

CodeSnippet.propTypes = {
  /** The raw code. */
  code: PropTypes.string.isRequired,
  /** The dr-ui/highlight function, example: "highlighter={() => highlightJson}". You must also import the function in your frontmatter. */
  highlighter: PropTypes.func.isRequired,
  /** Name of the file to add context to the code block. */
  filename: PropTypes.string,
  /** The maximum height of the code block. If set, the Edit buttons (if enabled) will move above the CodeSnippet. */
  maxHeight: PropTypes.number,
  /** Classes to add to the Edit component container */
  editClasses: PropTypes.string,
  /** Styles to add to the Edit component container */
  editStyles: PropTypes.object,
  /** Enables the Edit in CodePen/JSFiddle buttons */
  edit: PropTypes.shape({
    /** Contents for the CSS panel. */
    css: PropTypes.string,
    /** Contents for the JavaScript panel. */
    js: PropTypes.string.isRequired,
    /** Contents for the HTML panel. */
    html: PropTypes.string.isRequired,
    /* Extra HTML to add to the head of the document, used by CodePen. */
    head: PropTypes.string,
    frontMatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired
    }),
    /** Absolute URLs to CDNs that are required by the code. */
    resources: PropTypes.shape({
      js: PropTypes.array,
      css: PropTypes.array
    })
  })
};

export default CodeSnippet;
