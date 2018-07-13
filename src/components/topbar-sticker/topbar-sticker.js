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
        isStuck: width > 640,
        bottomBoundaryValue: height - 400
      });
    }, 200);
  }

  componentDidMount() {
    this.checkStickiness();
    window.addEventListener('resize', this.checkStickiness);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkStickiness);
  }

  render() {
    return (
      <Sticky
        enabled={this.state.isStuck}
        top={0}
        bottomBoundary={this.state.bottomBoundaryValue}
        innerZ={2}
      >
        <div className="border-t border-b border--gray-light bg-white">
          {this.props.children}
        </div>
      </Sticky>
    );
  }
}

TopbarSticker.propTypes = {
  children: PropTypes.node.isRequired
};

export default TopbarSticker;
