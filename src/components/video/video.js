import React from 'react';
import PropTypes from 'prop-types';
import { VimeoPlayImage } from '../related-page/vimeo';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false, // assume the video is not playing
      autoPlay: undefined, // turn off autoplay by default
      loop: undefined // turn off loop by default
    };
    this.video = React.createRef();
  }

  componentDidMount() {
    // check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
    // if they don't prefer reduced motion, set video props
    if (!prefersReducedMotion) {
      this.setState({
        autoPlay: this.props.autoplay,
        loop: this.props.loop
      });
    }
  }

  // show video controls on hover
  onHover = () => {
    this.video.current.controls = true;
  };

  // hide video controls when user leaves the video container
  onOut = () => {
    this.video.current.controls = false;
  };

  // check if video is playing (helps us detect if user has autoplay enabled or disabled)
  onPlay = () => {
    this.setState({ isPlaying: true });
  };

  // check when video stops
  onStop = () => {
    this.setState({ isPlaying: false });
  };

  // play the video
  playVideo = () => {
    this.video.current.play();
  };

  render() {
    const { src, title } = this.props;
    const { isPlaying, autoPlay, loop } = this.state;

    const videoProps = {
      autoPlay,
      loop
    };
    return (
      <div
        className="relative"
        onMouseOver={this.onHover}
        onMouseLeave={this.onOut}
      >
        {!isPlaying && (
          <button
            onClick={this.playVideo}
            className="bg-darken75 round absolute cursor-pointer z1"
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
          </button>
        )}
        <video
          {...videoProps}
          muted
          width="100%"
          className="block mx-auto"
          src={src}
          type="video/mp4"
          title={title}
          ref={this.video}
          onPlay={this.onPlay}
          onEnded={this.onStop}
          onPause={this.onStop}
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

Video.defaultProps = {
  autoplay: true,
  loop: true
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool
};
