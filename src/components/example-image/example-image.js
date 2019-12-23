import React from 'react';
import PropTypes from 'prop-types';

export default class ExampleImage extends React.Component {
  render() {
    const { props } = this;
    return (
      <svg width={props.size} height={props.size} viewBox="0 0 108 108">
        <circle fill="#FEDCED" cx="50" cy="50" r="50" />
        <path
          fill="#FD4296"
          d="M39.7,13.1l24.9,0c3.8,0,6.9,3.1,7,6.9l0.1,59.9c0,3.8-3.1,6.9-6.9,7l-24.9,0c-3.8,0-6.9-3.1-7-6.9
          l-0.1-59.9C32.8,16.3,35.9,13.1,39.7,13.1z"
        />
        <path
          fill="#FD8AC0"
          d="M35.3,13.1l24.9,0c3.8,0,6.9,3.1,7,6.9l0.1,59.9c0,3.8-3.1,6.9-6.9,7l-24.9,0c-3.8,0-6.9-3.1-7-6.9
          l-0.1-59.9C28.3,16.3,31.4,13.1,35.3,13.1z"
        />
        <path fill="#FEDCED" d="M32.8,22l31.2,0L64,74.8l-31.2,0L32.8,22z" />
        <path
          fill="#FFFFFF"
          d="M37.2,24l23.1,0c1,0,1.8,1.1,1.8,2.4l0,12c0,1.3-0.8,2.4-1.8,2.4l-23.1,0c-1,0-1.8-1.1-1.8-2.4l0-12
          C35.3,25,36.2,24,37.2,24z"
        />
        <path
          fill="none"
          stroke="#FD4296"
          strokeWidth="4"
          strokeLinecap="round"
          strokeMiterlimit="10"
          d="M45,68.9l7.5,0"
        />
        <path
          fill="#FD8AC0"
          d="M58.5,54.2c0-5.4-4.4-9.8-9.8-9.8c-0.1,0-0.2,0-0.3,0c-5.4,0.2-9.6,4.7-9.5,10.1c0.1,3.9,2.5,7.3,6.1,8.7
          l2.9,5c0.3,0.5,0.9,0.6,1.3,0.4c0.1-0.1,0.3-0.2,0.4-0.4l2.9-5.1C56.2,61.7,58.5,58.2,58.5,54.2z"
        />
        <ellipse
          transform="matrix(1 -1.361355e-03 1.361355e-03 1 -7.416176e-02 6.647271e-02)"
          fill="#FFFFFF"
          cx="48.8"
          cy="54.5"
          rx="4.4"
          ry="4.4"
        />
      </svg>
    );
  }
}

ExampleImage.propTypes = {
  size: PropTypes.number
};

ExampleImage.defaultProps = {
  size: 60
};
