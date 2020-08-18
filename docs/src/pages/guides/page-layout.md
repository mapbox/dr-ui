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
  - "import Topbar from '../../../../src/components/page-layout/components/topbar.js';"
  - "import navigation from '@mapbox/batfish/data/navigation'; // eslint-disable-line"
  - "import constants from '../../constants.json';"
  - "import Note from '../../../../src/components/note';"
---

The [`PageLayout`](/dr-ui/#pagelayout) component is the main controller for building pages with Dr. UI and offers five layout options. `PageLayout` provides everything from the site's navigation, to the sidebar contents, and main content area. It also includes common components like Search and Feedback.

While the [docs-starter-kit](https://github.com/mapbox/docs-starter-kit) configures `PageLayout` with the most common setup, this guide describes all available options to working and customizing the component.

## Layouts

The `PageLayout` component comes with several layouts that you define in your page's frontmatter. Each layout is a set of opinionated configurations, but you have the option to customize the layout by setting additional frontmatter fields.

{{<LayoutUsage data={{
  page:
    'A standard interior page with a table of contents sidebar and content area. This layout is often used by tutorials and guides.',
  accordion:
    'This layout uses the NavigationAccordion component to organize navigation across multiple pages. This layout is often used by guides and reference pages.',
  example:
    "This layout uses the SectionedNavigation component to display all topics for the site's examples. This layout is used by example pages.",
  exampleIndex:
    'This layout builds a homepage for an examples section. It organizes each example using the Cards component and uses the SectionedNavigation component to display all topics on the sidebar.',
  full:
    'This layout does not have a sidebar or standard content area. This layout is used for building a custom layout.'
}} />}}

### How do I set a layout?

In the frontmatter of the page, set the field `layout` to a valid layout value.

Example:

```yaml
layout: page
```

The [remark-lint-mapbox/frontmatter](https://github.com/mapbox/remark-lint-mapbox/tree/main/frontmatter) linter will help assert that every markdown page has a valid layout.

### How can I customize the layout?

You can set any of the following `frontMatter` props from the frontmatter in your page to override a feature:

{{<FrontMatter />}}

### How can I set defaults for multiple pages or an entire site?

When you create your `PageLayout` component in your site's page shell, you can define or redefine the frontmatter object.

The example below will turn off the feedback component for every page:

```
{{frontmatter}}
```

## Topics and navigation

The `PageLayout` component accepts `topics` and `navigation` props to define all the topics for examples and the site's navigation system, respectively.

In most cases, you can use Batfish helpers to automatically generate this dataset. See the following resources on how to install these functions and use them with `PageLayout`:

- [topics](/dr-ui/guides/batfish-helpers/#topics)
- [navigation](/dr-ui/guides/batfish-helpers/#navigation)

## Multi-structured sites

Most docs.mapbox.com sites use a single structure, which means it documents a single product. But [iOS](https://docs.mapbox.com/ios/maps/overview/) and [Android](https://docs.mapbox.com/android/maps/overview/) use a multi-structure to document maps, navigation, and search.

The [navigation](/dr-ui/guides/batfish-helpers/#navigation) Batfish helper function can handle multi-structured sites and build the `navigation` dataset required for `PageLayout` automatically. You will need to include a configuration object to define each part of the site. See [shape of multi-structured sections](/dr-ui/guides/batfish-helpers/#shape-of-multi-structured-sections) for how to write a configuration object.

**See the [Multi-structured guide](/dr-ui/guides/multi-structured/) for steps on building a new site.**

## Other `PageLayout` props

The `PageLayout` component accepts the following props for you to further customize your site:

{{<OtherProps />}}

## Navigation bar

The navigation bar appears at the top of every page. It uses [`ProductMenu`](/dr-ui/#productmenu) to show the site title, [`Search`](/dr-ui/#search) to add search feature, and [`TabList`](https://mapbox.github.io/mr-ui/#tablist) to list the top-level pages for the site.

{{<div className=''>
<Topbar navigation={navigation} parentPath="/dr-ui/guides/" constants={constants} />

  <div><em>The navigation bar for this site.</em></div>
  </div>
}}

### What are top-level pages?

Top-level pages are a small set of pages that define a section of the site. These pages build the content hierarchy and act as a homepage for each section. The hierarchy is also important for telling `TabList` which section the user is now on so it can add a blue bottom border indicator.

For example, this page falls under [Guides](/dr-ui/guides/), a top-level page. Since you're visiting a page under the Guide's section, the Guides link in the `TabList` has a blue bottom border indicator to help show you where you are on the site.

Top-level pages almost always follow the folder structure in `src/pages/`. For example a site with the following folder structure likely uses `examples/index.md`, `help/index.md`, and `overview/index.md` as it's top-level pages:

```
src/
  pages/
    examples/
      index.md
      clustering.md
      markers.md
    help/
      index.md
    overview/
      index.md
```

### How do I define top-level pages for a site?

You can define a top-level page by adding `navOrder: 1` to the frontmatter of the desired pages. Increment the number to reflect the order you want them to appear in the navigation bar. Once updated, these pages will automatically populate the navigation bar.

Things to consider:

- Your site must have at least one top-level page.
- If your site requires more than four top-level pages, you should reconsider the information architecture of the site.
- When developing locally, you may need to restart your local server to see the changes reflected in the site.

{{<Note>}}
The frontmatter props `navOrder` and `order` have different functions.

- `navOrder` identifies a top-level page and its order.
- `order` sets the order for all pages in a section that uses the `accordion` layout.

For top-level pages using the `accordion` layout, besides setting `navOrder`, you will also set `order: 1` to make sure that the top-level page appears first in the [`NavigationAccordion`](/dr-ui/#navigationaccordion)
{{</Note>}}

## Custom sidebars

Sites like Mapbox GL JS require custom sidebars since the data is derived from multiple sources. Similarly, the [Dr. UI component's page](/dr-ui/) also uses a custom sidebar, see the example below for how to conditionally display a custom sidebar:

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
