import React from 'react';
import PropTypes from 'prop-types';
import ExamplesPage from '../../../../examples-page/examples-page';
import CardContainer from '../../../../card-container/card-container';
import Card from '../../../../card/card';

export default class LayoutExamples extends React.PureComponent {
  render() {
    const { topics, frontMatter, AppropriateImage } = this.props;

    const renderedCardContainers = topics.map((topic, i) => {
      const cardsForTopic = topic.pages.map((page) => {
        return (
          <Card
            key={page.title}
            title={page.title}
            description={page.description}
            path={page.path}
            thumbnail={
              <AppropriateImage
                style={{ borderRadius: '4px' }}
                imageId={page.thumbnail}
                background={true}
              />
            }
            level={page.level}
            language={page.language ? page.language.join(', ') : ''}
          />
        );
      });
      if (cardsForTopic.length > 0) {
        return (
          <CardContainer
            key={i}
            title={topic.name}
            path={topic.url}
            fullWidthCards={false}
            cards={cardsForTopic}
          />
        );
      }
    });

    return (
      <ExamplesPage
        frontMatter={frontMatter}
        cardContainers={renderedCardContainers}
      />
    );
  }
}

LayoutExamples.propTypes = {
  topics: PropTypes.array,
  frontMatter: PropTypes.object.isRequired,
  AppropriateImage: PropTypes.func.isRequired
};
