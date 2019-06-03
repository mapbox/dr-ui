import React from 'react';
import Icon from '@mapbox/mr-ui/icon';
import components from '../data/components'; // eslint-disable-line

export default class Sidebar extends React.Component {
  render() {
    const componentLinks = components.map(component => {
      return (
        <li key={component.name} className="mb6">
          <a
            href={`#${component.name.toLowerCase()}`}
            className="link link--gray"
          >
            {component.name}
          </a>
        </li>
      );
    });
    return (
      <div>
        <h1 className="txt-bold txt-fancy mb3 txt-l">👩‍⚕️ Dr. UI</h1>
        <a
          className="flex-parent flex-parent--center-cross txt-s link link--gray"
          href="https://github.com/mapbox/dr-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex-child mr6">
            <Icon name="github" />
          </span>
          <span className="flex-child">View on GitHub</span>
        </a>
        <div className="pt12 border-t border--gray-light pt12 mt12">
          <ul>{componentLinks}</ul>
        </div>
      </div>
    );
  }
}
