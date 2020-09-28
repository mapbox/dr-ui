const { buildSecondLevel } = require('../helpers.js');

describe('buildSecondLevel', () => {
  it('Simple', () => {
    expect(
      buildSecondLevel({
        title: 'Overview',
        description: 'Set up your site.',
        layout: 'accordion',
        order: 1,
        navOrder: 1,
        contentType: 'guide',
        headings: [
          {
            text: 'How to use this repository',
            slug: 'how-to-use-this-repository',
            level: 2
          },
          { text: 'Links', slug: 'links', level: 2 }
        ]
      })
    ).toMatchSnapshot();
  });

  it('No headings', () => {
    expect(
      buildSecondLevel({
        title: 'Overview',
        description: 'Set up your site.',
        layout: 'accordion',
        order: 1,
        navOrder: 1,
        contentType: 'guide',
        headings: []
      })
    ).toEqual([]);
  });

  it('Missing headings', () => {
    expect(
      buildSecondLevel({
        title: 'Overview',
        description: 'Set up your site.',
        layout: 'accordion',
        order: 1,
        navOrder: 1,
        contentType: 'guide'
      })
    ).toEqual([]);
  });

  it('Deeply nested', () => {
    expect(
      buildSecondLevel({
        title: 'Constants',
        description: 'How to store constants in your repository.',
        contentType: 'reference',
        order: 5,
        headings: [
          { text: 'Heading 2a', slug: 'heading-2a', level: 2 },
          { text: 'Heading 2b', slug: 'heading-2b', level: 2 },
          { text: 'Heading 2b.3a', slug: 'heading-2b3a', level: 3 },
          { text: 'Heading 2b.3b', slug: 'heading-2b3b', level: 3 },
          { text: 'Heading 2b.3c', slug: 'heading-2b3c', level: 3 },
          { text: 'Heading 2b.3c.4a', slug: 'heading-2b3c4a', level: 4 },
          { text: 'Heading 2b.3c.4b', slug: 'heading-2b3c4b', level: 4 },
          { text: 'Heading 2c', slug: 'heading-2c', level: 2 },
          { text: 'Heading 2d', slug: 'heading-2d', level: 2 },
          { text: 'Heading 2d.3a', slug: 'heading-2d3a', level: 3 },
          { text: 'Heading 2d.3b', slug: 'heading-2d3b', level: 3 },
          { text: 'Heading 2d', slug: 'heading-2d-1', level: 2 }
        ]
      })
    ).toMatchSnapshot();
  });

  it('With headings (api-documentation)', () => {
    expect(
      buildSecondLevel(
        {
          title: 'Accounts service',
          description: 'Overview of the Mapbox Accounts service APIs.',
          service: true,
          order: 5,
          contentType: 'API'
        },
        [
          { text: 'Tokens', slug: 'tokens', level: 2 },
          { text: 'Token format', slug: 'token-format', level: 3 },
          {
            text: 'Token metadata object',
            slug: 'token-metadata-object',
            level: 3
          },
          {
            text: 'Example token metadata object',
            slug: 'example-token-metadata-object',
            level: 4
          },
          { text: 'List tokens', slug: 'list-tokens', level: 3 },
          {
            text: 'Example request: List tokens',
            slug: 'example-request-list-tokens',
            level: 4
          },
          {
            text: 'Response: List tokens',
            slug: 'response-list-tokens',
            level: 4
          },
          {
            text: 'Example response: List tokens',
            slug: 'example-response-list-tokens',
            level: 4
          },
          { text: 'Create a token', slug: 'create-a-token', level: 3 },
          {
            text: 'Available token scopes',
            slug: 'available-token-scopes',
            level: 4
          },
          {
            text: 'Example request: Create a token',
            slug: 'example-request-create-a-token',
            level: 4
          },
          {
            text: 'Response: Create a token',
            slug: 'response-create-a-token',
            level: 4
          },
          {
            text: 'Example response: Create a token',
            slug: 'example-response-create-a-token',
            level: 4
          },
          {
            text: 'Create a temporary token',
            slug: 'create-a-temporary-token',
            level: 3
          },
          {
            text: 'Example request: Create a temporary token',
            slug: 'example-request-create-a-temporary-token',
            level: 4
          },
          {
            text: 'Example request body: Create a temporary token',
            slug: 'example-request-body-create-a-temporary-token',
            level: 4
          },
          {
            text: 'Response: Create a temporary token',
            slug: 'response-create-a-temporary-token',
            level: 4
          },
          {
            text: 'Example response: Create a temporary token',
            slug: 'example-response-create-a-temporary-token',
            level: 4
          },
          { text: 'Update a token', slug: 'update-a-token', level: 3 },
          {
            text: 'Example request: Update a token',
            slug: 'example-request-update-a-token',
            level: 4
          },
          {
            text: 'Response: Update a token',
            slug: 'response-update-a-token',
            level: 4
          },
          {
            text: 'Example response: Update a token',
            slug: 'example-response-update-a-token',
            level: 4
          },
          { text: 'Delete a token', slug: 'delete-a-token', level: 3 },
          {
            text: 'Example request: Delete a token',
            slug: 'example-request-delete-a-token',
            level: 4
          },
          {
            text: 'Response: Delete a token',
            slug: 'response-delete-a-token',
            level: 4
          },
          { text: 'Retrieve a token', slug: 'retrieve-a-token', level: 3 },
          {
            text: 'Example request: Retrieve a token',
            slug: 'example-request-retrieve-a-token',
            level: 4
          },
          {
            text: 'Response: Retrieve a token',
            slug: 'response-retrieve-a-token',
            level: 4
          },
          {
            text: 'Example response: Retrieve a token',
            slug: 'example-response-retrieve-a-token',
            level: 4
          },
          { text: 'List scopes', slug: 'list-scopes', level: 3 },
          {
            text: 'Example request: List scopes',
            slug: 'example-request-list-scopes',
            level: 4
          },
          {
            text: 'Response: List scopes',
            slug: 'response-list-scopes',
            level: 4
          },
          {
            text: 'Example response (truncated): List scopes',
            slug: 'example-response-truncated-list-scopes',
            level: 4
          },
          { text: 'Tokens API errors', slug: 'tokens-api-errors', level: 3 },
          {
            text: 'Tokens API restrictions and limits',
            slug: 'tokens-api-restrictions-and-limits',
            level: 3
          }
        ]
      )
    ).toMatchSnapshot();
  });
});
