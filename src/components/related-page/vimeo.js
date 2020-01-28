import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mapbox/mr-ui/modal';

export class VimeoModal extends React.Component {
  render() {
    const { vimeoId, closeModal, title } = this.props;
    return (
      <Modal
        accessibleTitle={`Video: ${title}`}
        padding="none"
        onExit={closeModal}
      >
        <div className="h36" />
        <div
          className="round"
          style={{ padding: '62.5% 0 0 0', position: 'relative' }}
        >
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </Modal>
    );
  }
}

VimeoModal.propTypes = {
  vimeoId: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export class VimeoThumbnail extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <React.Fragment>
        <div
          className="bg-darken75 round absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            padding: '4% 9% 1%'
          }}
        >
          <VimeoPlayImage />
        </div>
        <img
          alt=""
          className="w240-ml w180-mm w-full block inline-block-mm round mt-neg12 h-full mb18 mb0-mm"
          src={image}
        />
      </React.Fragment>
    );
  }
}

VimeoThumbnail.propTypes = {
  image: PropTypes.string.isRequired
};

export class VimeoPlayImage extends React.Component {
  render() {
    // if icon = true; then use the icon wrapper
    const IconWrapper = ({ wrap, children }) =>
      this.props.icon ? wrap(children) : children;
    return (
      <IconWrapper
        wrap={children => (
          <div
            style={{ width: 55, height: 55, padding: '15px 12px 15px 18px' }}
            className="bg-purple-light round-full"
          >
            {children}
          </div>
        )}
      >
        <svg
          viewBox="0 0 20 20"
          width="100%"
          focusable="false"
          aria-labelledby="play-icon-title"
          role="img"
          fill={this.props.fill}
        >
          <title id="play-icon-title">Play</title>
          <polygon points="1,0 20,10 1,20" />
        </svg>
      </IconWrapper>
    );
  }
}
VimeoPlayImage.defaultProps = {
  fill: '#fff',
  icon: false
};

VimeoPlayImage.propTypes = {
  fill: PropTypes.oneOf(['#fff', '#7753eb']),
  icon: PropTypes.bool
};
