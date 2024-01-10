import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

const containerClasses =
  'w-full bg-blue-faint color-blue-dark color-blue-on-hover pl12 py6 cursor-pointer txt-s';

function HideLines({ onClick, children }) {
  return (
    <div>
      <button
        className={`${containerClasses} h30 bg-darken5`}
        onClick={onClick}
      >
        <Icon name="chevron-down" size={12} inline={true} /> hide lines
      </button>
      {children}
      <button
        className={`${containerClasses} h30 bg-darken5`}
        onClick={onClick}
      >
        <Icon name="chevron-up" size={12} inline={true} /> hide lines
      </button>
    </div>
  );
}

HideLines.propTypes = {
  /** The content that should be hidden on click. */
  children: PropTypes.node.isRequired,
  /** A callback that is invoked when the line is clicked. */
  onClick: PropTypes.func.isRequired
};

function ShowLines({ onClick, children }) {
  return (
    <>
      <button
        className={`${containerClasses} h30 flex flex--center-cross`}
        onClick={onClick}
      >
        <div>
          <div className="mb-neg3">
            <Icon name="chevron-up" size={12} />
          </div>
          <div className="mt-neg3">
            <Icon name="chevron-down" size={12} />
          </div>
        </div>
        <div style={{ marginLeft: '8px' }}>show hidden lines</div>
      </button>
      {/* used fixed with negative z-index to ensure that the lines render to increment the css counter, but are not visible and do not take up space */}
      <div className="fixed" style={{ zIndex: -1 }}>
        {children}
      </div>
    </>
  );
}

ShowLines.propTypes = {
  /** The children are not shown, but need to be rendered in order for line numbers to work */
  children: PropTypes.node.isRequired,
  /** A callback that is invoked when the line is clicked. */
  onClick: PropTypes.func.isRequired
};

export { HideLines, ShowLines };
