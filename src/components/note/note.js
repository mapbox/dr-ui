import React from 'react';
import PropTypes from 'prop-types';

import BookImage from '../book-image/book-image';
import Icon from '@mapbox/mr-ui/icon';

class Image extends React.Component {
  render() {
    const { color, icon } = this.props;
    return (
      <div
        className={`bg-${color}-light round-full color-${color}-dark flex-parent flex-parent--center-main flex-parent--center-cross`}
        style={{ width: 50, height: 50 }}
      >
        <Icon name={icon} size="40" />
      </div>
    );
  }
}

Image.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string
};

class Note extends React.Component {
  render() {
    const { theme, title, children } = this.props;
    let themes = {
      default: {
        background: '#f1faff',
        color: '#587594',
        image: <BookImage />
      },
      warning: {
        background: '#feefe2',
        color: '#945823',
        image: <Image icon="alert" color="orange" />
      },
      error: {
        background: '#fbe5e5',
        color: '#ba3b3f',
        image: <Image icon="alert" color="red" />
      },
      beta: {
        background: '#e8f5ee',
        color: '#1b7d4f',
        image: <Image icon="marker" color="green" />
      },
      download: {
        background: '#f2effa',
        color: '#5a3fc0',
        image: <Image icon="arrow-down" color="purple" />
      }
    };
    themes['legacy'] = themes.warning;
    themes['new'] = themes.beta;

    return (
      <div
        className="dr-ui--note py18 px18 round flex-parent flex-parent--row mb18"
        style={{
          background: themes[theme].background,
          color: themes[theme].color
        }}
      >
        <div className="flex-child mr12">{themes[theme].image}</div>
        <div className="flex-child prose">
          <div className="txt-bold txt-m mb6">{title}</div>
          {children}
        </div>
      </div>
    );
  }
}

Note.defaultProps = {
  theme: 'default',
  title: 'Note'
};

Note.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([
    'warning',
    'error',
    'download',
    'legacy',
    'beta',
    'default',
    'new'
  ])
};

export default Note;
