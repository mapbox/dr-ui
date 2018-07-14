import React from 'react';
import PropTypes from 'prop-types';

class CardContainer extends React.PureComponent {
  render() {
    const { props } = this;
    const categoryID = props.category.path.split('#')[1];
    return (
      <div>
        <a
          href={props.category.path}
          className="unprose mb12 block color-blue-on-hover"
        >
          <h2 className="pt60 txt-l txt-capitalize-first" id={categoryID}>
            {props.category.title} ({props.cards.length})
          </h2>
        </a>
        <div className="grid grid--gut12 card-container">{props.cards}</div>
      </div>
    );
  }
}

CardContainer.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired,
  cards: PropTypes.array.isRequired
};

export default CardContainer;
