import React from 'react';
import PropTypes from 'prop-types';
import getWindow from '@mapbox/mr-ui/utils/get-window';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoProps: {
        autoPlay: true,
        loop: true,
        controls: undefined
      }
    };
  }

  componentDidMount() {
    const reducedMotion =
      getWindow().matchMedia('(prefers-reduced-motion: reduce)').matches ||
      false;
    if (reducedMotion) {
      this.setState({
        videoProps: {
          autoPlay: undefined,
          loop: undefined,
          controls: true
        }
      });
    }
  }

  render() {
    return (
      <div>
        <video
          {...this.state.videoProps}
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
