---
title: PageLayout component
description: All about building with PageLayout.
order: 3
layout: accordion
hideFeedback: true
prependJs:
  - "import layoutConfig from '../../../../src/components/page-layout/layout.config.js'"
  - "import components from '../../data/components';"
---

The `PageLayout` component is one of the more complex Dr. UI components. Its defaults help keep our pages consistent, but it has plenty of overrides that you configure and the page and site level. This guide will describe how to work with this component.

## How are layouts configured?

The `PageLayout` component comes with several layouts that you can define in your pages frontmatter. Each layout is a set of configurations that you can also override to better customize the layout.

Layout options: `{{components.find(f => f.name === 'PageLayout').props.frontMatter.type.value.layout.value.map(v => v.value).join(', ')}}`

You can find the layout configuration embedded below:

```json
{{JSON.stringify(layoutConfig,null,2)}}
```

## How can I override a layout?

You can define any available frontMatter prop in the frontMatter of your page to override it. See [`PageLayout` Props](/dr-ui/#pagelayout) table for full documentation.

### Remove the title for a page

If you have a custom header, using `OverviewHeader`, or just don't need a title for the page, set:

```yaml
hideTitle: true
```

### Remove the feedback component

If you do not want the feedback component to show on a page, set:

```yaml
hideFeedback: true
```

### Use full-width cards

If you are showing cards with the `example` layout and would like to have full-width cards, set:

```yaml
fullWidthCards: true
```
