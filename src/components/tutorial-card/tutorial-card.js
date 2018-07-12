import React from 'react';
import PropTypes from 'prop-types';

class TutorialCard extends React.Component {
  render() {
    return (
      <div className="col col--12 mb24">
        <a
          className="color-gray-dark transition shadow-darken10-on-hover round clip inline-block w-full px12 py12 unprose"
          href={this.props.exampleUrl}
          style={{ verticalAlign: 'top' }}
        >
          <div>
            <div className="mb12 h240 w-full bg-gray-faint" />
          </div>
          <div className="px6 pb6">
            <div className="mb6 txt-m">{this.props.exampleTitle}</div>
            <div className="txt-s opacity75">
              {this.props.exampleDescription}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

TutorialCard.propTypes = {
  exampleTitle: PropTypes.string.isRequired,
  exampleUrl: PropTypes.string.isRequired,
  exampleImgID: PropTypes.string.isRequired,
  exampleDescription: PropTypes.string.isRequired
};

export { TutorialCard };
