import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Content from './components/content';
import Sidebar from './components/sidebar';
import PageLayoutTopbar from './components/topbar';
import { findHasSection, findParentPath } from './utils';

export default class PageLayout extends React.Component {
  render() {
    const {
      location,
      navigation,
      constants,
      sidebarTheme,
      topBarSticker
    } = this.props;

    const { layout } = this.props.frontMatter;
    // determine's if this is a single or multli-level site (the latter has sections)
    const hasSection = findHasSection(navigation, location.pathname);
    // get the parent's path, we need this for the top nav
    const parentPath = findParentPath(navigation, location.pathname);
    // if page has `section` then switch to multi-page
    const switchedNavigation = hasSection
      ? navigation[hasSection.path]
      : navigation;

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
            {layout !== 'full' && (
              <div className={`col col--4-mm col--12 ${sidebarTheme}`}>
                <Sidebar
                  {...this.props}
                  navigation={switchedNavigation}
                  parentPath={parentPath}
                />
              </div>
            )}
            <div
              className={classnames('col col--12', {
                'col--8-mm': layout !== 'full'
              })}
            >
              <Content {...this.props} parentPath={parentPath} />
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
    hideFeedback: PropTypes.bool,
    layout: PropTypes.oneOf(['page', 'accordion', 'example', 'full']),
    hideTitle: PropTypes.bool
  }),
  location: PropTypes.object.isRequired,
  sidebarTheme: PropTypes.string,
  parentPath: PropTypes.string,
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
  AppropriateImage: PropTypes.func, // pass the local AppropriateImage component to use with "example" layout
  topBarSticker: PropTypes.bool, // disable TopBarSticker
  includeFilterBar: PropTypes.bool
};

PageLayout.defaultProps = {
  sidebarTheme: 'bg-gray-faint',
  frontMatter: {
    layout: 'page',
    hideTitle: false
  },
  includeFilterBar: false
};
