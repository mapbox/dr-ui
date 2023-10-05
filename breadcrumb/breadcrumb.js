import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import classnames from 'classnames';
export default class Breadcrumb extends React.PureComponent {
  render() {
    const {
      links,
      location,
      themeWrapper
    } = this.props;
    const secondLastItem = links.length - 2;
    const Link = props => {
      const isSecondLastItem = secondLastItem === props.index;
      return /*#__PURE__*/React.createElement("span", {
        className: classnames('', {
          'none inline-block-mm': !isSecondLastItem
        })
      }, isSecondLastItem && /*#__PURE__*/React.createElement("span", {
        className: "color-gray-light inline-block none-mm pr6"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-left",
        inline: true
      })), /*#__PURE__*/React.createElement("a", {
        className: "link",
        href: props.href
      }, props.children), /*#__PURE__*/React.createElement("span", {
        className: "color-gray-light inline-block-mm none px6"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        inline: true
      })));
    };
    return links.length > 1 ? /*#__PURE__*/React.createElement("div", {
      className: `dr-ui--breadcrumb ${themeWrapper}`,
      "data-swiftype-index": "false"
    }, links.map((link, index) => {
      return link.path !== location.pathname ? /*#__PURE__*/React.createElement(Link, {
        key: link.title,
        href: link.path,
        index: index
      }, link.title) : /*#__PURE__*/React.createElement("span", {
        key: link.title,
        className: "color-gray none inline-block-mm"
      }, link.title);
    })) : null;
  }
}
Breadcrumb.defaultProps = {
  themeWrapper: ''
};