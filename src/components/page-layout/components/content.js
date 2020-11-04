import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LayoutExamples from './layouts/example/content.js';
import OnThisPage from '../../on-this-page/on-this-page';
import Feedback from '../../feedback/feedback';
import OverviewHeader from '../../overview-header/overview-header';

export default class Content extends React.Component {
  renderExamplesIndex = () => {
    const { frontMatter, parentPath, topics, AppropriateImage } = this.props;
    return (
      <LayoutExamples
        topics={topics[parentPath].topics}
        frontMatter={frontMatter}
        sectionPath={parentPath}
        AppropriateImage={AppropriateImage}
      />
    );
  };
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

  renderAside = () => {
    const { frontMatter } = this.props;
    const { hideFeedback, layout } = frontMatter;
    const headings = frontMatter.headings || this.props.headings;
    const showToc =
      headings &&
      headings.length > 0 &&
      (layout === 'page' || layout === 'accordion');
    return (
      <aside
        data-swiftype-index="false"
        className="scroll-auto-mxl scroll-styled viewport-almost-mxl sticky-mxl"
        style={{ top: '10px' }}
      >
        {this.props.customAside ? this.props.customAside : undefined}
        {showToc && headings && headings.length > 0 && (
          <OnThisPage headings={headings} themeWrapper="mb36-mxl mb18" />
        )}
        {!hideFeedback && (
          <div className="none block-mxl">{this.renderFeedback()}</div>
        )}
      </aside>
    );
  };

  render() {
    const { children, frontMatter, layoutConfig } = this.props;
    const {
      title,
      unProse,
      hideFeedback,
      layout,
      overviewHeader
    } = frontMatter;
    const { hideTitle, showCards, sidebar } = layoutConfig;
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
        {overviewHeader && <OverviewHeader {...overviewHeader} />}

        <div className="grid grid--gut60">
          {(layoutConfig.aside !== 'none' || this.props.customAside) && (
            <div className="dr-ui--page-layout-aside col col--4-mxl">
              {this.renderAside()}
            </div>
          )}

          <div
            className={classnames('col', {
              'col--8-mxl col--12': layoutConfig.aside !== 'none',
              prose: unProse !== true
            })}
          >
            {children}
            {showCards ? this.renderExamplesIndex() : ''}
            {!hideFeedback && (
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

Content.propTypes = {
  children: PropTypes.node,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    unProse: PropTypes.bool,
    hideFeedback: PropTypes.bool,
    headings: PropTypes.array,
    layout: PropTypes.string,
    overviewHeader: PropTypes.object
  }).isRequired,
  headings: PropTypes.array,
  location: PropTypes.object.isRequired,
  parentPath: PropTypes.string,
  topics: PropTypes.object,
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
