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
      currentPage={{
        title: 'Maps service',
        path: '/api/maps/'
      }}
      site={{
        title: 'API',
        path: '/api/'
      }}
      section={{
        title: 'API',
        path: '/api/'
      }}
    />
  )
};

testCases.uniqTitle = {
  description: 'Each title is unique.',
  element: (
    <Breadcrumb
      currentPage={{
        title: 'Help',
        path: '/dr-ui/help/'
      }}
      site={{
        title: 'Dr. UI',
        path: '/dr-ui/'
      }}
      section={{
        title: 'Help',
        path: '/dr-ui/help/'
      }}
    />
  )
};

testCases.subSite = {
  description: 'Has subsite',
  element: (
    <Breadcrumb
      currentPage={{
        title: 'Camera',
        path: '/android/maps/overview/camera/'
      }}
      site={{
        title: 'Android',
        path: '/android/'
      }}
      subsite={{
        title: 'Maps SDK',
        path: '/android/maps/overview/'
      }}
      section={{
        title: 'Overview',
        path: '/android/maps/overview/'
      }}
    />
  )
};

testCases.domain = {
  description: 'Set `domain`',
  element: (
    <Breadcrumb
      currentPage={{
        title: 'Display a map',
        path: '/mapbox-gl-js/examples/display-a-map/'
      }}
      domain={{
        title: 'Platform',
        path: 'https://platform.mapbox.com'
      }}
      site={{
        title: 'Mapbox GL JS',
        path: '/mapbox-gl-js/'
      }}
      section={{
        title: 'Examples',
        path: '/mapbox-gl-js/examples/'
      }}
    />
  )
};

testCases.noDomain = {
  description: 'Set `domain: false`',
  element: (
    <Breadcrumb
      currentPage={{
        title: 'Display a map',
        path: '/mapbox-gl-js/examples/display-a-map/'
      }}
      domain={false}
      site={{
        title: 'Mapbox GL JS',
        path: '/mapbox-gl-js/'
      }}
      section={{
        title: 'Examples',
        path: '/mapbox-gl-js/examples/'
      }}
    />
  )
};

testCases.hide = {
  description:
    'Hide breadcrumb if there is only one item (and domain is false)',
  element: (
    <Breadcrumb
      currentPage={{
        title: 'Dr. UI',
        path: '/dr-ui/'
      }}
      domain={false}
      site={{
        title: 'Dr. UI',
        path: '/dr-ui/'
      }}
    />
  )
};

export { testCases, noRenderCases };
