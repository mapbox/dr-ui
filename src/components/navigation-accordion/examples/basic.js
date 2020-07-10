/*
Basic.
*/
import React from 'react';
import NavigationAccordion from '../navigation-accordion';

export default class Basic extends React.Component {
  render() {
    return (
      <NavigationAccordion
        currentPath="page-one"
        contents={{
          firstLevelItems: [
            {
              title: 'Title one',
              path: 'page-one'
            },
            {
              title: 'Title two',
              path: 'page-two'
            }
          ],
          secondLevelItems: [
            {
              title: 'Heading one',
              path: 'heading-one'
            },
            {
              title: 'Heading two',
              path: 'heading-two'
            }
          ]
        }}
        onDropdownChange={() => {}}
      />
    );
  }
}
