import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withLocation } from '@mapbox/batfish/modules/with-location';
import ReactPageShell from '../../vendor/docs-page-shell/react-page-shell.js';
import TopbarSticker from '../../../pkg/topbar-sticker';
import ProductMenu from '../../../pkg/product-menu/product-menu';
import TabList from '@mapbox/mr-ui/tab-list';
import PageLayout from '../../../pkg/page-layout';
import orderedPages from '@mapbox/batfish/data/ordered-pages'; // eslint-disable-line
import Search from '../../../pkg/search';
import constants from '../constants';
import LayoutAccordion from './layouts/accordion';
import LayoutToc from './layouts/toc';
import LayoutCards from './layouts/cards';
import LayoutExamples from './layouts/examples';

class PageShell extends React.Component {
  componentDidMount() {
    // initialize analytics
    if (window && window.initializeMapboxAnalytics) {
      window.initializeMapboxAnalytics({
        sentry: {
          sentryDsn:
            'https://6ba8cfeeedad4fb7acb8576f0fd6e266@sentry.io/1384508'
        }
      });
    }
  }

  render() {
    const { frontMatter, location, children } = this.props;

    // TODO: replace with function
    const meta = this.props.meta || {};
    if (!meta.title && frontMatter.title) {
      meta.title = frontMatter.title;
    }
    if (!meta.description && frontMatter.description) {
      meta.description = frontMatter.description;
    }
    if (!meta.pathname) {
      meta.pathname = location.pathname;
    }
    if (frontMatter.contentType) meta.contentType = frontMatter.contentType;
    if (frontMatter.language) meta.language = frontMatter.language;
    if (frontMatter.level) meta.level = frontMatter.level;

    // get the parent's path, we need this for the top nav
    const sectionPath = `/${location.pathname.split('/')[1]}/${
      location.pathname.split('/')[2]
    }/`;
    // get meta about the page
    const pageMeta = orderedPages[sectionPath]
      ? orderedPages[sectionPath].pages.filter(
          page => page.path === location.pathname
        )[0]
      : '';
    // get the parent page's list of unique topics
    const parentTopics = orderedPages[sectionPath].topics;

    let pageNavigationNarrowStick = true;
    let pageNavigation = <div />;

    if (pageMeta.layout === 'accordion') {
      pageNavigation = (
        <LayoutAccordion
          orderedPages={orderedPages}
          {...this.props}
          sectionPath={sectionPath}
        />
      );
    }
    if (pageMeta.layout === 'toc') {
      pageNavigation = <LayoutToc headings={this.props.frontMatter.headings} />;
      pageNavigationNarrowStick = false;
    }
    if (pageMeta.layout === 'cards' || pageMeta.layout === 'cards-toc') {
      pageNavigation = (
        <LayoutCards
          orderedPages={orderedPages}
          {...this.props}
          sectionPath={sectionPath}
        />
      );
    }

    return (
      <ReactPageShell
        site={constants.SITE}
        {...this.props}
        meta={meta}
        darkHeaderText={true}
      >
        <Helmet>
          <link
            rel="canonical"
            href={`https://docs.mapbox.com${meta.pathname}`}
          />
        </Helmet>
        <div className="shell-header-buffer" />
        <TopbarSticker>
          <div className="limiter">
            <div className="grid">
              <div className="col col--4-mm col--12">
                <div className="ml24-mm pt12">
                  <ProductMenu
                    productName={constants.SITE}
                    homePage={constants.BASEURL}
                  />
                </div>
              </div>
              <div className="col col--5-mm col--12">
                <TabList
                  items={Object.keys(orderedPages).map(page => {
                    return {
                      label: orderedPages[page].title,
                      id: page,
                      href: orderedPages[page].path
                    };
                  })}
                  activeItem={sectionPath}
                  truncateBy={1}
                />
              </div>
              <div className="col col--3-mm col--12">
                <div className="flex-parent-mm flex-parent--center-cross flex-parent--end-main h-full-mm wmax300 wmax-full-mm my0-mm my12">
                  <Search site={constants.SITE} />
                </div>
              </div>
            </div>
          </div>
        </TopbarSticker>
        <div className="limiter">
          <PageLayout
            sidebarContent={pageNavigation}
            sidebarContentStickyTop={60}
            sidebarContentStickyTopNarrow={0}
            currentPath={location.pathname}
            sidebarStackedOnNarrowScreens={pageNavigationNarrowStick}
          >
            <div
              className={
                pageMeta.layout === 'accordion'
                  ? 'mt60 pt30 mt0-mm pt0-mm'
                  : 'mt30 mt0-mm'
              }
            >
              {children}
            </div>
            {pageMeta.layout === 'cards' && (
              <LayoutExamples
                {...this.props}
                orderedPages={orderedPages}
                sectionPath={sectionPath}
                topics={parentTopics}
              />
            )}
          </PageLayout>
        </div>
      </ReactPageShell>
    );
  }
}

PageShell.propTypes = {
  meta: PropTypes.object,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired,
  // From withLocation
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withLocation(PageShell);
