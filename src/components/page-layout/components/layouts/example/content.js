import React from 'react';
import PropTypes from 'prop-types';
import ExamplesPage from '../../../../examples-page/examples-page';
import CardContainer from '../../../../card-container/card-container';
import Card from '../../../../card/card';

export default class LayoutExamples extends React.PureComponent {
  renderThumbnail = (thumbnail, AppropriateImage) => {
    // if thumbnail has an image extenstion, handle the image
    if (/\.png|jpeg|jpg|gif$/.exec(thumbnail)) {
      return (
        <div
          className="absolute top bottom w-full h-full round"
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />
      );
    } else if (AppropriateImage && thumbnail) {
      // if thumbnail has AppropriateImage function and thumbnail exists, handle with AppropriateImage
      return (
        <AppropriateImage
          style={{
            borderRadius: '4px'
          }}
          imageId={thumbnail}
          background={true}
        />
      );
    } else {
      // else return nothing
      return undefined;
    }
  };
  render() {
    const { topics, frontMatter, AppropriateImage } = this.props;
    const {
      fullWidthCards,
      hideCardDescription,
      hideCardLanguage
    } = frontMatter;

    const renderedCardContainers = topics.map((topic, i) => {
      const cardsForTopic = topic.pages.map((page) => {
        return (
          <Card
            key={page.title}
            title={page.title}
            description={hideCardDescription ? undefined : page.description}
            path={page.path}
            thumbnail={
              page.thumbnail
                ? this.renderThumbnail(page.thumbnail, AppropriateImage)
                : undefined
            }
            level={page.level}
            language={
              hideCardLanguage
                ? undefined
                : page.language
                ? page.language.join(', ')
                : undefined
            }
          />
        );
      });
      if (cardsForTopic.length > 0) {
        return (
          <CardContainer
            key={i}
            title={topic.name}
            path={topic.url}
            fullWidthCards={fullWidthCards ? fullWidthCards : false} // default is false
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
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      name: PropTypes.string,
      pages: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          path: PropTypes.string,
          thumbnail: PropTypes.string,
          level: PropTypes.number,
          language: PropTypes.array
        })
      )
    })
  ),
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fullWidthCards: PropTypes.bool,
    hideCardDescription: PropTypes.bool,
    hideCardLanguage: PropTypes.bool
  }).isRequired,
  AppropriateImage: PropTypes.func
};
