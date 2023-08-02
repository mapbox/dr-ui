import React from 'react';
import PropTypes from 'prop-types';
export default class PlaygroundImage extends React.PureComponent {
  render() {
    return /*#__PURE__*/React.createElement("svg", {
      width: this.props.size,
      height: this.props.size,
      viewBox: "0 0 60 60"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "#3F5B75",
      cx: "29.4",
      cy: "30.6",
      r: "25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#0E1519",
      d: "M44.4 48.1s0-.1 0 0c0-.7-.1-1.5-.5-2.4L33.5 25.6h-3.7l-3.7-.1-10.4 20.1c-.4 1-.6 1.8-.5 2.5 0 2.4 6.5 4.4 14.7 4.4 7.9 0 14.4-1.9 14.5-4.4z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#CDDCE8",
      d: "M43.4 43.8L33.3 24.5V17h.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-7.9c-.4 0-.7.3-.7.7s.3.7.7.7h.3v7.6L16.1 44c-.3.8-.5 1.4-.4 2v.3c.4 2.3 6.5 4.1 14.1 4.1 7.8 0 14.1-2 14.1-4.3 0-.6-.1-1.5-.5-2.3z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M39.3 42l-6.9-13.4h-4.9l-7 13.4c-.3.6-.4 1.2-.4 1.6 0 1.7 4.4 3 9.8 3 5.3 0 9.7-1.3 9.7-3 0-.5-.1-1-.3-1.6z"
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "#FFF",
      cx: "31.1",
      cy: "19.6",
      r: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "#FFF",
      cx: "27",
      cy: "8.6",
      r: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "#FFF",
      cx: "29",
      cy: "24",
      r: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "#FFF",
      cx: "29",
      cy: "15",
      r: "1.8"
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "#FFF",
      cx: "32.4",
      cy: "11.1",
      r: "1.4"
    }));
  }
}
PlaygroundImage.defaultProps = {
  size: 60
};