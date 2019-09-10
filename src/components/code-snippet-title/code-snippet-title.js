import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

export default class CodeSnippetTitle extends React.Component {
  renderFilename = () => {
    return (
      <div className="txt-bold mb6 color-gray-dark">{this.props.filename}</div>
    );
  };

  renderLink = () => {
    return (
      <div className="flex-child">
        <a
          className="unprose link"
          href={this.props.link}
          title={`View ${this.props.filename} on GitHub`}
        >
          <Icon name="github" inline={true} /> View on GitHub
        </a>
      </div>
    );
  };

  render() {
    const { link } = this.props;
    return (
      <div
        className={`${
          link ? 'flex-parent-mm flex-parent--space-between-main-mm ' : ''
        }mb6`}
      >
        <div className={link ? 'flex-child' : ''}>{this.renderFilename()}</div>
        {link && <div className="flex-child">{this.renderLink()}</div>}
      </div>
    );
  }
}

CodeSnippetTitle.propTypes = {
  /* Filename to be displayed as a kind of title. Can be a specific filename like
  `RuntimeStylingActivity.java` or a general filename like `Activity`. */
  filename: PropTypes.string.isRequired,
  /* Optional `link` to a GitHub file. If this is set, the rendered component
  will include a "View on Github" link. */
  link: function(props, propName, componentName) {
    if (props[propName] && !/^https:\/\/github\.com\//.test(props[propName])) {
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.'
      );
    }
  }
};
