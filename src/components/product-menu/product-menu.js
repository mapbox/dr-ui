import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../tag/tag';
import classnames from 'classnames';

class ProductMenu extends React.PureComponent {
  buildTag = (item) => {
    const tagProps = {
      theme: item.tag,
      customLabel: item.customTagProps
        ? item.customTagProps.customLabel
        : undefined,
      customTooltipText: item.customTagProps
        ? item.customTagProps.customTooltipText
        : undefined,

      customBackground: item.customTagProps
        ? item.customTagProps.customBackground
        : undefined,
      customColor: item.customTagProps
        ? item.customTagProps.customColor
        : undefined,
      customBorder: item.customTagProps
        ? item.customTagProps.customBorder
        : undefined
    };
    return (
      <div className="ml-neg3">
        <Tag {...tagProps} small={true} />
      </div>
    );
  };

  render() {
    const { props } = this;
    return (
      <div className="dr-ui--product-menu">
        {props.tag && this.buildTag(props)}
        <a
          href={props.homePage}
          className={classnames('txt-fancy txt-l block', {
            'color-white color-gray-light-on-hover': props.lightText,
            'color-blue-on-hover': !props.lightText
          })}
        >
          {props.productName}
        </a>
      </div>
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
    customBackground: PropTypes.string.isRequired,
    customColor: PropTypes.string.isRequired,
    customBorder: PropTypes.string.isRequired
  }),
  lightText: PropTypes.bool,
  homePage: PropTypes.string.isRequired
};

ProductMenu.defaultProps = {
  lightText: false
};

export default ProductMenu;
