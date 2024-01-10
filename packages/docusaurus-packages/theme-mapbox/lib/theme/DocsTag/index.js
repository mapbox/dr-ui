import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mapbox/mr-ui/tooltip';
import Icon from '@mapbox/mr-ui/icon';
import classnames from 'classnames';
import themes from './DocsTagThemes';

const DocsTag = ({
  theme,
  small,
  icon,
  customLabel,
  customTooltipText,
  customBorder,
  customBackground,
  customColor,
  customIcon
}) => {
  const tagTheme = themes[theme] || {
    label: customLabel,
    tooltipText: customTooltipText,
    border: customBorder,
    background: customBackground,
    color: customColor,
    icon: customIcon
  };

  return (
    <Tooltip content={tagTheme.tooltipText} maxWidth="small" placement="top">
      <div
        style={{
          ...tagTheme.styles,
          paddingTop: 1
        }}
        className={classnames(
          `txt-fancy-medium round inline-block cursor-default color-gray-dark ${
            customBackground || tagTheme.tagBackground
          } ${customColor ? tagTheme.color : 'color-gray-dark'}`,
          {
            'txt-s': !small,
            'txt-xs': small,
            px6: !icon
          }
        )}
      >
        {icon ? <Icon name={tagTheme.icon} inline={true} /> : tagTheme.label}
      </div>
    </Tooltip>
  );
};

export default DocsTag;

DocsTag.defaultProps = {
  small: false,
  icon: false
};

DocsTag.propTypes = {
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
