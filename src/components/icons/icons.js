import React from 'react';
import PropTypes from 'prop-types';

export default class RightArrow extends React.PureComponent {
  render() {
    const { isHovered } = this.props;
    return (
      <svg
        className="transition"
        style={{
          marginLeft: isHovered ? '15px' : '10px',
          opacity: isHovered ? '1' : '0'
        }}
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.292 0L10.314 5.022V5.49L5.292 10.494L3.87 9.072L6.732 6.21L5.508 6.264H0V4.212H5.508L6.696 4.266L3.87 1.44L5.292 0Z"
          fill="#3478F3"
        />
      </svg>
    );
  }
}

RightArrow.defaultProps = {
  isHovered: false
};

RightArrow.propTypes = {
  isHovered: PropTypes.bool
};
