import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

const containerClasses =
  'wfull bg-blue-faint color-blue pl12 py6 cursor-pointer txt-s';

class HideLines extends React.PureComponent {
  static propTypes = {
    /** The content that should be hidden on click. */
    children: PropTypes.node.isRequired,
    /** A callback that is invoked when the line is clicked. */
    onClick: PropTypes.func.isRequired
  };
  render() {
    return (
      <div>
        <div className={`h30 ${containerClasses}`} onClick={this.props.onClick}>
          <Icon name="chevron-down" size={12} inline={true} /> Hide lines
        </div>
        {this.props.children}
        <div className={`h30 ${containerClasses}`} onClick={this.props.onClick}>
          <Icon name="chevron-up" size={12} inline={true} /> Hide lines
        </div>
      </div>
    );
  }
}

class ShowLines extends React.PureComponent {
  static propTypes = {
    /** A callback that is invoked when the line is clicked. */
    onClick: PropTypes.func.isRequired
  };
  render() {
    return (
      <div
        className={`${containerClasses} h36 flex-parent flex-parent--center-cross`}
        onClick={this.props.onClick}
      >
        <div className="flex-child">
          <Icon name="chevron-up" size={12} />
          <Icon name="chevron-down" size={12} />
        </div>
        <div className="flex-child ml12">Show hidden lines</div>
      </div>
    );
  }
}

export { HideLines, ShowLines };
