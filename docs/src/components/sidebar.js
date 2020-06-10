import React from 'react';
import SectionedNavigation from '../../../src/components/sectioned-navigation';
import categories from '../data/categories.json';

export default class Sidebar extends React.Component {
  render() {
    const slug = string => string.toLowerCase();

    return (
      <SectionedNavigation
        sections={Object.keys(categories).map(category => ({
          title: category,
          url: `#${slug(category)}`,
          id: `${slug(category)}`,
          items: categories[category].map(item => ({
            text: item,
            url: `#${slug(item)}`
          }))
        }))}
      />
    );
  }
}
