import React from 'react';
import PropTypes from 'prop-types';
import BetaFlag from '../beta-flag/beta-flag';
import EnterpriseFlag from '../enterprise-flag/enterprise-flag';

class ProductMenu extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <a
        href={props.homePage}
        className={`wmax240-ml wmax180-mm txt-fancy txt-l block${
          props.lightText
            ? ' color-white color-gray-light-on-hover'
            : ' color-blue-on-hover'
        }`}
      >
        {props.productName}
        {props.enterprise ? (
          <span className="inline-block ml6 relative" style={{ top: '-2px' }}>
            <EnterpriseFlag />
          </span>
        ) : (
          ''
        )}
        {props.beta ? (
          <span className="inline-block ml6 relative" style={{ top: '-2px' }}>
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
  enterprise: PropTypes.bool,
  beta: PropTypes.bool,
  lightText: PropTypes.bool,
  homePage: PropTypes.string.isRequired
};

ProductMenu.defaultProps = {
  enterprise: false,
  beta: false,
  lightText: false
};

export default ProductMenu;
