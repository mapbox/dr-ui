import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../error-boundary/error-boundary';
import loadable from '@loadable/component';

export default class Lazy extends React.Component {
  render() {
    const { lazyHeight, lazyComponent, lazyClasses } = this.props;
    const LazyLoadComponent = loadable(lazyComponent);
    const Loader = () => {
      const loaderClasses = `relative${lazyClasses ? ` ${lazyClasses}` : ''}`;
      return (
        <div
          style={{
            ...(lazyHeight && { height: lazyHeight })
          }}
          className={loaderClasses}
        >
          <div className="flex-parent flex-parent--center-cross flex-parent--center-main absolute top right bottom left bg-darken10 z5 round">
            <div className="flex-child loading loading--s" />
          </div>
        </div>
      );
    };
    return (
      <ErrorBoundary>
        <LazyLoadComponent fallback={<Loader />} {...this.props} />
      </ErrorBoundary>
    );
  }
}

Lazy.propTypes = {
  /** Dynamic import function with path to the component. The file containing the component must be a default export. 

  Example: `lazyComponent={() => import('../components/example.js')}`*/
  lazyComponent: PropTypes.func.isRequired,
  /** Height of the component. This is needed to set the height of the loader to prevent content shift when the component loads. */
  lazyHeight: PropTypes.number,
  /** Classes to describe the height of the component, when `lazyHeight` will not suffice. */
  lazyClasses: PropTypes.string
};
