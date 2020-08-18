import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import BackToTopButton from '../back-to-top-button/back-to-top-button';
import ErrorBoundary from '../error-boundary/error-boundary';
import Content from './components/content';
import Sidebar from './components/sidebar';
import PageLayoutTopbar from './components/topbar';
import { findHasSection, findParentPath } from './utils';
// default configuration for each layout
// every option can be overriden in the frontMatter
import layoutConfig from './layout.config.js';

export default class PageLayout extends React.Component {
  // render the page's top bar navigation
  renderTopbar = (switchedNavigation, parentPath) => {
    const { constants, topBarSticker, tabListAppend } = this.props;
    return (
      <PageLayoutTopbar
        constants={constants}
        navigation={switchedNavigation}
        parentPath={parentPath}
        topBarSticker={topBarSticker}
        tabListAppend={tabListAppend}
      />
    );
  };

  // render the page's sidebar
  renderSidebar = (config, switchedNavigation, parentPath) => {
    const { customSidebar, headings, topBarSticker } = this.props;
    return (
      config.sidebar !== 'none' && (
        <div className={`col col--4-mm col--12 ${config.sidebarTheme}`}>
          <Sidebar
            {...this.props}
            navigation={switchedNavigation}
            parentPath={parentPath}
            layoutConfig={config}
            customSidebar={customSidebar}
            headings={headings}
            topBarSticker={topBarSticker}
          />
        </div>
      )
    );
  };

  // render the page's content
  renderContent = (config, parentPath) => {
    return (
      <div
        className={classnames('col col--12', {
          'col--8-mm': config.sidebar !== 'none'
        })}
      >
        <Content
          {...this.props}
          parentPath={parentPath}
          layoutConfig={config}
        />
      </div>
    );
  };

  render() {
    const { location, navigation, frontMatter } = this.props;

    const { navOrder, noShellHeaderBuffer } = frontMatter;

    // determine's if this is a single or multi-level site (the latter has sections)
    const hasSection = findHasSection(navigation, location.pathname);
    // get the parent's path, we need this for the top nav
    const parentPath = findParentPath(navigation, location.pathname);
    // if page has `section` then switch to multi-page
    const switchedNavigation = hasSection
      ? navigation[hasSection.path]
      : navigation;

    // set default layout to page
    if (!frontMatter.layout) frontMatter.layout = 'page';

    // if layout is example and has navOrder assume 'exampleIndex' layout
    const config = {
      ...(navOrder && frontMatter.layout === 'example'
        ? layoutConfig.exampleIndex
        : layoutConfig[frontMatter.layout]),
      ...frontMatter
    };

    return (
      <ErrorBoundary>
        {!noShellHeaderBuffer && <div className="shell-header-buffer" />}
        <ErrorBoundary>
          {this.renderTopbar(switchedNavigation, parentPath)}
        </ErrorBoundary>
        <div className="limiter">
          <div className="grid">
            <ErrorBoundary>
              {this.renderSidebar(config, switchedNavigation, parentPath)}
            </ErrorBoundary>
            <ErrorBoundary>
              {this.renderContent(config, parentPath)}
            </ErrorBoundary>
          </div>
        </div>
        <div className="fixed block none-mm mx24 my24 z5 bottom right">
          <BackToTopButton />
        </div>
      </ErrorBoundary>
    );
  }
}

PageLayout.defaultProps = {
  // topbar sticker is sticky by default
  topBarSticker: true
};

PageLayout.propTypes = {
  children: PropTypes.node,
  /** Provided by Batfish, the `pathname` (relative url) of the current page is required */
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  /**
`frontMatter` prop | Description | Conditions
---|---|---
`layout` | One of: `page`, `accordion`, `example`, `full`, `exampleIndex`. |
`navOrder` | If defined with a number, the page will be added as a top level navigation item. This is the canonical way for defining a top level page. |
`hideTitle` | Hide the title of the page. |
`hideFeedback` | Remove the feedback component from the bottom of the page. |
`sidebar` | one of: `toc`, `accordion`, `sectioned`, `none` | all layouts except `none`
`sidebarTheme` | Mapbox Assembly class names to style the sidebar container. | all layouts except `none`
`includeFilterBar` | Add a filter bar to page using SectionedNavigation. | `example` or `exampleIndex` layouts or `sidebar: sectioned`
`sidebarTitle` | An optional title to add to SectionedNavigation sidebar. |`example` or `exampleIndex` layouts or `sidebar: sectioned`
`hideCardLanguage` | If `true`, hide the language from all Cards. | `exampleIndex` layout
`hideCardDescription` | If `true`, hide the description from all Cards. | `exampleIndex` layout
`fullWidthCards` | Makes CardContainer full width. | `exampleIndex` layout
`showCards` | Enable or disable the `CardsContainer`. This is helpful for pages like the dr-ui Components page. | `exampleIndex` layout
`unProse` | If `true`, remove the "prose" class from PageLayout. This is helpful for non-content pages. |
`noShellHeaderBuffer` | If `true`, remove the header buffer div. This is helpful for custom headers like on the Help page. |

*/
  frontMatter: PropTypes.shape({
    headings: PropTypes.array, // a set of headings that is automatically generated by Batfish
    navOrder: PropTypes.number,
    layout: PropTypes.oneOf([
      'page',
      'accordion',
      'example',
      'exampleIndex',
      'full'
    ]),
    hideTitle: PropTypes.bool,
    hideFeedback: PropTypes.bool,
    includeFilterBar: PropTypes.bool,
    sidebar: PropTypes.oneOf(['toc', 'accordion', 'sectioned', 'none']),
    sidebarTheme: PropTypes.string,
    showCards: PropTypes.bool,
    fullWidthCards: PropTypes.bool,
    unProse: PropTypes.bool,
    noShellHeaderBuffer: PropTypes.bool,
    sidebarTitle: PropTypes.string,
    hideCardLanguage: PropTypes.bool,
    hideCardDescription: PropTypes.bool
  }).isRequired,
  /**
- `navTabs` - links to be shown in the `TabList` of `TopBarSticker`, formatted as an array of object: `[{"href": "/overview", "id": "overview", "label": "Overview"}]`
- `accordion` - links to be added to NavigationAccordion, formatted as an object where the top key is the main page's path: `{"/overview/": [{"path": "/overview/", "title": "Overview"}, {"path": "/overview/layouts/", "title": "Layouts"}]}`
- `hierarchy` - Object of every path and their parent: `{"/overview/layous": {"parent": "/overview", "title": "Overview"}}`
- `title` - required for multi-structured layouts, this is the title for the `ProductMenu`
- `tag` - optional `tag` name to pass to `ProductMenu`, [see available options](#productmenu).
*/
  navigation: PropTypes.shape({
    navTabs: PropTypes.array,
    accordion: PropTypes.object,
    hierarchy: PropTypes.object,
    title: PropTypes.string,
    tag: PropTypes.string
  }).isRequired,
  /** An object of pages sorted by their `topic` frontMatter field. This dataset can be generated with [@mapbox/dr-ui/helpers/batfish/topics.js](https://github.com/mapbox/dr-ui/blob/main/src/helpers/bafish/README.md).*/
  topics: PropTypes.shape({
    path: PropTypes.string,
    topics: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.number,
        name: PropTypes.string,
        pages: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            path: PropTypes.string,
            thumbnail: PropTypes.string,
            level: PropTypes.number,
            language: PropTypes.array
          })
        )
      })
    )
  }),
  /**
- `SITE` - the name of the site.
- `BASEURL` - the base url of the website, as used in the batfish.config.js
- `FORWARD_EVENT_WEBHOOK` - an object with to values: `production` and `staging`.
*/
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired,
    FORWARD_EVENT_WEBHOOK: PropTypes.shape({
      production: PropTypes.string.isRequired,
      staging: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  /** Required if using the `exampleIndex` layout along with `imageId`s. The value is the local `AppropriateImage` component. */
  AppropriateImage: PropTypes.func,
  /** If false, unstick the TopBarSticker */
  topBarSticker: PropTypes.bool,
  /** Create a completely custom sidebar. */
  customSidebar: PropTypes.node,
  /** Append item to TabList. This is used by iOS and Android site's API reference. */
  tabListAppend: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired
  }),
  /** For when headings are dynamic, this is used by API docs */
  headings: PropTypes.array
};
