import React from 'react';
import PropTypes from 'prop-types';

export default class GlossaryImage extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <svg width={props.size} height={props.size} viewBox="0 0 108 108">
        <circle fill="#FFCC99" cx="50" cy="50" r="50" />
        <ellipse
          transform="matrix(0.6389 -0.7693 0.7693 0.6389 -18.4907 44.561)"
          fill="#EF882B"
          cx="38.2"
          cy="42"
          rx="21.4"
          ry="21.4"
        />
        <path
          fill="#FCA148"
          d="M50,51.5l0.5-0.6c1.4-1.6,3.8-1.9,5.4-0.5l21.7,18c1.6,1.4,1.9,3.8,0.5,5.4l-0.5,0.6
          c-1.4,1.6-3.8,1.9-5.4,0.5l-21.7-18C48.8,55.6,48.6,53.1,50,51.5z"
        />
        <path
          fill="#FF9933"
          d="M61.1,65.6l4.8-5.8c1.4-1.6,3.8-1.9,5.4-0.5l12.3,10.2c1.6,1.4,1.9,3.8,0.5,5.4l-4.8,5.8
          c-1.4,1.6-3.8,1.9-5.4,0.5L61.6,71C59.9,69.7,59.7,67.3,61.1,65.6z"
        />
        <ellipse
          transform="matrix(0.6389 -0.7693 0.7693 0.6389 -17.0778 42.2176)"
          fill="#FCA148"
          cx="36.4"
          cy="39.3"
          rx="21.4"
          ry="21.4"
        />
        <ellipse
          transform="matrix(0.6389 -0.7693 0.7693 0.6389 -16.897 41.7131)"
          fill="#FFFFFF"
          cx="36"
          cy="38.9"
          rx="14.7"
          ry="14.7"
        />
        <path
          fill="none"
          stroke="#F8B854"
          strokeWidth="4"
          strokeLinecap="round"
          strokeMiterlimit="10"
          d="M69.5,63.2l7.9,6.6"
        />
        <path
          fill="none"
          stroke="#FF9933"
          strokeWidth="4"
          strokeLinecap="round"
          strokeMiterlimit="10"
          d="M36.2,33.5l-5.7,10.3
          M36.6,33.5l5.7,10.3 M32.9,42l7.1,0"
        />
      </svg>
    );
  }
}

GlossaryImage.propTypes = {
  size: PropTypes.number
};

GlossaryImage.defaultProps = {
  size: 60
};
