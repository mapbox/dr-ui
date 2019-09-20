import React from 'react';
import PropTypes from 'prop-types';
import ControlToggleSet from '@mapbox/mr-ui/control-toggle-set';

class CodeToggle extends React.Component {
  render() {
    const { props } = this;
    const language = props.options.filter(option => {
      return option.preferredLanguage === true;
    })[0].language;
    const options = props.options.map(option => {
      return {
        label: option.label,
        value: option.language
      };
    });
    return (
      <ControlToggleSet
        id={props.id}
        themeToggleGroup="bg-blue py3 px3"
        themeToggle="txt-s py3 toggle--white toggle--active-blue"
        onChange={value => {
          props.onChange(value);
        }}
        value={language}
        options={options}
      />
    );
  }
}

CodeToggle.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      preferredLanguage: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default CodeToggle;
