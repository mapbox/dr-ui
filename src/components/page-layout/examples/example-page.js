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
          pathname: '/PageLayout/examples/example-1/'
        }}
        frontMatter={{
          title: 'An example',
          layout: 'example',
          description: 'An example of a page.'
        }}
        AppropriateImage={AppropriateImage}
        navigation={{
          hierarchy: {
            '/PageLayout/examples/example-1/': {
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
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </PageLayout>
    );
  }
}
