function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import BackToTopButton from '../back-to-top-button/back-to-top-button';
import ErrorBoundary from '../error-boundary/error-boundary';
import Breadcrumb from '../breadcrumb/breadcrumb';
import Content from './components/content';
import Sidebar from './components/sidebar';
import { filterOptions } from './components/example-index';
import { findHasSection, findParentPath, createUniqueCrumbs } from './utils';
import classnames from 'classnames';

// default configuration for each layout
// every option can be overriden in the frontMatter
import layoutConfig from './layout.config.js';

/* prevent flex-child from overflowing in Edge */
const edgeFlexChild = {
  width: '100%'
};
export default class PageLayout extends React.PureComponent {
  constructor() {
    super(...arguments);
    // render the page's sidebar
    _defineProperty(this, "renderSidebar", (config, switchedNavigation, parentPath) => {
      const {
        constants
      } = this.props;
      return /*#__PURE__*/React.createElement("div", {
        className: `flex-child-no-shrink w-full w180-mm w240-ml mr36-mm ${config.sidebarTheme}`,
        style: edgeFlexChild
      }, /*#__PURE__*/React.createElement(Sidebar, _extends({}, this.props, {
        navigation: switchedNavigation,
        constants: constants,
        parentPath: parentPath,
        layoutConfig: config
      })));
    });
    // render the page's content
    _defineProperty(this, "renderContent", (config, parentPath, parent, hasSection) => {
      const {
        constants,
        frontMatter,
        location,
        domain,
        navigation
      } = this.props;
      // If multi-structured show section name
      // If single-structured show site name
      const sectionItem = hasSection ? [{
        title: hasSection.title,
        path: `${constants.BASEURL}/${hasSection.path}/`
      }] : [{
        title: constants.SITE,
        path: `${constants.BASEURL}/`
      }];
      // If there is a parent page, include it. This is typically
      // the content type.
      const parentItem = parent && parent.title ? [{
        title: parent.title,
        path: parent.parent
      }] : [];
      // If the page is part of a group of guides, include another
      // level between the content type and the current page.
      const grandparentPath = frontMatter.groupOrder && parent.parent.match(/(.*\/)(.*\/)$/)[1];
      const grandparentItem = frontMatter.groupOrder ? [{
        title: navigation.hierarchy[grandparentPath].title,
        path: grandparentPath
      }] : [];
      const crumbs = createUniqueCrumbs([
      // Always include the domain.
      domain, ...sectionItem, ...grandparentItem, ...parentItem,
      // Always include the current page.
      {
        title: frontMatter.title,
        path: location.pathname
      }]);
      return /*#__PURE__*/React.createElement("div", {
        className: "flex-child-grow",
        style: edgeFlexChild
      }, !frontMatter.hideBreadcrumbs && /*#__PURE__*/React.createElement(Breadcrumb, {
        themeWrapper: classnames('pt3 pb12', {
          // hide breadcrumbs on mobile if sidebar is on the page
          // show breadcrumbs on mobile if sidebar is hidden from the page
          'none block-mm': !frontMatter.hideSidebar
        }),
        domain: false,
        location: location,
        links: crumbs
      }), /*#__PURE__*/React.createElement(Content, _extends({}, this.props, {
        parentPath: parentPath,
        layoutConfig: config
      })));
    });
  }
  render() {
    const {
      location,
      navigation,
      frontMatter
    } = this.props;
    const {
      navOrder,
      noShellHeaderBuffer
    } = frontMatter;

    // determine's if this is a single or multi-structured site (the latter has sections)
    const hasSection = findHasSection(navigation, location.pathname);
    // get the parent's path, we need this for the top nav
    const parentPath = findParentPath(navigation, location.pathname);
    // if page has `section` then switch to multi-page
    const switchedNavigation = hasSection ? navigation[hasSection.path] : navigation;

    // set default layout to page
    if (!frontMatter.layout) frontMatter.layout = 'page';

    // if layout is example and has navOrder assume 'exampleIndex' layout
    const config = {
      ...(navOrder && frontMatter.layout === 'example' ? layoutConfig.exampleIndex : layoutConfig[frontMatter.layout]),
      ...frontMatter
    };
    return /*#__PURE__*/React.createElement(ErrorBoundary, null, !noShellHeaderBuffer && /*#__PURE__*/React.createElement("div", {
      className: "shell-header-buffer"
    }), /*#__PURE__*/React.createElement("div", {
      className: "wmax1800 w-11/12-mm w-11/12-ml mx-auto px24 px0-mm mt24 mt18-mm mb18"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-mm"
    }, !frontMatter.hideSidebar && /*#__PURE__*/React.createElement(ErrorBoundary, null, this.renderSidebar(config, switchedNavigation, parentPath)), /*#__PURE__*/React.createElement(ErrorBoundary, null, this.renderContent(config, parentPath, navigation.hierarchy[location.pathname], hasSection)))), /*#__PURE__*/React.createElement("div", {
      className: "fixed block none-mm mx24 my24 z5 bottom right"
    }, /*#__PURE__*/React.createElement(BackToTopButton, null)));
  }
}
PageLayout.defaultProps = {
  domain: {
    title: 'All docs',
    path: 'https://docs.mapbox.com'
  },
  hideSearch: false
};