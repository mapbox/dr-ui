import React from 'react';
import PropTypes from 'prop-types';

export default class TroubleshootImage extends React.Component {
  render() {
    const { props } = this;
    return (
      <svg width={props.size} height={props.size} viewBox="0 0 108 108">
        <circle cx="53" cy="55" r="45" fill="#ffb9a9" />
        <path
          d="M25.0084,35.8985H62.6662a0,0,0,0,1,0,0V77.808a0,0,0,0,1,0,0H30.7175a5.7091,5.7091,0,0,1-5.7091-5.7091v-36.2A0,0,0,0,1,25.0084,35.8985Z"
          fill="#fff"
        />
        <path
          d="M62.6662,35.8985H82.71a0,0,0,0,1,0,0v36.2a5.7091,5.7091,0,0,1-5.7091,5.7091H62.6662a0,0,0,0,1,0,0V35.8985A0,0,0,0,1,62.6662,35.8985Z"
          fill="#fc7e5b"
        />
        <circle cx="43.607" cy="62.393" r="9.393" fill="#fc7e5b" />
        <line
          x1="37.5"
          y1="62.3197"
          x2="49.5"
          y2="62.3197"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <line
          x1="43.5179"
          y1="56.5"
          x2="43.5"
          y2="67.5"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <path
          d="M55.4484,48.6536H21.9706a1.6516,1.6516,0,0,1-1.536-2.2586l4.388-11.1038H62.6662l-5.718,12.4023A1.6516,1.6516,0,0,1,55.4484,48.6536Z"
          fill="#d85a3d"
        />
        <path
          d="M69.5624,48.6536H86.3467A1.6516,1.6516,0,0,0,87.8808,46.39L83.4536,35.2911H62.6662l5.3816,12.37A1.6516,1.6516,0,0,0,69.5624,48.6536Z"
          fill="#d85a3d"
        />
      </svg>
    );
  }
}

TroubleshootImage.propTypes = {
  size: PropTypes.number
};

TroubleshootImage.defaultProps = {
  size: 60
};
