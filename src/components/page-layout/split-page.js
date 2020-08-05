import React from 'react';
import PropTypes from 'prop-types';
import Feedback from '../feedback/feedback';

export default class SplitPage extends React.Component {
  renderFeedback = () => {
    const { frontMatter, location, constants } = this.props;
    return (
      <div className="mt18">
        <Feedback
          site={constants.SITE}
          type={`section on ${frontMatter.title}`}
          section={frontMatter.title}
          location={location}
          webhook={constants.FORWARD_EVENT_WEBHOOK}
        />
      </div>
    );
  };
  render() {
    const { frontMatter, children } = this.props;
    return (
      <React.Fragment>
        {children}
        {!frontMatter.hideFeedback ? this.renderFeedback() : ' '}
      </React.Fragment>
    );
  }
}

SplitPage.propTypes = {
  children: PropTypes.node.isRequired,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    hideFeedback: PropTypes.bool
  }).isRequired,
  location: PropTypes.object,
  constants: PropTypes.shape({
    SITE: PropTypes.string,
    FORWARD_EVENT_WEBHOOK: PropTypes.object
  })
};
