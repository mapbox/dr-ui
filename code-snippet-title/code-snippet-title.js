function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
export default class CodeSnippetTitle extends React.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "renderFilename", () => {
      return /*#__PURE__*/React.createElement("div", {
        className: "txt-bold color-gray-dar mb6"
      }, this.props.filename);
    });
    _defineProperty(this, "renderLink", () => {
      return /*#__PURE__*/React.createElement("div", {
        className: "ml12-mm"
      }, /*#__PURE__*/React.createElement("a", {
        className: "unprose link",
        href: this.props.link,
        title: `View ${this.props.filename} on GitHub`
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "github",
        inline: true
      }), " View on GitHub"));
    });
  }
  render() {
    const {
      link,
      toggle
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: "flex-mm flex--space-between-main-mm mb6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-mm"
    }, this.renderFilename(), link && this.renderLink()), toggle && /*#__PURE__*/React.createElement("div", null, toggle));
  }
}