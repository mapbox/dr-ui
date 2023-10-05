function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
import IconText from '@mapbox/mr-ui/icon-text';
import LevelIndicator from '../level-indicator/level-indicator';
class Card extends React.PureComponent {
  render() {
    const {
      thumbnail,
      level,
      language,
      description,
      path,
      link,
      title
    } = this.props;
    const renderedThumbnail = thumbnail && /*#__PURE__*/React.createElement("div", {
      className: "relative h120 mb6"
    }, thumbnail);
    const renderedLevel = level && /*#__PURE__*/React.createElement("div", {
      className: "mr12"
    }, /*#__PURE__*/React.createElement(LevelIndicator, {
      level: level
    }));
    const renderedLanguage = language && /*#__PURE__*/React.createElement(IconText, {
      iconBefore: "code"
    }, language);
    let externalLinkAttributes;
    if (link) {
      externalLinkAttributes = {
        target: '_blank',
        rel: 'nooopener noreferrer'
      };
    }
    return /*#__PURE__*/React.createElement("a", _extends({
      className: "dr-ui--card color-gray-dark transition color-blue-on-hover round clip inline-block w-full unprose pb18",
      href: link || path
    }, externalLinkAttributes), renderedThumbnail, /*#__PURE__*/React.createElement("div", null, (renderedLevel || renderedLanguage) && /*#__PURE__*/React.createElement("div", {
      className: "flex mb6 txt-bold color-gray txt-s"
    }, renderedLevel, renderedLanguage), /*#__PURE__*/React.createElement("div", {
      className: "mb6 flex flex--center-cross"
    }, title, ' ', link && /*#__PURE__*/React.createElement("svg", {
      className: "icon ml3 mt3"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#icon-share"
    }))), description && /*#__PURE__*/React.createElement("div", {
      className: "color-gray color-gray-on-hover"
    }, description)));
  }
}
export default Card;