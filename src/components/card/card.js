import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import LevelIndicator from '../level-indicator/level-indicator';

class Card extends React.Component {
  render() {
    const { thumbnail, level, language, description, path, title } = this.props;
    let renderedThumbnail = '';
    let renderedLevel = '';
    let renderedLanguage = '';
    if (thumbnail) {
      renderedThumbnail = <div className="relative h120 mb6">{thumbnail}</div>;
    }
    if (level) {
      renderedLevel = (
        <div className="inline-block mr18 txt-s txt-bold">
          <LevelIndicator level={level} />
        </div>
      );
    }
    if (language) {
      renderedLanguage = (
        <div className="inline-block color-gray txt-s txt-bold">
          <Icon name="code" inline={true} /> {language}
        </div>
      );
    }
    return (
      <a
        className="color-gray-dark transition color-blue-on-hover round clip inline-block w-full unprose pb18"
        href={path}
      >
        {renderedThumbnail}
        <div>
          {renderedLevel || renderedLanguage ? (
            <div className="mb6">
              {renderedLevel}
              {renderedLanguage}
            </div>
          ) : (
            ''
          )}
          <div className="mb6">{title}</div>
          {description && (
            <div className="color-gray color-gray-on-hover">{description}</div>
          )}
        </div>
      </a>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnail: PropTypes.node,
  level: PropTypes.node,
  language: PropTypes.string
};

export default Card;
