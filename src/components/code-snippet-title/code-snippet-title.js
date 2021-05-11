import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

export default class CodeSnippetTitle extends React.PureComponent {
  renderFilename = () => {
    return (
      <div className="inline-block txt-bold mb6 color-gray-dark">
        {this.props.filename}
      </div>
    );
  };

  renderLink = () => {
    return (
      <div className="inline-block ml12-mm">
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
    const { link, toggle } = this.props;
    return (
      <div className="flex-parent-mm flex-parent--space-between-main-mm mb6">
        <div className="flex-child">
          {this.renderFilename()}
          {link && this.renderLink()}
        </div>
        {toggle && <div className="flex-child">{toggle}</div>}
      </div>
    );
  }
}

CodeSnippetTitle.propTypes = {
  /* Filename to be displayed as a kind of title. Can be a specific filename like
  `RuntimeStylingActivity.java` or a general filename like `Activity`. */
  filename: PropTypes.string,
  /* Optional `link` to a GitHub file. If this is set, the rendered component
  will include a "View on Github" link. */
  link: function (props, propName, componentName) {
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
  },
  /* Language toggle to be displayed. */
  toggle: PropTypes.node
};
