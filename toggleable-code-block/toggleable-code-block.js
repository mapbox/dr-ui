function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import CodeSnippet from '@mapbox/mr-ui/code-snippet';
import NumberedCodeSnippet from '../numbered-code-snippet/numbered-code-snippet';
import CodeSnippetTitle from '../code-snippet-title/code-snippet-title';
import CodeToggle from '../code-toggle/code-toggle';
import onCopy from '../code-snippet/on-copy';
import { highlightThemeCss } from '../highlight/theme-css.js';
export default class ToggleableCodeBlock extends React.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "renderSnippet", code => {
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
        highlightThemeCss: highlightThemeCss
      };
      if (copyRanges) {
        snippetProps.copyRanges = copyRanges[selectedLanguage];
        return /*#__PURE__*/React.createElement(NumberedCodeSnippet, snippetProps);
      } else {
        return /*#__PURE__*/React.createElement(CodeSnippet, _extends({
          onCopy: onCopy
        }, snippetProps));
      }
    });
    _defineProperty(this, "renderTitle", () => {
      const {
        filename,
        link,
        options
      } = this.props;
      const titleProps = {
        filename: filename,
        link: link ? link : undefined,
        toggle: options && options.length > 1 ? this.renderToggle() : undefined
      };
      return /*#__PURE__*/React.createElement(CodeSnippetTitle, titleProps);
    });
    _defineProperty(this, "renderToggle", () => {
      const {
        id,
        changeLanguage,
        options
      } = this.props;
      return /*#__PURE__*/React.createElement(CodeToggle, {
        id: id,
        onChange: changeLanguage,
        options: options
      });
    });
    _defineProperty(this, "checkPreference", language => {
      const {
        selectedLanguage
      } = this.props;
      return selectedLanguage === language;
    });
  }
  render() {
    const {
      filename,
      options,
      code
    } = this.props;
    const multipleOptions = options && options.length > 1;
    return /*#__PURE__*/React.createElement("div", {
      className: "my24"
    }, filename || multipleOptions ? this.renderTitle() : '', code && this.renderSnippet(code));
  }
}
ToggleableCodeBlock.defaultProps = {
  limitHeight: true
};