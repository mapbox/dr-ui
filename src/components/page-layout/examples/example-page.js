/*
"example" layout, interior page.
*/
import React from 'react';
import PageLayout from '../page-layout';

import { scopeAppropriateImage } from '@mapbox/appropriate-images-react';

const AppropriateImage = scopeAppropriateImage({
  'header-image': {
    basename: 'header-image.png',
    path: 'header-image.png',
    sizes: [{ width: 480 }, { width: 960 }]
  }
});

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
          title: 'Examples',
          layout: 'example',
          description: 'An example of a page.'
        }}
        AppropriateImage={AppropriateImage}
        navigation={{
          hierarchy: {
            '/PageLayout/': {
              parent: '/PageLayout/',
              title: 'Demo'
            }
          },

          navTabs: [
            {
              path: '/PageLayout/',
              title: 'Overview',
              pages: [
                {
                  path: '/PageLayout/specifications/',
                  title: 'Specifications'
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
        topics={{
          '/PageLayout/': {
            contentType: 'example',
            description: 'Replace me.',
            language: ['JavaScript'],
            layout: 'example',
            navOrder: 3,
            path: '/PageLayout/',
            title: 'Examples',
            topics: [
              {
                count: 3,
                name: 'Cool',
                pages: [
                  {
                    contentType: 'example',
                    description: 'Replace me.',
                    language: ['JavaScript'],
                    layout: 'example',
                    path: '/PageLayout/example-1/',
                    text: 'Example 1',
                    thumbnail: 'header-image',
                    title: 'Example 1',
                    topic: ['Cool'],
                    url: '/PageLayout/example-1/'
                  },
                  {
                    contentType: 'example',
                    description: 'Replace me.',
                    language: ['JavaScript'],
                    layout: 'example',
                    path: '/PageLayout/example-2/',
                    text: 'Example 2',
                    thumbnail: 'header-image',
                    title: 'Example 2',
                    topic: ['Cool'],
                    url: '/PageLayout/example-2/'
                  },
                  {
                    contentType: 'example',
                    description: 'Replace me.',
                    language: ['JavaScript'],
                    layout: 'example',
                    path: '/PageLayout/example-3/',
                    text: 'Example 3',
                    thumbnail: 'header-image',
                    title: 'Example 3',
                    topic: ['Cool', 'Awesome'],
                    url: '/PageLayout/example-3/'
                  }
                ],
                url: '/PageLayout/#cool'
              },
              {
                count: 1,
                name: 'Awesome',
                pages: [
                  {
                    contentType: 'example',
                    description: 'Replace me.',
                    language: ['JavaScript'],
                    layout: 'example',
                    path: '/PageLayout/example-3/',
                    text: 'Example 3',
                    thumbnail: '/files/ios-horizontal.png',
                    title: 'Example 3',
                    topic: ['Cool', 'Awesome'],
                    url: '/PageLayout/example-3/'
                  }
                ],
                url: '/PageLayout/#awesome'
              }
            ]
          }
        }}
      />
    );
  }
}
