---
title: PageLayout component
description: All about building with PageLayout.
order: 3
layout: accordion
hideFeedback: true
contentType: guide
products:
  - Documentation
prependJs:
  - "import components from '../../data/components'; // eslint-disable-line"
  - "import FrontMatter from '../../components/frontmatter.js';"
  - "import LayoutUsage from '../../components/layout-usage.js';"
---

The `PageLayout` component is the main controller for building page layouts with Dr. UI. There are several layouts to chose from that will help keep our pages consistent, but offer customization at the page and site level. This guide will describe how to work with this component.

## Layouts

The `PageLayout` component comes with several layouts that you can define in your page's frontmatter. Each layout is a set of opinionated configurations, but you have to option customize the layout by setting additional frontmatter fields.

{{<LayoutUsage />}}

### How do I set a layout?

In the frontmatter of the page, set the field `layout` to valid layout value.

Example:

```yaml
layout: page
```

The [remark-lint-mapbox/frontmatter](https://github.com/mapbox/remark-lint-mapbox/tree/main/frontmatter) linter will help assert that every markdown page has a valid layout.

### How can I override a layout?

The following fields are configurable in your page's frontmatter:

{{<FrontMatter />}}

### How can I set defaults for multiple pages or an entire site?

When you create your PageLayout component in your site's page shell, you can define or redefine the frontmatter object.

The example below will turn of the feedback component for every page:

```jsx
<PageLayout frontMatter={
  ...this.props.frontMatter,
  hideFeedback: true
}></PageLayout>
```

(Note: the frontmatter value in the example above should be wrapped in double `{{`, but Batfish is too eager to parse it.)

## Top level navigation

To define the top level navigation for your site, add `navOrder: 1` to the frontmatter of each top level page. Increment the number to reflect your desired order.

You may need to restart Batfish to make the changes appear.

## Multi-structured sites
