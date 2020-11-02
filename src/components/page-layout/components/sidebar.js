import React from 'react';
import PropTypes from 'prop-types';
import NavigationAccordion from '../../navigation-accordion';
import ProductMenu from '../../product-menu/product-menu';

export default class Sidebar extends React.Component {
  getSidebarContent = () => {
    const {
      location,
      navigation,
      children,
      constants,
      parentPath
    } = this.props;
    return (
      <NavigationAccordion
        constants={constants}
        navigation={navigation.navTabs}
        location={location}
        parentPage={parentPath}
      >
        {children}
      </NavigationAccordion>
    );
  };

  render() {
    const { constants, navigation } = this.props;
    const { SITE, BASEURL } = constants;
    const { title, tag, path } = navigation;

    return (
      <div
        data-swiftype-index="false"
        id="dr-ui--page-layout-sidebar"
        className="sticky-mm"
        style={{ top: 0 }}
      >
        <div className="my12">
          <ProductMenu
            productName={title || SITE}
            tag={tag || undefined}
            homePage={`${BASEURL}/${path || ''}`}
          />
        </div>
        {this.getSidebarContent()}
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
