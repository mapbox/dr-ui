import React from 'react';
import PropTypes from 'prop-types';
import Player from './player';
import Iframe from './iframe';

export default class Video extends React.Component {
  render() {
    const { src, title, iframe, themeVideoContainer } = this.props;
    return iframe ? (
      <Iframe
        themeVideoContainer={themeVideoContainer}
        src={src}
        title={title}
      />
    ) : (
      <Player
        themeVideoContainer={themeVideoContainer}
        src={src}
        title={title}
      />
    );
  }
}

Video.defaultProps = {
  iframe: false
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  themeVideoContainer: PropTypes.string,
  iframe: PropTypes.bool // if true, load with iframe. If false (default), load with player.
};
