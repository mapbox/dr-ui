function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
import NavigationAccordion from '../../navigation-accordion';
import ProductMenu from '../../product-menu/product-menu';
import Search from '../../search/search';
import classnames from 'classnames';
export default class Sidebar extends React.PureComponent {
  render() {
    const {
      constants,
      navigation,
      location,
      children,
      parentPath,
      hideSearch
    } = this.props;
    const {
      SITE,
      BASEURL
    } = constants;
    const {
      title,
      tag,
      path,
      navTabs
    } = navigation;
    // check if the site only has one page (one navTab with no sub pages)
    const isSinglePageSite = navigation && navTabs && navTabs.length < 2 && (!navTabs[0].pages || navTabs[0].pages.length === 0);
    return /*#__PURE__*/React.createElement("div", {
      "data-swiftype-index": "false",
      id: "dr-ui--page-layout-sidebar",
      className: "sticky-mm overflow-auto-mm scroll-styled px12-mm pb18-mm mb0-mm",
      style: {
        top: 88
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb6 border-b border--darken10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb6"
    }, /*#__PURE__*/React.createElement(ProductMenu, {
      productName: title || SITE,
      tag: tag || undefined,
      homePage: `${BASEURL}/${path || ''}`
    })), !hideSearch &&
    /*#__PURE__*/
    /* set height to prevent content shift as Search component loads */
    React.createElement("div", {
      className: "mb6 h60 h36-mm"
    }, /*#__PURE__*/React.createElement(Search, _extends({}, this.props, {
      site: SITE
    })))), /*#__PURE__*/React.createElement("div", {
      className: classnames('color-text', {
        // if there is only one navTab (with no sub pages)
        // hide the NavigationAccordion on mobile
        'none block-mm': isSinglePageSite
      })
    }, /*#__PURE__*/React.createElement(NavigationAccordion, {
      constants: constants,
      navigation: navTabs,
      location: location,
      parentPage: parentPath
    }, children)));
  }
}