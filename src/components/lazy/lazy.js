import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class Lazy extends React.PureComponent {
  render() {
    const { height, component } = this.props;
    const LazyLoadComponent = React.lazy(component);
    return (
      <ErrorBoundary>
        <Suspense
          fallback={
            <div style={{ height: height }} className="relative">
              <div className="flex-parent flex-parent--center-cross flex-parent--center-main absolute top right bottom left bg-darken10 z5 round">
                <div className="flex-child loading"></div>
              </div>
            </div>
          }
        >
          <LazyLoadComponent {...this.props} />
        </Suspense>
      </ErrorBoundary>
    );
  }
}

Lazy.propTypes = {
  /** Dynamic import function with path to the component. The file containing the component must be a default export. 

  Example: `component={() => import('../components/example.js')}`*/
  component: PropTypes.func.isRequired,
  /** Height of the component. This is needed to set the height of the loader to prevent content shift when the component loads. */
  height: PropTypes.number.isRequired
};
