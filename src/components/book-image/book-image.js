import React from 'react';
import PropTypes from 'prop-types';

export default class BookImage extends React.Component {
  render() {
    const { props } = this;
    return (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 108 108"
      >
        <title>help</title>
        <circle cx="53" cy="55" r="45" fill="#47b9f3" />
        <rect
          x="27.2732"
          y="41.2042"
          width="52.2541"
          height="34.5008"
          rx="5.2192"
          ry="5.2192"
          transform="translate(0.6201 -0.5605) rotate(0.6049)"
          fill="#1274c6"
        />
        <path
          d="M64.1,34.8478s-9.9116-.76-10.0085,8.42-.0922,24.7363-.0922,24.7363,4.823-3.0455,8.79-3.0037l15.4041.1626A1.7881,1.7881,0,0,0,80,63.3935L80.281,36.792A1.7732,1.7732,0,0,0,78.5267,35Z"
          fill="#309ef9"
        />
        <path
          d="M43.971,34.157s10.21-.5625,10.1107,8.821S53.997,68,53.997,68s-5.25-2.9574-9.3313-3.0005L28.78,64.8314A1.7863,1.7863,0,0,1,27,63.04l.2881-27.2857A1.7863,1.7863,0,0,1,29.1058,34Z"
          fill="#0d84fd"
        />
      </svg>
    );
  }
}

BookImage.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};
