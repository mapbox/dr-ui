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

/* prop function to assert that lazyHeight or lazyClasses is defined and is the right type */
const heightOrClasses = (props, propName, componentName) => {
  if (!props.lazyClasses && !props.lazyHeight) {
    return new Error(
      `You must define \`lazyClasses\` or \`lazyHeight\` in ${componentName}`
    );
  }
  if (
    propName === 'lazyClasses' &&
    props.lazyClasses &&
    typeof props.lazyClasses !== 'string'
  ) {
    return new Error(
      `\`lazyClasses\` must be a string, received ${typeof props.lazyClasses}`
    );
  }
  if (
    propName === 'lazyHeight' &&
    props.lazyHeight &&
    typeof props.lazyHeight !== 'number'
  ) {
    return new Error(
      `\`lazyHeight\` must be a number, received ${typeof props.lazyHeight}`
    );
  }
};

Lazy.propTypes = {
  /** Dynamic import function with path to the component. The file containing the component must be a default export. 

  Example: `lazyComponent={() => import('../components/example.js')}`*/
  lazyComponent: PropTypes.func.isRequired,
  /** Height of the component. This is needed to set the height of the loader to prevent content shift when the component loads. Accepts a number. Required if `lazyClasses` is not defined. */
  lazyHeight: (props, propName, componentName) =>
    heightOrClasses(props, propName, componentName),
  /** Classes to describe the height of the component, when `lazyHeight` will not suffice.  Accepts a string. Required if `lazyHeight` is not defined. */
  lazyClasses: (props, propName, componentName) =>
    heightOrClasses(props, propName, componentName)
};
