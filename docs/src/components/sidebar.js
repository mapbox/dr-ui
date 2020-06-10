import React from 'react';

import components from '../data/components'; // eslint-disable-line

export default class Sidebar extends React.Component {
  render() {
    const componentLinks = components.map(component => {
      return (
        <li key={component.name} className="mb3">
          <a
            href={`#${component.name.toLowerCase()}`}
            className="link color-gray-dark color-blue-on-hover"
          >
            {component.name}
          </a>
        </li>
      );
    });
    return (
      <div className="relative px24">
        <ul>{componentLinks}</ul>
      </div>
    );
  }
}
