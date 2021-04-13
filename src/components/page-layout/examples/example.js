/*
"example" layout, index page (has navOrder in frontmatter)
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

export default class Basic extends React.PureComponent {
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
          pathname: '/PageLayout/examples/'
        }}
        frontMatter={{
          title: 'Examples',
          layout: 'exampleIndex',
          description: 'Lots of handy examples.',
          navOrder: 1
        }}
        AppropriateImage={AppropriateImage}
        navigation={{
          hierarchy: {
            '/PageLayout/examples/': {
              parent: '/PageLayout/examples/',
              title: 'Examples'
            }
          },
          navTabs: [
            {
              path: '/PageLayout/',
              title: 'Overview',
              id: 'overview',
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
              title: 'Specification',
              id: 'specification'
            },
            {
              path: '/PageLayout/examples/',
              title: 'Examples',
              id: 'examples'
            },
            {
              path: '/PageLayout/demo/',
              title: 'Demo',
              id: 'demo'
            }
          ]
        }}
        filters={{
          '/PageLayout/examples/': {
            contentType: 'example',
            description: 'Replace me.',
            language: ['JavaScript'],
            layout: 'example',
            navOrder: 3,
            path: '/PageLayout/',
            title: 'Examples',
            topics: ['Cool', 'Awesome'],
            pages: [
              {
                contentType: 'example',
                description:
                  'Initialize a map in an HTML element with Mapbox GL JS.',
                language: ['JavaScript'],
                layout: 'example',
                path: '/PageLayout/example-1/',
                thumbnail: 'header-image',
                title: 'Display a map',
                topics: ['Cool'],
                url: '/PageLayout/example-1/'
              },
              {
                contentType: 'example',
                description: 'Add a default Marker to the map.',
                language: ['JavaScript'],
                layout: 'example',
                path: '/PageLayout/example-2/',
                thumbnail: 'header-image',
                title: 'Add a default marker',
                topics: ['Cool'],
                url: '/PageLayout/example-2/'
              },
              {
                contentType: 'example',
                description:
                  'Create a 3D indoor map with the fill-extrude-height paint property.',
                language: ['JavaScript'],
                layout: 'example',
                path: '/PageLayout/example-3/',
                thumbnail: 'header-image',
                title: 'Extrude polygons for 3D indoor mapping',
                topics: ['Cool', 'Awesome'],
                url: '/PageLayout/example-3/'
              }
            ]
          }
        }}
      />
    );
  }
}
