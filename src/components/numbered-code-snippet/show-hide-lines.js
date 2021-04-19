import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

const containerClasses =
  'w-full bg-gray-faint color-gray-dark color-gray-on-hover pl12 py6 cursor-pointer txt-s';

class HideLines extends React.PureComponent {
  render() {
    return (
      <div>
        <button
          className={`${containerClasses} h30 bg-darken5`}
          onClick={this.props.onClick}
        >
          <Icon name="chevron-down" size={12} inline={true} /> hide lines
        </button>
        {this.props.children}
        <button
          className={`${containerClasses} h30 bg-darken5`}
          onClick={this.props.onClick}
        >
          <Icon name="chevron-up" size={12} inline={true} /> hide lines
        </button>
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
      <button
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
      </button>
    );
  }
}

ShowLines.propTypes = {
  /** A callback that is invoked when the line is clicked. */
  onClick: PropTypes.func.isRequired
};

export { HideLines, ShowLines };
