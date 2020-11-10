import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class CardContainer extends React.PureComponent {
  render() {
    const { props } = this;
    let cardClasses = 'mb18 ';
    if (!props.fullWidthCards) {
      cardClasses += `col col--12 col--${this.props.cardColSize}-ml`;
    } else {
      cardClasses += 'border-b border--darken10';
    }

    const containerClasses = classnames('', {
      'grid grid--gut36': !props.fullWidthCards
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
        {props.title && props.path && (
          <a
            href={props.path}
            className="unprose mb18 block color-blue-on-hover"
          >
            <h2 className="txt-bold unprose" id={props.path.split('#')[1]}>
              {props.title}{' '}
              <span data-swiftype-index="false">({props.cards.length})</span>
            </h2>
          </a>
        )}
        <div className={containerClasses}>{renderedCards}</div>
      </div>
    );
  }
}

CardContainer.defaultProps = {
  cardColSize: 6,
  fullWidthCards: false
};

CardContainer.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  fullWidthCards: PropTypes.bool,
  cards: PropTypes.arrayOf(PropTypes.node).isRequired,
  cardColSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};

export default CardContainer;
