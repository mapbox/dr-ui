import React from 'react';
import PropTypes from 'prop-types';
import PopoverTrigger from '@mapbox/react-popover-trigger';
import Icon from '@mapbox/react-icon';

const popoverProps = {
  placement: 'bottom',
  themePopover:
    'round shadow-darken25 viewport-almost-but-not-always scroll-auto scroll-styled'
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
        <div className="fl wmax240-ml wmax180-mm flex-parent flex-parent--space-between-main flex-parent--center-cross">
          <div className="flex-child inline-block txt-fancy txt-l cursor-pointer border-b border-b--2 border--white border--blue-on-hover txt-truncate">
            {this.props.product} SDK for {this.props.platform}
          </div>
          <Icon
            name="caret-down"
            inline={true}
            className="flex-child fr icon h30 w30"
          />
        </div>
      </PopoverTrigger>
    );
  }
}

ProductMenu.propTypes = {
  platform: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export { ProductMenu };
