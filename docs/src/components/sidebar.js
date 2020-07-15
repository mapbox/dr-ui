import React from 'react';
import SectionedNavigation from '../../../src/components/sectioned-navigation';

import categories from '../categories.json';

const slug = (string) => string.toLowerCase();

const topics = Object.keys(categories).map((category) => ({
  title: category,
  url: `#${slug(category)}`,
  id: `${slug(category)}`,
  items: categories[category].map((item) => ({
    text: item,
    url: `#${slug(item)}`
  }))
}));

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="mt12">
        <SectionedNavigation sections={topics} includeFilterBar={true} />
      </div>
    );
  }
}
