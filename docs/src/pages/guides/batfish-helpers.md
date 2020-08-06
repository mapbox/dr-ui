---
title: Batfish helpers
description: Batfish data selector functions to build navigation and topic datasets.
order: 2
contentType: guide
hideFeedback: true
layout: accordion
products:
  - Documentation
prependJs:
  - "import navigation from '@mapbox/batfish/data/navigation'; // eslint-disable-line"
  - "import topics from '@mapbox/batfish/data/topics'; // eslint-disable-line"
  - "import splitPages from '@mapbox/batfish/data/split-pages'; // eslint-disable-line"
---

Dr. UI has two functions that are used in `dataSelectors` in `batfish.config.js` to help build page metadata and site hierarchy. Each data selector has tests to assert the shape of the data.

These dataset functions often use the page's relative pathname as a unique identifier.

## Navigation

`navigation` builds data for the dr-ui navigation components `TabList` and `NavigationAccordion`.

### Arguments

- `siteBasePath`, required. The function requires the `siteBasePath`.
- `data`, object. Provided by the data selector.
- `sections`, array. See [Shape of multi-level sections](#shape-of-multi-level-sections).

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

Multi-level sites require and additional configuration array:

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

class SideBar extends React.Component {
  render () {
    return (
      <TabList items={navigation.navTabs} />;
    )
  }
}
```

### Output

- `navTabs`. Provides the top-level navigation for the site and is powered by the `navOrder` field in the frontMatter of those pages.
- `accordion`. Provides the data for `NavigationAccordion`.
- `hierarchy`. Provides the parent path for each page.

#### Sample

```json
{{JSON.stringify(navigation,null,2)}}
```

## Topics

`topics` collects all topics for subpages to build the examples (cards) layout.

### Arguments

- `data`, object. Provided by the data selector.
- `append`, object. Append additional data, this is helpful if you have programmatic data (like the Mapbox GL JS Plugins page) and want to take advantage of the example layout.
- `sortArr`, array. An array of topics that is in the order you want the topics to display.

### Set up in batfish.config.js

```js
const { buildTopics } = require('@mapbox/dr-ui/helpers/batfish/topics.js');

module.exports = () => {
  return {
    dataSelectors: {
      topics: (data) => buildTopics(data)
    }
  };
};
```

### Usage

```js
import React from 'react';
import topics from '@mapbox/batfish/data/topics';

class SideBar extends React.Component {
  render() {
    const topicList = topics['/dr-ui/examples/'].topics;
  }
}
```

### Output

- The shape of topics is an object, where the top-level keys are pathnames for top level pages that have subpages with `topics` or `topic`.
  - Each object has a `topics`. It contains a unique list of topics, ordered by count of pages with that topic.
    - Each topic has `pages`. It contains metadata for each page that has that topic.

#### Sample

```json
{
  "/dr-ui/examples/" : {{JSON.stringify(topics["/dr-ui/examples/"],null,2)}}
}
```

## Shape of multi-level `sections`

- `path` (required) string. Top-level folder in `src/pages`.
- `title` (required) string. Title of the product.
- `tag` (optional) string. Name of tag to add to ProductMenu. [See options](/dr-ui/#productmenu).

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

`split-pages` supports groups of pages that use the [split page pattern](/dr-ui/guides/split-pages/) by generating and collecting `headings`, `products`, `services`, and `platforms` arrays for the main page to reference.

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
  - Each object has a `products` array. It contains all the products for the page.
  - Each object may have a `platforms` array. It contains all the platforms for the page.
  - Each object may have a `services` array. It contains all the services for the page.

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
3. In `tests/navigation.test.js` and/or `tests/topics.test.js` create a new test case that loads in `data-example.json` (rather than data.json).
4. Make any necessary changes to `data/navigation.js` and/or `data/pages.js` until all test cases pass.
