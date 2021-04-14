import React from 'react';
import Basic from '../examples/basic';
import Breadcrumb from '../breadcrumb';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.subSite = {
  description: 'Has subsite',
  element: (
    <Breadcrumb
      links={[
        {
          title: 'Android',
          path: '/android/'
        },
        {
          title: 'Maps SDK',
          path: '/android/maps/overview/'
        },
        {
          title: 'Overview',
          path: '/android/maps/overview/'
        },
        {
          title: 'Camera',
          path: '/android/maps/overview/camera/'
        }
      ]}
      location={{
        pathname: '/android/maps/overview/camera/'
      }}
    />
  )
};

testCases.domain = {
  description: 'Example of Platform docs site',
  element: (
    <Breadcrumb
      links={[
        {
          title: 'Platform',
          path: 'https://platform.mapbox.com'
        },
        {
          title: 'CI Systems',
          path: '/developer-experience/ci-systems/'
        },
        {
          title: 'Reference',
          path: '/developer-experience/ci-systems/reference/'
        },
        {
          title: 'Managing credentials',
          path:
            '/developer-experience/ci-systems/reference/managing-credentials/'
        }
      ]}
      location={{
        pathname:
          '/developer-experience/ci-systems/reference/managing-credentials/'
      }}
    />
  )
};

testCases.hide = {
  description: 'Hide breadcrumb if there is only one item',
  element: (
    <Breadcrumb
      links={[
        {
          title: 'Dr. UI',
          path: '/dr-ui/'
        }
      ]}
      location={{
        pathname: '/dr-ui/'
      }}
    />
  )
};

export { testCases, noRenderCases };
