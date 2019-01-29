import React from 'react';
import PropTypes from 'prop-types';

class ProductMenu extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <a
        href={props.homePage}
        className={`wmax240-ml wmax180-mm txt-fancy txt-l block txt-truncate${
          props.lightText
            ? ' color-white color-gray-light-on-hover'
            : ' color-blue-on-hover'
        }`}
      >
        {props.productName}
      </a>
    );
  }
}

ProductMenu.propTypes = {
  productName: PropTypes.string.isRequired,
  lightText: PropTypes.bool,
  homePage: PropTypes.string.isRequired
};

ProductMenu.defaultProps = {
  lightText: false
};

export default ProductMenu;
