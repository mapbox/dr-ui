import React from 'react';
import PropTypes from 'prop-types';
import { ORIGIN_DOCS_PRODUCTION } from './constants';
import navigationMenuData from './navigation-menu-data.json';

function Logo(props) {
  const { darkText, mini } = props;

  let logoClasses = 'mb-logo';
  if (!darkText) {
    logoClasses += ' mb-logo--white';
  }
  const logoStyles = {};
  if (mini) {
    logoStyles.width = 30;
    logoStyles.height = 42;
    logoStyles.backgroundSize = '132px 42px';
  }

  let border = null;
  if (!mini) {
    let borderClasses = 'h24 mx12';
    borderClasses += darkText ? ' bg-black' : ' bg-white';
    border = (
      <div
        className={borderClasses}
        style={{ width: 1 }}
        data-subtitle-bar-dark={darkText}
      />
    );
  }

  let nameClasses = 'txt-bold ';
  if (navigationMenuData.language === 'jp') nameClasses += 'txt-s ';
  else nameClasses += 'txt-l ';
  nameClasses += darkText
    ? ' color-black color-blue-dark-on-hover'
    : ' link link--white';
  if (mini) {
    nameClasses += ' ml6';
  }

  return (
    <div className="flex flex--center-cross">
      <a
        href={navigationMenuData.homepage}
        aria-label="Mapbox"
        className={logoClasses}
        style={logoStyles}
      />
      {border}
      <a
        href={
          navigationMenuData.origin_docs_production || ORIGIN_DOCS_PRODUCTION
        }
        className={nameClasses}
        style={{ marginBottom: 2 }}
        data-subtitle-dark={darkText}
      >
        {navigationMenuData.logoSiteTitle}
      </a>
    </div>
  );
}

Logo.propTypes = {
  darkText: PropTypes.bool,
  mini: PropTypes.bool
};

Logo.defaultProps = {
  darkText: false,
  mini: false
};

export { Logo };
