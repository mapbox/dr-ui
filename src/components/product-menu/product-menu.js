import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../tag/tag';
import classnames from 'classnames';

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
      <span className="flex-child mx6">
        <Tag {...tagProps} />
      </span>
    );
  };

  render() {
    const { props } = this;
    return (
      <div className="flex-parent">
        <a
          href={props.homePage}
          className={classnames(
            'wmax240-ml wmax180-mm txt-fancy txt-l block txt-truncate',
            {
              ' color-white color-gray-light-on-hover': props.lightText,
              'color-blue-on-hover': !props.lightText
            }
          )}
        >
          {props.productName}
        </a>
        {props.tag && this.buildTag(props)}
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
