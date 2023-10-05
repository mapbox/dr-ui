function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import CodeSnippet from '@mapbox/mr-ui/code-snippet';
import CodeSnippetTitle from '../code-snippet-title/code-snippet-title';
import onCopy from '../code-snippet/on-copy';
import { highlightXml } from '../highlight/xml';
import { highlightThemeCss } from '../highlight/theme-css.js';
export default class AndroidLayoutCodeBlock extends React.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "renderTitle", () => {
      const titleProps = {
        filename: this.props.filename,
        link: this.props.link ? this.props.link : undefined
      };
      return /*#__PURE__*/React.createElement(CodeSnippetTitle, titleProps);
    });
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "my24"
    }, this.props.filename && this.renderTitle(), this.props.code && /*#__PURE__*/React.createElement("div", {
      className: "prose"
    }, /*#__PURE__*/React.createElement(CodeSnippet, {
      code: this.props.code,
      highlightedCode: highlightXml(this.props.code),
      highlightThemeCss: highlightThemeCss,
      onCopy: onCopy
    })));
  }
}