import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
class Image extends React.PureComponent {
  render() {
    const {
      color,
      icon
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: `bg-${color}-lighter round-full color-${color} flex flex--center-main flex--center-cross`,
      style: {
        width: 50,
        height: 50
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 40
    }));
  }
}
const themes = {
  default: {
    image: /*#__PURE__*/React.createElement(Image, {
      icon: "book",
      color: "gray"
    }),
    label: 'NOTE',
    icon: 'book',
    background: 'bg-gray-faint'
  },
  warning: {
    image: /*#__PURE__*/React.createElement(Image, {
      icon: "alert",
      color: "orange"
    }),
    label: 'WARNING',
    icon: 'alert',
    background: 'bg-orange-faint',
    color: 'color-orange-dark',
    border: 'border--orange-dark'
  },
  error: {
    image: /*#__PURE__*/React.createElement(Image, {
      icon: "alert",
      color: "red"
    }),
    label: 'ERROR',
    icon: 'alert',
    background: 'bg-red-faint'
  },
  beta: {
    image: /*#__PURE__*/React.createElement(Image, {
      icon: "lightning",
      color: "blue"
    }),
    label: 'BETA',
    icon: 'lightning',
    tooltipText: 'This feature is in public beta and is subject to changes.',
    styles: {
      backgroundColor: '#CBE4FF'
    }
  },
  new: {
    image: /*#__PURE__*/React.createElement(Image, {
      icon: "plus",
      color: "green"
    }),
    label: 'NEW',
    icon: 'plus',
    tooltipText: 'This feature was released recently.',
    styles: {
      backgroundColor: '#C9F2DD'
    }
  },
  download: {
    image: /*#__PURE__*/React.createElement(Image, {
      icon: "arrow-down",
      color: "purple"
    }),
    label: 'DOWNLOAD',
    icon: 'arrow-down',
    background: 'bg-purple-faint'
  },
  fundamentals: {
    label: 'FUNDAMENTALS',
    icon: 'bookmark',
    tooltipText: 'The concepts described here are fundamental to using this product.',
    background: 'bg-pink-faint'
  },
  pricing: {
    image: /*#__PURE__*/React.createElement(Image, {
      icon: "creditcard",
      color: "green"
    }),
    label: 'PRICING',
    tooltipText: 'This contains information about product pricing.',
    background: 'bg-green-faint'
  }
};
/* duplicate themes */
themes.legacy = Object.assign({}, themes.warning);
themes.legacy.label = 'LEGACY';
themes.legacy.tooltipText = 'This feature is no longer in active development.';
export default themes;