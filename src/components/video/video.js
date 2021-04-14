import React from 'react';
import PropTypes from 'prop-types';
import { VimeoPlayImage } from '../related-page/vimeo';

export default class Video extends React.PureComponent {
  constructor(props) {
    super(props);
    // by default: assume the users prefers reduced motion
    this.state = {
      isPlaying: false, // the video is not playing
      autoPlay: undefined, // turn off autoplay
      loop: undefined // turn off loop
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
  loop: true
};

Video.propTypes = {
  /** The path to the video. */
  src: PropTypes.string.isRequired,
  /** The title of the video. */
  title: PropTypes.string.isRequired,
  /** If true, the video will autoplay unless the user prefers reduced motion.*/
  autoplay: PropTypes.bool,
  /** If true, the video will loop unless the user prefers reduced motion. */
  loop: PropTypes.bool
};
