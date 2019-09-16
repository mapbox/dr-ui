import React from 'react';
import PropTypes from 'prop-types';

export default class Video extends React.Component {
  render() {
    let videoProps = {
      autoPlay: true,
      loop: true
    };
    const reducedMotion =
      typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
    if (reducedMotion) {
      videoProps = {
        autoPlay: undefined,
        loop: undefined,
        controls: true
      };
    }
    return (
      <div>
        <video
          {...videoProps}
          muted
          width="100%"
          className="block mx-auto"
          src={this.props.src}
          type="video/mp4"
          title={this.props.title}
        >
          <p>
            Your browser doesn't support HTML5 video. Here is a{' '}
            <a href={this.props.src}>link to the video</a> instead.
          </p>
        </video>
      </div>
    );
  }
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
