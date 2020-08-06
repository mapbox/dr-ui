---
title: Limitations
description: Limitations to the split page pattern.
order: 3
splitPage: true
hideFeedback: true
products:
  - Mapbox fundamentals
contentType: guide
---

## Limitations

There are several known limitations to using split pages:

- All headings must be unique across all pages that come together on the main page.
- The `order` in each markdown page partial must match the order in which you import and declare each markdown partial in the main file.
- You _must_ create redirects for each for the markdown partial pages. See [Create redirects](#4-create-redirects) section.
  - All pages in `src/pages/` will resolve at a URL on docs.mapbox.com. We create redirects for each partial markdown file to make sure users, or more likely web crawlers, do not index or reference this page.
  - While it's possible to store the partial markdown files in a directory outside of `src/pages/` this will require updating the content-based tests to properly test and lint these page partials including all the pages in `src/pages/`.
- The main page must be a JavaScript file (not markdown). This will enable the scrollspy sidebar to sync properly with the content headings.
