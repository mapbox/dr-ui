/*
Basic.
*/
import React from 'react';
import SectionedNavigation from '../sectioned-navigation';

export default class Example extends React.Component {
  render() {
    return (
      <SectionedNavigation
        title="Examples"
        sections={[
          {
            title: 'Getting started',
            url: '#getting-started',
            items: [
              {
                text: 'Camera animation',
                url: '#foo'
              },
              {
                text: 'Mark a place',
                url: '#footoo',
                active: true
              },
              {
                text: 'Apply a style',
                url: '#fooandyou'
              }
            ]
          },
          {
            title: 'Markers and callouts',
            url: '#markers',
            items: [
              {
                text: 'Annotation models',
                url: '#fooboo'
              },
              {
                text: 'Callouts',
                url: '#foocrew'
              }
            ]
          },
          {
            title: 'Getting started again',
            url: '#getting-started-again',
            items: [
              {
                text: 'Apply a style',
                url: '#fooblue'
              }
            ]
          }
        ]}
      />
    );
  }
}
