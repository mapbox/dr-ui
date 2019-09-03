import React from 'react';
import PropTypes from 'prop-types';

export default class TroubleshootImage extends React.Component {
  render() {
    const { props } = this;
    return (
      <svg width={props.size} height={props.size} viewBox="0 0 108 108">
        <circle cx="53" cy="55" r="45" fill="#ffb9a9" />
        <path
          d="M25.008 35.898h37.658v41.91H30.718a5.71 5.71 0 0 1-5.71-5.71v-36.2z"
          fill="#fff"
        />
        <path
          d="M62.666 35.898H82.71v36.2a5.71 5.71 0 0 1-5.71 5.71H62.667v-41.91z"
          fill="#fc7e5b"
        />
        <circle cx="43.607" cy="62.393" r="9.393" fill="#fc7e5b" />
        <path
          fill="none"
          stroke="#fff"
          d="M37.5 62.32h12M43.518 56.5l-.018 11"
        />
        <path
          d="M55.448 48.654H21.971a1.652 1.652 0 0 1-1.536-2.259l4.388-11.104h37.843l-5.718 12.402a1.652 1.652 0 0 1-1.5.96z"
          fill="#d85a3d"
        />
        <path
          d="M69.562 48.654h16.785a1.652 1.652 0 0 0 1.534-2.264l-4.427-11.099H62.666l5.382 12.37a1.652 1.652 0 0 0 1.514.993z"
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
