---
title: Introduction to split pages
description: An introduction to use split pages.
order: 1
splitPage: true
hideFeedback: true
products:
  - Documentation
contentType: guide
---

## Introduction to split pages

This pages is a demo of using split pages and steps on how to implement it on a site.

To improve developer experience, we sometimes split a long page into multiple markdown files (also known as partial files) and then allow Batfish to combine them into a single page.

### Set up

- You will need to import the [`split-pages`](/dr-ui/guides/batfish-helpers/#split-pages) Batfish helper in your site's `batfish.config.js` file.
- All partial files must be in a folder next to the main page. The steps in [How to use split pages](#how-to-use-split-pages) provides examples on how to structure your files.
- Read through [the limitations of this pattern](#limitations).

### Current uses cases

This split pages pattern is used by [API documentation](https://docs.mapbox.com/api/maps/), [Studio manual reference](https://docs.mapbox.com/studio-manual/reference/), [Accounts pricing page](https://docs.mapbox.com/accounts/overview/pricing/), and [Vector Tiles Specification](https://docs.mapbox.com/vector-tiles/specification/).
