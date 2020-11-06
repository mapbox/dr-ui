import React from 'react';
import PropTypes from 'prop-types';

export const levels = {
  1: {
    label: 'Beginner',
    color: 'green'
  },
  2: {
    label: 'Intermediate',
    color: 'orange'
  },
  3: {
    label: 'Advanced',
    color: 'red'
  }
};

class LevelIndicator extends React.Component {
  render() {
    const { props } = this;
    // // Get supplies in order for constructing the difficulty level bits
    const levelColor = levels[props.level].color;
    const levelLabel = levels[props.level].label;

    // Make the "difficulty level" squares
    const levelSquares = Object.keys(levels).map((level) => {
      const squareColor = level > props.level ? 'gray-light' : levelColor;
      return (
        <div
          key={level}
          style={{
            height: '8px',
            borderRadius: '1px'
          }}
          className={`inline-block w6 bg-${squareColor} align-middle mr3`}
        />
      );
    });
    return (
      <div className="flex-parent flex-parent--center-cross">
        {levelSquares}
        <div className={`inline-block color-${levelColor} ml3`}>
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
