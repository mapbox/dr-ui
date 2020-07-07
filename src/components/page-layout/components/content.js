import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Feedback from '../../feedback/feedback';
import LayoutExamples from './layouts/example/content.js';
import { UserContextProvider } from '../context/user-context';

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
    const { frontMatter, location, section } = this.props;
    const { SITE, FORWARD_EVENT_WEBHOOK } = this.props.constants;
    return (
      <div className="mt36">
        <Feedback
          type={frontMatter.layout === 'example' ? 'example' : ''}
          site={SITE}
          location={location}
          section={section}
          webhook={FORWARD_EVENT_WEBHOOK}
        />
      </div>
    );
  };
  render() {
    const { children, frontMatter } = this.props;
    const { hideFeedback, layout, hideTitle, title } = frontMatter;

    const isExamplesIndex = layout === 'example' && frontMatter.navOrder;

    return (
      <UserContextProvider>
        <div
          id="docs-content"
          className={classnames('mt24-mm pr0-mm', {
            'mb60 px36-mm': layout !== 'full',
            'px24-mm': layout === 'full'
          })}
        >
          <div className="prose">
            {!hideTitle && <h1 className="txt-fancy">{title}</h1>}
            {children}
            {!isExamplesIndex && !hideFeedback ? this.renderFeedback() : ''}
          </div>
          {isExamplesIndex ? this.renderExamplesIndex() : ''}
        </div>
      </UserContextProvider>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    hideFeedback: PropTypes.bool,
    navOrder: PropTypes.number,
    layout: PropTypes.string,
    hideTitle: PropTypes.bool
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
  }).isRequired
};
