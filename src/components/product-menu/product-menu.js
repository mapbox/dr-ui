import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../tag/tag';

class ProductMenu extends React.PureComponent {
  buildTag = item => {
    const tagProps = {
      theme: item.tag,
      customLabel: item.customTagProps
        ? item.customTagProps.customLabel
        : undefined,
      customTooltipText: item.customTagProps
        ? item.customTagProps.customTooltipText
        : undefined,
      customStyles: item.customTagProps
        ? item.customTagProps.customStyles
        : undefined
    };
    return (
      <span className="inline-block ml6 relative" style={{ top: '-2px' }}>
        <Tag {...tagProps} />
      </span>
    );
  };

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
        {props.tag && this.buildTag(props)}
      </a>
    );
  }
}

ProductMenu.propTypes = {
  productName: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  tag: PropTypes.oneOf(['legacy', 'beta', 'fundamentals', 'new', 'custom']),
  /* Required if tag is set to `custom` */
  customTagProps: PropTypes.shape({
    customLabel: PropTypes.string.isRequired,
    customTooltipText: PropTypes.string.isRequired,
    customStyles: PropTypes.shape({
      background: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      borderColor: PropTypes.string.isRequired
    }).isRequired
  }),
  lightText: PropTypes.bool,
  homePage: PropTypes.string.isRequired
};

ProductMenu.defaultProps = {
  lightText: false
};

export default ProductMenu;
