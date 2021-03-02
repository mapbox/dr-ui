/*
Basic.
*/
import React from 'react';
import NavigationAccordion from '../navigation-accordion';

export default class Basic extends React.Component {
  render() {
    const navigation = [
      {
        title: 'Overview',
        id: 'overview',
        path: '/dr-ui/overview/',
        pages: [
          {
            path: '/dr-ui/overview/permissions/',
            title: 'Permissions'
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
            title: 'Basic example'
          },
          {
            path: '/dr-ui/examples/fancy/',
            title: 'Fancy example'
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
