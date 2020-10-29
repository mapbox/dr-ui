import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import debounce from 'debounce';
import classnames from 'classnames';
import SidebarPage from './page-sidebar';
import SidebarExamples from './layouts/example/sidebar';

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

  getSidebarContent = () => {
    const {
      location,
      navigation,
      frontMatter,
      children,
      parentPath,
      topics,
      layoutConfig
    } = this.props;

    /* Should we support some of these other features as well?
    const { sidebarTitle } = frontMatter;
    const { hideSubItems, sidebar, includeFilterBar } = layoutConfig; */

    return (
      <SidebarPage navigation={navigation} location={location}>
        {children}
      </SidebarPage>
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
  parentPath: PropTypes.string,
  topics: PropTypes.object,
  layoutConfig: PropTypes.shape({
    sidebar: PropTypes.oneOf(['none', 'toc', 'accordion', 'sectioned']),
    hideSubItems: PropTypes.bool,
    includeFilterBar: PropTypes.bool
  }),
  customSidebar: PropTypes.node,
  topBarSticker: PropTypes.bool
};
