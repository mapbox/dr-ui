import React from 'react';
import PropTypes from 'prop-types';

export default class WarningImage extends React.Component {
  render() {
    const { props } = this;

    const fill = {
      red: { bg: '#ffb9a9', icon: '#d85a3d' },
      orange: { bg: '#fbcea6', icon: '#ba7334' }
    };
    return (
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 60 60"
        className={`color-${this.props.color}`}
      >
        <circle fill={fill[this.props.color].bg} cx="30" cy="30" r="25" />
        <path
          fill={fill[this.props.color].icon}
          d="M30,15.7c-1.3,0-2.7,0.7-3.3,1.8l-9.6,20.4c-1.1,1.8,0,4.4,2.4,4.4H30h10.4c2.4,0,3.6-2.7,2.4-4.4l-9.6-20.4
      	C32.7,16.3,31.3,15.7,30,15.7z M30,22.3c1.3,0,2.2,0.9,2.2,2.2V29c0,1.3-0.9,2.2-2.2,2.2c-1.3,0-2.2-0.9-2.2-2.2v-4.4
      	C27.8,23.2,28.7,22.3,30,22.3z M30,33.4c1.3,0,2.2,0.9,2.2,2.2s-0.9,2.2-2.2,2.2c-1.3,0-2.2-0.9-2.2-2.2S28.7,33.4,30,33.4z"
        />
      </svg>
    );
  }
}

WarningImage.propTypes = {
  size: PropTypes.number,
  color: PropTypes.oneOf(['red', 'orange']).isRequired
};

WarningImage.defaultProps = {
  size: 60
};
