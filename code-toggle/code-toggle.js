import React from 'react';
import PropTypes from 'prop-types';
import ControlToggleSet from '@mapbox/mr-ui/control-toggle-set';
class CodeToggle extends React.PureComponent {
  render() {
    const {
      props
    } = this;
    const language = props.options.filter(option => {
      return option.preferredLanguage === true;
    })[0].language;
    const options = props.options.map(option => {
      return {
        label: option.label,
        value: option.language
      };
    });
    return /*#__PURE__*/React.createElement(ControlToggleSet, {
      id: props.id,
      themeToggleGroup: "bg-blue py3 px3",
      themeToggle: "txt-s py3 toggle--white toggle--active-blue",
      onChange: props.onChange,
      value: language,
      options: options
    });
  }
}
export default CodeToggle;