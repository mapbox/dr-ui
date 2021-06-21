/* eslint es/no-computed-properties: off */
/* eslint react/no-unused-state: off */
/* eslint react/no-unused-prop-types: off */

import React from 'react';
import PropTypes from 'prop-types';

import CategoryLike from './components/category-like.js';
import CategoryProblem from './components/category-problem.js';
import CategoryConfusing from './components/category-confusing.js';
import BookImage from '../book-image/book-image';

import Tooltip from '@mapbox/mr-ui/tooltip';
import Icon from '@mapbox/mr-ui/icon';

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

// Returns a generic type name for sectioned feedback
export function returnGenericType(type) {
  // Safe types that we will not swap for "content" in genericType
  const allowedTypes = ['page', 'example', 'playground'];
  // Replaces sectioned feedback "type" with a generic type to make button size predictable
  return allowedTypes.includes(type) ? type : 'content';
}

export default class Feedback extends React.PureComponent {
  // This function contains the data for each category
  // and its corresponding category component.
  // By having the data in one place, we can make updates faster.
  // We can also replace "page" for Feedback with `type` in one place.
  categories = () => {
    const { type } = this.props;
    const genericType = returnGenericType(type);
    return {
      [`I like this ${genericType}`]: {
        helpful: true,
        component: (
          <CategoryLike
            leadText={`Tell us what you like about this ${type}.`}
            placeholder="What did you like?"
            options={[
              'I found what I need',
              'The information is accurate',
              `The ${genericType} is easy to understand`,
              'Something else'
            ]}
            submitFeedback={this.submitFeedback}
          />
        )
      },
      'Report a problem': {
        helpful: false,
        component: (
          <CategoryProblem
            leadText={`Tell us more about what's happening with this ${type}.`}
            options={{
              "Something is incorrect or doesn't work": {
                question: `What is incorrect or doesn't work and where on the ${genericType} does it appear?`,
                placeholder: "Let us know what is incorrect or doesn't work."
              },
              'I see an error message': {
                question:
                  'What error do you see and when did you encounter it?',
                placeholder: 'Let us know about the error message you see.'
              },
              'Something is missing': {
                question: 'What information are you looking for?',
                placeholder: 'Let us know what is missing.'
              },
              'Something else': {
                question: 'Describe the problem.',
                placeholder: 'Let us know more about the problem.'
              }
            }}
            submitFeedback={this.submitFeedback}
          />
        )
      },
      'Something is confusing': {
        helpful: false,
        component: (
          <CategoryConfusing
            option={`What about this ${type} is confusing?`}
            placeholder="Let us know what is confusing."
            submitFeedback={this.submitFeedback}
          />
        )
      }
    };
  };

  // Reusable language.
  language = {
    cta: 'Share your feedback'
  };

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

  /* User opens feedback */
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
    // Create unique ID to track the session
    this.setState(
      {
        anonymousId: anonymousId,
        sessionId: `${Date.now()}-${anonymousId}`,
        isOpen: true
      },
      () => {
        // Add row to Segment
        sendToSegment({ state: this.state, props: this.props });
      }
    );
  }

  // User select the feedback category
  // Set helpfulness rating based on category
  selectCategory(event) {
    const category = event.target.value;
    const { helpful } = this.categories()[category];
    this.setState({ category, helpful }, () => {
      // Add row to Segment
      sendToSegment({ state: this.state, props: this.props });
    });
  }

  selectSupport() {
    this.setState({ contactSupport: true }, () => {
      // Add row to Segment
      sendToSegment({ state: this.state, props: this.props });
      window.location.assign('https://support.mapbox.com/');
    });
  }

  /* User submits feedback */
  submitFeedback({ categoryType, feedback }) {
    this.setState({ categoryType, feedback, sentFeedback: true }, () => {
      sendToSegment({ state: this.state, props: this.props });
      sendToSentry({ state: this.state, props: this.props });
    });
  }

  closeFeedback() {
    this.setState({ ...INITIAL_STATE });
  }

  // Creates a wrapper for the Feedback component
  renderWrapper({ children, title }) {
    const { sentFeedback } = this.state;
    return (
      <div className="dr-ui--feedback wmax300">
        <div className="bg-gray-faint round py12 px12">
          <div className="flex-parent flex-parent--column">
            <div className="flex-child flex-parent flex-parent--space-between-main w-full mb12">
              <div className="flex-child txt-bold">{title}</div>
              <div className="flex-child">
                <Tooltip content="Close feedback">
                  <button
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
            {!sentFeedback && (
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
          {this.language.cta}
        </button>
      );
    }
    // Second stage: select the category
    if (isOpen && !category) {
      return (
        <FeedbackWrapper
          title={`${this.language.cta}${
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
      <FeedbackWrapper title={category}>
        {this.categories()[category].component}
      </FeedbackWrapper>
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
  feedbackSentryDsn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** The position of the feedback component on the page, this value creates unique `id` attributes. This is used in PageLayout where the Feedback component appears in the Aside and bottom of the page (as defined by the device width). */
  position: PropTypes.string
};

Feedback.defaultProps = {
  type: 'page',
  feedbackSentryDsn:
    'https://eccc8b561b9a461990309b01d33d54e3@sentry.io/1848287'
};
