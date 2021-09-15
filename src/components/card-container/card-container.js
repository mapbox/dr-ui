import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class CardContainer extends React.PureComponent {
  render() {
    const { fullWidthCards, cards, title, path, cardColSize } = this.props;
    const cardClasses = `mb18 ${
      fullWidthCards
        ? 'border-b border--darken10'
        : `col w-full w-${cardColSize}-ml`
    }`;
    const renderedCards = cards.map((card, index) => (
      <div key={index} className={cardClasses}>
        {card}
      </div>
    ));
    return (
      <div className="dr-ui--card-container">
        {title && path && (
          <a href={path} className="unprose mb18 block color-blue-on-hover">
            <h2 className="txt-bold unprose" id={path.split('#')[1]}>
              {title} <span data-swiftype-index="false">({cards.length})</span>
            </h2>
          </a>
        )}
        <div
          className={classnames({
            'grid grid--gut36': !fullWidthCards
          })}
        >
          {renderedCards}
        </div>
      </div>
    );
  }
}

CardContainer.defaultProps = {
  cardColSize: '1/2',
  fullWidthCards: false
};

CardContainer.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  fullWidthCards: PropTypes.bool,
  cards: PropTypes.arrayOf(PropTypes.node).isRequired,
  cardColSize: PropTypes.oneOf(['1/4', '1/3', '1/2'])
};

export default CardContainer;
