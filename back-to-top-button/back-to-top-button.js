function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import Icon from '@mapbox/mr-ui/icon';
import Tooltip from '@mapbox/mr-ui/tooltip';
export default class BackToTopButton extends React.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "getPopoverContent", /*#__PURE__*/React.createElement("div", {
      className: "txt-s"
    }, "Back to top!"));
  }
  render() {
    function handleClick() {
      document.documentElement.scrollTop = 0; // fallback
      window.scroll(0, 0);
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "mx24 my24 z5"
    }, /*#__PURE__*/React.createElement(Tooltip, {
      content: this.getPopoverContent
    }, /*#__PURE__*/React.createElement("button", {
      onClick: handleClick,
      className: "btn btn--blue w60 h60 round-full shadow-darken25 flex flex--center-main flex--center-cross",
      "aria-label": "Back to top"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up",
      size: 30
    }))));
  }
}