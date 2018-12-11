import React from 'react';
import PropTypes from 'prop-types';

class ExamplesPage extends React.PureComponent {
  render() {
    const { props } = this;
    const renderedContainers = props.cardContainers.map((container, index) => {
      return <div key={index}>{container}</div>;
    });
    return <div>{renderedContainers}</div>;
  }
}

ExamplesPage.propTypes = {
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  cardContainers: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default ExamplesPage;
