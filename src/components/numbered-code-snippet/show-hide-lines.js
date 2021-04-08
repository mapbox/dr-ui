import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

const containerClasses =
  'wfull bg-gray-faint color-gray-dark color-gray-on-hover pl12 py6 cursor-pointer txt-s';

class HideLines extends React.PureComponent {
  render() {
    return (
      <div>
        <div
          className={`${containerClasses} h30 bg-darken5`}
          onClick={this.props.onClick}
        >
          <Icon name="chevron-down" size={12} inline={true} /> hide lines
        </div>
        {this.props.children}
        <div
          className={`${containerClasses} h30 bg-darken5`}
          onClick={this.props.onClick}
        >
          <Icon name="chevron-up" size={12} inline={true} /> hide lines
        </div>
      </div>
    );
  }
}

HideLines.propTypes = {
  /** The content that should be hidden on click. */
  children: PropTypes.node.isRequired,
  /** A callback that is invoked when the line is clicked. */
  onClick: PropTypes.func.isRequired
};

class ShowLines extends React.PureComponent {
  render() {
    return (
      <div
        className={`${containerClasses} h30 flex-parent flex-parent--center-cross`}
        onClick={this.props.onClick}
      >
        <div className="flex-child">
          <div className="mb-neg3">
            <Icon name="chevron-up" size={12} />
          </div>
          <div className="mt-neg3">
            <Icon name="chevron-down" size={12} />
          </div>
        </div>
        <div className="flex-child" style={{ marginLeft: '8px' }}>
          show hidden lines
        </div>
      </div>
    );
  }
}

ShowLines.propTypes = {
  /** A callback that is invoked when the line is clicked. */
  onClick: PropTypes.func.isRequired
};

export { HideLines, ShowLines };
