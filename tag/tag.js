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
    return /*#__PURE__*/React.createElement(Tooltip, {
      content: theme.tooltipText,
      maxWidth: "small",
      placement: "top"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...theme.styles,
        color: '#23262D',
        fontFamily: 'CeraPRO',
        fontWeight: 500
      },
      className: classnames(`round inline-block cursor-default`, {
        'txt-s': !this.props.small,
        'txt-xs': this.props.small,
        px6: !this.props.icon
      }, theme.background)
    }, this.props.icon ? /*#__PURE__*/React.createElement(Icon, {
      name: theme.icon,
      inline: true
    }) : theme.label));
  }
}
Tag.defaultProps = {
  small: false,
  icon: false
};
function validateCustomProp(props, currentProp, componentName) {
  if (props.theme !== 'custom') return;
  if (!currentProp || typeof props[currentProp] !== 'string') {
    return new Error(`The "${currentProp}" prop in \`${componentName}\` is required when using the "custom" theme and must be a string.`);
  }
}