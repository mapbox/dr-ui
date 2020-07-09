import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Content from './components/content';
import Sidebar from './components/sidebar';
import PageLayoutTopbar from './components/topbar';
import { findHasSection, findParentPath } from './utils';

// default configuration for each layout
// each option can be overriden in the frontMatter
const layoutConfig = {
  page: {
    sidebar: 'toc', // heading table of contents
    sidebarTheme: '' // blank sidebar background
  },
  accordion: {
    sidebar: 'accordion', // NavigationAccordion sidebar
    sidebarTheme: 'bg-gray-faint' // sidebar background
  },
  example: {
    sidebar: 'sectioned', // SectionedNavigation sidebar
    hideSubItems: false, // show headings and subitems in sitebar
    sidebarTheme: 'bg-gray-faint', // sidebar background
    includeFilterBar: false // hide filter bar
  },
  exampleIndex: {
    sidebar: 'sectioned', // SectionedNavigation sidebar
    hideSubItems: true, // only show sidebar headings
    showCards: true, // show example cards
    hideFeedback: true, // hide feedback module
    sidebarTheme: 'bg-gray-faint', // sidebar background
    includeFilterBar: false // hide filter bar
  },
  full: {
    sidebar: 'none' // no sidebar
  }
};

export default class PageLayout extends React.Component {
  render() {
    const {
      location,
      navigation,
      constants,
      topBarSticker,
      frontMatter
    } = this.props;

    const { navOrder } = frontMatter;

    // determine's if this is a single or multli-level site (the latter has sections)
    const hasSection = findHasSection(navigation, location.pathname);
    // get the parent's path, we need this for the top nav
    const parentPath = findParentPath(navigation, location.pathname);
    // if page has `section` then switch to multi-page
    const switchedNavigation = hasSection
      ? navigation[hasSection.path]
      : navigation;

    // set default layout to page
    if (!frontMatter.layout) frontMatter.layout = 'page';

    // if layout is example and has navOrder assume 'exampleIndex' layout
    const config = {
      ...(navOrder && frontMatter.layout === 'example'
        ? layoutConfig.exampleIndex
        : layoutConfig[frontMatter.layout]),
      ...frontMatter
    };

    return (
      <div>
        <div className="shell-header-buffer" />
        <PageLayoutTopbar
          constants={constants}
          navigation={switchedNavigation}
          parentPath={parentPath}
          topBarSticker={topBarSticker}
        />
        <div className="limiter">
          <div className="grid">
            {config.sidebar !== 'none' && (
              <div className={`col col--4-mm col--12 ${config.sidebarTheme}`}>
                <Sidebar
                  {...this.props}
                  navigation={switchedNavigation}
                  parentPath={parentPath}
                  layoutConfig={config}
                />
              </div>
            )}
            <div
              className={classnames('col col--12', {
                'col--8-mm': config.sidebar !== 'none'
              })}
            >
              <Content
                {...this.props}
                parentPath={parentPath}
                layoutConfig={config}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
  frontMatter: PropTypes.shape({
    headings: PropTypes.array,
    navOrder: PropTypes.number,
    layout: PropTypes.oneOf([
      'page',
      'accordion',
      'example',
      'exampleIndex',
      'full'
    ]),
    hideTitle: PropTypes.bool,
    hideFeedback: PropTypes.bool,
    includeFilterBar: PropTypes.bool
  }),
  location: PropTypes.object.isRequired,
  navigation: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.string,
    navTabs: PropTypes.array,
    path: PropTypes.string,
    accordion: PropTypes.object
  }).isRequired,
  topics: PropTypes.object,
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired,
    FORWARD_EVENT_WEBHOOK: PropTypes.shape({
      production: PropTypes.string.isRequired,
      staging: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  AppropriateImage: PropTypes.func, // pass the local AppropriateImage component to use with "exampleIndex" layout
  topBarSticker: PropTypes.bool // disable TopBarSticker
};
