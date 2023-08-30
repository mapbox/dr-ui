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
      >
        <div className="py36">
          <div style={{ padding: '62.5% 0 0 0', position: 'relative' }}>
            <iframe
              id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              title={title}
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&origin=http://example.com`}
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

VideoModal.propTypes = {
  youtubeId: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
