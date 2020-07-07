import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import debounce from 'debounce';

import SidebarAccordion from './layouts/accordion/sidebar';
import SidebarPage from './layouts/page/sidebar';
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
      headings,
      topics,
      includeFilterBar
    } = this.props;

    const { layout, navOrder } = frontMatter;

    switch (layout) {
      case 'accordion':
        return (
          <SidebarAccordion
            navItems={navigation.accordion[parentPath]}
            frontMatter={frontMatter}
            location={location}
            headings={headings}
          >
            {children}
          </SidebarAccordion>
        );
      case 'page':
        return (
          <SidebarPage headings={frontMatter.headings}>{children}</SidebarPage>
        );
      case 'example':
        return (
          <SidebarExamples
            topics={topics[parentPath].topics}
            hideSubItems={navOrder ? true : false}
            sectionPath={parentPath}
            includeFilterBar={includeFilterBar}
          />
        );
    }
  };

  render() {
    const { stickyEnabled, bottomBoundaryValue, topValue } = this.state;

    return (
      <div data-swiftype-index="false">
        <Sticky
          enabled={stickyEnabled}
          bottomBoundary={bottomBoundaryValue}
          innerZ={3}
          top={topValue}
        >
          <div className="sidebarNarrowClasses" id="dr-ui--page-layout-sidebar">
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
    accordion: PropTypes.object
  }).isRequired,
  headings: PropTypes.array,
  frontMatter: PropTypes.shape({
    layout: PropTypes.oneOf(['page', 'accordion', 'example', 'full']),
    navOrder: PropTypes.number,
    headings: PropTypes.array
  }).isRequired,
  children: PropTypes.node,
  parentPath: PropTypes.string,
  topics: PropTypes.object,
  includeFilterBar: PropTypes.bool
};
