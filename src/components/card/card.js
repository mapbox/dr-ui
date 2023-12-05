import React from 'react';
import PropTypes from 'prop-types';
import IconText from '@mapbox/mr-ui/icon-text';

import LevelIndicator from '../level-indicator/level-indicator';

//        style={{ background: isHovered ? 'lightblue' : 'white' }}

class Card extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }
  render() {
    function toggleHover() {
      this.setState((prevState) => ({
        isHovered: !prevState.isHovered
      }));
    }
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
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
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
              <svg
                className="transition"
                style={{
                  marginLeft: isHovered ? '15px' : '10px',
                  opacity: isHovered ? '1' : '0'
                }}
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.292 0L10.314 5.022V5.49L5.292 10.494L3.87 9.072L6.732 6.21L5.508 6.264H0V4.212H5.508L6.696 4.266L3.87 1.44L5.292 0Z"
                  fill="#3478F3"
                />
              </svg>
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
