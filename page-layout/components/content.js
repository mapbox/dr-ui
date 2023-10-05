function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
import ExampleIndex from './example-index.js';
import classnames from 'classnames';
import OnThisPage from '../../on-this-page/on-this-page';
import Feedback from '../../feedback/feedback';
import OverviewHeader from '../../overview-header/overview-header';
import NextPage from './next-page.js';
import GuideGroupIndex from './guide-group-index.js';
import SignupBanner from './signup-banner.js';
import DiscordCTA from './discord-cta.js';
export default class Content extends React.PureComponent {
  render() {
    const {
      children,
      layoutConfig,
      filters,
      parentPath,
      frontMatter,
      AppropriateImage
    } = this.props;
    const {
      showCards
    } = layoutConfig;
    // if showCards is true, use the ExampleIndex component
    // else use the default content wrapper to display the content
    return showCards ? /*#__PURE__*/React.createElement(ExampleIndex, _extends({}, this.props, {
      filters: filters[parentPath],
      frontMatter: frontMatter,
      sectionPath: parentPath,
      AppropriateImage: AppropriateImage
    }), children) : /*#__PURE__*/React.createElement(ContentWrapper, this.props, children);
  }
}
export class ContentWrapper extends React.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "renderFeedback", () => {
      const {
        location,
        section,
        layoutConfig
      } = this.props;
      const {
        layout
      } = layoutConfig;
      const {
        SITE,
        FORWARD_EVENT_WEBHOOK
      } = this.props.constants;
      return /*#__PURE__*/React.createElement(Feedback, _extends({}, this.props, {
        type: layout === 'example' ? 'example' : undefined,
        site: SITE,
        location: location,
        section: section,
        webhook: FORWARD_EVENT_WEBHOOK
      }));
    });
    _defineProperty(this, "renderAside", () => {
      const {
        frontMatter,
        layoutConfig
      } = this.props;
      const {
        onThisPage
      } = frontMatter;
      const headings = frontMatter.headings || this.props.headings;
      const showOnThisPage = onThisPage ? onThisPage : layoutConfig.onThisPage;
      const showToc = headings && headings.length > 0 && showOnThisPage;
      return /*#__PURE__*/React.createElement("aside", {
        "data-swiftype-index": "false",
        className: "overflow-auto-mxl scroll-styled sticky-mxl color-text pb18",
        style: {
          top: '88px'
        }
      }, this.props.customAside ? this.props.customAside : undefined, showToc && headings && headings.length > 0 && /*#__PURE__*/React.createElement(OnThisPage, {
        headings: headings,
        themeWrapper: "mb24-mxl mb18"
      }), /*#__PURE__*/React.createElement("div", {
        className: "mb18"
      }, /*#__PURE__*/React.createElement(SignupBanner, null)), /*#__PURE__*/React.createElement("div", {
        className: "my18 color-text none block-mxl mb18"
      }, /*#__PURE__*/React.createElement(DiscordCTA, null)));
    });
  }
  render() {
    const {
      children,
      frontMatter,
      layoutConfig,
      navigation,
      location
    } = this.props;
    const {
      title,
      unProse,
      hideFeedback,
      layout,
      overviewHeader
    } = frontMatter;
    const {
      hideTitle
    } = layoutConfig;

    // check frontmatter then default to layout config
    const showFeedback = hideFeedback ? !hideFeedback : !layoutConfig.hideFeedback;

    // do not show h1 if `hideTitle: true` or `overviewHeader` is enabled
    const showTitle = !hideTitle && !overviewHeader;
    return /*#__PURE__*/React.createElement("div", {
      id: "docs-content"
    }, showTitle && /*#__PURE__*/React.createElement("div", {
      className: classnames('col col--auto prose', {
        'w-2/3-mxl w-full': layoutConfig.aside !== 'none'
      })
    }, /*#__PURE__*/React.createElement("h1", {
      className: "txt-fancy"
    }, title)), overviewHeader && /*#__PURE__*/React.createElement(OverviewHeader, overviewHeader), /*#__PURE__*/React.createElement("div", {
      className: "grid grid--gut60"
    }, (layoutConfig.aside !== 'none' || this.props.customAside) && /*#__PURE__*/React.createElement("div", {
      className: "dr-ui--page-layout-aside col w-full w-1/3-mxl"
    }, this.renderAside(showFeedback)), /*#__PURE__*/React.createElement("div", {
      className: classnames('col col--auto', {
        'w-2/3-mxl w-full pb18': layoutConfig.aside !== 'none',
        prose: unProse !== true
      })
    }, children, frontMatter.group && /*#__PURE__*/React.createElement(GuideGroupIndex, {
      pathname: location.pathname,
      navigation: navigation,
      frontMatter: frontMatter
    }), frontMatter.groupOrder && /*#__PURE__*/React.createElement("div", {
      className: "mt36"
    }, /*#__PURE__*/React.createElement(NextPage, {
      pathname: location.pathname,
      navigation: navigation,
      frontMatter: frontMatter
    })), showFeedback && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "pt60 pb30"
    }, this.renderFeedback()), /*#__PURE__*/React.createElement("div", {
      className: classnames('my36 color-text', {
        'block none-mxl': layout !== 'full' // hide feedback at bottom of page on larger screens unless layout is full (always show it on the bottom)
      })
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex mx-neg6 flex--wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full w-1/2-ml px6 flex-child-no-shrink mb18"
    }, /*#__PURE__*/React.createElement(SignupBanner, null)), /*#__PURE__*/React.createElement("div", {
      className: "w-full w-1/2-ml px6 flex-child-no-shrink mb18"
    }, /*#__PURE__*/React.createElement(DiscordCTA, null))))))));
  }
}