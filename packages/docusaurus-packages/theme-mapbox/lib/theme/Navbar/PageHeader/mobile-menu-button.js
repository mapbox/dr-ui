import React from 'react';
import PropTypes from 'prop-types';

function MobileMenuButton(props) {
  let menuButtonClasses = 'block';
  if (!props.darkText) {
    menuButtonClasses += ' link link--white';
  } else {
    menuButtonClasses += ' color-black';
  }
  return (
    <button
      id="mobile-nav-trigger-toggle"
      aria-label="Toggle navigation"
      className={menuButtonClasses}
      data-test="mobile-nav-trigger-toggle"
    >
      <svg
        id="mobile-nav-trigger-menu"
        viewBox="0 0 18 18"
        className="mobile-nav__trigger icon transition"
        style={{
          height: 36,
          width: 36
        }}
      >
        <g>
          <path
            className="shell-mobile-nav__trigger__bar--top"
            d="M4.2,6h9.6C14.5,6,15,5.6,15,5s-0.5-1-1.2-1H4.2C3.5,4,3,4.4,3,5S3.5,6,4.2,6z"
          />
          <path
            className="shell-mobile-nav__trigger__bar--middle"
            d="M13.8,8H4.2C3.5,8,3,8.4,3,9s0.5,1,1.2,1h9.6c0.7,0,1.2-0.4,1.2-1S14.5,8,13.8,8z"
          />
          <path
            className="shell-mobile-nav__trigger__bar--bottom"
            d="M13.8,12H4.2C3.5,12,3,12.4,3,13s0.5,1,1.2,1h9.6c0.7,0,1.2-0.4,1.2-1S14.5,12,13.8,12z"
          />
        </g>
      </svg>
    </button>
  );
}

MobileMenuButton.propTypes = {
  darkText: PropTypes.bool
};

export { MobileMenuButton };
