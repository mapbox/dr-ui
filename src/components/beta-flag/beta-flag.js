import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@mapbox/mr-ui/badge';

export default class BetaFlag extends React.Component {
  render() {
    const { props } = this;
    return <Badge badgeText="Beta" tooltipText={props.tooltipText} />;
  }
}

BetaFlag.propTypes = {
  tooltipText: PropTypes.string
};

BetaFlag.defaultProps = {
  tooltipText:
    'This feature is in public beta and is subject to potential changes.'
};
