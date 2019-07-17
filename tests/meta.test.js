'use strict';

const { metaMaker } = require('../src/helpers/meta.js');

describe('meta', () => {
  test(`handles null values`, () => {
    expect(metaMaker(null, null, null)).toEqual({});
  });

  test(`api docs example`, () => {
    expect(
      metaMaker(
        {
          title: 'Introduction',
          description: 'An introduction to the Mapbox web services APIs.',
          order: 1,
          contentType: 'API',
          headings: [
            {
              text: 'Reading this documentation',
              slug: 'reading-this-documentation',
              level: 2
            },
            {
              text: 'Access tokens and token scopes',
              slug: 'access-tokens-and-token-scopes',
              level: 2
            },
            { text: 'API versioning', slug: 'api-versioning', level: 2 },
            {
              text: 'Backwards compatible changes',
              slug: 'backwards-compatible-changes',
              level: 4
            },
            {
              text: 'Backwards incompatible changes',
              slug: 'backwards-incompatible-changes',
              level: 4
            },
            {
              text: 'Rate limit headers',
              slug: 'rate-limit-headers',
              level: 2
            },
            { text: 'Rate limits', slug: 'rate-limits', level: 2 },
            { text: 'HTTPS and CORS', slug: 'https-and-cors', level: 2 },
            { text: 'Coordinate format', slug: 'coordinate-format', level: 2 },
            {
              text: 'Date and time format',
              slug: 'date-and-time-format',
              level: 2
            },
            { text: 'Pagination', slug: 'pagination', level: 2 },
            { text: 'High DPI images', slug: 'high-dpi-images', level: 2 },
            {
              text: 'SDK and library support',
              slug: 'sdk-and-library-support',
              level: 2
            }
          ]
        },
        { pathname: '/api/', hash: '', search: '' },
        null
      )
    ).toEqual({
      title: 'Introduction',
      description: 'An introduction to the Mapbox web services APIs.',
      pathname: '/api/',
      contentType: 'API'
    });
  });

  test(`android example`, () => {
    expect(
      metaMaker(
        {
          title: 'Introduction',
          description:
            "The official overview documentation for the Mapbox Maps SDK for Android. Learn how to customize your Android app's maps, visualize data, and much more.",
          contentType: 'guide',
          language: ['Java', 'Kotlin'],
          headings: [
            {
              text: 'Install the Maps SDK',
              slug: 'install-the-maps-sdk',
              level: 2
            },
            {
              text: '1. Add the dependency',
              slug: '1-add-the-dependency',
              level: 3
            },
            {
              text: '2. Get an access token',
              slug: '2-get-an-access-token',
              level: 3
            },
            {
              text: '3. Setup permissions',
              slug: '3-setup-permissions',
              level: 3
            },
            { text: '4. Add a map', slug: '4-add-a-map', level: 3 },
            {
              text: '5. Lifecycle methods',
              slug: '5-lifecycle-methods',
              level: 3
            },
            { text: 'Attribution', slug: 'attribution', level: 2 },
            { text: 'Telemetry opt out', slug: 'telemetry-opt-out', level: 2 },
            {
              text: 'MapView XML attributes',
              slug: 'mapview-xml-attributes',
              level: 2
            }
          ]
        },
        { pathname: '/android/maps/overview/', hash: '', search: '' },
        {}
      )
    ).toEqual({
      title: 'Introduction',
      description:
        "The official overview documentation for the Mapbox Maps SDK for Android. Learn how to customize your Android app's maps, visualize data, and much more.",
      pathname: '/android/maps/overview/',
      contentType: 'guide',
      language: ['Java', 'Kotlin']
    });
  });

  test(`help example`, () => {
    expect(
      metaMaker(
        {
          title: 'Local search with the Geocoding API',
          description:
            'This tutorial guides you through the process of creating a local search app using optional parameters from the Mapbox Geocoding API.',
          thumbnail: 'localSearchGeocodingApi',
          level: 2,
          language: ['JavaScript'],
          prereq: 'Familiarity with front-end development concepts.',
          topics: ['web apps', 'geocoding'],
          contentType: 'tutorial',
          headings: [
            { text: 'Getting started', slug: 'getting-started', level: 2 },
            {
              text: 'Geocoding API query structure',
              slug: 'geocoding-api-query-structure',
              level: 2
            },
            {
              text: 'Required parameters',
              slug: 'required-parameters',
              level: 3
            },
            {
              text: 'Optional parameters',
              slug: 'optional-parameters',
              level: 3
            },
            {
              text: 'The proximity parameter',
              slug: 'the-proximity-parameter',
              level: 4
            },
            {
              text: 'The bbox parameter',
              slug: 'the-bbox-parameter',
              level: 4
            },
            {
              text: 'Build the Geocoding API query',
              slug: 'build-the-geocoding-api-query',
              level: 3
            },
            {
              text: 'Geocoding plugins and libraries',
              slug: 'geocoding-plugins-and-libraries',
              level: 2
            },
            { text: 'Create your app', slug: 'create-your-app', level: 2 },
            {
              text: 'Set up your HTML file',
              slug: 'set-up-your-html-file',
              level: 3
            },
            {
              text: 'Initialize the map',
              slug: 'initialize-the-map',
              level: 3
            },
            {
              text: 'Add a marker to the map',
              slug: 'add-a-marker-to-the-map',
              level: 3
            },
            { text: 'Add the geocoder', slug: 'add-the-geocoder', level: 3 },
            {
              text: 'Add the bbox and proximity parameters',
              slug: 'add-the-bbox-and-proximity-parameters',
              level: 3
            },
            {
              text: 'Place markers at selected results',
              slug: 'place-markers-at-selected-results',
              level: 3
            },
            {
              text: 'View the API call in developer tools',
              slug: 'view-the-api-call-in-developer-tools',
              level: 3
            },
            { text: 'Finished product', slug: 'finished-product', level: 2 },
            { text: 'Next steps', slug: 'next-steps', level: 2 }
          ]
        },
        {
          pathname: '/help/tutorials/local-search-geocoding-api/',
          hash: '',
          search: ''
        },
        {}
      )
    ).toEqual({
      title: 'Local search with the Geocoding API',
      description:
        'This tutorial guides you through the process of creating a local search app using optional parameters from the Mapbox Geocoding API.',
      pathname: '/help/tutorials/local-search-geocoding-api/',
      contentType: 'tutorial',
      language: ['JavaScript'],
      level: 2
    });
  });
});
