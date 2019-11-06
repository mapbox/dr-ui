import React from 'react';
import PropTypes from 'prop-types';

export default class GlossaryCard extends React.Component {
  render() {
    return (
      <div className="mb6 w240 flex-child">
        <a
          className="color-gray-dark transition shadow-darken10-on-hover round clip inline-block w-full px12 py12 unprose"
          href={this.props.entryUrl}
          style={{ verticalAlign: 'top' }}
        >
          <div className="px6 pb6">
            <div className="mb6 txt-l">{this.props.entryTitle}</div>
            <div className="txt-s color-gray">
              {this.props.entryDescription}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

GlossaryCard.propTypes = {
  entryTitle: PropTypes.string.isRequired,
  entryUrl: PropTypes.string.isRequired,
  entryDescription: PropTypes.string.isRequired
};
