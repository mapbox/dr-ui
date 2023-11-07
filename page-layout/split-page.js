function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import Feedback from '../feedback/feedback';
export default class SplitPage extends React.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "renderFeedback", () => {
      const {
        frontMatter,
        location,
        constants
      } = this.props;
      return /*#__PURE__*/React.createElement("div", {
        className: "mt18"
      }, /*#__PURE__*/React.createElement(Feedback, {
        site: constants.SITE,
        type: `section on ${frontMatter.title}`,
        section: frontMatter.title,
        location: location,
        webhook: constants.FORWARD_EVENT_WEBHOOK
      }));
    });
  }
  render() {
    const {
      frontMatter,
      children
    } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, children, !frontMatter.hideFeedback ? this.renderFeedback() : ' ');
  }
}