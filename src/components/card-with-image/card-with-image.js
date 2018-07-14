import React from 'react';
import PropTypes from 'prop-types';

class CardWithImage extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="col col--6-mm col--12 mb12">
        <a
          className="color-gray-dark transition shadow-darken10-on-hover round clip inline-block w-full px12 py12 unprose"
          href={this.props.path}
          style={{ verticalAlign: 'top' }}
        >
          <div className="relative h120 mb12">{props.thumbnail}</div>
          <div className="px6 pb6">
            <div className="mb6 txt-m">{this.props.title}</div>
            <div className="txt-s opacity75">{this.props.description}</div>
          </div>
        </a>
      </div>
    );
  }
}

CardWithImage.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.node.isRequired
};

export { CardWithImage };
