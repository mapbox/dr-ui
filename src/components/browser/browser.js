import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

class Browser extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <div className="shadow-darken25 round bg-white">
        <div className="bg-gray h30-mm h18 round-t">
          <div className="color-white flex-parent flex-parent--center-cross h30-mm h18 px6">
            <span className="color-red-light">
              <Icon name="circle" />
            </span>
            <span className="color-yellow-light">
              <Icon name="circle" />
            </span>
            <span className="color-green-light">
              <Icon name="circle" />
            </span>
          </div>
        </div>
        <div className="block-mm none">
          <div className="h30 bg-gray-faint color-gray flex-parent flex-parent--space-between-main px6 flex-parent--center-cross">
            <div
              style={{ width: '70px' }}
              className="flex-parent-inline flex-parent--space-between-main flex-parent--center-cross mr18"
            >
              <Icon name="arrow-left" />
              <Icon name="arrow-right" />
              <Icon name="rotate" />
            </div>
            <div className="w120 h18 bg-white round-full flex-child--grow px12" />
            <div
              style={{ width: '70px' }}
              className="flex-parent-inline flex-parent--space-between-main align-r flex-parent--center-cross ml18"
            >
              <Icon name="heart" />
              <Icon name="mapbox" />
              <Icon name="menu" />
            </div>
          </div>
        </div>
        {props.children}
      </div>
    );
  }
}

Browser.propTypes = {
  children: PropTypes.node.isRequired
};

export default Browser;
