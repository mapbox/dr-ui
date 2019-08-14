import React from 'react';
import PropTypes from 'prop-types';

export default class BookletImage extends React.Component {
  render() {
    const { props } = this;
    return (
      <svg width={props.size} height={props.size} viewBox="0 0 108 108">
        <circle cx="53" cy="55" r="45" fill="#83e5af" />
        <path
          d="M63.2378,70H39.8685a5.8873,5.8873,0,0,0-5.7527,4.8416,6.137,6.137,0,0,0-.1092.8683A5.8982,5.8982,0,0,0,39.7622,82H63.77A5.341,5.341,0,0,0,69,76.5544V64A5.8847,5.8847,0,0,1,63.2378,70Z"
          fill="#30aa67"
        />
        <rect
          x="39"
          y="38"
          width="34"
          height="39"
          rx="4.7443"
          ry="4.7443"
          fill="#3dbc7d"
        />
        <path
          d="M63.2378,70.2569A5.7919,5.7919,0,0,0,69,64.4358V32.2566A4.2566,4.2566,0,0,0,64.7434,28H38.2566A4.2566,4.2566,0,0,0,34,32.2566V75h.107a5.9177,5.9177,0,0,1,5.8179-4.7431"
          fill="#4bd18b"
        />
        <rect
          x="39"
          y="33"
          width="25"
          height="15"
          rx="2.1365"
          ry="2.1365"
          fill="#3dbc7d"
        />
      </svg>
    );
  }
}

BookletImage.propTypes = {
  size: PropTypes.number
};

BookletImage.defaultProps = {
  size: 60
};
