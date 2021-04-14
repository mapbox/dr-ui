---
title: Multi-structured sites
description: How to build a site with more than one product.
order: 4
layout: page
contentType: guide
products:
  - Documentation
---

Most docs.mapbox.com sites use a single structure, which means it documents a single product. But [iOS](https://docs.mapbox.com/ios/maps/overview/) and [Android](https://docs.mapbox.com/android/maps/overview/) use a multi-structure to document several products (for example the Maps SDK, Navigation SDK, and Plugins).

This guide will walk you through creating a new multi-structured site.

## 1. Create a new docs repository

Start by creating a new repository with [docs starter kit](https://github.com/mapbox/docs-starter-kit).

1. Click the "Use this template" button to create a new repository for your site.
2. Follow the steps under "Customize the repository" in the README new repository setup checklist.

## 2. Identify your site structure

Docs starter kit includes a single-structured site. This means that the contents of `src/pages/` all belong to a single product. In this step, you will identify your site's multi-structure and begin building out the files.

1. Determine the subsites. This is often a product, for example iOS has maps, navigation, and vision.
   1. Determine a shortened name for each subsite which will be used as the URL for each subsite. For example: `/ios/maps/`.
   2. Create a folder for each subsite in `src/pages/` using the shortened name. For example: `src/pages/maps/`.
2. Determine the title for each subsite.

Your site structure will look something like:

```
src/
  pages/
    maps/
    navigation/
    vision/
```

## 3. Create your subsite configuration

Using the path names and titles you identified in the previous step, build a configuration JSON.

Your JSON will look something like:

```js
const subsites = [
  {
    path: 'maps',
    title: 'Maps SDK for iOS'
  },
  {
    path: 'navigation',
    title: 'Navigation SDK for iOS'
  },
  {
    path: 'vision',
    title: 'Vision SDK for iOS'
  }
];
```

See [Shape of multi-structured sections](/dr-ui/guides/batfish-helpers/#shape-of-multi-structured-sections) for more options.

## 4. Add the configuration to the navigation Batfish selector

1. In `batfish.config.js`, below the required packages and above the Batfish configuration function, create a constant, add the `subsites` constant you created in the previous step.
2. In the Batfish configuration function, find `navigation` in `dataSelectors`.
3. Add a `sections` argument to the `buildNavigation` function to include the `subsites` constant you created in the first step:

```
navigation: data => buildNavigation({ siteBasePath, data, sections: subsites }),
```

4. The site's navigation data selector can now support your multi-structured site.

See the [navigation Batfish data selector](/dr-ui/guides/batfish-helpers/#navigation) for more documentation.

## 5. Add pages to each subsite

Each subsite's folder now acts as a single-structure site. From the frontmatter of each page, you can define the pages that should appear in the top navigation bar with `navOrder` and order each page in that section with `order`. See the [`PageLayout` component](/dr-ui/guides/page-layout/) guide to learn about more frontmatter fields.

Below is an example of the folder structure for a subsite:

```
src/
  pages/
    maps/
      examples/
        index.md (navOrder: 2)
        add-marker.md
        clustering.md
      help/
        index.md (navOrder: 3)
      overview/
        index.md (navOrder: 1)
        mapbox-studio.md
      index.js
```

Most subsites include:

- An `overview/` folder that contains a collection of guides and the homepage for the subsite
  - For example: `src/maps/overview/index.md`.
  - The homepage usually includes the [`OverviewHeader`](/dr-ui/components/#overviewheader) component at the top of the page to define the product for that subsite.
- The `index.js` in the subsite's root folder is usually a redirect to the overview homepage:

```js
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import { createRedirect } from '@mapbox/dr-ui/helpers/create-redirect';

export default createRedirect(prefixUrl('/maps/overview/'));
```
