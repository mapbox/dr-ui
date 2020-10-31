/*
Basic.
*/
import React from 'react';
import NavigationAccordion from '../navigation-accordion';

export default class Basic extends React.Component {
  render() {
    const navigation = {
      navTabs: [
        {
          label: 'Overview',
          id: '/dr-ui/overview/',
          href: '/dr-ui/overview/'
        },
        {
          label: 'Examples',
          id: '/dr-ui/examples/',
          href: '/dr-ui/examples/'
        }
      ],
      accordion: {
        '/dr-ui/overview/': [
          {
            path: '/dr-ui/overview/permissions/',
            title: 'Permissions'
          }
        ],
        '/dr-ui/examples/': [
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
    };

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
