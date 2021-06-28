/*
Basic.
*/
import React from 'react';
import NavigationAccordion from '../navigation-accordion';

export default class Basic extends React.PureComponent {
  render() {
    const navigation = [
      {
        title: 'Guides',
        id: 'guides',
        path: '/dr-ui/guides/',
        pages: [
          {
            path: '/dr-ui/guides/permissions/',
            title: 'Permissions',
            id: 'permissions'
          }
        ]
      },
      {
        title: 'Examples',
        id: 'examples',
        path: '/dr-ui/examples/',
        pages: [
          {
            path: '/dr-ui/examples/basic/',
            title: 'Basic example',
            id: 'basic-example'
          },
          {
            path: '/dr-ui/examples/fancy/',
            title: 'Fancy example',
            id: 'fancy-example'
          }
        ]
      }
    ];

    const constants = {
      SITE: 'Dr. UI',
      BASEURL: '/dr-ui/'
    };
    return (
      <NavigationAccordion
        navigation={navigation}
        location={{ pathName: '/dr-ui/sample/' }}
        parentPage="/dr-ui/"
        constants={constants}
      />
    );
  }
}
