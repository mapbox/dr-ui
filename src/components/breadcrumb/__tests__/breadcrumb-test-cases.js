import React from 'react';
import Basic from '../examples/basic';
import Breadcrumb from '../breadcrumb';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.uniqPath = {
  description: 'Each link has a unique path',
  element: (
    <Breadcrumb
      links={[
        {
          title: 'API',
          path: '/api/'
        },
        {
          title: 'API',
          path: '/api/'
        },
        {
          title: 'Maps service',
          path: '/api/maps/'
        }
      ]}
      location={{
        pathname: '/api/maps/'
      }}
    />
  )
};

testCases.uniqTitle = {
  description: 'Each title is unique.',
  element: (
    <Breadcrumb
      links={[
        {
          title: 'Dr. UI',
          path: '/dr-ui/'
        },
        {
          title: 'Help',
          path: '/dr-ui/help/'
        },
        {
          title: 'Help',
          path: '/dr-ui/help/'
        }
      ]}
      location={{
        pathname: '/dr-ui/help/'
      }}
    />
  )
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
