import React from 'react';
import PropTypes from 'prop-types';

class CardTextOnly extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="col col--12 mb12">
        <a
          className="color-gray-dark transition shadow-darken10-on-hover round clip inline-block w-full px12 py12 unprose"
          href={props.path}
          style={{ verticalAlign: 'top' }}
        >
          <div className="px6 pb6">
            <div className="mb6 txt-m">{props.title}</div>
            <div className="txt-s opacity75">{props.description}</div>
          </div>
        </a>
      </div>
    );
  }
}

CardTextOnly.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export { CardTextOnly };
