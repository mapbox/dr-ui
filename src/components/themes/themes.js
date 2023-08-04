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
    label: 'NOTE',
    icon: 'book',
    background: 'bg-gray-faint'
  },
  warning: {
    image: <Image icon="alert" color="orange" />,
    label: 'WARNING',
    icon: 'alert',
    background: 'bg-orange-faint',
    color: 'color-orange-dark',
    border: 'border--orange-dark'
  },
  error: {
    image: <Image icon="alert" color="red" />,
    label: 'ERROR',
    icon: 'alert',
    background: 'bg-red-faint'
  },
  beta: {
    image: <Image icon="lightning" color="blue" />,
    label: 'BETA',
    icon: 'lightning',
    tooltipText: 'This feature is in public beta and is subject to changes.',
    styles: {
      backgroundColor: '#CBE4FF'
    }
  },
  new: {
    image: <Image icon="plus" color="green" />,
    label: 'NEW',
    icon: 'plus',
    tooltipText: 'This feature was released recently.',
    styles: {
      backgroundColor: '#C9F2DD'
    }
  },
  download: {
    image: <Image icon="arrow-down" color="purple" />,
    label: 'DOWNLOAD',
    icon: 'arrow-down',
    background: 'bg-purple-faint'
  },
  fundamentals: {
    label: 'FUNDAMENTALS',
    icon: 'bookmark',
    tooltipText:
      'The concepts described here are fundamental to using this product.',
    background: 'bg-pink-faint'
  },
  pricing: {
    image: <Image icon="creditcard" color="green" />,
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
