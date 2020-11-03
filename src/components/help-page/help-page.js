import React from 'react';
import PropTypes from 'prop-types';

class HelpPage extends React.PureComponent {
  render() {
    const { props } = this;
    const renderedContainers = props.cardContainers.map((container, index) => {
      return <div key={index}>{container}</div>;
    });
    return <div>{renderedContainers}</div>;
  }
}

HelpPage.propTypes = {
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  cardContainers: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default HelpPage;
