---
title: Frontmatter
description: 'There are two frontmatter fields needed to make grouped guides work: group and groupOrder.'
groupOrder: 2
contentType: guide
layout: page
products:
  - Documentation
---

There are two frontmatter fields needed to make grouped guides work:

- **`group` (bool)**: The `index.md` file should include `group: true` in the frontmatter. This will signal to the Batfish helper `navigation.js` to include an array of subpages and to the `PageLayout` component to use the `GuideGroupIndex` layout for the content.
- **`groupOrder` (int)**: In all other Markdown files in the group, specify the order in which the guides should appear in the sidebar (and in the guide group index) by including `groupOrder: {number}` in the frontmatter for each page.
