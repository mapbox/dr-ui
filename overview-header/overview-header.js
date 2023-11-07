function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import IconText from '@mapbox/mr-ui/icon-text';
import classnames from 'classnames';
import Tag from '../tag/tag';
import { cardBoxShadow } from '../index-card/index-card';
class OverviewHeader extends React.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "buildTag", () => {
      const {
        tag,
        customTagProps
      } = this.props;
      const tagProps = {
        theme: tag,
        ...customTagProps
      };
      return /*#__PURE__*/React.createElement("span", {
        className: "ml12 inline-block relative",
        style: {
          top: '-7px'
        }
      }, /*#__PURE__*/React.createElement(Tag, tagProps));
    });
  }
  renderVersion() {
    const {
      version,
      changelogLink,
      lightText
    } = this.props;
    const versionEl = version !== undefined && /*#__PURE__*/React.createElement("span", {
      className: "mr6"
    }, "Current version: ", /*#__PURE__*/React.createElement("code", null, "v", version));
    const changelogLinkEl = changelogLink && /*#__PURE__*/React.createElement("a", {
      className: classnames('unprose link txt-underline', {
        'link--white': lightText
      }),
      href: changelogLink
    }, "View changelog");
    if (!versionEl && !changelogLinkEl) {
      return null;
    }
    return /*#__PURE__*/React.createElement("p", null, versionEl, changelogLinkEl);
  }
  renderFooter() {
    const {
      lightText,
      installLink,
      ghLink,
      contactLink
    } = this.props;
    const btnClasses = classnames('btn round unprose mr12 mb3', {
      'btn--white color-gray-dark': lightText,
      'btn--blue': !lightText
    });
    const installLinkEl = installLink && /*#__PURE__*/React.createElement("a", {
      href: installLink,
      className: btnClasses
    }, "Install");
    const ghLinkEl = ghLink && /*#__PURE__*/React.createElement("a", {
      href: ghLink,
      className: classnames('block unprose link', {
        'link--white': lightText
      })
    }, /*#__PURE__*/React.createElement(IconText, {
      iconBefore: "github",
      inline: true
    }, "Contribute on GitHub"));
    const contactLinkEl = contactLink && /*#__PURE__*/React.createElement("a", {
      href: contactLink,
      className: btnClasses
    }, "Contact us");
    if (!installLinkEl && !ghLinkEl && !contactLinkEl) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "mb24 flex-mm flex--center-cross"
    }, installLinkEl, contactLinkEl, ghLinkEl);
  }
  render() {
    const {
      features,
      theme = '',
      lightText,
      title,
      tag,
      description,
      image,
      highlightColor,
      card,
      titleIcon
    } = this.props;
    const featuresList = features && features.map(feature => /*#__PURE__*/React.createElement("li", {
      key: feature,
      className: "flex"
    }, /*#__PURE__*/React.createElement("div", {
      className: classnames('flex-child-no-shrink mr6', {
        'color-gray': !lightText,
        'color-white': lightText
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      inline: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-child-grow"
    }, feature)));
    const overviewHeaderContent = /*#__PURE__*/React.createElement("div", {
      className: classnames(`dr-ui--overview-header prose pr60-mxl ${theme}`, {
        'border-b border--gray-light': !theme && !card,
        round: theme,
        'py12 px24': theme || card,
        'color-white': lightText,
        mb24: !card,
        mb12: card
      })
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex--center-cross"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-child-grow"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex--center-cross flex--row-reverse flex--end-main"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "mb6 txt-fancy"
    }, title, tag && this.buildTag(this.props)), titleIcon && /*#__PURE__*/React.createElement("div", {
      className: "mr18 w36 h36 relative"
    }, titleIcon)), description && /*#__PURE__*/React.createElement("p", {
      className: "txt-l txt-fancy-regular color-gray-deep"
    }, description), this.renderVersion(), featuresList && /*#__PURE__*/React.createElement("ul", {
      className: "unprose mb18"
    }, featuresList), this.renderFooter()), image && /*#__PURE__*/React.createElement("div", {
      className: "flex-child-ml flex-child-no-shrink w300-mxl align-r"
    }, /*#__PURE__*/React.createElement("div", {
      className: "none block-mxl"
    }, image))));
    if (card) {
      return /*#__PURE__*/React.createElement("div", {
        className: "flex overflow-hidden round-bold mt18 mb30",
        style: {
          boxShadow: cardBoxShadow
        }
      }, card && /*#__PURE__*/React.createElement("div", {
        className: `flex-child-no-shrink bg-${highlightColor}`,
        style: {
          width: 7
        }
      }), overviewHeaderContent);
    }
    return overviewHeaderContent;
  }
}
OverviewHeader.defaultProps = {
  lightText: false
};
export default OverviewHeader;