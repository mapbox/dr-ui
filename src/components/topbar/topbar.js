import React from 'react';
import PropTypes from 'prop-types';

class Topbar extends React.PureComponent {
  render() {
    return (
      <div
        className="border-t border-b border--gray-light bg-white"
        data-swiftype-index="false"
      >
        <div className="limiter">{this.props.children}</div>
      </div>
    );
  }
}

Topbar.propTypes = {
  children: PropTypes.node.isRequired
};

export default Topbar;
