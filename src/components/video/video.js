import React from 'react';
import PropTypes from 'prop-types';

export default class Video extends React.Component {
  render() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          width="100%"
          className="block mx-auto"
          src={this.props.src}
          type="video/mp4"
          title={this.props.title}
        >
          Your browser doesn't support embedded videos.
        </video>
      </div>
    );
  }
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
