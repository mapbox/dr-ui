import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../error-boundary/error-boundary';
import loadable from '@loadable/component';

export default class Lazy extends React.Component {
  render() {
    const { lazyHeight, component } = this.props;
    const LazyLoadComponent = loadable(component, {
      fallback: (
        <div style={{ height: lazyHeight }} className="relative">
          <div className="flex-parent flex-parent--center-cross flex-parent--center-main absolute top right bottom left bg-darken10 z5 round">
            <div
              className={`flex-child loading${
                lazyHeight < 60 ? ' loading--s' : ''
              }`}
            ></div>
          </div>
        </div>
      )
    });
    return (
      <ErrorBoundary>
        <LazyLoadComponent {...this.props} />
      </ErrorBoundary>
    );
  }
}

Lazy.propTypes = {
  /** Dynamic import function with path to the component. The file containing the component must be a default export. 

  Example: `component={() => import('../components/example.js')}`*/
  component: PropTypes.func.isRequired,
  /** Height of the component. This is needed to set the height of the loader to prevent content shift when the component loads. */
  lazyHeight: PropTypes.number.isRequired
};
