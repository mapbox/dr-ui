import React from 'react';
import PropTypes from 'prop-types';

class Note extends React.Component {
  render() {
    const { props } = this;
    let titleText = 'Note';
    const themes = {
      base: {
        // applied to every note
        padding: '18px',
        fontSize: '13px',
        lineHeight: '20px',
        borderRadius: '4px'
      },
      default: {
        background: '#f1faff',
        color: '#587594'
      },
      warning: {
        background: '#feefe2',
        color: '#945823'
      },
      error: {
        background: '#fbe5e5',
        color: '#ba3b3f'
      },
      new: {
        background: '#e8f5ee',
        color: '#1b7d4f'
      }
    };
    if (props.title) {
      titleText = props.title;
    }

    const createStyles = (base, theme) => {
      let styles = {};
      for (let style in base) {
        styles[style] = base[style];
      }
      for (let style in theme) {
        styles[style] = theme[style];
      }
      return styles;
    };

    const themeNote = createStyles(
      themes['base'],
      themes[props.theme] || themes['default']
    );

    return (
      <div className="flex-parent flex-parent--row mb18" style={themeNote}>
        <div className="flex-child mr12">{props.imageComponent}</div>
        <div className="flex-child">
          <div className="txt-bold txt-m mb6">{titleText}</div>
          {props.children}
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  imageComponent: PropTypes.node.isRequired,
  theme: PropTypes.string
};

export default Note;
