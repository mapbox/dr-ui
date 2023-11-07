import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mapbox/mr-ui/modal';
export default class VideoModal extends React.PureComponent {
  render() {
    const {
      youtubeId,
      closeModal,
      title
    } = this.props;
    return /*#__PURE__*/React.createElement(Modal, {
      accessibleTitle: `Video: ${title}`,
      padding: "none",
      margin: "large",
      onExit: closeModal,
      size: "auto"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '65vw',
        maxWidth: '1140px',
        // 56.25% === 16:9 aspect ratio
        padding: '56.25% 0 0 0',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("iframe", {
      id: "ytplayer",
      type: "text/html",
      width: "100%",
      height: "100%",
      title: title,
      src: `https://www.youtube.com/embed/${youtubeId}?autoplay=1&origin=http://docs.mapbox.com`,
      frameBorder: "0",
      allow: "autoplay; fullscreen",
      allowFullScreen: true,
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }
    })));
  }
}