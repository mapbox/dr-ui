import React from 'react';
import PropTypes from 'prop-types';

export default class ContactImage extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <svg width={props.size} height={props.size} viewBox="0 0 108 108">
        <circle cx="53" cy="54" r="45" fill="#ada0ea" />
        <rect
          x="25.742"
          y="44.852"
          width="31.021"
          height="28.539"
          rx="8.674"
          ry="8.674"
          transform="rotate(.605 41.25 59.125)"
          fill="#9179e8"
        />
        <path
          fill="#9179e8"
          d="M29.114 79.175L55.156 56 29 55.724l.114 23.451z"
        />
        <rect
          x="34.532"
          y="32.608"
          width="44.67"
          height="33.502"
          rx="8.608"
          ry="8.608"
          transform="rotate(.605 56.866 49.362)"
          fill="#784def"
        />
        <path
          fill="#784def"
          d="M69.805 75.432L39.181 47l31.353.331-.729 28.101z"
        />
        <circle
          cx="45"
          cy="49"
          r="3"
          transform="rotate(-89.395 45 49)"
          fill="#fff"
        />
        <circle
          cx="56"
          cy="49"
          r="3"
          transform="rotate(-89.395 56 49)"
          fill="#fff"
        />
        <circle
          cx="67"
          cy="49"
          r="3"
          transform="rotate(-89.395 67 49)"
          fill="#fff"
        />
      </svg>
    );
  }
}

ContactImage.propTypes = {
  size: PropTypes.number
};

ContactImage.defaultProps = {
  size: 60
};
