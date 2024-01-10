import React from 'react';
import PropTypes from 'prop-types';
import { NavigationItem } from './navigation-item';
import { MobileMenuButton } from './mobile-menu-button';
import { MobileNavigation } from './mobile-navigation';
import { Logo } from './logo';
import navigationMenuData from './navigation-menu-data.json';

const USER_MENU_STYLE = {
  minWidth: 66,
  maxWidth: 120
};

function PageHeader(props) {
  const { hideNav, searchComponent } = props;
  let logoOverlay = null;
  if (!props.darkText) {
    logoOverlay = (
      <div className="mobile-nav__logo--overlay absolute top left">
        <Logo darkText={true} mini={true} />
      </div>
    );
  }

  return (
    <header
      className="inline-block w-full z1 bg-gray-faint border--gray-lighter border-b"
      data-swiftype-index="false"
      style={{
        height: 69
      }}
    >
      {/* Wide Viewport Menu */}
      {/* If you change the vertical positioning here, make a corresponding change in InstallPageShell */}
      <div
        className={
          'none wmax1800 w-11/12-mm w-11/12-ml mx-auto px24 px0-mm mt18 mb18 flex-mm flex--center-cross flex--space-between-main'
        }
      >
        <Logo darkText={props.darkText} />
        {!hideNav && (
          <div className="flex-child-grow flex flex--center-cross flex--center-main">
            <div className="flex flex--center-cross flex--end-main">
              {navigationMenuData.nav.map((nav) => (
                <NavigationItem
                  key={nav.href}
                  href={nav.href}
                  darkText={props.darkText}
                >
                  {nav.title}
                </NavigationItem>
              ))}
            </div>
          </div>
        )}
        <div className="flex">
          {hideNav && searchComponent && (
            <div className="w240 mr18">{searchComponent}</div>
          )}

          <div>
            {/* The user menu mounts to this component */}
            <div
              id="mbx-user-menu"
              style={USER_MENU_STYLE}
              data-user-menu-trigger={true}
            />
          </div>
        </div>
      </div>

      {/* Narrow Viewport Menu */}
      {/* If you change the vertical positioning here, make a corresponding change in InstallPageShell */}
      <div
        id="page-header-content"
        className={
          'none-mm wmax1800 w-11/12-mm w-11/12-ml mx-auto px24 px0-mm py12 z2 relative'
        }
      >
        <div className="flex flex--center-cross">
          {!hideNav && (
            <div className="flex-child-no-shrink ml-neg6 mr12">
              <MobileMenuButton darkText={props.darkText} />
            </div>
          )}
          <div className="flex-child-grow relative mb-logo__wrapper">
            <Logo darkText={props.darkText} mini={true} />
            {logoOverlay}
          </div>
          <div className="flex-child-no-shrink">
            {/* The user menu mounts to this component */}
            <div
              id="mbx-user-menu-mobile"
              style={USER_MENU_STYLE}
              data-user-menu-trigger={true}
            />
          </div>
        </div>
      </div>
      <MobileNavigation />
    </header>
  );
}

PageHeader.propTypes = {
  darkText: PropTypes.bool,
  hideNav: PropTypes.bool,
  searchComponent: PropTypes.node
};

PageHeader.defaultProps = {
  darkText: false
};

export { PageHeader };
