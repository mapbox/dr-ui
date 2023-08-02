import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mapbox/mr-ui/modal';

// creates the modal
export class VimeoModal extends React.PureComponent {
  render() {
    const {
      vimeoId,
      closeModal,
      title
    } = this.props;
    return /*#__PURE__*/React.createElement(Modal, {
      accessibleTitle: `Video: ${title}`,
      padding: "none",
      onExit: closeModal
    }, /*#__PURE__*/React.createElement("div", {
      className: "py36"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '62.5% 0 0 0',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("iframe", {
      title: title,
      src: `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`,
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      },
      frameBorder: "0",
      allow: "autoplay; fullscreen",
      allowFullScreen: true
    }))));
  }
}
// creates the video thumbnail with play button overlay
export class VimeoThumbnail extends React.PureComponent {
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
    }, /*#__PURE__*/React.createElement(VimeoPlayImage, null)), /*#__PURE__*/React.createElement("div", {
      className: "h-full mb24 mb0-ml"
    }, children));
  }
}
// creates play button icon
export class VimeoPlayImage extends React.PureComponent {
  render() {
    // if fallbackIcon, then use the icon wrapper
    // to add the circle background
    const IconWrapper = _ref => {
      let {
        wrap,
        children
      } = _ref;
      return this.props.fallbackIcon ? wrap(children) : children;
    };
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
VimeoPlayImage.defaultProps = {
  fallbackIcon: false
};