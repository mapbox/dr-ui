---
title: Batfish helpers
description: Batfish data selector functions to build navigation and topic datasets.
order: 2
contentType: guide
layout: accordion
products:
  - Documentation
prependJs:
  - "import navigation from '@mapbox/batfish/data/navigation'; // eslint-disable-line"
  - "import topics from '@mapbox/batfish/data/filters'; // eslint-disable-line"
  - "import splitPages from '@mapbox/batfish/data/split-pages'; // eslint-disable-line"
  - "import relatedMts from '../../../../src/helpers/batfish/__tests__/fixtures/related-mts.json';"
  - "import relatedAndroid from '../../../../src/helpers/batfish/__tests__/fixtures/related-android.json';"
---

Dr. UI has two functions that are used in `dataSelectors` in `batfish.config.js` to help build page metadata and site hierarchy. Each data selector has tests to assert the shape of the data.

These dataset functions often use the page's relative pathname as a unique identifier.

## Navigation

`navigation` builds data for the dr-ui navigation components [`TabList`](https://mapbox.github.io/mr-ui/#tablist) and [`NavigationAccordion`](/dr-ui/#navigationaccordion).

### Arguments

- `siteBasePath`, required. The function requires the `siteBasePath`.
- `data`, object. Provided by the data selector.
- `sections`, array. See [Shape of multi-structured sections](#shape-of-multi-structured-sections).

### Set up in batfish.config.js

```js
const {
  buildNavigation
} = require('@mapbox/dr-ui/helpers/batfish/navigation.js');

const siteBasePath = '/help';

module.exports = () => {
  return {
    siteBasePath: siteBasePath,
    dataSelectors: {
      navigation: (data) => buildNavigation(siteBasePath, data)
    }
  };
};
```

Multi-structured sites require and additional configuration array:

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
import React from 'react';
import navigation from '@mapbox/batfish/data/navigation';

class PageShell extends React.Component {
  render () {
    return (
      <PageLayout navigation={navigation} />;
    )
  }
}
```

### Output

- `navTabs`. Provides the top-level navigation for the site and is powered by the `navOrder` field in the frontMatter of those pages.
- `accordion`. Provides the data for [`NavigationAccordion`](/dr-ui/#navigationaccordion).
- `hierarchy`. Provides the parent path for each page.

#### Sample

```json
{{JSON.stringify(navigation,null,2)}}
```

## Filters

Given a group of `example` pages, the `filters` Batfish helper creates unique option lists for `products`, `topics`, `levels`, and `languages` required to power the filter feature for `exampleIndex` layout pages. It will also create an array of `videos` if any pages have `video: true` in the frontMatter.

### Arguments

- `data`, object. Provided by the data selector.

### Set up in batfish.config.js

```js
const { buildFilters } = require('@mapbox/dr-ui/helpers/batfish/filters.js');

module.exports = () => {
  return {
    dataSelectors: {
      topics: (data) => buildFilters(data)
    }
  };
};
```

### Usage

```js
import React from 'react';
import filters from '@mapbox/batfish/data/filters.js';

class PageShell extends React.Component {
  render() {
    return (
      <PageLayout filters={filters} />;
    )
  }
}
```

### Output

- The shape of filters is an object, where the top-level keys are pathnames for `examplesIndex` pages.
  - Each object has a `products` array, a unique list of products.
  - Each object has a `topics` array, a unique list of topics.
  - Each object has a `pages` array of all sub pages to display. The `pages` array is ordered by the `order` frontMatter property and then alphabetically by `title`.
  - If available, the object may have a `levels` array, a unique list of levels options.
  - If available, the object may have a `languages` array, a unique list of language options.
  - If available, the object may have `videos: true` to show that one or more sub pages have `video: true` in the frontMatter.

#### Sample

```json
{
  "/dr-ui/examples/" : {{JSON.stringify(topics["/dr-ui/examples/"],null,2)}}
}
```

## Append topics helper

[iOS](https://docs.mapbox.com/ios/maps/help/), [Android](https://docs.mapbox.com/android/maps/help/), and [Unity](https://docs.mapbox.com/unity/maps/help/) have Help pages that list all the Help tutorials and troubleshooting guides for that site's product.

With the `formatTopics` Batfish helper, you can build this dataset and then pass the result as the `append` argument to the [`topics` Batfish data selector](#topics). By doing so, you can use `layout: example` on your new Help page without any added code or configuration.

### Arguments

- `baseurl`, string. The site's base URL as defined in the `batfish.config.js`.
- `tabName`, string. This is often `help` or the page path name that this data will be displayed on.
- `contentTypesArr`, array. An array of objects organized by content type. Each item has an array of pages. See [`contentTypesArr` samples](#contenttypesarr-samples) to see the shape of this array.
- `products`, array. This optional argument is for [multi-structured sites](/dr-ui/guides/multi-structured/) and will be the values of the paths for each subsite. Each page item in `contentTypesArr` should have a `products` array that identifies which product the page belongs to. Use one or more values from this products array. See [Multi-structured site sample](#multi-structured-site-sample) for an example.

### Set up in batfish.config.js

```js
const {
  buildTopics,
  formatTopics
} = require('@mapbox/dr-ui/helpers/batfish/topics.js');
const relatedHelpPages = require('./data/releated-help-pages.json');

const siteBasePath = '/android';

// for a single-structured site:
const appendTopics = formatTopics(siteBasePath, 'help', relatedHelpPages);

// for a multi-structured site:
// const appendTopics = formatTopics(siteBasePath, 'help', relatedHelpPages, ['maps', 'navigation', 'vision']);

module.exports = () => {
  return {
    siteBasePath: siteBasePath,
    dataSelectors: {
      topics: (data) => buildTopics(data, appendTopics)
    }
  };
};
```

The [output](#output-1) and [usage](#usage-1) is the same as the `topics` Batfish helper.

### `contentTypesArr` samples

#### Single-structured site sample

```json
{{JSON.stringify(relatedMts, null,2)}}
```

#### Multi-structured site sample

```json
{{JSON.stringify(relatedAndroid, null,2)}}
```

## Shape of multi-structured `sections`

- `path` (required) string. Top-level folder in `src/pages`.
- `title` (required) string. Title of the product.
- `tag` (optional) string. Name of tag to add to [`ProductMenu`](/dr-ui/#productmenu).

### Example

```JSON
[
  {
    "path": "maps",
    "title": "Maps SDK for iOS",
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

## Split pages

`split-pages` supports groups of pages that use the [split page pattern](/dr-ui/guides/split-pages/) by generating and collecting `headings` for the main page to reference.

### Arguments

- `data`, object. Provided by the data selector.

### Set up in batfish.config.js

```js
const {
  buildSplitPages
} = require('@mapbox/dr-ui/helpers/batfish/split-pages.js');

module.exports = () => {
  return {
    dataSelectors: {
      splitPages: (data) => buildSplitPages(data)
    }
  };
};
```

### Usage

```js
import React from 'react';
import splitPages from '@mapbox/batfish/data/split-pages';

class PageShell extends React.Component {
  render() {
    const { children, location, frontMatter } = this.props;
    const isSplitPage = splitPages[location.pathname];

    return (
      <PageLayout headings={isSplitPage ? isSplitPage.headings : undefined}>
        {children}
      </PageLayout>
    );
  }
}
```

### Output

- The shape is an object, where the top-level keys are pathnames for top level pages that have split pages.
  - Each object has a `headings` array. It contains all the headings for the page.

#### Sample

```json
{{JSON.stringify(splitPages, null,2)}}
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
3. In `tests/navigation.test.js` and/or `tests/filters.test.js` create a new test case that loads in `data-example.json` (rather than data.json).
4. Make any necessary changes to `data/navigation.js` and/or `data/pages.js` until all test cases pass.
