/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import NavigationAccordion from './NavigationAccordion';
import ProductMenu from './ProductMenu';
import Search from '@theme/Search';
import classnames from 'classnames';

function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const { siteConfig } = useDocusaurusContext();
  const { title } = siteConfig;
  // Global site tag
  const { tag } = siteConfig.customFields;

  // check if the site only has one page (one navTab with no sub pages)
  const isSinglePageSite =
    sidebar &&
    sidebar.length < 2 &&
    (!sidebar[0].items || sidebar[0].items.length === 0);
  return (
    <div
      data-swiftype-index="false"
      id="dr-ui--page-layout-sidebar"
      className="sticky-mm overflow-auto-mm scroll-styled px12-mm pb18-mm mb0-mm"
      style={{
        top: 88
      }}
    >
      <div className="mb6 border-b border--darken10">
        <div className="mb6">
          <ProductMenu
            productName={title}
            tag={tag || undefined}
            homePage={path}
          />
        </div>
        {
          /* {!hideSearch && (
          /* set height to prevent content shift as Search component loads  */
          <div className="mb6 h60 h36-mm">
            <Search site={'My Site'} />
          </div>
          /*  )} */
        }
      </div>
      <div
        className={classnames('color-text', {
          // if there is only one navTab (with no sub pages)
          // hide the NavigationAccordion on mobile
          'none block-mm': isSinglePageSite
        })}
      >
        <NavigationAccordion
          navigation={sidebar}
          location={path}
          currentPage={path}
        ></NavigationAccordion>
      </div>
    </div>
  );
}
export default React.memo(DocSidebarDesktop);
