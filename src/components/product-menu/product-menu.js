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
    return (
      <PopoverTrigger
        content={this.props.children}
        popoverProps={popoverProps}
        onPopoverOpen={this.onPopoverOpen}
        onPopoverClose={this.onPopoverClose}
      >
        <div className="wmax240-ml wmax180-mm flex-parent flex-parent--space-between-main flex-parent--center-cross cursor-pointer border-b border-b--2 border--transparent border--blue-on-hover">
          <div className="flex-child txt-fancy txt-l txt-truncate">
            {this.props.productName}
          </div>
          <div className="flex-child">
            <Icon name="caret-down" inline={true} className="icon h30 w30" />
          </div>
        </div>
      </PopoverTrigger>
    );
  }
}

ProductMenu.propTypes = {
  productName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export { ProductMenu };
