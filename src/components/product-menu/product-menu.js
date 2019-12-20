import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../tag/tag';

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
        {props.tag ? (
          <span className="inline-block ml6 relative" style={{ top: '-2px' }}>
            <Tag theme={props.tag} />
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
  tag: PropTypes.oneOf(['legacy', 'beta', 'fundamentals', 'new', 'custom']),
  lightText: PropTypes.bool,
  homePage: PropTypes.string.isRequired
};

ProductMenu.defaultProps = {
  lightText: false
};

export default ProductMenu;
