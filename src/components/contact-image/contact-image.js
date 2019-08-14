import React from 'react';
import PropTypes from 'prop-types';

export default class ContactImage extends React.Component {
  render() {
    const { props } = this;
    return (
      <svg width={props.size} height={props.size} viewBox="0 0 108 108">
        <circle cx="53" cy="54" r="45" fill="#ada0ea" />
        <rect
          x="25.7418"
          y="44.8515"
          width="31.0206"
          height="28.5389"
          rx="8.6736"
          ry="8.6736"
          transform="translate(0.6265 -0.4322) rotate(0.6049)"
          fill="#9179e8"
        />
        <polygon
          points="29.114 79.175 55.156 56 29 55.724 29.114 79.175"
          fill="#9179e8"
        />
        <rect
          x="34.5315"
          y="32.6076"
          width="44.6696"
          height="33.5022"
          rx="8.6082"
          ry="8.6082"
          transform="translate(0.5243 -0.5976) rotate(0.6049)"
          fill="#784def"
        />
        <polygon
          points="69.805 75.432 39.181 47 70.534 47.331 69.805 75.432"
          fill="#784def"
        />
        <circle
          cx="45"
          cy="49"
          r="3"
          transform="translate(-4.4724 93.4802) rotate(-89.3951)"
          fill="#fff"
        />
        <circle
          cx="56"
          cy="49"
          r="3"
          transform="translate(6.4115 104.4796) rotate(-89.3951)"
          fill="#fff"
        />
        <circle
          cx="67"
          cy="49"
          r="3"
          transform="translate(17.2954 115.4789) rotate(-89.3951)"
          fill="#fff"
        />
      </svg>
    );
  }
}

ContactImage.propTypes = {
  size: PropTypes.number
};

ContactImage.defaultProps = {
  size: 60
};
