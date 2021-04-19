/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import { VimeoPlayImage } from '../related-page/vimeo';

export default class Video extends React.PureComponent {
  constructor(props) {
    super(props);
    // By default, Video will assume that the user prefers reduced motion
    this.state = {
      isPlaying: false, // The video is not playing
      autoPlay: undefined, // Turn off autoplay
      loop: undefined // Turn off loop
    };
    this.video = React.createRef();
  }

  componentDidMount() {
    // check the users preference
    const prefersReducedMotion =
      typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
    // if `prefers-reduced-motion: reduce` is not set, use props to override state defaults
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
    const { src, title, muted, playsInline, poster } = this.props;
    const { isPlaying, autoPlay, loop } = this.state;

    const videoProps = {
      autoPlay,
      loop,
      muted,
      playsInline,
      poster
    };

    return (
      <div
        className="relative flex-parent flex-parent--center-main flex-parent--center-cross bg-gray"
        onMouseOver={this.onHover}
        onMouseLeave={this.onOut}
        onFocus={this.onHover}
      >
        {!isPlaying && (
          <button
            onClick={this.playVideo}
            className="bg-darken75 bg-darken50-on-hover w60 h60 py12 px12 w120-mm h120-mm py18-mm px18-mm round cursor-pointer z1 absolute"
          >
            <VimeoPlayImage />
          </button>
        )}
        <video
          {...videoProps}
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
            Your browser doesn't support HTML5 video. Open{' '}
            <a href={this.props.src}>link to the video</a>.
          </p>
        </video>
      </div>
    );
  }
}

// default props are only set if the user does not prefer reduced motion
Video.defaultProps = {
  autoplay: true,
  loop: true,
  muted: true,
  playsInline: true,
  poster: undefined
};

Video.propTypes = {
  /** The path to the video. */
  src: PropTypes.string.isRequired,
  /** The title of the video. */
  title: PropTypes.string.isRequired,
  /** If true, the video will autoplay unless the user prefers reduced motion.*/
  autoplay: PropTypes.bool,
  /** If true, the video will loop unless the user prefers reduced motion. */
  loop: PropTypes.bool,
  /** If true, the video will be muted. */
  muted: PropTypes.bool,
  /** If true, the video will play on the page for iOS/Safari. If false, the video open fullscreen on play. */
  playsInline: PropTypes.bool,
  /** A path to a preview image for the video. */
  poster: PropTypes.string
};
