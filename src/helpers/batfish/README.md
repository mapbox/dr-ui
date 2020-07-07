# Data selectors

dr-ui has a few `dataSelectors` in `batfish.config.js` to help build page metadata and site hierarchy. Each data selector has tests to assert the shape of the data.

## `navigation`

`navigation` builds data for the dr-ui navigation components `TabList` and `NavigationAccordion`.

### Set up in batfish.config.js

```js
const { buildNavigation } = require('@mapbox/dr-ui/helpers/batfish/navigation.js');

...

dataSelectors: {
  navigation: data => buildNavigation(siteBasePath, data)
}
```

For multi-level sites, pass an [array to define each section](#shape-of-multi-level-sections-object):

```js
dataSelectors: {
  navigation: (data) =>
    buildNavigation(siteBasePath, data, [
      { path: 'maps', title: 'Maps SDK for iOS' },
      { path: 'navigation', title: 'Navigation SDK for iOS' }
    ]);
}
```

### Usage

```js
import navigation from '@mapbox/batfish/data/navigation';

<TabList items={navigation.navTabs} />;
```

## `topics`

`topics` collects all topics for subpages to build the examples (cards) layout.

### Set up in batfish.config.js

```js
const { buildTopics } = require('@mapbox/dr-ui/helpers/batfish/topics.js');

...

dataSelectors: {
  topics: data => buildTopics(data)
}
```

### Usage

```js
import topics from '@mapbox/batfish/data/topics';

const topicList = topics['/docs-starter-kit/examples/'].topics;
```

## Shape of multi-level `sections` object

- `path` (required) string. Top-level folder in `src/pages`.
- `title` (required) string. Title of the product.
- `tag` (optional) string. Name of tag to add to ProductMenu. [options](https://github.com/mapbox/dr-ui/blob/729c2efd229587571c260de6438395890894f811/src/components/product-menu/product-menu.js#L52).
- `dropdown` (optional) object. Label and items to display as a dropdown.

### Example

```JSON
[
  {
    "path": "maps",
    "title": "Maps SDK for iOS",
    "dropdown": {
      "label": "API Reference",
      "items": [
        {
          "title": "5.9.0",
          "href": "/ios/api/maps/5.9.0/index.html",
          "latest": true
        },
        {
          "title": "5.8.0",
          "href": "/ios/api/maps/5.8.0/index.html",
          "latest": false
        },
        {
          "title": "5.7.0",
          "href": "/ios/api/maps/5.7.0/index.html",
          "latest": false
        }
      ]
    }
  },
  {
    "path": "navigation",
    "title": "Navigation SDK for iOS"
  },
  {
    "path": "beta/navigation",
    "title": "Beta Navigation SDK for iOS",
    "tag": "beta"
  },
  {
    "path": "vision",
    "title": "Vision SDK for iOS"
  }
]
```

## Troubleshooting

If data is not building as you expect:

1. Temporarily change a dataSelector in the batfish.config.js to dump out your pages data as a test fixture (rename `data-example.json` to something meaningful to your use case):

```js
navigation: data => {
  require('fs').writeFileSync('./tests/fixtures/data-example.json', JSON.stringify(data, null, 2))
  return buildNavigation(siteBasePath, data)
},
```

2. Run `npm start` and the build process will write the JSON file to the fixture folder.
3. In `tests/navigation.test.js` and/or `tests/pages.test.js` create a new test case that loads in `data-example.json` (rather than data.json).
4. Make any necessary changes to `data/navigation.js` and/or `data/pages.js` until all test cases pass.
