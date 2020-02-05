import React from 'react';
import PropTypes from 'prop-types';
import themes from '../themes';

class Note extends React.Component {
  render() {
    const { theme, title, children } = this.props;
    return (
      <div
        className="dr-ui--note py18 px18 round flex-parent flex-parent--row mb18"
        style={{
          background: themes[theme].styles.background,
          color: themes[theme].styles.color
        }}
      >
        <div className="flex-child mr18 none block-mm pt3">
          {themes[theme].image}
        </div>

        <div className="flex-child prose">
          <div className="txt-bold txt-m mb6">
            {title || themes[theme].label}
          </div>
          {children}
        </div>
      </div>
    );
  }
}

Note.defaultProps = {
  theme: 'default'
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
