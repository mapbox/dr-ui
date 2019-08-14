import React from 'react';
import PropTypes from 'prop-types';

export default class BookImage extends React.Component {
  render() {
    const { props } = this;
    return (
      <svg width={props.size} height={props.size} viewBox="0 0 108 108">
        <circle cx="53" cy="55" r="45" fill="#47b9f3" />
        <rect
          x="27.273"
          y="41.204"
          width="52.254"
          height="34.501"
          rx="5.219"
          ry="5.219"
          transform="rotate(.605 53.4 58.455)"
          fill="#1274c6"
        />
        <path
          d="M64.1 34.848s-9.912-.76-10.008 8.42-.093 24.736-.093 24.736S58.822 64.96 62.79 65l15.404.163A1.788 1.788 0 0 0 80 63.393l.281-26.601A1.773 1.773 0 0 0 78.527 35z"
          fill="#309ef9"
        />
        <path
          d="M43.971 34.157s10.21-.563 10.11 8.821S53.998 68 53.998 68s-5.25-2.957-9.331-3L28.78 64.83A1.786 1.786 0 0 1 27 63.04l.288-27.286A1.786 1.786 0 0 1 29.106 34z"
          fill="#0d84fd"
        />
      </svg>
    );
  }
}

BookImage.propTypes = {
  size: PropTypes.number
};

BookImage.defaultProps = {
  size: 60
};
