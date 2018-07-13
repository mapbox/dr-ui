import React from 'react';
import PropTypes from 'prop-types';
import ControlSelect from '@mapbox/react-control-select';
// import { routeToPrefixed } from '@mapbox/batfish/modules/route-to';

class NavigationDropdown extends React.Component {
  render() {
    const { props } = this;
    const optionsArray = props.dropdownOptions.map(option => {
      return {
        label: option.title,
        value: option.path
      };
    });
    const currentOption = optionsArray.filter(option => {
      return props.currentPath === option.value;
    });

    return (
      <div className="py24 px24 flex-parent flex-parent--space-between-main flex-parent--center-cross">
        <ControlSelect
          id="navigate-this-section"
          onChange={() => {
            // routeToPrefixed(value);
          }}
          value={currentOption[0].value}
          options={optionsArray}
          themeControlSelect="select--stroke round-full bg-white"
          themeControlSelectContainer="flex-child flex-child--no-shrink"
        />
      </div>
    );
  }
}

NavigationDropdown.propTypes = {
  currentPath: PropTypes.string.isRequired,
  dropdownOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default NavigationDropdown;
