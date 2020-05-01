import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import debounce from 'debounce';

class TopbarSticker extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isStuck: false,
      bottomBoundaryValue: 0
    };

    this.checkStickiness = debounce(() => {
      const width = document.body.clientWidth;
      const height = document.body.clientHeight;
      this.setState({
        isStuck: width > (this.props.unStickWidth || 640),
        bottomBoundaryValue: height - 400
      });
    }, 200);
  }

  componentDidMount() {
    if (this.props.isStuck) {
      this.checkStickiness();
      window.addEventListener('resize', this.checkStickiness);
    }
  }

  componentWillUnmount() {
    if (this.props.isStuck) {
      window.removeEventListener('resize', this.checkStickiness);
    }
  }

  render() {
    return (
      <Sticky
        enabled={this.state.isStuck}
        top={0}
        bottomBoundary={this.state.bottomBoundaryValue}
        innerZ={4}
      >
        <div
          className="border-t border-b border--gray-light bg-white"
          data-swiftype-index="false"
        >
          {this.props.children}
        </div>
      </Sticky>
    );
  }
}

TopbarSticker.defaultProps = {
  isStuck: true
};

TopbarSticker.propTypes = {
  unStickWidth: PropTypes.number, // optional prop to change the breakpoint when the topbar will unstick
  isStuck: PropTypes.bool, // optional prop to completely unstick TopbarSticker. TopbarSticker is sticky by default (true).
  children: PropTypes.node.isRequired
};

export default TopbarSticker;
