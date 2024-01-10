import React from 'react';
import PropTypes from 'prop-types';

function NavigationItem(props) {
  const colorBasedClasses = props.darkText
    ? 'navigation-menu-button color-gray-dark color-blue-on-hover'
    : 'navigation-menu-button link link--white';

  return (
    <div className="mx6 mx18-mxl" style={{ lineHeight: 1 }}>
      <a
        className={`py6 txt-s txt-bold ${colorBasedClasses}`}
        href={props.href}
      >
        {props.children}
      </a>
    </div>
  );
}

NavigationItem.propTypes = {
  darkText: PropTypes.bool,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export { NavigationItem };
