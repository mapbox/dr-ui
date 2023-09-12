import React from 'react';
import PropTypes from 'prop-types';

// creates the video thumbnail with play button overlay
export class VideoThumbnail extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <div
          className="bg-darken75 round absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            height: '36%',
            padding: '4% 9% 1%'
          }}
        >
          <VideoPlayImage />
        </div>
        <div className="h-full mb24 mb0-ml">{children}</div>
      </React.Fragment>
    );
  }
}

VideoThumbnail.propTypes = {
  children: PropTypes.node.isRequired
};

// creates play button icon
export class VideoPlayImage extends React.PureComponent {
  render() {
    // if fallbackIcon, then use the icon wrapper
    // to add the circle background
    const IconWrapper = ({ wrap, children }) =>
      this.props.fallbackIcon ? wrap(children) : children;
    function handleIcon(children) {
      return (
        <div
          style={{ width: 55, height: 55, padding: '15px 12px 15px 18px' }}
          className="bg-purple-light round-full"
        >
          {children}
        </div>
      );
    }
    return (
      <IconWrapper wrap={handleIcon}>
        <svg
          viewBox="0 0 20 20"
          width="100%"
          focusable="false"
          aria-label="Play"
          role="img"
          fill={this.props.fallbackIcon ? '#7753eb' : '#fff'}
        >
          <polygon points="1,0 20,10 1,20" />
        </svg>
      </IconWrapper>
    );
  }
}

VideoPlayImage.defaultProps = {
  fallbackIcon: false
};

VideoPlayImage.propTypes = {
  fallbackIcon: PropTypes.bool
};
