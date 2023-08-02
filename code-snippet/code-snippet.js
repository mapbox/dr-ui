function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable xss/no-mixed-html */

import React from 'react';
import PropTypes from 'prop-types';
import MrCodeSnippet from '@mapbox/mr-ui/code-snippet';
import CodeSnippetTitle from '../code-snippet-title';
import Edit from '../edit';
import { highlightThemeCss } from '../highlight/theme-css.js';
import classnames from 'classnames';
import onCopy from './on-copy';
class CodeSnippet extends React.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "editButtons", () => {
      // show edit buttons if edit object and all required props are present
      const {
        edit,
        maxHeight
      } = this.props;
      return edit && edit.html && edit.js && edit.frontMatter.title && edit.frontMatter.description ? /*#__PURE__*/React.createElement("div", {
        className: classnames('absolute-mm right mb6 mb0-mm', {
          'top mr36-mm z2': !maxHeight,
          // set Edit next to CopyButton
          'mt-neg36-mm': maxHeight // set Edit above CodeSnippet
        }),

        style: maxHeight ? {} : {
          marginTop: '4px'
        }
      }, /*#__PURE__*/React.createElement(Edit, {
        css: edit.css,
        html: edit.html,
        js: edit.js,
        head: edit.head,
        resources: edit.resources,
        frontMatter: edit.frontMatter
      })) : '';
    });
    _defineProperty(this, "codeSnippetTitle", () => {
      // show CodeSnippetTitle if filename is present
      const filename = this.props.filename;
      return filename && /*#__PURE__*/React.createElement(CodeSnippetTitle, {
        filename: filename
      });
    });
  }
  render() {
    const {
      code,
      maxHeight,
      highlighter
    } = this.props;
    const highlightedCode = highlighter(code);
    // only load the component if we have `code` and `highlighter`
    if (!highlighter && !code) return;
    // wrap the component in appcontext so we can get the user's token
    return /*#__PURE__*/React.createElement("div", {
      "data-swiftype-index": "false"
    }, this.codeSnippetTitle(), /*#__PURE__*/React.createElement("div", {
      className: "relative prose"
    }, this.editButtons(), /*#__PURE__*/React.createElement(MrCodeSnippet, _extends({
      maxHeight: maxHeight,
      code: code
    }, this.props, {
      highlightThemeCss: highlightThemeCss,
      highlightedCode: highlightedCode,
      onCopy: onCopy
    }))));
  }
}
export default CodeSnippet;