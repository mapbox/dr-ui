import React from 'react';
import ExamplesPage from '@mapbox/dr-ui/examples-page';
import CardContainer from '@mapbox/dr-ui/card-container';
import Card from '@mapbox/dr-ui/card';
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
                    className="top right bottom left absolute round"
                    style={{
                      backgroundImage: `url(/img/${doc.thumbnail}.png)`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                      backgroundSize: 'cover'
                    }}
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
