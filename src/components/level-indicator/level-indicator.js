import React from 'react';
import PropTypes from 'prop-types';

const levels = {
  1: {
    label: 'beginner',
    color: 'green',
    opacity: 50
  },
  2: {
    label: 'intermediate',
    color: 'orange',
    opacity: 75
  },
  3: {
    label: 'advanced',
    color: 'red',
    opacity: 100
  }
};

class LevelIndicator extends React.Component {
  render() {
    const { props } = this;
    // Get supplies in order for constructing the difficulty level bits
    const levelColor = levels[props.level].color;
    const levelLabel = levels[props.level].label;
    const squareStyles = {
      height: '8px',
      borderRadius: '1px'
    };

    // Make the "difficulty level" squares
    let levelSquares = [];
    [1, 2, 3].forEach((num, i) => {
      let squareColor = '';
      num > this.props.level
        ? (squareColor = 'gray-light')
        : (squareColor = levelColor);
      levelSquares.push(
        <div
          key={i}
          style={squareStyles}
          className={`inline-block w6 bg-${squareColor} align-middle mr3`}
        />
      );
    });
    return (
      <div className={`txt-s color-${levelColor}`}>
        {levelSquares}
        <div
          className={`inline-block color-${levelColor} ml3 txt-bold txt-capitalize`}
        >
          {levelLabel}
        </div>
      </div>
    );
  }
}

LevelIndicator.propTypes = {
  level: PropTypes.oneOf([1, 2, 3]).isRequired
};

export default LevelIndicator;
