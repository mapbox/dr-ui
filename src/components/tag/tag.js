import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mapbox/mr-ui/tooltip';
import Icon from '@mapbox/mr-ui/icon';
import classnames from 'classnames';
import themes from '../themes';

export default class Tag extends React.PureComponent {
  render() {
    const theme = themes[this.props.theme] || {
      label: this.props.customLabel,
      tooltipText: this.props.customTooltipText,
      border: this.props.customBorder,
      background: this.props.customBackground,
      color: this.props.customColor,
      icon: this.props.customIcon
    };
    return (
      <Tooltip content={theme.tooltipText} maxWidth="small" placement="top">
        <div
          style={{
            ...theme.styles
          }}
          className={classnames(
            `round inline-block cursor-default txt-fancy-medium color-gray-dark`,
            {
              'txt-s': !this.props.small,
              'txt-xs': this.props.small,
              px6: !this.props.icon
            },
            theme.background
          )}
        >
          {this.props.icon ? (
            <Icon name={theme.icon} inline={true} />
          ) : (
            theme.label
          )}
        </div>
      </Tooltip>
    );
  }
}

Tag.defaultProps = {
  small: false,
  icon: false
};

Tag.propTypes = {
  theme: PropTypes.oneOf([
    'beta',
    'fundamentals',
    'legacy',
    'new',
    'custom',
    'pricing'
  ]).isRequired,
  /** If `true`, display the tag with a smaller font and and no border */
  small: PropTypes.bool,
  /** If `true`, display the icon only (no text) */
  icon: PropTypes.bool,
  /** If the theme is set to "custom", this prop is required. */
  customLabel: (props, currentProp, componentName) =>
    validateCustomProp(props, currentProp, componentName),
  /** If the theme is set to "custom", this prop is required. */
  customTooltipText: (props, currentProp, componentName) =>
    validateCustomProp(props, currentProp, componentName),
  /** If the theme is set to "custom", this `customBorder` is required. The value must be a class name. */
  customBorder: (props, currentProp, componentName) =>
    validateCustomProp(props, currentProp, componentName),
  /** If the theme is set to "custom", this `customColor` is required. The value must be a class name. */
  customColor: (props, currentProp, componentName) =>
    validateCustomProp(props, currentProp, componentName),
  /** If the theme is set to "custom", this `customBackground` is required. The value must be a class name. */
  customBackground: (props, currentProp, componentName) =>
    validateCustomProp(props, currentProp, componentName),
  /** customIcon is required if using the "custom" theme and `icon=true` */
  customIcon: (props, currentProp, componentName) =>
    props.icon && validateCustomProp(props, currentProp, componentName)
};

function validateCustomProp(props, currentProp, componentName) {
  if (props.theme !== 'custom') return;
  if (!currentProp || typeof props[currentProp] !== 'string') {
    return new Error(
      `The "${currentProp}" prop in \`${componentName}\` is required when using the "custom" theme and must be a string.`
    );
  }
}
