import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

class Image extends React.PureComponent {
  render() {
    const { color, icon } = this.props;
    return (
      <div
        className={`bg-${color}-lighter round-full color-${color} flex flex--center-main flex--center-cross`}
        style={{ width: 50, height: 50 }}
      >
        <Icon name={icon} size={40} />
      </div>
    );
  }
}

Image.propTypes = {
  color: PropTypes.oneOf([
    'gray',
    'orange',
    'red',
    'green',
    'purple',
    'pink',
    'yellow',
    'blue'
  ]).isRequired,
  icon: PropTypes.string
};

const themes = {
  default: {
    image: <Image icon="book" color="gray" />,
    label: 'Note',
    icon: 'book',

    background: 'bg-gray-faint',
    color: 'color-gray-dark'
  },
  warning: {
    image: <Image icon="alert" color="orange" />,
    label: 'Warning',
    icon: 'alert',

    background: 'bg-orange-faint',
    color: 'color-orange-dark',
    border: 'border--orange-dark'
  },
  error: {
    image: <Image icon="alert" color="red" />,
    label: 'Error',
    icon: 'alert',

    background: 'bg-red-faint',
    color: 'color-red-dark'
  },
  beta: {
    image: <Image icon="lightning" color="blue" />,
    label: 'Beta',
    icon: 'lightning',
    tooltipText: 'This feature is in public beta and is subject to changes.',

    background: 'bg-blue-faint',
    color: 'color-blue-dark',
    border: 'border--blue-dark'
  },
  new: {
    image: <Image icon="plus" color="green" />,
    label: 'New!',
    icon: 'plus',
    tooltipText: 'This feature was released recently.',

    background: 'bg-green-faint',
    color: 'color-green-dark',
    border: 'border--green-dark'
  },
  download: {
    image: <Image icon="arrow-down" color="purple" />,
    label: 'Download',
    icon: 'arrow-down',

    background: 'bg-purple-faint',
    color: 'color-purple-dark'
  },
  fundamentals: {
    label: 'Fundamentals',
    icon: 'bookmark',
    tooltipText:
      'The concepts described here are fundamental to using this product.',

    background: 'bg-pink-faint',
    color: 'color-pink-dark',
    border: 'border--pink-dark'
  },
  pricing: {
    image: <Image icon="creditcard" color="green" />,
    label: 'Pricing',
    tooltipText: 'This contains information about product pricing.',

    background: 'bg-green-faint',
    color: 'color-green-dark',
    border: 'border--green-dark'
  }
};
/* duplicate themes */
themes.legacy = Object.assign({}, themes.warning);
themes.legacy.label = 'Legacy';
themes.legacy.tooltipText = 'This feature is no longer in active development.';

export default themes;
