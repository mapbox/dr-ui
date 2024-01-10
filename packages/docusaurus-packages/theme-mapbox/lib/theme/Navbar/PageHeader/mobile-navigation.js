import React from 'react';
import navigationMenuData from './navigation-menu-data.json';
import { MOBILE_HEADER_HEIGHT, ORIGIN_DOCS_PRODUCTION } from './constants';

function MobileNavigation() {
  return (
    <div className="z1 absolute top left right w-full">
      {/* Backdrop behind mobile nav popover */}
      <div
        id="mobile-nav-backdrop"
        data-test="mobile-nav-backdrop"
        className="absolute bottom left right shell-mobile-nav__backdrop"
        style={{
          top: MOBILE_HEADER_HEIGHT,
          backgroundImage: `linear-gradient(to bottom, transparent, rgba(31, 51, 73, .5))`
        }}
      />

      {/* Uses inline styles so it can be animated */}
      <div
        id="mobile-nav-menu"
        data-test="mobile-nav-menu"
        className="absolute z5 w-full shell-animated-menu"
        style={{
          top: 0,
          right: 0
        }}
      >
        <div
          className="shadow-darken10-bold bg-white overflow-hidden px24"
          style={{ paddingTop: MOBILE_HEADER_HEIGHT }}
        >
          <div className="pb24">
            {navigationMenuData.nav.map((nav) => (
              <a key={nav.href} href={nav.href} className="block py6">
                {nav.title}
              </a>
            ))}
          </div>
          <div className="border-t border--gray-light py24">
            <a
              href={
                navigationMenuData.origin_docs_production ||
                ORIGIN_DOCS_PRODUCTION
              }
              className="color-blue"
            >
              {navigationMenuData.all}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MobileNavigation };
