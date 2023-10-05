function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../tag/tag';
import classnames from 'classnames';
class ProductMenu extends React.PureComponent {
  render() {
    const {
      tag,
      customTagProps,
      lightText,
      productName,
      homePage
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: "dr-ui--product-menu"
    }, tag && /*#__PURE__*/React.createElement("div", {
      className: "ml-neg3"
    }, /*#__PURE__*/React.createElement(Tag, _extends({
      theme: tag
    }, customTagProps, {
      small: true
    }))), /*#__PURE__*/React.createElement("a", {
      href: homePage,
      className: classnames('txt-fancy txt-l block', {
        'color-white color-gray-light-on-hover': lightText,
        'color-blue-on-hover color-text': !lightText
      })
    }, productName));
  }
}
ProductMenu.defaultProps = {
  lightText: false
};
export default ProductMenu;