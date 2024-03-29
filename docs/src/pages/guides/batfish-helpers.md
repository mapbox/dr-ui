---
title: Batfish helpers
description: Batfish data selector functions to build navigation and topic datasets.
order: 2
contentType: guide
layout: page
products:
  - Documentation
prependJs:
  - "import navigation from '@mapbox/batfish/data/navigation'; // eslint-disable-line"
  - "import topics from '@mapbox/batfish/data/filters'; // eslint-disable-line"
  - "import splitPages from '@mapbox/batfish/data/split-pages'; // eslint-disable-line"
  - "import sitemapIgnore from '@mapbox/batfish/data/sitemap-ignore'; // eslint-disable-line"
---

Dr. UI has two functions that are used in `dataSelectors` in `batfish.config.js` to help build page metadata and site hierarchy. Each data selector has tests to assert the shape of the data.

These dataset functions often use the page's relative pathname as a unique identifier.

## Navigation

`navigation` builds data for the dr-ui navigation components like [`NavigationAccordion`](/dr-ui/components/#navigationaccordion).

### Arguments

Note that the `buildNavigation` function uses **named parameters**.

- `siteBasePath`, required. The function requires the `siteBasePath`.
- `data`, object. Provided by the data selector.
- `sections`, array. Used with multi-structured sections. See [Shape of multi-structured sections](#shape-of-multi-structured-sections).
- `addPages`, array. Pages, usually external to the site, to be appended to navigation. See [Shape of appended pages](#shape-of-appended-pages). Not compatible with multi-structured sites when used with `buildNavigation`. See [Shape of multi-structured sections](#shape-of-multi-structured-sections) for more on appending pages to multi-structured sites.

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
      navigation: (data) => buildNavigation({ siteBasePath, data })
    }
  };
};
```

Multi-structured sites require and additional configuration array:

```js
dataSelectors: {
  navigation: (data) =>
    buildNavigation({
      siteBasePath,
      data,
      sections: [
        { path: 'maps', title: 'Maps SDK for iOS' },
        { path: 'navigation', title: 'Navigation SDK for iOS' }
      ]
    });
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

- `navTabs`. Provides the top-level navigation for the site and is powered by the `navOrder` field in the frontMatter of those pages. Provides the data for [`NavigationAccordion`](/dr-ui/components/#navigationaccordion).
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
  - Each object has a `pages` array of all sub pages to display. The pages array is sorted in the following order:
    1. The "Getting started" topic(s), if it exists. This will make sure the examples on product pages show getting started examples first.
    2. By `level`, if it exists. This will make sure that beginner level tutorials will appear first on the tutorials page.
    3. All remaining pages are sorted alphabetically by title.
  - If available, the object may have a `levels` array, a unique list of levels options.
  - If available, the object may have a `languages` array, a unique list of language options.
  - If available, the object may have `videos: true` to show that one or more sub pages have `video: true` in the frontMatter.

#### Sample

```json
{
  "/dr-ui/examples/" : {{JSON.stringify(topics["/dr-ui/examples/"],null,2)}}
}
```

## Shape of multi-structured `sections`

- `path` (required) string. Top-level folder in `src/pages`.
- `title` (required) string. Title of the product.
- `tag` (optional) string. Name of tag to add to [`ProductMenu`](/dr-ui/components/#productmenu).
- - `addPages`, array. Pages, usually external to the site, to be appended to navigation. See [Shape of appended pages](#shape-of-appended-pages).

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
    "title": "Vision SDK for iOS",
    "addPages": [
      {
        "title": "Tutorial",
        "path": "https://docs.mapbox.com/help/tutorials?product=vision",
        "navOrder": 4
      },
      {
        "title": "Troubleshooting",
        "path": "https://docs.mapbox.com/help/troubleshooting?product=vision",
        "navOrder": 5
      }
    ]
  }
]
```

## Shape of appended pages

- `title` (required) string. Title of the page to be appended. Example: "Tutorials".
- `path` (required) string. Path of the page to be appended. Example: "https://docs.mapbox.com/help/tutorials?product=navigation".
- `navOrder` (options) number. An integer denoting where the page to be appended should be placed in the order of items in the navigation accordion.

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

## Prepare sitemap

`prepareSitemap` creates a data file that lists all files with `hideFromSearchEngines: true` or `splitPage: true` set in the page's frontMatter. Use this generated file with Batfish's [`sitemap.ignoreFile`](https://github.com/mapbox/batfish/blob/main/docs/configuration.md#sitemap) option to generate a sitemap that excludes any paths in the prepared file.

### Arguments

- `data`, object. Provided by the data selector.
- `siteBasePath`, string. The site's `siteBasePath` as defined in the Batfish config.
- `outputDirectory`, string. Batfish's `outputDirectory`. Default `_site`.
- `docsPath`, string. The directory that `batfish.config.js` lives in, if not in the root. (It's unlikely that you will use this option.)

### Set up in batfish.config.js

```js
const { prepareSitemap } = require('@mapbox/dr-ui/helpers/batfish/index.js');

module.exports = () => {
  return {
    sitemap: {
      // generated by the sitemapIgnore dataSelector
      ignoreFile: '_site_tmp/data/sitemap-ignore.js'
    },
    dataSelectors: {
      sitemapIgnore: ({ pages }) => prepareSitemap({ pages, siteBasePath })
    }
  };
};
```

#### Advanced usage

For sites that generate demos, like mapbox-gl-js and mts-docs, you can exclude the assets folder:

```js
const { prepareSitemap } = require('@mapbox/dr-ui/helpers/batfish/index.js');

module.exports = () => {
  return {
    sitemap: {
      // generated by the sitemapIgnore dataSelector
      ignoreFile: '_site_tmp/data/sitemap-ignore.js'
    },
    dataSelectors: {
      sitemapIgnore: ({ pages }) => [
        ...prepareSitemap({ pages, siteBasePath }),
        // exclude demos generated by webpack loader
        `${process.cwd()}/_site/assets/`
      ]
    }
  };
};
```

### Output

- The shape is an array of paths that should be excluded from the sitemap.

#### Sample

```json
{{JSON.stringify(sitemapIgnore, null,2)}}
```

## Troubleshooting

If data is not building as you expect:

1. Temporarily change a dataSelector in the batfish.config.js to dump out your pages data as a test fixture (rename `data-example.json` to something meaningful to your use case):

```js
navigation: data => {
  require('fs').writeFileSync('./tests/fixtures/data-example.json', JSON.stringify(data, null, 2))
  return buildNavigation({ siteBasePath, data })
},
```

2. Run `npm start` and the build process will write the JSON file to the fixture folder.
3. In `tests/navigation.test.js` and/or `tests/filters.test.js` create a new test case that loads in `data-example.json` (rather than data.json).
4. Make any necessary changes to `data/navigation.js` and/or `data/pages.js` until all test cases pass.
