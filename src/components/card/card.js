import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import LevelIndicator from '../level-indicator/level-indicator';

class Card extends React.Component {
  render() {
    const { props } = this;
    let renderedThumbnail = '';
    let renderedLevel = '';
    let renderedLanguage = '';
    if (props.thumbnail) {
      renderedThumbnail = (
        <div className="relative h120 mb12">{props.thumbnail}</div>
      );
    }
    if (props.level) {
      renderedLevel = (
        <div className="inline-block mr18">
          <LevelIndicator level={props.level} />
        </div>
      );
    }
    if (props.language) {
      renderedLanguage = (
        <div className="inline-block color-gray-light txt-s txt-bold">
          <Icon name="code" inline={true} /> {props.language}
        </div>
      );
    }
    return (
      <a
        className="color-gray-dark transition shadow-darken10-on-hover round clip inline-block w-full px12 py12 unprose"
        href={this.props.path}
      >
        {renderedThumbnail}
        <div className="px6 pb6">
          {renderedLevel}
          {renderedLanguage}
          <div className="mb6 txt-m">{this.props.title}</div>
          <div className="txt-s opacity75">{this.props.description}</div>
        </div>
      </a>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.node,
  level: PropTypes.node,
  language: PropTypes.string
};

export default Card;
