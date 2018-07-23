import React from 'react';
import PropTypes from 'prop-types';
import BookImage from '../book-image/book-image';

const themeNote = {
  padding: '18px 18px 18px',
  background: '#f1faff',
  fontSize: '13px',
  lineHeight: '20px',
  color: '#607d9c'
};

class Note extends React.Component {
  render() {
    const { props } = this;
    let titleText = 'Note';
    if (props.title) {
      titleText = props.title;
    }
    return (
      <div className="flex-parent flex-parent--row" style={themeNote}>
        <div className="flex-child mr12">
          <BookImage />
        </div>
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
  children: PropTypes.node.isRequired
};

export default Note;
