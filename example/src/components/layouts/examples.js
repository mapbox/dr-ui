import React from 'react';
import ExamplesPage from '../../../../pkg/examples-page';
import CardContainer from '../../../../pkg/card-container';
import Card from '../../../../pkg/card';
import slugify from 'slugify';
import PropTypes from 'prop-types';

class LayoutExamples extends React.PureComponent {
  render() {
    const list = this.props.orderedPages[this.props.sectionPath].pages.filter(
      page => page.topic
    );

    const renderedCardContainers = this.props.topics
      .map((currentTopic, i) => {
        const cardsForTopic = list
          .filter(doc => {
            return doc.topic.indexOf(currentTopic) > -1;
          })
          .map((doc, index) => {
            return (
              <Card
                key={index}
                title={doc.title}
                description={doc.description}
                path={doc.path}
                thumbnail={
                  <div
                  />
                }
                level={doc.level}
                language={doc.language ? doc.language.join(', ') : ''}
              />
            );
          });
        if (cardsForTopic.length > 0) {
          const titleProper =
            currentTopic.charAt(0).toUpperCase() + currentTopic.slice(1);
          return (
            <CardContainer
              key={i}
              title={titleProper}
              path={`#${slugify(currentTopic, { lower: true })}`}
              fullWidthCards={false}
              cards={cardsForTopic}
            />
          );
        }
      })
      .filter(item => {
        return item !== undefined;
      });

    return (
      <ExamplesPage
        frontMatter={this.props.frontMatter}
        cardContainers={renderedCardContainers}
      />
    );
  }
}

LayoutExamples.propTypes = {
  orderedPages: PropTypes.object.isRequired,
  sectionPath: PropTypes.string.isRequired,
  frontMatter: PropTypes.object.isRequired,
  topics: PropTypes.array.isRequired
};

export default LayoutExamples;
