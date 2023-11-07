import React from 'react';
import PropTypes from 'prop-types';
export default class BookletImage extends React.PureComponent {
  render() {
    const {
      props
    } = this;
    return /*#__PURE__*/React.createElement("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 108 108"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "53",
      cy: "55",
      r: "45",
      fill: "#83e5af"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M63.238 70h-23.37a5.887 5.887 0 0 0-5.752 4.842 6.137 6.137 0 0 0-.11.868A5.898 5.898 0 0 0 39.763 82H63.77A5.341 5.341 0 0 0 69 76.554V64a5.885 5.885 0 0 1-5.762 6z",
      fill: "#30aa67"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "39",
      y: "38",
      width: "34",
      height: "39",
      rx: "4.744",
      ry: "4.744",
      fill: "#3dbc7d"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M63.238 70.257A5.792 5.792 0 0 0 69 64.436v-32.18A4.257 4.257 0 0 0 64.743 28H38.257A4.257 4.257 0 0 0 34 32.257V75h.107a5.918 5.918 0 0 1 5.818-4.743",
      fill: "#4bd18b"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "39",
      y: "33",
      width: "25",
      height: "15",
      rx: "2.136",
      ry: "2.136",
      fill: "#3dbc7d"
    }));
  }
}
BookletImage.defaultProps = {
  size: 60
};