import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../tag/tag';
import classnames from 'classnames';

class ProductMenu extends React.PureComponent {
  render() {
    const { tag, customTagProps, lightText, productName, homePage } =
      this.props;
    return (
      <div className="dr-ui--product-menu">
        {tag && (
          <div className="ml-neg3">
            <Tag theme={tag} {...customTagProps} small={true} />
          </div>
        )}
        <a
          href={homePage}
          className={classnames('txt-fancy txt-l block', {
            'color-white color-gray-light-on-hover': lightText,
            'color-blue-on-hover color-text': !lightText
          })}
        >
          {productName}
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
