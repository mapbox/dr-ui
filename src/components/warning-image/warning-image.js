import React from 'react';
import PropTypes from 'prop-types';

export default class WarningImage extends React.Component {
  render() {
    const { props } = this;
    return (
      <div
        style={{
          padding: '5px',
          width: `${props.size}px`,
          height: `${props.size}px`
        }}
      >
        <div className={`bg-${props.color || 'blue'}-light px3 round-full`}>
          <svg viewBox="0 0 18 18" className={`color-${props.color || 'blue'}`}>
            <title>warning</title>
            <path
              style={{ fill: 'currentColor' }}
              d="M9,3C8.4,3,7.8,3.3,7.5,3.8L3.2,13c-0.5,0.8,0,2,1.1,2H9h4.7c1.1,0,1.6-1.2,1.1-2l-4.3-9.2C10.2,3.3,9.6,3,9,3z M9,6
c0.6,0,1,0.4,1,1v2c0,0.6-0.4,1-1,1S8,9.6,8,9V7C8,6.4,8.4,6,9,6z M9,11c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S8.4,11,9,11z"
            />
          </svg>
        </div>
      </div>
    );
  }
}

WarningImage.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string
};
