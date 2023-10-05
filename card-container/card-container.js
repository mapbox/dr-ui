import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
class CardContainer extends React.PureComponent {
  render() {
    const {
      fullWidthCards,
      cards,
      title,
      path,
      cardColSize
    } = this.props;
    const cardClasses = `mb18 ${fullWidthCards ? 'border-b border--darken10' : `col w-full w-${cardColSize}-ml`}`;
    const renderedCards = cards.map((card, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      className: cardClasses
    }, card));
    return /*#__PURE__*/React.createElement("div", {
      className: "dr-ui--card-container"
    }, title && path && /*#__PURE__*/React.createElement("a", {
      href: path,
      className: "unprose mb18 block color-blue-on-hover"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "txt-bold unprose",
      id: path.split('#')[1]
    }, title, " ", /*#__PURE__*/React.createElement("span", {
      "data-swiftype-index": "false"
    }, "(", cards.length, ")"))), /*#__PURE__*/React.createElement("div", {
      className: classnames({
        'grid grid--gut36': !fullWidthCards
      })
    }, renderedCards));
  }
}
CardContainer.defaultProps = {
  cardColSize: '1/2',
  fullWidthCards: false
};
export default CardContainer;