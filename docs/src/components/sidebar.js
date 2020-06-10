import React from 'react';

import components from '../data/components'; // eslint-disable-line

export default class Sidebar extends React.Component {
  render() {
    const componentLinks = components.map(component => {
      return (
        <li key={component.name} className="mb6">
          <a
            href={`#${component.name.toLowerCase()}`}
            className="link link--gray txt-s txt-bold txt-truncate"
          >
            {component.name}
          </a>
        </li>
      );
    });
    return (
      <div className="relative px18">
        <ul>{componentLinks}</ul>
      </div>
    );
  }
}
