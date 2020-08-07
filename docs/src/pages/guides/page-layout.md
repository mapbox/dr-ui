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
  - "import OtherProps from '../../components/other-props.js';"
  - "import LayoutUsage from '../../components/layout-usage.js';"
  - "import frontmatter from '!raw-loader!../../components/snippets/frontmatter.js';// eslint-disable-line"
---

The PageLayout component is the main controller for building pages with Dr. UI offering five layout options. PageLayout provides everything from the site's navigation, to the sidebar contents, and main content area. It also includes common components like Search and Feedback.

While the [docs-starter-kit](https://github.com/mapbox/docs-starter-kit) configures PageLayout with the most common setup, this guide describes all available options to working and customizing the component.

## Layouts

The `PageLayout` component comes with several layouts that you define in your page's frontmatter. Each layout is a set of opinionated configurations, but you have to option customize the layout by setting additional frontmatter fields.

{{<LayoutUsage />}}

### How do I set a layout?

In the frontmatter of the page, set the field `layout` to a valid layout value.

Example:

```yaml
layout: page
```

The [remark-lint-mapbox/frontmatter](https://github.com/mapbox/remark-lint-mapbox/tree/main/frontmatter) linter will help assert that every markdown page has a valid layout.

### How can I customize the layout?

{{<FrontMatter />}}

### How can I set defaults for multiple pages or an entire site?

When you create your PageLayout component in your site's page shell, you can define or redefine the frontmatter object.

The example below will turn of the feedback component for every page:

```
{{frontmatter}}
```

## Topics and navigation

The PageLayout component accepts a `topics` and `navigation` prop to define all the topics for examples and the site's navigation system, respectively.

In most cases, you can use Batfish helpers to automatically generate this dataset. See the following resources on how to install these functions and use them with PageLayout:

- [topics](/dr-ui/guides/batfish-helpers/#topics)
- [navigation](/dr-ui/guides/batfish-helpers/#navigation)

## Other PageLayout props

The PageLayout component accepts the following props for you to further customize your site:

{{<OtherProps />}}

## Top level navigation

To define the top level navigation for your site, add `navOrder: 1` to the frontmatter of each top level page. Increment the number to reflect your desired order.

You may need to restart Batfish to make the changes appear.

## Custom sidebars

Sites like Mapbox GL JS require custom sidebars since is data is derived from multiple sources. Similarly, the [Dr. UI component's page](/dr-ui/) also uses a custom sidebar, see the example below for how to conditionally display a custom sidebar:

```jsx
import Sidebar from './sidebar';

class PageShell extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <PageLayout
        customSidebar={
          location.pathname === '/dr-ui/' ? <Sidebar /> : undefined
        }
      >
        {children}
      </PageLayout>
    );
  }
}
```
