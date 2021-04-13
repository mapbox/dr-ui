import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mapbox/mr-ui/modal';

// creates the modal
export class VimeoModal extends React.PureComponent {
  render() {
    const { vimeoId, closeModal, title } = this.props;
    return (
      <Modal
        accessibleTitle={`Video: ${title}`}
        padding="none"
        onExit={closeModal}
      >
        <div className="py36">
          <div style={{ padding: '62.5% 0 0 0', position: 'relative' }}>
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

// creates the video thumbnail with play button overlay
export class VimeoThumbnail extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <div
          className="bg-darken75 round absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            height: '36%',
            padding: '4% 9% 1%'
          }}
        >
          <VimeoPlayImage />
        </div>
        <div className="h-full mb24 mb0-ml">{children}</div>
      </React.Fragment>
    );
  }
}

VimeoThumbnail.propTypes = {
  children: PropTypes.node.isRequired
};

// creates play button icon
export class VimeoPlayImage extends React.PureComponent {
  render() {
    // if fallbackIcon, then use the icon wrapper
    // to add the circle background
    const IconWrapper = ({ wrap, children }) =>
      this.props.fallbackIcon ? wrap(children) : children;
    return (
      <IconWrapper
        wrap={(children) => (
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
          fill={this.props.fallbackIcon ? '#7753eb' : '#fff'}
        >
          <title id="play-icon-title">Play</title>
          <polygon points="1,0 20,10 1,20" />
        </svg>
      </IconWrapper>
    );
  }
}

VimeoPlayImage.defaultProps = {
  fallbackIcon: false
};

VimeoPlayImage.propTypes = {
  fallbackIcon: PropTypes.bool
};
