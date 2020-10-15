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
  description: 'Set `domain`',
  element: (
    <Breadcrumb
      links={[
        {
          title: 'Mapbox GL JS',
          path: '/mapbox-gl-js/'
        },
        {
          title: 'Examples',
          path: '/mapbox-gl-js/examples/'
        },
        {
          title: 'Display a map',
          path: '/mapbox-gl-js/examples/display-a-map/'
        }
      ]}
      domain={{
        title: 'Platform',
        path: 'https://platform.mapbox.com'
      }}
      location={{
        pathname: '/mapbox-gl-js/examples/display-a-map/'
      }}
    />
  )
};

testCases.noDomain = {
  description: 'Set `domain: false`',
  element: (
    <Breadcrumb
      links={[
        {
          title: 'Mapbox GL JS',
          path: '/mapbox-gl-js/'
        },
        {
          title: 'Examples',
          path: '/mapbox-gl-js/examples/'
        },
        {
          title: 'Display a map',
          path: '/mapbox-gl-js/examples/display-a-map/'
        }
      ]}
      domain={false}
      location={{
        pathname: '/mapbox-gl-js/examples/display-a-map/'
      }}
    />
  )
};

testCases.hide = {
  description:
    'Hide breadcrumb if there is only one item (and domain is false)',
  element: (
    <Breadcrumb
      links={[
        {
          title: 'Dr. UI',
          path: '/dr-ui/'
        },
        {
          title: 'Dr. UI',
          path: '/dr-ui/'
        }
      ]}
      domain={false}
      location={{
        pathname: '/dr-ui/'
      }}
    />
  )
};

export { testCases, noRenderCases };
