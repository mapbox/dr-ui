import React from 'react';
import PropTypes from 'prop-types';
import BetaFlag from '../beta-flag/beta-flag';

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
        {props.beta ? (
          <span className="ml12">
            <BetaFlag />
          </span>
        ) : (
          ''
        )}
      </a>
    );
  }
}

ProductMenu.propTypes = {
  productName: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  beta: PropTypes.bool,
  lightText: PropTypes.bool,
  homePage: PropTypes.string.isRequired
};

ProductMenu.defaultProps = {
  beta: false,
  lightText: false
};

export default ProductMenu;
