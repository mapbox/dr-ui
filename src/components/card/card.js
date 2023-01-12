import React from 'react';
import PropTypes from 'prop-types';
import IconText from '@mapbox/mr-ui/icon-text';

import LevelIndicator from '../level-indicator/level-indicator';

class Card extends React.PureComponent {
  render() {
    const { thumbnail, level, language, description, path, link, title } =
      this.props;
    const renderedThumbnail = thumbnail && (
      <div className="relative h120 mb6">{thumbnail}</div>
    );
    const renderedLevel = level && (
      <div className="mr12">
        <LevelIndicator level={level} />
      </div>
    );
    const renderedLanguage = language && (
      <IconText iconBefore="code">{language}</IconText>
    );

    let externalLinkAttributes;

    if (link) {
      externalLinkAttributes = {
        target: '_blank',
        rel: 'nooopener noreferrer'
      };
    }

    return (
      <a
        className="dr-ui--card color-gray-dark transition color-blue-on-hover round clip inline-block w-full unprose pb18"
        href={link || path}
        {...externalLinkAttributes}
      >
        {renderedThumbnail}
        <div>
          {(renderedLevel || renderedLanguage) && (
            <div className="flex mb6 txt-bold color-gray txt-s">
              {renderedLevel}
              {renderedLanguage}
            </div>
          )}
          <div className="mb6 flex flex--center-cross">
            {title}{' '}
            {link && (
              <svg className="icon ml3 mt3">
                <use xlinkHref="#icon-share" />
              </svg>
            )}
          </div>
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
  language: PropTypes.string,
  link: PropTypes.string
};

export default Card;
