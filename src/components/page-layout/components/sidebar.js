import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import debounce from 'debounce';
import NavigationAccordion from '../../navigation-accordion';
import ProductMenu from '../../product-menu/product-menu';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomBoundaryValue: 0,
      stickyEnabled: false
    };
    this.debounceHandleWindowResize = debounce(() => {
      const height = document.body.clientHeight;
      this.setState({
        bottomBoundaryValue: height - 150
      });
    }, 200);
  }

  componentDidMount() {
    this.debounceHandleWindowResize();
    setTimeout(() => {
      this.setState({ stickyEnabled: true });
    }, 500);
    window.addEventListener('resize', this.debounceHandleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceHandleWindowResize);
  }

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
    const { stickyEnabled, bottomBoundaryValue } = this.state;
    const { constants, navigation } = this.props;
    const { SITE, BASEURL } = constants;
    const { title, tag, path } = navigation;

    return (
      <div data-swiftype-index="false">
        <Sticky
          enabled={stickyEnabled}
          bottomBoundary={bottomBoundaryValue}
          innerZ={3}
          top={0}
        >
          <div id="dr-ui--page-layout-sidebar">
            <div className="my12 ml12">
              <ProductMenu
                productName={title || SITE}
                tag={tag || undefined}
                homePage={`${BASEURL}/${path || ''}`}
              />
            </div>
            {this.getSidebarContent()}
          </div>
        </Sticky>
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
