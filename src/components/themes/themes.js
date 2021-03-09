import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

class Image extends React.Component {
  render() {
    const { color, icon } = this.props;
    return (
      <div
        className={`bg-${color}-light round-full color-${color} flex-parent flex-parent--center-main flex-parent--center-cross`}
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
    styles: {
      background: '#f4f7fb',
      color: '#425870'
    }
  },
  warning: {
    image: <Image icon="alert" color="orange" />,
    label: 'Warning',
    icon: 'alert',
    styles: {
      background: '#feefe2',
      color: '#78471c',
      borderColor: '#ba6e2c'
    }
  },
  error: {
    image: <Image icon="alert" color="red" />,
    label: 'Error',
    icon: 'alert',
    styles: {
      background: '#fbe5e5',
      color: '#9b3134'
    }
  },
  beta: {
    image: <Image icon="lightning" color="blue" />,
    label: 'Beta',
    icon: 'lightning',
    tooltipText: 'This feature is in public beta and is subject to changes.',
    styles: {
      background: '#f1f3fd',
      color: '#0c248d',
      borderColor: '#0428c8'
    }
  },
  new: {
    image: <Image icon="plus" color="green" />,
    label: 'New!',
    icon: 'plus',
    tooltipText: 'This feature was released recently.',
    styles: {
      background: '#e8f5ee',
      color: '#15603d',
      borderColor: '#378645'
    }
  },
  download: {
    image: <Image icon="arrow-down" color="purple" />,
    label: 'Download',
    icon: 'arrow-down',
    styles: {
      background: '#f2effa',
      color: '#452f92'
    }
  },
  fundamentals: {
    label: 'Fundamentals',
    icon: 'bookmark',
    tooltipText:
      'The concepts described here are fundamental to using this product.',
    styles: {
      background: '#fff0f7',
      color: '#cf1c61',
      borderColor: '#fd8ac0'
    }
  },
  pricing: {
    image: <Image icon="creditcard" color="green" />,
    label: 'Pricing',
    tooltipText: 'This contains information about product pricing.',
    styles: {
      background: '#e8f5ee',
      color: '#15603d',
      borderColor: '#378645'
    }
  }
};
/* duplicate themes */
themes.legacy = Object.assign({}, themes.warning);
themes.legacy.label = 'Legacy';
themes.legacy.tooltipText = 'This feature is no longer in active development.';

export default themes;
