import React from 'react';
import PropTypes from 'prop-types';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reducedMotion: false };
  }

  componentDidMount() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) this.setState({ reducedMotion: true });
  }

  render() {
    return (
      <div>
        <video
          autoPlay={!this.state.reducedMotion}
          loop={!this.state.reducedMotion}
          controls={this.state.reducedMotion}
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
