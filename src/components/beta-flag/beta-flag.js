import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mapbox/mr-ui/tooltip';

export default class BetaFlag extends React.Component {
  render() {
    return (
      <Tooltip
        content={this.props.tooltipText}
        maxWidth="small"
        placement="top"
      >
        <div
          style={{
            backgroundColor: 'rgb(232, 245, 238)',
            color: 'rgb(27, 125, 79)'
          }}
          className="txt-s txt-bold round px6 ml6 inline-block cursor-default border border--green-light"
        >
          Beta
        </div>
      </Tooltip>
    );
  }
}

BetaFlag.propTypes = {
  tooltipText: PropTypes.string
};

BetaFlag.defaultProps = {
  tooltipText: 'This feature is in public beta and is subject to changes.'
};
