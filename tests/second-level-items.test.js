'use strict';

const build = require('../src/helpers/second-level-items.js');

describe('buildSecondLevelItems', () => {
  it('Example: Android > Maps SDK', () => {
    expect(
      build.buildSecondLevelItems([
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
        {
          text: '4. Add a map',
          slug: '4-add-a-map',
          level: 3
        },
        {
          text: '5. Lifecycle methods',
          slug: '5-lifecycle-methods',
          level: 3
        },
        {
          text: 'Attribution',
          slug: 'attribution',
          level: 2
        },
        {
          text: 'Telemetry opt out',
          slug: 'telemetry-opt-out',
          level: 2
        },
        {
          text: 'MapView XML attributes',
          slug: 'mapview-xml-attributes',
          level: 2
        }
      ])
    ).toEqual([
      {
        title: 'Install the Maps SDK',
        path: 'install-the-maps-sdk',
        thirdLevelItems: [
          {
            title: '1. Add the dependency',
            path: '1-add-the-dependency'
          },
          {
            title: '2. Get an access token',
            path: '2-get-an-access-token'
          },
          {
            title: '3. Setup permissions',
            path: '3-setup-permissions'
          },
          {
            title: '4. Add a map',
            path: '4-add-a-map'
          },
          {
            title: '5. Lifecycle methods',
            path: '5-lifecycle-methods'
          }
        ]
      },
      {
        title: 'Attribution',
        path: 'attribution',
        thirdLevelItems: []
      },
      {
        title: 'Telemetry opt out',
        path: 'telemetry-opt-out',
        thirdLevelItems: []
      },
      {
        title: 'MapView XML attributes',
        path: 'mapview-xml-attributes',
        thirdLevelItems: []
      }
    ]);
  });

  it('Example: API > Maps', () => {
    expect(
      build.buildSecondLevelItems([
        {
          text: 'Vector Tiles',
          slug: 'vector-tiles',
          level: 2
        },
        {
          text: 'Retrieve vector tiles',
          slug: 'retrieve-vector-tiles',
          level: 3
        },
        {
          text: 'Example request: Retrieve vector tiles',
          slug: 'example-request-retrieve-vector-tiles',
          level: 4
        },
        {
          text: 'Response: Retrieve vector tiles',
          slug: 'response-retrieve-vector-tiles',
          level: 4
        },
        {
          text: 'Vector Tiles API errors',
          slug: 'vector-tiles-api-errors',
          level: 3
        },
        {
          text: 'Vector Tiles API restrictions and limits',
          slug: 'vector-tiles-api-restrictions-and-limits',
          level: 3
        },
        {
          text: 'Raster Tiles',
          slug: 'raster-tiles',
          level: 2
        },
        {
          text: 'Retrieve raster tiles',
          slug: 'retrieve-raster-tiles',
          level: 3
        },
        {
          text: 'Example request: Retrieve raster tiles',
          slug: 'example-request-retrieve-raster-tiles',
          level: 4
        },
        {
          text: 'Response: Retrieve raster tiles',
          slug: 'response-retrieve-raster-tiles',
          level: 4
        },
        {
          text: 'Raster Tiles API errors',
          slug: 'raster-tiles-api-errors',
          level: 3
        },
        {
          text: 'Raster Tiles API restrictions and limits',
          slug: 'raster-tiles-api-restrictions-and-limits',
          level: 3
        },
        {
          text: 'Static Images',
          slug: 'static-images',
          level: 2
        },
        {
          text: 'Retrieve a static map from a style',
          slug: 'retrieve-a-static-map-from-a-style',
          level: 3
        },
        {
          text: 'Example request: Retrieve a static map from a style',
          slug: 'example-request-retrieve-a-static-map-from-a-style',
          level: 4
        },
        {
          text: 'Overlay options',
          slug: 'overlay-options',
          level: 4
        },
        {
          text: 'GeoJSON',
          slug: 'geojson',
          level: 5
        },
        {
          text: 'Marker',
          slug: 'marker',
          level: 5
        },
        {
          text: 'Custom marker',
          slug: 'custom-marker',
          level: 5
        },
        {
          text: 'Path',
          slug: 'path',
          level: 5
        },
        {
          text: 'Response: Retrieve a static map from a style',
          slug: 'response-retrieve-a-static-map-from-a-style',
          level: 4
        },
        {
          text: 'Static Images API errors',
          slug: 'static-images-api-errors',
          level: 3
        },
        {
          text: 'Static Images API restrictions and limits',
          slug: 'static-images-api-restrictions-and-limits',
          level: 3
        },
        {
          text: 'Static Tiles',
          slug: 'static-tiles',
          level: 2
        },
        {
          text: 'Retrieve raster tiles from styles',
          slug: 'retrieve-raster-tiles-from-styles',
          level: 3
        },
        {
          text: 'Example request: Retrieve raster tiles from styles',
          slug: 'example-request-retrieve-raster-tiles-from-styles',
          level: 4
        },
        {
          text: 'Response: Retrieve raster tiles from styles',
          slug: 'response-retrieve-raster-tiles-from-styles',
          level: 4
        },
        {
          text: 'Static Tiles API errors',
          slug: 'static-tiles-api-errors',
          level: 3
        },
        {
          text: 'Static Tiles API restrictions and limits',
          slug: 'static-tiles-api-restrictions-and-limits',
          level: 3
        },
        {
          text: 'Styles',
          slug: 'styles',
          level: 2
        },
        {
          text: 'Mapbox styles',
          slug: 'mapbox-styles',
          level: 3
        },
        {
          text: 'The style object',
          slug: 'the-style-object',
          level: 3
        },
        {
          text: 'Drafts',
          slug: 'drafts',
          level: 3
        },
        {
          text: 'Example style object',
          slug: 'example-style-object',
          level: 4
        },
        {
          text: 'Retrieve a style',
          slug: 'retrieve-a-style',
          level: 3
        },
        {
          text: 'Example request: Retrieve a style',
          slug: 'example-request-retrieve-a-style',
          level: 4
        },
        {
          text: 'Response: Retrieve a style',
          slug: 'response-retrieve-a-style',
          level: 4
        },
        {
          text: 'Example response: Retrieve a style',
          slug: 'example-response-retrieve-a-style',
          level: 4
        },
        {
          text: 'List styles',
          slug: 'list-styles',
          level: 3
        },
        {
          text: 'Example request: List styles',
          slug: 'example-request-list-styles',
          level: 4
        },
        {
          text: 'Response: List styles',
          slug: 'response-list-styles',
          level: 4
        },
        {
          text: 'Example response: List styles',
          slug: 'example-response-list-styles',
          level: 4
        },
        {
          text: 'Create a style',
          slug: 'create-a-style',
          level: 3
        },
        {
          text: 'Example request: Create a style',
          slug: 'example-request-create-a-style',
          level: 4
        },
        {
          text: 'Example request body: Create a style',
          slug: 'example-request-body-create-a-style',
          level: 4
        },
        {
          text: 'Response: Create a style',
          slug: 'response-create-a-style',
          level: 4
        },
        {
          text: 'Example response: Create a style',
          slug: 'example-response-create-a-style',
          level: 4
        },
        {
          text: 'Update a style',
          slug: 'update-a-style',
          level: 3
        },
        {
          text: 'Example request: Update a style',
          slug: 'example-request-update-a-style',
          level: 4
        },
        {
          text: 'Example request body: Update a style',
          slug: 'example-request-body-update-a-style',
          level: 4
        },
        {
          text: 'Response: Update a style',
          slug: 'response-update-a-style',
          level: 4
        },
        {
          text: 'Example response: Update a style',
          slug: 'example-response-update-a-style',
          level: 4
        },
        {
          text: 'Delete a style',
          slug: 'delete-a-style',
          level: 3
        },
        {
          text: 'Example request: Delete a style',
          slug: 'example-request-delete-a-style',
          level: 4
        },
        {
          text: 'Response: Delete a style',
          slug: 'response-delete-a-style',
          level: 4
        },
        {
          text: 'Request embeddable HTML',
          slug: 'request-embeddable-html',
          level: 3
        },
        {
          text: 'Example: Request embeddable HTML',
          slug: 'example-request-embeddable-html',
          level: 4
        },
        {
          text: "Retrieve a map's WMTS document",
          slug: 'retrieve-a-maps-wmts-document',
          level: 3
        },
        {
          text: "Example request: Retrieve a map's WMTS document",
          slug: 'example-request-retrieve-a-maps-wmts-document',
          level: 4
        },
        {
          text: "Response: Retrieve a map's WMTS document",
          slug: 'response-retrieve-a-maps-wmts-document',
          level: 4
        },
        {
          text: 'Sprites',
          slug: 'sprites',
          level: 3
        },
        {
          text: 'Retrieve a sprite image or JSON',
          slug: 'retrieve-a-sprite-image-or-json',
          level: 3
        },
        {
          text: 'Example request: Retrieve a sprite image or JSON',
          slug: 'example-request-retrieve-a-sprite-image-or-json',
          level: 4
        },
        {
          text: 'Response: Retrieve a sprite image or JSON',
          slug: 'response-retrieve-a-sprite-image-or-json',
          level: 4
        },
        {
          text: 'Example response: Retrieve a sprite image or JSON',
          slug: 'example-response-retrieve-a-sprite-image-or-json',
          level: 4
        },
        {
          text: 'Add new image to sprite',
          slug: 'add-new-image-to-sprite',
          level: 3
        },
        {
          text: 'Example request: Add new image to sprite',
          slug: 'example-request-add-new-image-to-sprite',
          level: 4
        },
        {
          text: 'Response: Add new image to sprite',
          slug: 'response-add-new-image-to-sprite',
          level: 4
        },
        {
          text: 'Example response: Add new image to sprite',
          slug: 'example-response-add-new-image-to-sprite',
          level: 4
        },
        {
          text: 'Delete image from sprite',
          slug: 'delete-image-from-sprite',
          level: 3
        },
        {
          text: 'Example request: Delete image from sprite',
          slug: 'example-request-delete-image-from-sprite',
          level: 4
        },
        {
          text: 'Response: Delete image from sprite',
          slug: 'response-delete-image-from-sprite',
          level: 4
        },
        {
          text: 'Example response: Delete image from sprite',
          slug: 'example-response-delete-image-from-sprite',
          level: 4
        },
        {
          text: 'Styles API errors',
          slug: 'styles-api-errors',
          level: 3
        },
        {
          text: 'Styles API restrictions and limits',
          slug: 'styles-api-restrictions-and-limits',
          level: 3
        },
        {
          text: 'Styles API sprites restrictions and limits',
          slug: 'styles-api-sprites-restrictions-and-limits',
          level: 3
        },
        {
          text: 'Tilequery',
          slug: 'tilequery',
          level: 2
        },
        {
          text: 'Retrieve features from vector tiles',
          slug: 'retrieve-features-from-vector-tiles',
          level: 3
        },
        {
          text: 'Point-in-polygon queries',
          slug: 'point-in-polygon-queries',
          level: 4
        },
        {
          text: 'Example request: Retrieve features from vector tiles',
          slug: 'example-request-retrieve-features-from-vector-tiles',
          level: 4
        },
        {
          text: 'Response: Retrieve features from vector tiles',
          slug: 'response-retrieve-features-from-vector-tiles',
          level: 4
        },
        {
          text: 'Example response: Retrieve features from vector tiles',
          slug: 'example-response-retrieve-features-from-vector-tiles',
          level: 4
        },
        {
          text: 'Tilequery API errors',
          slug: 'tilequery-api-errors',
          level: 3
        },
        {
          text: 'Tilequery API restrictions and limits',
          slug: 'tilequery-api-restrictions-and-limits',
          level: 3
        },
        {
          text: 'Uploads',
          slug: 'uploads',
          level: 2
        },
        {
          text: 'Retrieve S3 credentials',
          slug: 'retrieve-s3-credentials',
          level: 3
        },
        {
          text: 'Example request: Retrieve S3 credentials',
          slug: 'example-request-retrieve-s3-credentials',
          level: 4
        },
        {
          text: 'Example AWS CLI usage',
          slug: 'example-aws-cli-usage',
          level: 4
        },
        {
          text: 'Response: Retrieve S3 credentials',
          slug: 'response-retrieve-s3-credentials',
          level: 4
        },
        {
          text: 'Example response: Retrieve S3 credentials',
          slug: 'example-response-retrieve-s3-credentials',
          level: 4
        },
        {
          text: 'Create an upload',
          slug: 'create-an-upload',
          level: 3
        },
        {
          text: 'Example request: Create an upload',
          slug: 'example-request-create-an-upload',
          level: 4
        },
        {
          text:
            'Example request body: Create an upload (AWS S3 bucket not required)',
          slug:
            'example-request-body-create-an-upload-aws-s3-bucket-not-required',
          level: 4
        },
        {
          text: 'Response: Create an upload',
          slug: 'response-create-an-upload',
          level: 4
        },
        {
          text: 'Example response: Create an upload',
          slug: 'example-response-create-an-upload',
          level: 4
        },
        {
          text: 'Retrieve upload status',
          slug: 'retrieve-upload-status',
          level: 3
        },
        {
          text: 'Example request: Retrieve upload status',
          slug: 'example-request-retrieve-upload-status',
          level: 4
        },
        {
          text: 'Response: Retrieve upload status',
          slug: 'response-retrieve-upload-status',
          level: 4
        },
        {
          text: 'Example response: Retrieve upload status',
          slug: 'example-response-retrieve-upload-status',
          level: 4
        },
        {
          text: 'Retrieve recent upload statuses',
          slug: 'retrieve-recent-upload-statuses',
          level: 3
        },
        {
          text: 'Example request: Retrieve recent upload statuses',
          slug: 'example-request-retrieve-recent-upload-statuses',
          level: 4
        },
        {
          text: 'Response: Retrieve recent upload statuses',
          slug: 'response-retrieve-recent-upload-statuses',
          level: 4
        },
        {
          text: 'Example response: Retrieve recent upload statuses',
          slug: 'example-response-retrieve-recent-upload-statuses',
          level: 4
        },
        {
          text: 'Remove an upload status',
          slug: 'remove-an-upload-status',
          level: 3
        },
        {
          text: 'Example request: Remove an upload status',
          slug: 'example-request-remove-an-upload-status',
          level: 4
        },
        {
          text: 'Response: Remove an upload status',
          slug: 'response-remove-an-upload-status',
          level: 4
        },
        {
          text: 'Uploads API errors',
          slug: 'uploads-api-errors',
          level: 3
        },
        {
          text: 'Uploads API restrictions and limits',
          slug: 'uploads-api-restrictions-and-limits',
          level: 3
        },
        {
          text: 'Tilesets',
          slug: 'tilesets',
          level: 2
        },
        {
          text: 'List tilesets',
          slug: 'list-tilesets',
          level: 3
        },
        {
          text: 'Example request: List tilesets',
          slug: 'example-request-list-tilesets',
          level: 4
        },
        {
          text: 'Response: List tilesets',
          slug: 'response-list-tilesets',
          level: 4
        },
        {
          text: 'Example response: List tilesets',
          slug: 'example-response-list-tilesets',
          level: 4
        },
        {
          text: 'Delete tileset',
          slug: 'delete-tileset',
          level: 3
        },
        {
          text: 'Example request: Delete tileset',
          slug: 'example-request-delete-tileset',
          level: 4
        },
        {
          text: 'Response: Delete tileset',
          slug: 'response-delete-tileset',
          level: 4
        },
        {
          text: 'Retrieve TileJSON metadata',
          slug: 'retrieve-tilejson-metadata',
          level: 3
        },
        {
          text: 'Example request: Retrieve TileJSON metadata',
          slug: 'example-request-retrieve-tilejson-metadata',
          level: 4
        },
        {
          text: 'Response: Retrieve TileJSON metadata',
          slug: 'response-retrieve-tilejson-metadata',
          level: 4
        },
        {
          text: 'Example response: Retrieve TileJSON metadata',
          slug: 'example-response-retrieve-tilejson-metadata',
          level: 4
        },
        {
          text: 'Tilesets API errors',
          slug: 'tilesets-api-errors',
          level: 3
        },
        {
          text: 'Tilesets API restrictions and limits',
          slug: 'tilesets-api-restrictions-and-limits',
          level: 3
        },
        {
          text: 'Datasets',
          slug: 'datasets',
          level: 2
        },
        {
          text: 'The dataset object',
          slug: 'the-dataset-object',
          level: 3
        },
        {
          text: 'Example dataset object',
          slug: 'example-dataset-object',
          level: 4
        },
        {
          text: 'List datasets',
          slug: 'list-datasets',
          level: 3
        },
        {
          text: 'Example request: List datasets',
          slug: 'example-request-list-datasets',
          level: 4
        },
        {
          text: 'Response: List datasets',
          slug: 'response-list-datasets',
          level: 4
        },
        {
          text: 'Example response: List datasets',
          slug: 'example-response-list-datasets',
          level: 4
        },
        {
          text: 'Create a dataset',
          slug: 'create-a-dataset',
          level: 3
        },
        {
          text: 'Example request: Create a dataset',
          slug: 'example-request-create-a-dataset',
          level: 4
        },
        {
          text: 'Example request body: Create a dataset',
          slug: 'example-request-body-create-a-dataset',
          level: 4
        },
        {
          text: 'Response: Create a dataset',
          slug: 'response-create-a-dataset',
          level: 4
        },
        {
          text: 'Example response: Create a dataset',
          slug: 'example-response-create-a-dataset',
          level: 4
        },
        {
          text: 'Retrieve a dataset',
          slug: 'retrieve-a-dataset',
          level: 3
        },
        {
          text: 'Example request: Retrieve a dataset',
          slug: 'example-request-retrieve-a-dataset',
          level: 4
        },
        {
          text: 'Response: Retrieve a dataset',
          slug: 'response-retrieve-a-dataset',
          level: 4
        },
        {
          text: 'Example response: Retrieve a dataset',
          slug: 'example-response-retrieve-a-dataset',
          level: 4
        },
        {
          text: 'Update a dataset',
          slug: 'update-a-dataset',
          level: 3
        },
        {
          text: 'Example request: Update a dataset',
          slug: 'example-request-update-a-dataset',
          level: 4
        },
        {
          text: 'Example request body: Update a dataset',
          slug: 'example-request-body-update-a-dataset',
          level: 4
        },
        {
          text: 'Response: Update a dataset',
          slug: 'response-update-a-dataset',
          level: 4
        },
        {
          text: 'Example response: Update a dataset',
          slug: 'example-response-update-a-dataset',
          level: 4
        },
        {
          text: 'Delete a dataset',
          slug: 'delete-a-dataset',
          level: 3
        },
        {
          text: 'Example request: Delete a dataset',
          slug: 'example-request-delete-a-dataset',
          level: 4
        },
        {
          text: 'Response: Delete a dataset',
          slug: 'response-delete-a-dataset',
          level: 4
        },
        {
          text: 'The feature object',
          slug: 'the-feature-object',
          level: 3
        },
        {
          text: 'Example feature object',
          slug: 'example-feature-object',
          level: 4
        },
        {
          text: 'List features',
          slug: 'list-features',
          level: 3
        },
        {
          text: 'Example request: List features',
          slug: 'example-request-list-features',
          level: 4
        },
        {
          text: 'Response: List features',
          slug: 'response-list-features',
          level: 4
        },
        {
          text: 'Example response: List features',
          slug: 'example-response-list-features',
          level: 4
        },
        {
          text: 'Insert or update a feature',
          slug: 'insert-or-update-a-feature',
          level: 3
        },
        {
          text: 'Example request: Insert or update a feature',
          slug: 'example-request-insert-or-update-a-feature',
          level: 4
        },
        {
          text: 'Example request body: Insert or update a feature',
          slug: 'example-request-body-insert-or-update-a-feature',
          level: 4
        },
        {
          text: 'Response: Insert or update a feature',
          slug: 'response-insert-or-update-a-feature',
          level: 4
        },
        {
          text: 'Example response: Insert or update a feature',
          slug: 'example-response-insert-or-update-a-feature',
          level: 4
        },
        {
          text: 'Retrieve a feature',
          slug: 'retrieve-a-feature',
          level: 3
        },
        {
          text: 'Example request: Retrieve a feature',
          slug: 'example-request-retrieve-a-feature',
          level: 4
        },
        {
          text: 'Response: Retrieve a feature',
          slug: 'response-retrieve-a-feature',
          level: 4
        },
        {
          text: 'Example response: Retrieve a feature',
          slug: 'example-response-retrieve-a-feature',
          level: 4
        },
        {
          text: 'Delete a feature',
          slug: 'delete-a-feature',
          level: 3
        },
        {
          text: 'Example request: Delete a feature',
          slug: 'example-request-delete-a-feature',
          level: 4
        },
        {
          text: 'Response: Delete a feature',
          slug: 'response-delete-a-feature',
          level: 4
        },
        {
          text: 'Datasets API errors',
          slug: 'datasets-api-errors',
          level: 3
        },
        {
          text: 'Datasets API restrictions and limits',
          slug: 'datasets-api-restrictions-and-limits',
          level: 3
        },
        {
          text: 'Fonts',
          slug: 'fonts',
          level: 2
        },
        {
          text: 'Retrieve font glyph ranges',
          slug: 'retrieve-font-glyph-ranges',
          level: 3
        },
        {
          text: 'Example request: Retrieve font glyph ranges',
          slug: 'example-request-retrieve-font-glyph-ranges',
          level: 4
        },
        {
          text: 'Response: Retrieve font glyph ranges',
          slug: 'response-retrieve-font-glyph-ranges',
          level: 4
        },
        {
          text: 'Fonts API errors',
          slug: 'fonts-api-errors',
          level: 3
        },
        {
          text: 'Fonts API restrictions and limits',
          slug: 'fonts-api-restrictions-and-limits',
          level: 3
        }
      ])
    ).toEqual([
      {
        title: 'Vector Tiles',
        path: 'vector-tiles',
        thirdLevelItems: [
          {
            title: 'Retrieve vector tiles',
            path: 'retrieve-vector-tiles'
          },
          {
            title: 'Vector Tiles API errors',
            path: 'vector-tiles-api-errors'
          },
          {
            title: 'Vector Tiles API restrictions and limits',
            path: 'vector-tiles-api-restrictions-and-limits'
          }
        ]
      },
      {
        title: 'Raster Tiles',
        path: 'raster-tiles',
        thirdLevelItems: [
          {
            title: 'Retrieve raster tiles',
            path: 'retrieve-raster-tiles'
          },
          {
            title: 'Raster Tiles API errors',
            path: 'raster-tiles-api-errors'
          },
          {
            title: 'Raster Tiles API restrictions and limits',
            path: 'raster-tiles-api-restrictions-and-limits'
          }
        ]
      },
      {
        title: 'Static Images',
        path: 'static-images',
        thirdLevelItems: [
          {
            title: 'Retrieve a static map from a style',
            path: 'retrieve-a-static-map-from-a-style'
          },
          {
            title: 'Static Images API errors',
            path: 'static-images-api-errors'
          },
          {
            title: 'Static Images API restrictions and limits',
            path: 'static-images-api-restrictions-and-limits'
          }
        ]
      },
      {
        title: 'Static Tiles',
        path: 'static-tiles',
        thirdLevelItems: [
          {
            title: 'Retrieve raster tiles from styles',
            path: 'retrieve-raster-tiles-from-styles'
          },
          {
            title: 'Static Tiles API errors',
            path: 'static-tiles-api-errors'
          },
          {
            title: 'Static Tiles API restrictions and limits',
            path: 'static-tiles-api-restrictions-and-limits'
          }
        ]
      },
      {
        title: 'Styles',
        path: 'styles',
        thirdLevelItems: [
          {
            title: 'Mapbox styles',
            path: 'mapbox-styles'
          },
          {
            title: 'The style object',
            path: 'the-style-object'
          },
          {
            title: 'Drafts',
            path: 'drafts'
          },
          {
            title: 'Retrieve a style',
            path: 'retrieve-a-style'
          },
          {
            title: 'List styles',
            path: 'list-styles'
          },
          {
            title: 'Create a style',
            path: 'create-a-style'
          },
          {
            title: 'Update a style',
            path: 'update-a-style'
          },
          {
            title: 'Delete a style',
            path: 'delete-a-style'
          },
          {
            title: 'Request embeddable HTML',
            path: 'request-embeddable-html'
          },
          {
            title: "Retrieve a map's WMTS document",
            path: 'retrieve-a-maps-wmts-document'
          },
          {
            title: 'Sprites',
            path: 'sprites'
          },
          {
            title: 'Retrieve a sprite image or JSON',
            path: 'retrieve-a-sprite-image-or-json'
          },
          {
            title: 'Add new image to sprite',
            path: 'add-new-image-to-sprite'
          },
          {
            title: 'Delete image from sprite',
            path: 'delete-image-from-sprite'
          },
          {
            title: 'Styles API errors',
            path: 'styles-api-errors'
          },
          {
            title: 'Styles API restrictions and limits',
            path: 'styles-api-restrictions-and-limits'
          },
          {
            title: 'Styles API sprites restrictions and limits',
            path: 'styles-api-sprites-restrictions-and-limits'
          }
        ]
      },
      {
        title: 'Tilequery',
        path: 'tilequery',
        thirdLevelItems: [
          {
            title: 'Retrieve features from vector tiles',
            path: 'retrieve-features-from-vector-tiles'
          },
          {
            title: 'Tilequery API errors',
            path: 'tilequery-api-errors'
          },
          {
            title: 'Tilequery API restrictions and limits',
            path: 'tilequery-api-restrictions-and-limits'
          }
        ]
      },
      {
        title: 'Uploads',
        path: 'uploads',
        thirdLevelItems: [
          {
            title: 'Retrieve S3 credentials',
            path: 'retrieve-s3-credentials'
          },
          {
            title: 'Create an upload',
            path: 'create-an-upload'
          },
          {
            title: 'Retrieve upload status',
            path: 'retrieve-upload-status'
          },
          {
            title: 'Retrieve recent upload statuses',
            path: 'retrieve-recent-upload-statuses'
          },
          {
            title: 'Remove an upload status',
            path: 'remove-an-upload-status'
          },
          {
            title: 'Uploads API errors',
            path: 'uploads-api-errors'
          },
          {
            title: 'Uploads API restrictions and limits',
            path: 'uploads-api-restrictions-and-limits'
          }
        ]
      },
      {
        title: 'Tilesets',
        path: 'tilesets',
        thirdLevelItems: [
          {
            title: 'List tilesets',
            path: 'list-tilesets'
          },
          {
            title: 'Delete tileset',
            path: 'delete-tileset'
          },
          {
            title: 'Retrieve TileJSON metadata',
            path: 'retrieve-tilejson-metadata'
          },
          {
            title: 'Tilesets API errors',
            path: 'tilesets-api-errors'
          },
          {
            title: 'Tilesets API restrictions and limits',
            path: 'tilesets-api-restrictions-and-limits'
          }
        ]
      },
      {
        title: 'Datasets',
        path: 'datasets',
        thirdLevelItems: [
          {
            title: 'The dataset object',
            path: 'the-dataset-object'
          },
          {
            title: 'List datasets',
            path: 'list-datasets'
          },
          {
            title: 'Create a dataset',
            path: 'create-a-dataset'
          },
          {
            title: 'Retrieve a dataset',
            path: 'retrieve-a-dataset'
          },
          {
            title: 'Update a dataset',
            path: 'update-a-dataset'
          },
          {
            title: 'Delete a dataset',
            path: 'delete-a-dataset'
          },
          {
            title: 'The feature object',
            path: 'the-feature-object'
          },
          {
            title: 'List features',
            path: 'list-features'
          },
          {
            title: 'Insert or update a feature',
            path: 'insert-or-update-a-feature'
          },
          {
            title: 'Retrieve a feature',
            path: 'retrieve-a-feature'
          },
          {
            title: 'Delete a feature',
            path: 'delete-a-feature'
          },
          {
            title: 'Datasets API errors',
            path: 'datasets-api-errors'
          },
          {
            title: 'Datasets API restrictions and limits',
            path: 'datasets-api-restrictions-and-limits'
          }
        ]
      },
      {
        title: 'Fonts',
        path: 'fonts',
        thirdLevelItems: [
          {
            title: 'Retrieve font glyph ranges',
            path: 'retrieve-font-glyph-ranges'
          },
          {
            title: 'Fonts API errors',
            path: 'fonts-api-errors'
          },
          {
            title: 'Fonts API restrictions and limits',
            path: 'fonts-api-restrictions-and-limits'
          }
        ]
      }
    ]);
  });
});
