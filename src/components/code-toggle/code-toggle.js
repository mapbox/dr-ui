import React from 'react';
import PropTypes from 'prop-types';
import ControlToggleSet from '@mapbox/react-control-toggle-set';

class CodeToggle extends React.Component {
  render() {
    const { props } = this;
    return (
      <ControlToggleSet
        themeToggleGroup="bg-blue py3 px3 mb12"
        themeToggle="txt-s py3 toggle--white toggle--active-blue"
        onChange={value => {
          props.changeLanguage(value);
        }}
        value={
          props.options.filter(option => {
            return option.preferredLanguage === true;
          })[0].language
        }
        options={props.options.map(option => {
          return {
            label: option.language,
            value: option.language
          };
        })}
      />
    );
  }
}

CodeToggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.oneOf([
        'swift',
        'objective-c',
        'java',
        'kotlin',
        'javascript'
      ]).isRequired,
      preferredLanguage: PropTypes.bool.isRequired
    })
  ).isRequired
};

export { CodeToggle };
