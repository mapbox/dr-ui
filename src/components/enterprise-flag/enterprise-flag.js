import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@mapbox/mr-ui/badge';

export default class EnterpriseFlag extends React.Component {
  render() {
    const { props } = this;
    return (
      <Badge
        badgeText="Enterprise"
        coloring="blue"
        tooltipText={props.tooltipText}
      />
    );
  }
}

EnterpriseFlag.propTypes = {
  tooltipText: PropTypes.string
};

EnterpriseFlag.defaultProps = {
  tooltipText: 'This product is only available for Enterprise accounts.'
};
