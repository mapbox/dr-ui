import React from 'react';
import PropTypes from 'prop-types';

// creates the video thumbnail with play button overlay
export class VideoThumbnail extends React.PureComponent {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "bg-darken75 round absolute",
      style: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        height: '36%',
        padding: '4% 9% 1%'
      }
    }, /*#__PURE__*/React.createElement(VideoPlayImage, null)), /*#__PURE__*/React.createElement("div", {
      className: "h-full mb24 mb0-ml"
    }, children));
  }
}
// creates play button icon
export class VideoPlayImage extends React.PureComponent {
  render() {
    // if fallbackIcon, then use the icon wrapper
    // to add the circle background
    const IconWrapper = ({
      wrap,
      children
    }) => this.props.fallbackIcon ? wrap(children) : children;
    function handleIcon(children) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: 55,
          height: 55,
          padding: '15px 12px 15px 18px'
        },
        className: "bg-purple-light round-full"
      }, children);
    }
    return /*#__PURE__*/React.createElement(IconWrapper, {
      wrap: handleIcon
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 20 20",
      width: "100%",
      focusable: "false",
      "aria-label": "Play",
      role: "img",
      fill: this.props.fallbackIcon ? '#7753eb' : '#fff'
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "1,0 20,10 1,20"
    })));
  }
}
VideoPlayImage.defaultProps = {
  fallbackIcon: false
};