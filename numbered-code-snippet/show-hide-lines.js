import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
const containerClasses = 'w-full bg-blue-faint color-blue-dark color-blue-on-hover pl12 py6 cursor-pointer txt-s';
class HideLines extends React.PureComponent {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: `${containerClasses} h30 bg-darken5`,
      onClick: this.props.onClick
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 12,
      inline: true
    }), " hide lines"), this.props.children, /*#__PURE__*/React.createElement("button", {
      className: `${containerClasses} h30 bg-darken5`,
      onClick: this.props.onClick
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-up",
      size: 12,
      inline: true
    }), " hide lines"));
  }
}
class ShowLines extends React.PureComponent {
  render() {
    return /*#__PURE__*/React.createElement("button", {
      className: `${containerClasses} h30 flex flex--center-cross`,
      onClick: this.props.onClick
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "mb-neg3"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-up",
      size: 12
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-neg3"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 12
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: '8px'
      }
    }, "show hidden lines"));
  }
}
export { HideLines, ShowLines };