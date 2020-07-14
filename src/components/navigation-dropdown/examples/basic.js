/*
Basic.
*/
import React from 'react';
import NavigationDropdown from '../navigation-dropdown';
import Tag from '../../tag/tag';

export default class Basic extends React.Component {
  render() {
    return (
      <NavigationDropdown
        currentPath="https://docs.mapbox.com/help/"
        dropdownOptions={[
          {
            title: 'Home',
            path: 'https://docs.mapbox.com/help/'
          },
          {
            title: 'How Mapbox Works',
            path: 'https://docs.mapbox.com/help/how-mapbox-works/'
          },
          {
            title: (
              <>
                Tutorials <Tag theme="new" />
              </>
            ),
            path: 'https://docs.mapbox.com/help/tutorials/'
          },
          {
            title: 'Troubleshooting',
            path: 'https://docs.mapbox.com/help/troubleshooting/'
          },
          {
            title: 'Glossary',
            path: 'https://docs.mapbox.com/help/glossary/'
          }
        ]}
      />
    );
  }
}
