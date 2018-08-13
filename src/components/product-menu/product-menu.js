import React from 'react';
import PropTypes from 'prop-types';
import PopoverTrigger from '@mapbox/mr-ui/popover-trigger';
import Icon from '@mapbox/mr-ui/icon';

const popoverUserStyle = {
  style: {
    maxHeight: '90vh',
    minHeight: '100%'
  }
};
const popoverProps = {
  placement: 'bottom',
  themePopover: 'round shadow-darken25 scroll-auto scroll-styled bg-white',
  contentElementAttributes: popoverUserStyle
};

class ProductMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { clicked: false };

    this.onPopoverOpen = this.onPopoverOpen.bind(this);
    this.onPopoverClose = this.onPopoverClose.bind(this);
  }

  onPopoverOpen() {
    this.setState({ open: true });
  }

  onPopoverClose() {
    this.setState({ open: false });
  }

  render() {
    const { props } = this;
    return (
      <PopoverTrigger
        content={props.children}
        popoverProps={popoverProps}
        onPopoverOpen={this.onPopoverOpen}
        onPopoverClose={this.onPopoverClose}
      >
        <div
          className={`wmax240-ml wmax180-mm flex-parent flex-parent--space-between-main flex-parent--center-cross cursor-pointer border-b border-b--2 ${
            props.themeUnderline
          }`}
        >
          <div className={`flex-child ${props.themeText} txt-truncate`}>
            {props.productName}
          </div>
          <div className="flex-child">
            <Icon
              name="caret-down"
              inline={true}
              className={`icon h30 w30 ${props.themeIcon}`}
            />
          </div>
        </div>
      </PopoverTrigger>
    );
  }
}

ProductMenu.propTypes = {
  productName: PropTypes.string.isRequired,
  themeText: PropTypes.string,
  themeIcon: PropTypes.string,
  themeUnderline: PropTypes.string,
  children: PropTypes.node.isRequired
};

ProductMenu.defaultProps = {
  themeText: 'txt-fancy txt-l',
  themeIcon: '',
  themeUnderline: 'border--transparent border--blue-on-hover'
};

export default ProductMenu;
