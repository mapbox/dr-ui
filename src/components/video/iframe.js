import React from 'react';
import PropTypes from 'prop-types';

export default class Iframe extends React.Component {
  render() {
    return (
      <div
        className={this.props.themeVideoContainer}
        style={{ padding: '62.5% 0 0 0', position: 'relative' }}
      >
        <iframe
          src={this.props.src}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          title={this.props.title}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }
}

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  themeVideoContainer: PropTypes.string
};
