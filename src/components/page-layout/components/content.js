import React from 'react';
import PropTypes from 'prop-types';
import ExampleIndex from './example-index.js';
import classnames from 'classnames';
import OnThisPage from '../../on-this-page/on-this-page';
import Feedback from '../../feedback/feedback';

export default class Content extends React.Component {
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
      />
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

export class ContentWrapper extends React.Component {
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
    const { frontMatter } = this.props;
    const { layout } = frontMatter;
    const headings = frontMatter.headings || this.props.headings;
    const showToc =
      headings &&
      headings.length > 0 &&
      (layout === 'page' || layout === 'accordion');
    return (
      <aside
        data-swiftype-index="false"
        className="scroll-auto-mxl scroll-styled viewport-almost-mxl sticky-mxl"
        style={{ top: '50px' }}
      >
        {this.props.customAside ? this.props.customAside : undefined}
        {showToc && headings && headings.length > 0 && (
          <OnThisPage headings={headings} themeWrapper="mb36-mxl mb18" />
        )}
        {showFeedback && (
          <div className="none block-mxl">{this.renderFeedback()}</div>
        )}
      </aside>
    );
  };

  render() {
    const { children, frontMatter, layoutConfig } = this.props;
    const { title, unProse, hideFeedback, layout } = frontMatter;
    const { hideTitle, sidebar } = layoutConfig;

    // check frontmatter then default to layout config
    const showFeedback = hideFeedback
      ? !hideFeedback
      : !layoutConfig.hideFeedback;

    return (
      <div
        id="docs-content"
        className={classnames('pr0-mm mt24', {
          'mb60 px24-mm': sidebar !== 'none',
          'px24-mm': sidebar === 'none',
          'mt24-mm mt60 pt30 pt0-mm': sidebar === 'accordion' // clear the mobile sticky nav
        })}
      >
        {!hideTitle && (
          <div
            className={classnames('col prose', {
              'col--8-mxl col--12': layoutConfig.aside !== 'none'
            })}
          >
            <h1 className="txt-fancy">{title}</h1>
          </div>
        )}

        <div className="grid grid--gut60">
          {(layoutConfig.aside !== 'none' || this.props.customAside) && (
            <div className="dr-ui--page-layout-aside col col--12 col--4-mxl">
              {this.renderAside(showFeedback)}
            </div>
          )}

          <div
            className={classnames('col', {
              'col--8-mxl col--12': layoutConfig.aside !== 'none',
              prose: unProse !== true
            })}
          >
            {children}
            {showFeedback && (
              <div
                className={classnames('my36', {
                  'block none-mxl': layout !== 'example' && layout !== 'full' // hide feedback at bottom of page on larger screens, unless layout is example or full (always show it on the bottom)
                })}
              >
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
    layout: PropTypes.string
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
    sidebar: PropTypes.string
  }),
  navigation: PropTypes.shape({
    hierarchy: PropTypes.object
  }),
  customAside: PropTypes.node
};
