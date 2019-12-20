import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mapbox/mr-ui/tooltip';

export default class Tag extends React.Component {
  render() {
    let themes = {
      beta: {
        label: 'Beta',
        tooltipText:
          'This feature is in public beta and is subject to changes.',
        styles: {
          background: '#e8f5ee',
          color: '#1b7d4f',
          borderColor: '#75c684'
        }
      },
      fundamentals: {
        label: 'Fundamentals',
        tooltipText:
          'The concepts described here are fundamental to using this product.',
        styles: {
          background: '#fff0f7',
          color: '#cf1c61',
          borderColor: '#fd8ac0'
        }
      },
      legacy: {
        label: 'Legacy',
        tooltipText: 'This feature is no longer in active development.',
        styles: {
          background: '#feefe2',
          color: '#9d5d25',
          borderColor: '#dea573'
        }
      },
      new: {
        label: 'New!',
        tooltipText: 'This feature was released recently.',
        styles: {
          background: '#e8f5ee',
          color: '#1b7d4f',
          borderColor: '#75c684'
        }
      },
      custom: {
        label: this.props.customLabel,
        tooltipText: this.props.customTooltipText,
        styles: this.props.customStyles
      }
    };

    return (
      <Tooltip
        content={themes[this.props.theme].tooltipText}
        maxWidth="small"
        placement="top"
      >
        <div
          style={themes[this.props.theme].styles}
          className="txt-s txt-bold round px6 inline-block cursor-default border"
        >
          {themes[this.props.theme].label}
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
