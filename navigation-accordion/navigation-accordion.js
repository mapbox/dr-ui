function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@mapbox/mr-ui/icon';
import Tag from '../tag/tag';
export default class NavigationAccordion extends React.Component {
  constructor() {
    super();
    // add item or remove it if it already exists
    _defineProperty(this, "setToggle", e => {
      const label = e && e.target ? e.target.value : e;
      const {
        activeToggles
      } = this.state;
      const labelIndex = activeToggles.indexOf(label);
      if (labelIndex > -1) {
        // label already exists, remove it from activeToggles
        activeToggles.splice(labelIndex, 1);
      } else {
        // label does not exist, add it to activeToggles
        activeToggles.push(label);
      }
      this.setState({
        activeToggles: activeToggles
      });
    });
    _defineProperty(this, "renderTag", page => {
      return /*#__PURE__*/React.createElement("span", {
        className: "ml6 relative",
        style: {
          top: -1
        }
      }, /*#__PURE__*/React.createElement(Tag, _extends({
        theme: page.tag
      }, page.customTagProps, {
        small: true,
        icon: true
      })));
    });
    this.state = {
      activeToggles: []
    };
  }
  componentDidMount() {
    // check if client body width is >= 640
    const isMM = typeof document !== 'undefined' ? document.body.clientWidth >= 640 : false;
    // if device width is >= 640
    // determine which section is active and activate its toggle
    const {
      parentPage,
      navigation
    } = this.props;
    if (isMM && parentPage) {
      navigation.forEach(nav => {
        if (parentPage.indexOf(nav.path) > -1) {
          this.setToggle(nav.title);
        }
      });
    }
  }
  renderHeader(page, hasChildren, isActiveToggle, isActiveSection, sectionId, external) {
    const {
      title,
      path
    } = page;
    return /*#__PURE__*/React.createElement("div", {
      className: classnames('px12 flex txt-uppercase txt-fancy round-full w-full', {
        'bg-blue-faint color-blue-deep': isActiveSection,
        'flex flex--space-between-main': hasChildren
      })
    }, /*#__PURE__*/React.createElement("a", {
      href: path,
      className: "flex-child-grow color-blue-on-hover py6 py3-mm txt-spacing05"
    }, title, page.tag && this.renderTag(page), external && /*#__PURE__*/React.createElement("span", {
      className: "ml3 color-gray"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: 'share',
      inline: true
    }))), hasChildren && /*#__PURE__*/React.createElement("button", {
      className: "flex-child-no-shrink color-blue-on-hover px12 px0-mm",
      onClick: this.setToggle,
      "aria-label": `Toggle ${title} menu`,
      "aria-controls": sectionId,
      "aria-expanded": isActiveToggle,
      value: title
    }, /*#__PURE__*/React.createElement(Icon, {
      name: isActiveToggle ? 'chevron-up' : 'chevron-down',
      inline: true
    })));
  }
  // Create list of grouped guides
  renderSubPages(subPages, activeItem) {
    const subs = subPages.map((subPage, index) => {
      return /*#__PURE__*/React.createElement("li", {
        key: subPage.title
      }, /*#__PURE__*/React.createElement("a", {
        href: subPage.path,
        className: classnames('pl12 inline-block w-full color-blue-on-hover border-l border--gray-light border-l--2', {
          'color-blue': activeItem === subPage.path,
          pb6: subPages.length - 1 !== index
        })
      }, subPage.title));
    });
    return /*#__PURE__*/React.createElement("ul", {
      className: "my6 ml3 txt-ms"
    }, subs);
  }
  renderBody(subItems, activeItem, sectionId) {
    const subItemEls = subItems.filter(page => !page.groupOrder || page.groupOrder === undefined).map(page => /*#__PURE__*/React.createElement("li", {
      key: page.title
      // Required on parents containing tags to prevent unwanted scrollbars on IE
      ,
      className: classnames('mb3', {
        'overflow-hidden': page.tag
      })
    }, /*#__PURE__*/React.createElement("a", {
      className: classnames('inline-block w-full color-blue-on-hover', {
        'color-blue': activeItem === page.path
      }),
      href: page.path
    }, page.title, page.tag && this.renderTag(page)), activeItem && activeItem.includes(page.path) && page.subPages && this.renderSubPages(page.subPages, activeItem)));
    return /*#__PURE__*/React.createElement("ul", {
      id: sectionId,
      className: "mb12 ml12"
    }, subItemEls);
  }
  render() {
    const {
      navigation,
      parentPage,
      location
    } = this.props;
    const {
      activeToggles
    } = this.state;
    const activeItem = location.pathname;
    const items = navigation.map(pageSection => {
      const {
        title,
        id,
        path,
        pages,
        hideSubpages,
        external
      } = pageSection;
      // the section has sub pages
      const hasPages = pages && pages.length > 0 && !hideSubpages;
      // the section's toggle is active
      const isActiveToggle = activeToggles.indexOf(title) > -1;
      // the section is active
      const isActiveSection = parentPage && parentPage.indexOf(path) > -1;
      const sectionId = `menu-${id}`;
      return {
        header: this.renderHeader(pageSection, hasPages, isActiveToggle, isActiveSection, sectionId, external),
        body: isActiveToggle && hasPages ? this.renderBody(pages, activeItem, sectionId) : []
      };
    });
    const sidebarItems = items.map((item, index) => {
      return /*#__PURE__*/React.createElement("li", {
        key: index
      }, item.header, item.body);
    });
    return /*#__PURE__*/React.createElement("nav", {
      className: "mx-neg12"
    }, /*#__PURE__*/React.createElement("ul", null, sidebarItems));
  }
}