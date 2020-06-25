import React from 'react';
import PropTypes from 'prop-types';
import Note from '../note/note';
import * as Sentry from '@sentry/browser';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope((scope) => {
      // set tag to allow us to filter this event in Sentry
      scope.setTag('alertType', 'ErrorBoundary');
      // set extra error info
      scope.setExtra('errorInfo', errorInfo);
      // if available, include additional details
      if (this.props.moreInfoObject) {
        // push each key/value from this.props.moreInfoObject as an extra scope
        Object.keys(this.props.moreInfoObject).forEach((item) =>
          scope.setExtra(item, this.props.moreInfoObject[item])
        );
      }
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Note theme="error" title="Something went wrong">
          <p>
            We sent the error to the team. Please refresh the page to try again.
          </p>
          <details>
            <summary className="cursor-pointer">Error details</summary>
            {this.state.error && (
              <pre>
                <code>{JSON.stringify(this.state.error, null, 2)}</code>
              </pre>
            )}
          </details>
        </Note>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  moreInfoObject: PropTypes.object
};
