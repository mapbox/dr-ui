/*
Basic.
*/
import React from 'react';
import HelpPage from '../help-page';

const data = [
  {
    title: 'Container title one',
    pages: [
      {
        title: 'Example one',
        description: 'Lorem ipsum dolor sit amet.',
        path: 'path'
      },
      {
        title: 'Example two',
        description: 'Consectetur adipisicing elit',
        path: 'path'
      }
    ]
  },
  {
    title: 'Container title two',
    pages: [
      {
        title: 'Example one',
        description:
          'Ded do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        path: 'path'
      },
      {
        title: 'Example two',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        path: 'path'
      },
      {
        title: 'Example two',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        path: 'path'
      }
    ]
  }
];

export default class Basic extends React.Component {
  render() {
    return <HelpPage data={data} />;
  }
}
