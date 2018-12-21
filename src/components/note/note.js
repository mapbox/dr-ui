import React from 'react';
import PropTypes from 'prop-types';

class Note extends React.Component {
  render() {
    const { props } = this;
    let titleText = 'Note';
    let themeNote = {
      padding: '18px',
      background: '#f1faff',
      fontSize: '13px',
      lineHeight: '20px',
      color: '#587594',
      borderRadius: '4px'
    };
    if (props.title) {
      titleText = props.title;
    }
    if (props.theme) {
      themeNote = props.theme;
    }

    return (
      <div className="flex-parent flex-parent--row" style={themeNote}>
        <div className="flex-child mr12">{props.imageComponent}</div>
        <div className="flex-child">
          <div className="txt-bold txt-m color-gray-dark">{titleText}</div>
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
  theme: PropTypes.shape({
    padding: PropTypes.string,
    background: PropTypes.string,
    fontSize: PropTypes.string,
    lineHeight: PropTypes.string,
    color: PropTypes.string
  })
};

export default Note;
