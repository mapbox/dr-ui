import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
class Browser extends React.PureComponent {
  render() {
    const {
      props
    } = this;
    return /*#__PURE__*/React.createElement("div", {
      className: "shadow-darken25 round bg-white"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gray h30-mm h18 round-t"
    }, /*#__PURE__*/React.createElement("div", {
      className: "color-white flex flex--center-cross h30-mm h18 px6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "color-red-light"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle"
    })), /*#__PURE__*/React.createElement("span", {
      className: "color-yellow-light"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle"
    })), /*#__PURE__*/React.createElement("span", {
      className: "color-green-light"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "block-mm none"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h30 bg-gray-lighter color-gray flex flex--space-between-main px6 flex--center-cross"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex flex--space-between-main flex--center-cross mr18 w70"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left"
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "rotate"
    })), /*#__PURE__*/React.createElement("div", {
      className: "w120 h18 bg-white round-full flex-child-grow px12"
    }), /*#__PURE__*/React.createElement("div", {
      className: "inline-flex flex--space-between-main align-r flex--center-cross ml18 w70"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart"
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "mapbox"
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "menu"
    })))), props.children);
  }
}
export default Browser;