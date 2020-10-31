import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import debounce from 'debounce';
import classnames from 'classnames';
import NavigationAccordion from '../../navigation-accordion';
import { findParentPath } from '../utils';

const sidebarContentStickyTop = 60;
const sidebarContentStickyTopNarrow = 0;

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomBoundaryValue: 0,
      stickyEnabled: false,
      topValue: 0
    };
    this.debounceHandleWindowResize = debounce(() => {
      const width = document.body.clientWidth;
      if (width < 640) {
        this.setState({
          topValue: sidebarContentStickyTopNarrow
        });
      } else {
        this.setState({
          topValue: sidebarContentStickyTop
        });
      }
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

  getParentPage() {
    const { navigation, location } = this.props;
    const pageIsTab = navigation.navTabs.some((tab) =>
      Object.prototype.hasOwnProperty.call(tab, location.pathname)
    );
    return pageIsTab
      ? location.pathname
      : findParentPath(navigation, location.pathname);
  }

  getSidebarContent = () => {
    const { location, navigation, children, constants } = this.props;

    return (
      <NavigationAccordion
        constants={constants}
        navigation={navigation}
        location={location}
        parentPage={this.getParentPage()}
      >
        {children}
      </NavigationAccordion>
    );
  };

  render() {
    const { stickyEnabled, bottomBoundaryValue, topValue } = this.state;
    const { customSidebar, topBarSticker } = this.props;
    // if topBarSticker is turned off (false), set topValue to 0
    const top = topBarSticker ? topValue : 0;
    return (
      <div data-swiftype-index="false">
        <Sticky
          enabled={stickyEnabled}
          bottomBoundary={bottomBoundaryValue}
          innerZ={3}
          top={top}
        >
          <div
            className={classnames('', {
              'viewport-almost-mm': !customSidebar && topBarSticker,
              'viewport-full-mm': !customSidebar && !topBarSticker, // if topbar sticker is not sticky, make sidebar go full height
              'scroll-auto-mm scroll-styled': !customSidebar
            })}
            id="dr-ui--page-layout-sidebar"
          >
            {customSidebar ? customSidebar : this.getSidebarContent()}
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
    accordion: PropTypes.object
  }).isRequired,
  frontMatter: PropTypes.shape({
    navOrder: PropTypes.number,
    headings: PropTypes.array,
    sidebarTitle: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  layoutConfig: PropTypes.shape({
    sidebar: PropTypes.oneOf(['none', 'toc', 'accordion', 'sectioned']),
    hideSubItems: PropTypes.bool,
    includeFilterBar: PropTypes.bool
  }),
  customSidebar: PropTypes.node,
  topBarSticker: PropTypes.bool,
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired
  }).isRequired
};
