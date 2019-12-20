import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mapbox/mr-ui/tooltip';
import themes from '../themes';

export default class Tag extends React.Component {
  render() {
    const theme = themes[this.props.theme] || {
      label: this.props.customLabel,
      tooltipText: this.props.customTooltipText,
      styles: this.props.customStyles
    };

    return (
      <Tooltip content={theme.tooltipText} maxWidth="small" placement="top">
        <div
          style={theme.styles}
          className="txt-s txt-bold round px6 inline-block cursor-default border"
        >
          {theme.label}
        </div>
      </Tooltip>
    );
  }
}

Tag.propTypes = {
  theme: PropTypes.oneOf(['beta', 'fundamentals', 'legacy', 'new', 'custom'])
    .isRequired,
  /* If the theme is set to "custom", this prop is required. */
  customLabel: (props, componentName) => {
    if (props.theme === 'custom' && !props.customLabel) {
      return new Error(
        `The "customLabel" prop is required when using the "custom" theme in '${componentName}'.`
      );
    } else if (
      props.theme === 'custom' &&
      typeof props.customLabel !== 'string'
    ) {
      return new Error(
        `The "customLabel" prop in '${componentName} must be a string'.`
      );
    }
  },
  /* If the theme is set to "custom", this prop is required. */
  customTooltipText: (props, componentName) => {
    if (props.theme === 'custom' && !props.customTooltipText) {
      return new Error(
        `The "customTooltipText" prop is required when using the "custom" theme in '${componentName}'.`
      );
    } else if (
      props.theme === 'custom' &&
      typeof props.customTooltipText !== 'string'
    ) {
      return new Error(
        `The "customTooltipText" prop in '${componentName} must be a string'.`
      );
    }
  },
  /* If the theme is set to "custom", this prop is required. */
  customStyles: (props, componentName) => {
    if (props.theme === 'custom') {
      if (!props.customStyles) {
        return new Error(
          `The "customStyles" prop is required when using the "custom" theme in '${componentName}'.`
        );
      } else if (typeof props.customStyles !== 'object') {
        return new Error(
          `The "customStyles" prop in '${componentName} must be an object'.`
        );
      } else if (
        !props.customStyles.background ||
        typeof props.customStyles.background !== 'string'
      ) {
        return new Error(
          `The "customStyles.background" prop in '${componentName} is required when using the "custom" theme and must be a string'.`
        );
      } else if (
        !props.customStyles.color ||
        typeof props.customStyles.color !== 'string'
      ) {
        return new Error(
          `The "customStyles.color" prop in '${componentName} is required when using the "custom" theme and must be a string'.`
        );
      } else if (
        !props.customStyles.borderColor ||
        typeof props.customStyles.borderColor !== 'string'
      ) {
        return new Error(
          `The "customStyles.borderColor" prop in '${componentName} is required when using the "custom" theme and must be a string'.`
        );
      }
    }
  }
};
