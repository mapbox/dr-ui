import React from 'react';
import PropTypes from 'prop-types';
import InclusiveMenuButton from 'inclusive-menu-button';
import classnames from 'classnames';

class NavigationDropdown extends React.Component {
  componentDidMount() {
    this.menu = this.buttonNode
      ? new InclusiveMenuButton(this.buttonNode)
      : null;
  }

  componentWillUnmount() {
    this.menu = null;
  }

  saveButtonRef = ref => {
    this.buttonNode = ref;
  };

  render() {
    const { options, currentPath, id } = this.props;

    const label = getLabel(options, currentPath);

    return (
      <div className="dr-ui--navigation-dropdown relative">
        <button
          ref={this.saveButtonRef}
          type="button"
          data-inclusive-menu-opens={id}
          className="select select--stroke bg-white round-full txt-truncate"
        >
          {label}
          <div className="select-arrow" aria-hidden="true" />
        </button>

        <div
          id={this.props.id}
          className="absolute bg-white round py6 mt3 border border--gray-light shadow-darken10 z4  hmax300 w-full scroll-auto scroll-styled "
        >
          {options.map(option => {
            return (
              <MenuItem
                key={option.label}
                option={option}
                active={option.label === label}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

NavigationDropdown.defaultProps = {
  id: 'navigate-this-section'
};

NavigationDropdown.propTypes = {
  id: PropTypes.string,
  currentPath: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
};

export default NavigationDropdown;

class MenuItem extends React.Component {
  render() {
    const { option, active } = this.props;
    return (
      <button
        onClick={() => {
          if (window) window.location = option.value;
        }}
        className={classnames(
          'block w-full px12 py3 link link--gray bg-gray-faint-on-hover',
          {
            'txt-bold': active
          }
        )}
        type="button"
      >
        {option.label}
      </button>
    );
  }
}

MenuItem.propTypes = {
  option: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string.isRequired
  }),
  active: PropTypes.bool
};

// returns a label for small devices
// and a label for large devices
function getLabel(options, currentPath) {
  return options.filter(option => {
    return currentPath === option.value;
  })[0].label;
}
