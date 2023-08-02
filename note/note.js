import React from 'react';
import PropTypes from 'prop-types';
import themes from '../themes';
class Note extends React.PureComponent {
  render() {
    const {
      theme,
      title,
      children
    } = this.props;
    const {
      label,
      image,
      background,
      color
    } = themes[theme];
    return /*#__PURE__*/React.createElement("div", {
      className: `dr-ui--note py18 px18 round flex mb18 ${background} ${color}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "mr18 none block-mm pt3"
    }, image), /*#__PURE__*/React.createElement("div", {
      className: "w-full prose wmin0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "txt-bold mb6"
    }, title || label), children));
  }
}
Note.defaultProps = {
  theme: 'default'
};
export default Note;