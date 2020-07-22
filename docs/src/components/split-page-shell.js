import React from 'react';
import PropTypes from 'prop-types';
import Feedback from '../../../src/components/feedback/feedback';
import constants from '../constants.json';

export default class SplitPageShell extends React.Component {
  render() {
    const { frontMatter, location, children } = this.props;
    return (
      <React.Fragment>
        {children}
        <div className="mt18">
          <Feedback
            site="API"
            type={`section on ${frontMatter.title}`}
            section={frontMatter.title}
            location={location}
            webhook={constants.FORWARD_EVENT_WEBHOOK}
          />
        </div>
      </React.Fragment>
    );
  }
}

SplitPageShell.propTypes = {
  children: PropTypes.node,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.object
};
