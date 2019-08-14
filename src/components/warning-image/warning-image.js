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
          d="M30 15.7c-1.3 0-2.7.7-3.3 1.8l-9.6 20.4c-1.1 1.8 0 4.4 2.4 4.4h20.9c2.4 0 3.6-2.7 2.4-4.4l-9.6-20.4c-.5-1.2-1.9-1.8-3.2-1.8zm0 6.6c1.3 0 2.2.9 2.2 2.2V29c0 1.3-.9 2.2-2.2 2.2-1.3 0-2.2-.9-2.2-2.2v-4.4c0-1.4.9-2.3 2.2-2.3zm0 11.1c1.3 0 2.2.9 2.2 2.2s-.9 2.2-2.2 2.2c-1.3 0-2.2-.9-2.2-2.2s.9-2.2 2.2-2.2z"
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
