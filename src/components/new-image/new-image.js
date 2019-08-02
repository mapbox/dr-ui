import React from 'react';
import PropTypes from 'prop-types';

export default class NewImage extends React.Component {
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
              d="M13.7,6.7c0,2.5-3.6,6.9-4.7,8.3c-1.1-1.4-4.7-5.8-4.7-8.3S6.7,2,9,2S13.7,4.2,13.7,6.7z"
            />
          </svg>
        </div>
      </div>
    );
  }
}

NewImage.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string
};
