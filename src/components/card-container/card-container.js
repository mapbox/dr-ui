import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class CardContainer extends React.PureComponent {
  render() {
    const { props } = this;
    const categoryID = props.path.split('#')[1];
    const cardClasses = classnames('col col--12 mb36', {
      'col--6-mm': !props.fullWidthCards
    });
    const renderedCards = props.cards.map((card, index) => {
      return (
        <div key={index} className={cardClasses}>
          {card}
        </div>
      );
    });
    return (
      <div>
        <a href={props.path} className="unprose mb18 block color-blue-on-hover">
          <h2 className="txt-bold" id={categoryID}>
            {props.title} ({props.cards.length})
          </h2>
        </a>
        <div className="grid grid--gut36">{renderedCards}</div>
      </div>
    );
  }
}

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  fullWidthCards: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default CardContainer;
