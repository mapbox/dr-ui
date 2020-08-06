---
title: PageLayout component
description: All about building with PageLayout.
order: 3
layout: accordion
hideFeedback: true
contentType: guide
prependJs:
  - "import layoutConfig from '../../../../src/components/page-layout/layout.config.js'"
  - "import components from '../../data/components';"
  - "import FrontMatter from '../../components/frontmatter.js';"
---

The `PageLayout` component is one of the more complex Dr. UI components. Its defaults help keep our pages consistent, but it has plenty of overrides that you configure and the page and site level. This guide will describe how to work with this component.

## How are layouts configured?

The `PageLayout` component comes with several layouts that you can define in your page's frontmatter. Each layout is a set of opinionated configurations, but you have to option customize the layout by setting additional frontmatter fields.

## What are the layouts?

Layout options: `{{components.find(f => f.name === 'PageLayout').props.frontMatter.type.value.layout.value.map(v => v.value).join(', ')}}`

Each layout has the following default configurations:

```json
{{JSON.stringify(layoutConfig,null,2)}}
```

## How do I set a layout?

In the frontmatter of the page, set the field `layout` to valid layout value.

Example:

```yaml
layout: page
```

The [remark-lint-mapbox/frontmatter](https://github.com/mapbox/remark-lint-mapbox/tree/main/frontmatter) linter will help assert that every markdown page has a valid layout.

## How can I override a layout?

You can define any available frontmatter prop in the frontmatter of your page to override it. The following fields are configurable in your page's frontmatter:

{{<FrontMatter />}}

## How can I set defaults for multiple pages?

When you create your PageLayout component in your site's page shell, you can define or redefine the frontmatter object.

The example below will turn of the feedback component for every page:

```jsx
<PageLayout frontMatter={
  ...this.props.frontMatter,
  hideFeedback: true
} />
```

(Note: the frontmatter value in the example above should be wrapped in double `{{`, but Batfish is too eager to parse it.)
