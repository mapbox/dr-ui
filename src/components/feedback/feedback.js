/* eslint es/no-computed-properties: off */
/* eslint react/no-unused-state: off */
/* eslint react/no-unused-prop-types: off */

import React from 'react';
import PropTypes from 'prop-types';
import BookImage from '../book-image/book-image';
import Tooltip from '@mapbox/mr-ui/tooltip';
import Icon from '@mapbox/mr-ui/icon';
import { categories } from './categories';
import { sendToSegment } from './segment';
import { sendToSentry } from './sentry';
import uuidv4 from 'uuid/v4';

const anonymousId = uuidv4();

// Store the initial state so that we can quickly reset it when the user closes feedback
const INITIAL_STATE = {
  user: undefined, // Mapbox user id
  anonymousId: undefined, // generated annonymousid
  sessionId: undefined, // unique session id
  isOpen: false, // the user click the button
  category: undefined, // the selected feedback category
  categoryType: undefined, // the select feedback category type
  feedback: undefined, // the value of the textarea
  sentFeedback: false, // the user submitted feedback
  contactSupport: false // the users clicked contact support
};

class Feedback extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
    this.openFeedback = this.openFeedback.bind(this);
    this.submitFeedback = this.submitFeedback.bind(this);
    this.closeFeedback = this.closeFeedback.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.categories = this.categories.bind(this);
    this.selectSupport = this.selectSupport.bind(this);
    this.renderWrapper = this.renderWrapper.bind(this);
  }

  // This function returns data for each category and its corresponding category component.
  // By having the data in one place, we can make updates faster.
  // We can also replace "page" for Feedback with `type` in one place for sectioned feedback.
  categories = () =>
    categories({ type: this.props.type, submitFeedback: this.submitFeedback });

  // User opens feedback
  openFeedback() {
    if (
      this.state.user === undefined &&
      typeof MapboxPageShell !== 'undefined'
    ) {
      MapboxPageShell.afterUserCheck(() => {
        this.setState({
          user: MapboxPageShell.getUser() || undefined
        });
      });
    }
    this.setState(
      {
        anonymousId: anonymousId,
        sessionId: `${Date.now()}-${anonymousId}`,
        isOpen: true
      },
      () => {
        const { state, props } = this;
        // Add row to Segment
        sendToSegment({ state: state, props });
      }
    );
  }

  // User select the feedback category
  // Set helpfulness rating based on category
  selectCategory(event) {
    const category = event.target.value;
    // Retrieve value of "helpful" for the selected category
    const { helpful } = this.categories()[category];
    this.setState({ category, helpful }, () => {
      // Add row to Segment
      const { state, props } = this;
      sendToSegment({ state, props });
    });
  }

  // User clicks the "Contact support" linke
  selectSupport() {
    this.setState({ contactSupport: true }, () => {
      // Add row to Segment
      const { state, props } = this;
      sendToSegment({ state, props });
      window.location.assign('https://support.mapbox.com/');
    });
  }

  // User submits feedback
  submitFeedback({ categoryType, feedback }) {
    this.setState({ categoryType, feedback, sentFeedback: true }, () => {
      const { state, props } = this;
      sendToSegment({ state, props });
      sendToSentry({ state, props });
    });
  }

  // User closes feedback
  closeFeedback() {
    this.setState({ ...INITIAL_STATE });
  }

  // Creates a wrapper for the Feedback component
  renderWrapper({ children, title, helpful }) {
    const { sentFeedback } = this.state;
    // show "Contact support" only when the user hasn't submitted feedback
    // and the chosen category infers not helpful feedbak
    const showContactSupport = !sentFeedback && !helpful;
    return (
      <div className="dr-ui--feedback wmax300">
        <div className="bg-gray-faint round py12 px12">
          <div className="flex-parent flex-parent--column">
            <div className="flex-child flex-parent flex-parent--space-between-main w-full mb12">
              <div className="flex-child txt-bold">{title}</div>
              <div className="flex-child">
                <Tooltip content="Close">
                  <button
                    id="feedback-close-button"
                    aria-label="Close feedback"
                    onClick={this.closeFeedback}
                    className="link--gray"
                  >
                    <Icon name="close" />
                  </button>
                </Tooltip>
              </div>
            </div>
            <div className="flex-child mb6 prose">{children}</div>
            {showContactSupport && (
              <div className="flex-child color-gray">
                Need help?{' '}
                <button
                  className="link"
                  value="Contact support"
                  onClick={this.selectSupport}
                >
                  Contact support
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isOpen, category, sentFeedback } = this.state;
    const { type } = this.props;

    const FeedbackWrapper = (props) => this.renderWrapper(props);

    /** This component returns early to improve code clarity **/

    // Initial stage: the user has not clicked on feedback
    if (!isOpen) {
      return (
        <button value="Share" onClick={this.openFeedback} className="btn">
          Share your feedback
        </button>
      );
    }
    // Second stage: select the category
    if (isOpen && !category) {
      return (
        <FeedbackWrapper
          title={`Share your feedback${
            type !== 'page' ? ` for this ${type}` : ''
          }`}
        >
          {Object.keys(this.categories()).map((category) => (
            <button
              value={category}
              onClick={this.selectCategory}
              className="btn w-full mb6"
              key={category}
            >
              {category}
            </button>
          ))}
        </FeedbackWrapper>
      );
    }
    // Final stage: a confirmation after the user sends feedback
    if (isOpen && category && sentFeedback) {
      return (
        <FeedbackWrapper>
          <div className="align-center prose relative">
            <div className="mt-neg30 inline-block">
              <BookImage size={75} />
            </div>
            <p>
              <strong>Thank you!</strong>
            </p>
            <p>
              Our documentation team will read your feedback. Thank you for
              helping us improve this page.
            </p>
          </div>
        </FeedbackWrapper>
      );
    }
    // Middle stages: Select category and complete the category workflow
    return (
      <FeedbackWrapper title={category} {...this.categories()[category]} />
    );
  }
}

Feedback.propTypes = {
  /** The type of content the user is a evaluating. */
  type: PropTypes.string,
  /** The site name. This is same value as the `site` value passed to ReactPageShell. */
  site: PropTypes.string.isRequired,
  /** The name of section the feedback component falls under. This is used by multi-structured sites. */
  section: PropTypes.string,
  /** This prop is generated by Batfish and provides location context for the current page. */
  location: PropTypes.object.isRequired,
  /** The staging and production webhook URLs to send forward event data to. */
  webhook: PropTypes.shape({
    staging: PropTypes.string.isRequired,
    production: PropTypes.string.isRequired
  }),
  /** The user's preferred code language, if available. */
  preferredLanguage: PropTypes.string,
  /** The Sentry DSN (URL) to send text feedback to for issue management or `false` to prevent sending feedback to Sentry. */
  feedbackSentryDsn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

Feedback.defaultProps = {
  type: 'page',
  feedbackSentryDsn:
    'https://eccc8b561b9a461990309b01d33d54e3@sentry.io/1848287'
};

export default Feedback;
