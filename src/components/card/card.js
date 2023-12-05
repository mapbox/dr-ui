import React from 'react';
import PropTypes from 'prop-types';
import IconText from '@mapbox/mr-ui/icon-text';
import RightArrow from '../icons/icons';

import LevelIndicator from '../level-indicator/level-indicator';

class Card extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered
    }));
  }

  render() {
    const { isHovered } = this.state;

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
        className="dr-ui--card text-color-gray-dark transition color-blue-on-hover round clip inline-block w-full unprose pb18"
        href={link || path}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        {...externalLinkAttributes}
      >
        {renderedThumbnail}
        <div className="transition">
          {(renderedLevel || renderedLanguage) && (
            <div className="flex mb6 txt-bold color-gray txt-s">
              {renderedLevel}
              {renderedLanguage}
            </div>
          )}
          <div className="mb6 flex txt-bold flex--center-cross">
            <div>{title} </div>
            <div className="w60">
              <RightArrow isHovered={isHovered} />
            </div>

            {link && (
              <svg className="icon ml3 mt3">
                <use xlinkHref="#icon-share" />
              </svg>
            )}
          </div>
          {description && (
            <div style={{ color: isHovered ? '#23262D' : '#757d82' }}>
              {description}
            </div>
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
