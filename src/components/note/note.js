import React from 'react';
import PropTypes from 'prop-types';
import themes from '../themes';

class Note extends React.PureComponent {
  render() {
    const { theme, title, children } = this.props;
    const { label, image, background, color } = themes[theme];
    return (
      <div
        className={`dr-ui--note py18 px18 round flex mb18 ${background} ${color}`}
      >
        <div className="mr18 none block-mm pt3">{image}</div>
        <div className="w-full prose wmin0">
          <div className="txt-bold mb6">{title || label}</div>
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
    'new',
    'pricing'
  ])
};

export default Note;
