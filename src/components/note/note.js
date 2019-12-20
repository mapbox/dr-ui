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
    const { theme, title, children, image } = this.props;
    let themes = {
      default: {
        background: '#f4f7fb',
        color: '#547190',
        image: <Image icon="book" color="gray" />,
        title: 'Note'
      },
      warning: {
        background: '#feefe2',
        color: '#945823',
        image: <Image icon="alert" color="orange" />,
        title: 'Warning'
      },
      error: {
        background: '#fbe5e5',
        color: '#ba3b3f',
        image: <Image icon="alert" color="red" />,
        title: 'Error'
      },
      beta: {
        background: '#e8f5ee',
        color: '#1b7d4f',
        image: <Image icon="marker" color="green" />,
        title: 'Beta'
      },
      download: {
        background: '#f2effa',
        color: '#5a3fc0',
        image: <Image icon="arrow-down" color="purple" />,
        title: 'Download'
      }
    };
    themes['legacy'] = Object.assign({}, themes.warning);
    themes['legacy'].title = 'Legacy';
    themes['new'] = Object.assign({}, themes.beta);
    themes['new'].title = 'New!';

    return (
      <div
        className="dr-ui--note py18 px18 round flex-parent flex-parent--row mb18"
        style={{
          background: themes[theme].background,
          color: themes[theme].color
        }}
      >
        {image && <div className="flex-child mr12">{themes[theme].image}</div>}
        <div className="flex-child prose">
          <div className="txt-bold txt-m mb6">
            {title || themes[theme].title}
          </div>
          {children}
        </div>
      </div>
    );
  }
}

Note.defaultProps = {
  theme: 'default',
  image: true
};

Note.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  image: PropTypes.bool,
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
