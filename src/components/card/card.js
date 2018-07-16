import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { props } = this;
    let renderedThumbnail = '';
    if (props.thumbnail) {
      renderedThumbnail = (
        <div className="relative h120 mb12">{props.thumbnail}</div>
      );
    }
    return (
      <a
        className="color-gray-dark transition shadow-darken10-on-hover round clip inline-block w-full px12 py12 unprose"
        href={this.props.path}
      >
        {renderedThumbnail}
        <div className="px6 pb6">
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
  thumbnail: PropTypes.node
};

export { Card };
