/*
"accordion" layout.
*/
import React from 'react';
import PageLayout from '../page-layout';

export default class Basic extends React.Component {
  render() {
    return (
      <PageLayout
        constants={{
          SITE: 'dr-ui',
          BASEURL: '/dr-ui',
          FORWARD_EVENT_WEBHOOK: {
            production: '123',
            staging: '123'
          }
        }}
        location={{
          pathname: '/PageLayout/'
        }}
        frontMatter={{
          title: 'Overview',
          layout: 'page',
          description: 'This is the overview!',
          navOrder: 1
        }}
        navigation={{
          title: 'Search SDK for Android',
          tag: 'beta',
          hierarchy: {
            '/PageLayout/': {
              parent: '/PageLayout/',
              title: 'Overview'
            }
          },
          navTabs: [
            {
              path: '/PageLayout/',
              title: 'Overview',
              pages: [
                {
                  path: '/PageLayout/',
                  title: 'Overview'
                },
                {
                  path: '/PageLayout/layouts/',
                  title: 'Layouts'
                },
                {
                  path: '/PageLayout/navigation/',
                  title: 'Navigation'
                },
                {
                  path: '/PageLayout/images/',
                  title: 'Images and videos'
                },
                {
                  path: '/PageLayout/constants/',
                  title: 'Constants'
                },
                {
                  path: '/PageLayout/frontmatter/',
                  tag: 'fundamentals',
                  title: 'Frontmatter'
                }
              ]
            },
            {
              path: '/PageLayout/specification/',
              title: 'Specification'
            },
            {
              path: '/PageLayout/examples/',
              title: 'Examples'
            },
            {
              path: '/PageLayout/demo/',
              title: 'Demo'
            }
          ]
        }}
        topics={{}}
      />
    );
  }
}
