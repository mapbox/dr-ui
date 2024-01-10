import React from 'react';
import Icon from '@mapbox/mr-ui/icon';

export default function CodeBlockTitle({ title, link, toggle }) {
  if (!title && !link && !toggle) return null;

  return (
    <div className="px12 py12 txt-ms  border-b border--gray-lighter flex flex--space-between-main">
      {title && <div className="txt-bold color-gray-deep">{title}</div>}
      {link && (
        <div className="ml12-mm">
          <a
            className="unprose link"
            href={link}
            title={`View ${title} on GitHub`}
          >
            <Icon name="github" inline={true} /> View on GitHub
          </a>
        </div>
      )}
      {toggle}
    </div>
  );
}
