'use strict';

const build = require('../src/helpers/ordered-pages.js');
const android = require('./sample/android-data-pages.json');
const vt = require('./sample/vt-data-pages.json');

describe('buildOrderedPages', () => {
  it('Example: Android > Maps SDK', () => {
    expect(
      build.buildOrderedPages(android, {
        'maps/overview/': [
          'index',
          'styling-map',
          'annotations',
          'location-component',
          'data-driven-styling',
          'expressions',
          'clustering',
          'camera',
          'events',
          'offline',
          'query',
          'gestures',
          'snapshotter'
        ],
        'maps/examples/': ['index'],
        'maps/tutorials/': ['index'],
        'plugins/overview/': [
          'index',
          'annotation',
          'building',
          'china',
          'localization',
          'location-layer',
          'markerview',
          'offline',
          'places',
          'scalebar',
          'traffic'
        ],
        'plugins/examples/': ['index'],
        'navigation/overview/': [
          'index',
          'user-location',
          'route-generation',
          'route-progress',
          'milestones',
          'notifications',
          'localization',
          'off-route',
          'faster-route',
          'offline-routing',
          'camera',
          'map-styling',
          'user-interaction',
          'map-matching'
        ],
        'java/overview/': [
          'index',
          'directions',
          'directions-matrix',
          'geocoder',
          'tilequery',
          'optimization',
          'static-image',
          'map-matching',
          'isochrone',
          'turf'
        ],
        'java/examples/': ['index'],
        'core/overview/': ['index'],
        'vision/overview/': ['index', 'ar', 'safety', 'testing-and-development']
      })
    ).toEqual({
      'maps/overview/': [
        {
          title: 'Introduction',
          path: '/android/maps/overview/',
          tag: '',
          description:
            "The official overview documentation for the Mapbox Maps SDK for Android. Learn how to customize your Android app's maps, visualize data, and much more."
        },
        {
          title: 'Styling the map',
          path: '/android/maps/overview/styling-map/',
          tag: '',
          description:
            'Learn how to use the Mapbox Maps SDK for Android to change your map style to a custom style or a pre-made style made by the talented Mapbox cartography team.'
        },
        {
          title: 'Annotations',
          path: '/android/maps/overview/annotations/',
          tag: '',
          description:
            'Looking to annotate a map with the Mapbox Maps SDK for Android. Read this documentation to learn about markers, info windows, lines, polygons, plus more.'
        },
        {
          title: 'Showing device location',
          path: '/android/maps/overview/location-component/',
          tag: '',
          description:
            'Showing device location with the Mapbox Maps SDK for Android.'
        },
        {
          title: 'Data-driven styling',
          path: '/android/maps/overview/data-driven-styling/',
          tag: '',
          description:
            'Documentation for changing the look and feel of your Mapbox map in real time with the Mapbox Maps SDK for Android.'
        },
        {
          title: 'Expressions',
          path: '/android/maps/overview/expressions/',
          tag: '',
          description: 'The Mapbox Maps SDK for Android.'
        },
        {
          title: 'Data clustering',
          path: '/android/maps/overview/clustering/',
          tag: '',
          description:
            'Learn how to use the Mapbox Maps SDK for Android to show clustered data on the map.'
        },
        {
          title: 'Camera',
          path: '/android/maps/overview/camera/',
          tag: '',
          description:
            "Information about map camera behavior in the Mapbox Maps SDK for Android. Updating the camera position. Restricting the camera. It's all covered inside."
        },
        {
          title: 'Events',
          path: '/android/maps/overview/events/',
          tag: '',
          description:
            'Documentation about map events within the Mapbox Maps SDK for Android. Read about map clicking, flinging, moving, and other Mapbox map events.'
        },
        {
          title: 'Offline',
          path: '/android/maps/overview/offline/',
          tag: '',
          description:
            'The Mapbox Maps SDK for Android supports offline maps, which works for situation when your Android app has no internet connection. Get started with offline docs here.'
        },
        {
          title: 'Query map features',
          path: '/android/maps/overview/query/',
          tag: '',
          description:
            'Official documentation about querying map features within the Mapbox Maps SDK for Android. Discover how to retrieve information about a selected place of interest.'
        },
        {
          title: 'Gestures',
          path: '/android/maps/overview/gestures/',
          tag: '',
          description: 'Detecting gestures in the Mapbox Maps SDK for Android.'
        },
        {
          title: 'Snapshotter',
          path: '/android/maps/overview/snapshotter/',
          tag: '',
          description:
            'Take a static snapshot photo of the map to use on the device in your app, a notification, or even to share with others.'
        }
      ],
      'maps/examples/': [
        {
          title: 'Examples',
          path: '/android/maps/examples/',
          tag: '',
          description: 'Code examples for the Mapbox Maps SDK for Android.'
        }
      ],
      'maps/tutorials/': [undefined],
      'plugins/overview/': [
        {
          title: 'Introduction',
          path: '/android/plugins/overview/',
          tag: '',
          description: 'Overview of Mapbox Android plugins.'
        },
        {
          title: 'Annotation',
          path: '/android/plugins/overview/annotation/',
          tag: '',
          description: 'Mapbox Android Annotation Plugin.'
        },
        {
          title: 'Building',
          path: '/android/plugins/overview/building/',
          tag: '',
          description:
            "Read official documentation on the Mapbox Android Building Plugin and how its several lines of code can help you add 3D buildings to your Android app's map."
        },
        {
          title: 'China',
          path: '/android/plugins/overview/china/',
          tag: '',
          description:
            "Read official documentation on the Mapbox China Plugin for Android, which maximizes the Mapbox Maps SDK for Android's performance inside China."
        },
        {
          title: 'Localization',
          path: '/android/plugins/overview/localization/',
          tag: '',
          description: 'Mapbox Android Localization Plugin.'
        },
        {
          title: 'Location',
          path: '/android/plugins/overview/location-layer/',
          tag: '',
          description:
            "Offical documentation about the Mapbox Android Location Layer Plugin. Show the Android device's location on a Mapbox Map in a few quick steps."
        },
        {
          title: 'MarkerView',
          path: '/android/plugins/overview/markerview/',
          tag: '',
          description:
            'Read docs on the Mapbox MarkerView Plugin for Android. Quickly customize and add Android view-based markers to a Mapbox map.'
        },
        {
          title: 'Offline',
          path: '/android/plugins/overview/offline/',
          tag: '',
          description: 'Mapbox Android Offline Plugin.'
        },
        {
          title: 'Places',
          path: '/android/plugins/overview/places/',
          tag: '',
          description:
            "Read docs on the Mapbox Places Plugin for Android. Easily search destinations, explore what's nearby, or find favorite restaurants, coffee shops, or stores."
        },
        {
          title: 'Scale bar',
          path: '/android/plugins/overview/scalebar/',
          tag: '',
          description:
            'Read docs on the Mapbox Scale Bar Plugin for Android. Provide a display of how far various map features are from one another at a certain zoom level.'
        },
        {
          title: 'Traffic',
          path: '/android/plugins/overview/traffic/',
          tag: '',
          description:
            'Discover how to display real-time road traffic on your Android map with the Mapbox Android Traffic Plugin. All it requires is two lines of code.'
        }
      ],
      'plugins/examples/': [
        {
          title: 'Examples',
          path: '/android/plugins/examples/',
          tag: '',
          description: 'Working code examples of Mapbox Plugins for Android'
        }
      ],
      'navigation/overview/': [
        {
          title: 'Introduction',
          path: '/android/navigation/overview/',
          tag: '',
          description:
            'Official documentation and overview of the Mapbox Navigation SDK for Android.'
        },
        {
          title: 'User location',
          path: '/android/navigation/overview/user-location/',
          tag: 'fundamentals',
          description:
            'Learn how to retrieve and manager user location in the Mapbox Navigation SDK and Navigation UI SDK for Android.'
        },
        {
          title: 'Route generation',
          path: '/android/navigation/overview/route-generation/',
          tag: 'fundamentals',
          description:
            'Learn how to generate routes for use in the Mapbox Navigation SDK or Navigation UI SDK for Android.'
        },
        {
          title: 'Route progress',
          path: '/android/navigation/overview/route-progress/',
          tag: 'fundamentals',
          description:
            "Learn how to use a user's progress information along a route with the Mapbox Navigation SDK and Navigation UI for Android."
        },
        {
          title: 'Maneuver instructions',
          path: '/android/navigation/overview/milestones/',
          tag: '',
          description:
            'Learn how default and custom milestones are used to trigger text and voice instructions in the core Mapbox Navigation SDK and Navigation UI SDK for Android.'
        },
        {
          title: 'Device notifications',
          path: '/android/navigation/overview/notifications/',
          tag: '',
          description:
            'Mapbox documentation about how notifications work in the Mapbox Navigation SDK for Android.'
        },
        {
          title: 'Localization and internationalization',
          path: '/android/navigation/overview/localization/',
          tag: '',
          description:
            'Learn how the Mapbox Navigation SDK determines which language and units of measurement to use for voice and text instructions. Use the default method or customize it for your application.'
        },
        {
          title: 'Off-route detection',
          path: '/android/navigation/overview/off-route/',
          tag: '',
          description:
            "Learn how to use and customize off-route detection with the Mapbox Navigation SDK for Android for your Android app's navigation experience."
        },
        {
          title: 'Faster-route detection',
          path: '/android/navigation/overview/faster-route/',
          tag: '',
          description:
            'Faster-route detection in the Mapbox Navigation SDK for Android. Read all about it in this official Mapbox documentation.'
        },
        {
          title: 'Offline routing',
          path: '/android/navigation/overview/offline-routing/',
          tag: '',
          description:
            'Mapbox offline navigation provides routing functionality from the Navigation SDK for Android in non-connected environments.'
        },
        {
          title: 'Map camera',
          path: '/android/navigation/overview/camera/',
          tag: '',
          description:
            'Fine grain control over the map camera during your Android app navigation experience with the Mapbox Navigation SDK for Android. Click to learn how.'
        },
        {
          title: 'Map and app design',
          path: '/android/navigation/overview/map-styling/',
          tag: '',
          description:
            'Customize the look of your application made with the Mapbox Navigation UI SDK including adding map styles, styling the route line, and styling non-map UI elements.'
        },
        {
          title: 'User interaction',
          path: '/android/navigation/overview/user-interaction/',
          tag: '',
          description:
            'Understand how to listen for user interaction with the Mapbox Navigation UI SDK for Android.'
        },
        {
          title: 'Custom routes',
          path: '/android/navigation/overview/map-matching/',
          tag: '',
          description:
            'Use the Mapbox Map Matching API with the Mapbox Navigation SDK or Navigation UI SDK for Android.'
        }
      ],
      'java/overview/': [
        {
          title: 'Introduction',
          path: '/android/java/overview/',
          tag: '',
          description: 'Official documentation for the Mapbox Java SDK.'
        },
        {
          title: 'Directions',
          path: '/android/java/overview/directions/',
          tag: '',
          description:
            'Official documentation on the Mapbox Java SDK Directions API.'
        },
        {
          title: 'Matrix',
          path: '/android/java/overview/directions-matrix/',
          tag: '',
          description:
            'Official documentation on the Mapbox Java SDK Matrix API.'
        },
        {
          title: 'Geocoder',
          path: '/android/java/overview/geocoder/',
          tag: '',
          description:
            'Official documentation on the Mapbox Java SDK Geocoding API.'
        },
        {
          title: 'Tilequery',
          path: '/android/java/overview/tilequery/',
          tag: '',
          description:
            'Official documentation on the Mapbox Java SDK Tilequery API.'
        },
        {
          title: 'Optimization',
          path: '/android/java/overview/optimization/',
          tag: '',
          description:
            'Official documentation on the Mapbox Java SDK Optimization API.'
        },
        {
          title: 'Static Image',
          path: '/android/java/overview/static-image/',
          tag: '',
          description:
            'Official documentation on the Mapbox Java SDK Static Images API.'
        },
        {
          title: 'Map Matching',
          path: '/android/java/overview/map-matching/',
          tag: '',
          description:
            'Official documentation on the Mapbox Java SDK Map Matching API.'
        },
        {
          title: 'Isochrone',
          path: '/android/java/overview/isochrone/',
          tag: '',
          description:
            'Official documentation on the Mapbox Java SDK Isochrone API.'
        },
        {
          title: 'Turf for Java',
          path: '/android/java/overview/turf/',
          tag: '',
          description:
            'Official documentation on the Mapbox Java SDK Turf library.'
        }
      ],
      'java/examples/': [
        {
          title: 'Examples',
          path: '/android/java/examples/',
          tag: '',
          description: 'Mapbox Java SDK code examples'
        }
      ],
      'core/overview/': [
        {
          title: 'Introduction',
          path: '/android/core/overview/',
          tag: '',
          description:
            'Overview of the Mapbox Core Libraries for Android. Easily handle device location, permissions, and connectivity for any app.'
        }
      ],
      'vision/overview/': [
        {
          title: 'Introduction',
          path: '/android/vision/overview/',
          tag: '',
          description:
            'The official overview documentation for the Mapbox Vision SDK for Android.'
        },
        {
          title: 'AR navigation',
          path: '/android/vision/overview/ar/',
          tag: '',
          description: 'Introduction to Mapbox Vision AR for Android.'
        },
        {
          title: 'Safety alerts',
          path: '/android/vision/overview/safety/',
          tag: '',
          description: 'Introduction to Mapbox Vision Safety for Android.'
        },
        {
          title: 'Testing and development',
          path: '/android/vision/overview/testing-and-development/',
          tag: '',
          description:
            'An overview of strategies for testing and developing with the Vision SDK.'
        }
      ]
    });
  });

  it('Example: Vecgo', () => {
    expect(
      build.buildOrderedPages(vt, {
        'reference/': [
          'index',
          'mapbox-streets-v8',
          'mapbox-terrain-v2',
          'mapbox-traffic-v1',
          'enterprise-boundaries-v2',
          'mapbox-streets-v7',
          'mapbox-streets-v6',
          'mapbox-streets-v5'
        ],
        'specification/': ['index', 'format']
      })
    ).toEqual({
      'reference/': [
        {
          description:
            'Reference documentation for Mapbox-maintained vector tilesets.',
          path: '/vector-tiles/reference/',
          tag: '',
          title: 'Introduction'
        },
        {
          description:
            'Reference documentation for the Mapbox Streets v8 tileset.',
          path: '/vector-tiles/reference/mapbox-streets-v8/',
          tag: '',
          title: 'Mapbox Streets v8'
        },
        {
          description:
            'Reference documentation for the Mapbox Terrain v2 tileset.',
          path: '/vector-tiles/reference/mapbox-terrain-v2/',
          tag: '',
          title: 'Mapbox Terrain v2'
        },
        {
          description:
            'Reference documentation for the Mapbox Traffic v1 tileset.',
          path: '/vector-tiles/reference/mapbox-traffic-v1/',
          tag: '',
          title: 'Mapbox Traffic v1'
        },
        {
          description:
            'Reference documentation for the Enterprise Boundaries v2 tileset.',
          path: '/vector-tiles/reference/enterprise-boundaries-v2/',
          tag: '',
          title: 'Enterprise Boundaries v2'
        },
        {
          description:
            'Reference documentation for the Mapbox Streets v7 tileset.',
          path: '/vector-tiles/reference/mapbox-streets-v7/',
          tag: '',
          title: 'Mapbox Streets v7'
        },
        {
          description:
            'Reference documentation for the Mapbox Streets v6 tileset.',
          path: '/vector-tiles/reference/mapbox-streets-v6/',
          tag: '',
          title: 'Mapbox Streets v6'
        },
        {
          description:
            'Reference documentation for the Mapbox Streets v5 tileset.',
          path: '/vector-tiles/reference/mapbox-streets-v5/',
          tag: '',
          title: 'Mapbox Streets v5'
        }
      ],
      'specification/': [
        {
          description:
            'A guide to encoding tiled vector data with the Mapbox Vector Tile Specification.',
          path: '/vector-tiles/specification/',
          tag: '',
          title: 'Vector tile specification'
        },
        {
          description: 'Vector tiles are encoded as Google Protobufs.',
          path: '/vector-tiles/specification/format/',
          tag: '',
          title: 'Format'
        }
      ]
    });
  });
});
