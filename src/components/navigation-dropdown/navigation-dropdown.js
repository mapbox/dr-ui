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
    })[0];

    return (
      <div className="py24 px24">
        <ControlSelect
          id="navigate-this-section"
          onChange={props.onChange}
          value={currentOption.value}
          options={optionsArray}
          themeControlSelect="select--stroke round-full bg-white"
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
  ).isRequired,
  onChange: PropTypes.func
};

export default NavigationDropdown;
