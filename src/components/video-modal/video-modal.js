import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mapbox/mr-ui/modal';

export default class VideoModal extends React.PureComponent {
  render() {
    const { youtubeId, closeModal, title } = this.props;
    return (
      <Modal
        accessibleTitle={`Video: ${title}`}
        padding="none"
        margin="large"
        onExit={closeModal}
        size="auto"
      >
        <div
          style={{
            width: '80vw',
            height: '45vw',
            maxWidth: '1140px',
            maxHeight: '641px'
          }}
        >
          <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            title={title}
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&origin=http://docs.mapbox.com`}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ display: 'block' }}
          />
        </div>
      </Modal>
    );
  }
}

VideoModal.propTypes = {
  youtubeId: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
