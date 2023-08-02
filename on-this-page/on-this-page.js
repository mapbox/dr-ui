function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import { AsideHeading, buildSections, HeadingIcon, getActiveHeaderAnchor } from './helpers';
import classnames from 'classnames';
import debounce from 'debounce';

// check if client body width is >= 1200
const isMXL = typeof document !== 'undefined' ? document.body.clientWidth >= 1200 : false;
export default class OnThisPage extends React.PureComponent {
  constructor(props) {
    super(props);
    // set the active link based on the heading that is scrolled into view
    _defineProperty(this, "setActiveLink", () => {
      const {
        topOffset
      } = this.props;
      const activeHeaderAnchor = getActiveHeaderAnchor(topOffset);
      // if activeHeaderAnchor has an id, set it as the lastActiveLink
      if (activeHeaderAnchor && activeHeaderAnchor.id) {
        this.setState({
          lastActiveLink: activeHeaderAnchor.id
        });
      }
    });
    // if the h2 or a (sub) h3 id matches `lastActiveLink` return true
    _defineProperty(this, "isActive", heading => {
      const {
        lastActiveLink
      } = this.state;
      return heading.children && heading.children.filter(f => f.id === lastActiveLink).length > 0 || heading.id === lastActiveLink;
    });
    this.state = {
      lastActiveLink: undefined
    };
  }
  componentDidMount() {
    // on larger screens
    if (isMXL) {
      // create a debounced event listener on "scroll"
      this.onScroll = debounce(this.setActiveLink, 50);
      document.addEventListener('scroll', this.onScroll, {
        passive: true
      });
      // set active link on load
      this.setActiveLink();
    }
  }
  componentWillUnmount() {
    // on larger screens, tear down event listener
    if (isMXL) document.removeEventListener('scroll', this.onScroll);
  }
  render() {
    const {
      headings,
      themeWrapper
    } = this.props;
    const {
      lastActiveLink
    } = this.state;
    if (!headings) return /*#__PURE__*/React.createElement("div", null);
    const sections = buildSections(headings);

    // eslint-disable-next-line react/prop-types
    const Headings = _ref => {
      let {
        headings,
        isChild,
        active
      } = _ref;
      if (!headings || !headings.length) {
        return null;
      }
      return /*#__PURE__*/React.createElement("ul", {
        className: classnames('', {
          none: isChild && !active,
          'block pl12': isChild && active,
          my6: isChild
        })
      }, headings.map(heading => {
        return /*#__PURE__*/React.createElement("li", {
          key: heading.id,
          className: classnames('mb3', {
            'mb6-mxl': !isChild
          })
        }, /*#__PURE__*/React.createElement("a", {
          style: {
            wordBreak: 'break-word'
          },
          href: `#${heading.id}`,
          className: classnames('link inline-block', {
            'link--blue': heading.id === lastActiveLink,
            'link--gray': heading.id !== lastActiveLink
          })
        }, heading.icon && /*#__PURE__*/React.createElement(HeadingIcon, {
          name: heading.icon
        }), heading.value), /*#__PURE__*/React.createElement(Headings, {
          isChild: true,
          active: this.isActive(heading),
          headings: heading.children
        }));
      }));
    };
    return /*#__PURE__*/React.createElement("nav", {
      "aria-labelledby": "on-this-page",
      className: `dr-ui--on-this-page ${themeWrapper}`
    }, /*#__PURE__*/React.createElement(AsideHeading, {
      id: "on-this-page"
    }, "On this page"), /*#__PURE__*/React.createElement(Headings, {
      headings: sections
    }));
  }
}
OnThisPage.defaultProps = {
  topOffset: 50,
  themeWrapper: ''
};