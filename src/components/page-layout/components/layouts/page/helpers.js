import React from 'react';
import classnames from 'classnames';

export function buildSections(headings) {
  if (!headings) return [];
  return headings
    .filter((heading) => heading.level === 2 || heading.level === 3)
    .map((heading) => ({
      title: heading.text,
      url: `#${heading.slug}`,
      level: heading.level
    }));
}

export function buildScollspyItems(sections) {
  return sections.map((heading) => heading.url.replace('#', ''));
}

export function buildToc(sections) {
  return sections.map((heading, index) => {
    const nextHeading = sections[index + 1] || null;
    const headingClasses = classnames('', {
      pb6: heading.level === 2,
      'mb6 color-gray': heading.level === 3,
      mb24: nextHeading && nextHeading.level === 2 && heading.level === 3,
      mb6: nextHeading && nextHeading.level === 2 && heading.level === 2
    });
    return (
      <li key={index} className={headingClasses}>
        <a href={heading.url} className="color-blue-on-hover">
          {heading.title}
        </a>
      </li>
    );
  });
}
