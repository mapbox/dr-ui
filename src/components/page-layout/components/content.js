import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Feedback from '../../feedback/feedback';
import LayoutExamples from './layouts/example/content.js';

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
      <div className="mt36">
        <Feedback
          {...this.props}
          type={layout === 'example' ? 'example' : ''}
          site={SITE}
          location={location}
          section={section}
          webhook={FORWARD_EVENT_WEBHOOK}
        />
      </div>
    );
  };
  render() {
    const { children, frontMatter, layoutConfig } = this.props;
    const { title, unProse } = frontMatter;
    const { hideFeedback, hideTitle, showCards, sidebar } = layoutConfig;

    return (
      <div
        id="docs-content"
        className={classnames('pr0-mm mt24', {
          'mb60 px24-mm': sidebar !== 'none',
          'px24-mm': sidebar === 'none',
          'mt24-mm mt60 pt30 pt0-mm': sidebar === 'accordion' // clear the mobile sticky nav
        })}
      >
        <div
          className={classnames('', {
            prose: unProse !== true
          })}
        >
          {!hideTitle && <h1 className="txt-fancy">{title}</h1>}
          {children}
          {!hideFeedback ? this.renderFeedback() : ''}
        </div>
        {showCards ? this.renderExamplesIndex() : ''}
      </div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    unProse: PropTypes.bool
  }).isRequired,
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
    sidebar: PropTypes.string.isRequired
  })
};
