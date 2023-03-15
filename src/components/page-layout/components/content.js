import React from 'react';
import PropTypes from 'prop-types';

import ExampleIndex from './example-index.js';
import classnames from 'classnames';
import OnThisPage from '../../on-this-page/on-this-page';
import Feedback from '../../feedback/feedback';
import OverviewHeader from '../../overview-header/overview-header';
import NextPage from './next-page.js';
import GuideGroupIndex from './guide-group-index.js';
import SignupBanner from './signup-banner.js';
import DiscordCTA from './discord-cta.js';

export default class Content extends React.PureComponent {
  render() {
    const {
      children,
      layoutConfig,
      filters,
      parentPath,
      frontMatter,
      AppropriateImage
    } = this.props;
    const { showCards } = layoutConfig;
    // if showCards is true, use the ExampleIndex component
    // else use the default content wrapper to display the content
    return showCards ? (
      <ExampleIndex
        {...this.props}
        filters={filters[parentPath]}
        frontMatter={frontMatter}
        sectionPath={parentPath}
        AppropriateImage={AppropriateImage}
      >
        {children}
      </ExampleIndex>
    ) : (
      <ContentWrapper {...this.props}>{children}</ContentWrapper>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node,
  frontMatter: PropTypes.object.isRequired,
  parentPath: PropTypes.string,
  filters: PropTypes.object,
  AppropriateImage: PropTypes.func,
  layoutConfig: PropTypes.shape({
    showCards: PropTypes.bool
  })
};

export class ContentWrapper extends React.PureComponent {
  renderFeedback = () => {
    const { location, section, layoutConfig } = this.props;
    const { layout } = layoutConfig;

    const { SITE, FORWARD_EVENT_WEBHOOK } = this.props.constants;
    return (
      <Feedback
        {...this.props}
        type={layout === 'example' ? 'example' : undefined}
        site={SITE}
        location={location}
        section={section}
        webhook={FORWARD_EVENT_WEBHOOK}
      />
    );
  };

  renderAside = (showFeedback) => {
    const { frontMatter, layoutConfig } = this.props;
    const { onThisPage } = frontMatter;
    const headings = frontMatter.headings || this.props.headings;

    const showOnThisPage = onThisPage ? onThisPage : layoutConfig.onThisPage;

    const showToc = headings && headings.length > 0 && showOnThisPage;
    return (
      <aside
        data-swiftype-index="false"
        className="overflow-auto-mxl scroll-styled h-viewport-11/12-mxl sticky-mxl color-text"
        style={{ top: '10px' }}
      >
        {this.props.customAside ? this.props.customAside : undefined}
        {showToc && headings && headings.length > 0 && (
          <OnThisPage headings={headings} themeWrapper="mb24-mxl mb18" />
        )}
        <SignupBanner />
        <div className={'my18 color-text none block-mxl'}>
          <DiscordCTA />
        </div>
        {showFeedback && (
          <div className="none block-mxl">{this.renderFeedback()}</div>
        )}
      </aside>
    );
  };

  render() {
    const { children, frontMatter, layoutConfig, navigation, location } =
      this.props;
    const { title, unProse, hideFeedback, layout, overviewHeader } =
      frontMatter;
    const { hideTitle } = layoutConfig;

    // check frontmatter then default to layout config
    const showFeedback = hideFeedback
      ? !hideFeedback
      : !layoutConfig.hideFeedback;

    // do not show h1 if `hideTitle: true` or `overviewHeader` is enabled
    const showTitle = !hideTitle && !overviewHeader;

    return (
      <div id="docs-content">
        {showTitle && (
          <div
            className={classnames('col col--auto prose', {
              'w-2/3-mxl w-full': layoutConfig.aside !== 'none'
            })}
          >
            <h1 className="txt-fancy">{title}</h1>
          </div>
        )}
        {overviewHeader && <OverviewHeader {...overviewHeader} />}

        <div className="grid grid--gut60">
          {(layoutConfig.aside !== 'none' || this.props.customAside) && (
            <div className="dr-ui--page-layout-aside col w-full w-1/3-mxl">
              {this.renderAside(showFeedback)}
            </div>
          )}
          <div
            className={classnames('col col--auto', {
              'w-2/3-mxl w-full': layoutConfig.aside !== 'none',
              prose: unProse !== true
            })}
          >
            {children}
            {frontMatter.group && (
              <GuideGroupIndex
                pathname={location.pathname}
                navigation={navigation}
                frontMatter={frontMatter}
              />
            )}
            {frontMatter.groupOrder && (
              <div className="mt36">
                <NextPage
                  pathname={location.pathname}
                  navigation={navigation}
                  frontMatter={frontMatter}
                />
              </div>
            )}
            {showFeedback && (
              <div
                className={classnames('my36 color-text', {
                  'block none-mxl': layout !== 'full' // hide feedback at bottom of page on larger screens unless layout is full (always show it on the bottom)
                })}
              >
                <div className="flex mx-neg12">
                  <div className="w-1/2 px6">
                    <SignupBanner />
                  </div>
                  <div className="w-1/2 px6">
                    <DiscordCTA />
                  </div>
                </div>
                {this.renderFeedback()}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    unProse: PropTypes.bool,
    hideFeedback: PropTypes.bool,
    headings: PropTypes.array,
    layout: PropTypes.string,
    overviewHeader: PropTypes.object,
    onThisPage: PropTypes.bool,
    groupOrder: PropTypes.number,
    group: PropTypes.bool
  }).isRequired,
  headings: PropTypes.array,
  location: PropTypes.object.isRequired,
  parentPath: PropTypes.string,
  filters: PropTypes.object,
  AppropriateImage: PropTypes.func,
  section: PropTypes.string,
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired,
    FORWARD_EVENT_WEBHOOK: PropTypes.shape({
      production: PropTypes.string.isRequired,
      staging: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  layoutConfig: PropTypes.shape({
    layout: PropTypes.string,
    hideTitle: PropTypes.bool,
    showCards: PropTypes.bool,
    hideFeedback: PropTypes.bool,
    aside: PropTypes.string,
    onThisPage: PropTypes.bool
  }),
  navigation: PropTypes.shape({
    hierarchy: PropTypes.object
  }),
  customAside: PropTypes.node
};
