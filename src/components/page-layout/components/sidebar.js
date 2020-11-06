import React from 'react';
import PropTypes from 'prop-types';
import NavigationAccordion from '../../navigation-accordion';
import ProductMenu from '../../product-menu/product-menu';
import classnames from 'classnames';

export default class Sidebar extends React.Component {
  render() {
    const {
      constants,
      navigation,
      location,
      children,
      parentPath
    } = this.props;
    const { SITE, BASEURL } = constants;
    const { title, tag, path, navTabs } = navigation;
    return (
      <div
        data-swiftype-index="false"
        id="dr-ui--page-layout-sidebar"
        className="sticky-mm scroll-auto-mm scroll-styled viewport-almost-mm px12-mm"
        style={{ top: '10px' }}
      >
        <div className="my12 border-b border--darken10 pb12">
          <ProductMenu
            productName={title || SITE}
            tag={tag || undefined}
            homePage={`${BASEURL}/${path || ''}`}
          />
        </div>
        <div
          className={classnames('', {
            // if there is only one navTab, hide the NavigationAccordion on mobile
            'none block-mm': navigation && navTabs && navTabs.length < 2
          })}
        >
          <NavigationAccordion
            constants={constants}
            navigation={navTabs}
            location={location}
            parentPage={parentPath}
          >
            {children}
          </NavigationAccordion>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  location: PropTypes.object.isRequired,
  navigation: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.string,
    navTabs: PropTypes.array,
    path: PropTypes.string,
    hierarchy: PropTypes.object
  }).isRequired,
  frontMatter: PropTypes.shape({
    navOrder: PropTypes.number,
    headings: PropTypes.array,
    sidebarTitle: PropTypes.string
  }).isRequired,
  parentPath: PropTypes.string,
  children: PropTypes.node,
  layoutConfig: PropTypes.shape({
    hideSubItems: PropTypes.bool,
    includeFilterBar: PropTypes.bool
  }),
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired
  }).isRequired
};
