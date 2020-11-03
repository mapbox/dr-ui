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
              href: '/PageLayout/',
              id: '/PageLayout/',
              label: 'Overview'
            },
            {
              href: '/PageLayout/specification/',
              id: '/PageLayout/specification/',
              label: 'Specification'
            },
            {
              href: '/PageLayout/examples/',
              id: '/PageLayout/examples/',
              label: 'Examples'
            },
            {
              href: '/PageLayout/demo/',
              id: '/PageLayout/demo/',
              label: 'Demo'
            }
          ]
        }}
      />
    );
  }
}
