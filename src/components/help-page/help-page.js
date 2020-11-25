import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from '../card-container/card-container';
import Card from '../card/card';
import slugify from 'slugify';

class HelpPage extends React.PureComponent {
  render() {
    const { data } = this.props;

    const renderedCardContainers = data.map((topic) => {
      const sectionPath = topic.title
        ? `#${slugify(topic.title, {
            replacement: '-',
            lower: true
          })}`
        : undefined;
      const cardsForTopic = topic.pages.map((page) => (
        <Card
          key={page.title}
          title={page.title}
          description={page.description}
          path={page.path}
          thumbnail={undefined}
        />
      ));
      if (cardsForTopic.length > 0) {
        return (
          <CardContainer
            key={topic.title}
            title={topic.title}
            path={sectionPath}
            fullWidthCards={true}
            cards={cardsForTopic}
          />
        );
      }
    });

    const renderedContainers = renderedCardContainers.map(
      (container, index) => <div key={index}>{container}</div>
    );

    return <div>{renderedContainers}</div>;
  }
}

HelpPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      pages: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
};

export default HelpPage;
