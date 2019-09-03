import React from 'react';
import PropTypes from 'prop-types';

export default class NewImage extends React.Component {
  render() {
    const { props } = this;
    return (
      <svg width={props.size} height={props.size} viewBox="0 0 60 60">
        <circle fill="#83e5af" cx="29.4" cy="30.3" r="25" />
        <path
          fill="#3dbc7d"
          d="M39.6 26.4c0 5.4-7.8 14.9-10.1 17.9-2.4-3-10.1-12.5-10.1-17.9s5.2-10.1 10.1-10.1 10.1 4.8 10.1 10.1z"
        />
      </svg>
    );
  }
}

NewImage.propTypes = {
  size: PropTypes.number
};

NewImage.defaultProps = {
  size: 60
};
