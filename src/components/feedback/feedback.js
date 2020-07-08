import React from 'react';
import ControlTextarea from '@mapbox/mr-ui/control-textarea';
import PropTypes from 'prop-types';
import forwardEvent from './forward-event';
import uuidv4 from 'uuid/v4';
import Icon from '@mapbox/mr-ui/icon';
import * as Sentry from '@sentry/browser';
import classnames from 'classnames';
import slugify from 'slugify';

const feedbackLimit = 1000; // character limit for the feedback textarea
const anonymousId = uuidv4(); // creates an anonymousId fallback if user is not logged or we cant get their info
const environment =
  typeof window !== 'undefined'
    ? /(^|\S+\.)mapbox\.com/.test(window.location.host)
      ? 'production'
      : 'staging'
    : undefined;
const location = typeof window !== 'undefined' ? window.location : undefined;

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: undefined,
      feedback: undefined,
      feedbackSent: undefined,
      event: undefined
    };
  }

  // creates a unique id for an element
  createId = (el) => {
    const section = slugify(this.props.section || 'page', {
      replacement: '-',
      lower: true
    });
    return `dr-ui--feedback-${section}-${el}`;
  };

  // pushes the text feedback to the state as the user types
  handleText = (feedback) => {
    this.setState({ feedback });
  };

  // handles when user clicks YES or NO button
  handleYesNo = (helpful) => {
    // sets user rating to the state
    this.setState({ helpful }, () => {
      // creates event to send to Segment and sets it to the state
      this.setState({ event: this.createSegmentEvent() }, () => {
        // sends helpful rating to Segment
        this.sendToSegment();
      });
    });
  };

  // handles sending feedback to Sentry (and Segment) when the user clicks SUBMIT FEEDBACK button
  handleSubmitFeedback = () => {
    // sets event to the state and marks feedbackSent as true
    this.setState(
      { feedbackSent: true, event: this.createSegmentEvent() },
      () => {
        // sends event to Segment
        this.sendToSegment();
        // if enabled, sends feedback to Sentry
        if (this.props.feedbackSentryDsn !== false) {
          this.sendToSentry();
        }
      }
    );
  };

  // create event object to sent to Segment
  createSegmentEvent = () => {
    return {
      event: 'Sent docs feedback',
      // set user if available else set anonymousId (needed for forward-event request)
      ...(this.props.user && this.props.user.id
        ? { userId: this.props.user.id }
        : { anonymousId: anonymousId }),
      properties: {
        // true, false
        helpful: this.state.helpful,
        // text feedback, if available
        ...(this.state.feedback && { feedback: this.state.feedback }),
        // name of current site (important for filtering in Mode)
        site: this.props.site,
        // (optional) name of section for longer pagers, helpful for fitering in Mode and identifying section areas
        section: this.props.section || undefined,
        // get page context
        page: this.props.location || undefined,
        // set user if available else set anonymousId (needed for Mode)
        ...(this.props.user && this.props.user.id
          ? { userId: this.props.user.id }
          : { anonymousId: anonymousId }),
        ...(!this.props.user && { anonymousId: anonymousId }),
        // set plan, if available
        ...(this.props.user &&
          this.props.user.plan && { plan: this.props.user.plan.id }),
        // get environment: staging or production
        environment: environment,
        // get full window location
        location: {
          hash: location.hash,
          host: location.host,
          hostname: location.hostname,
          href: location.href,
          origin: location.origin,
          pathname: location.pathname,
          search: location.search
        }
      }
    };
  };

  // sends event to Segment
  sendToSegment = () => {
    // sends event to Segment via forward event webhook
    forwardEvent(this.state.event, this.props.webhook, (err) => {
      if (err) this.sendToSentry('error', err);
    });
  };

  // sends text feedback to Sentry
  sendToSentry = (level, error) => {
    // initialize Sentry project to send the feedback
    Sentry.init({
      dsn: this.props.feedbackSentryDsn,
      maxValueLength: feedbackLimit,
      environment
    });
    // configure data to send with feeedback
    Sentry.configureScope((scope) => {
      // set tag for site name
      scope.setTag('site', this.props.site);
      // set tag for the user's boolean rating
      scope.setTag('helpful', this.state.helpful);
      // set tag for the section of the page (if available)
      if (this.props.section) scope.setTag('section', this.props.section);
      // set tags for the user's preferred language (if available)
      if (this.props.preferredLanguage)
        scope.setTag('preferredLanguage', this.props.preferredLanguage);
      // set tags for the user's plan (if available)
      if (this.props.user && this.props.user.plan && this.props.user.plan.id)
        scope.setTag('plan', this.props.user.plan.id);
      // set user attributes (if available)
      if (this.props.user) {
        Sentry.setUser({
          ...(this.props.user.id && { username: this.props.user.id }),
          ...(this.props.user.email && { email: this.props.user.email }),
          ...(this.props.user.plan &&
            this.props.user.plan.id && {
              data: { plan: this.props.user.plan.id }
            })
        });
      }
      // send error message (if available)
      if (error) Sentry.setExtra('error', error);
      // set the message as "info" (rather than warning)
      scope.setLevel(level || 'info');
    });
    // capture the feedback as a message
    Sentry.captureMessage(this.state.feedback);
  };

  render() {
    const feedbackLength = this.state.feedback
      ? feedbackLimit - this.state.feedback.length
      : feedbackLimit;
    const feedbackOverLimit = feedbackLength < 0;
    return (
      <div className="bg-gray-faint py12 px18 round color-gray">
        <div>
          {this.state.helpful === undefined && (
            <div>
              <div className="mb6">Was this {this.props.type} helpful?</div>
              <button
                id={this.createId('yes')}
                onClick={() => this.handleYesNo(true)}
                className="btn btn--s"
              >
                Yes
              </button>
              <button
                id={this.createId('no')}
                onClick={() => this.handleYesNo(false)}
                className="btn btn--s ml6"
              >
                No
              </button>
            </div>
          )}

          {this.state.helpful !== undefined && (
            <div>
              <div className="inline-block bg-green color-white round-full w18 h18 align-middle mr3 mb3">
                <Icon name="check" />
              </div>{' '}
              Thanks for your feedback.
            </div>
          )}

          {this.state.helpful !== undefined &&
            this.state.feedbackSent === undefined && (
              <div className="mt12">
                <div className="mb6">
                  If you have more specific feedback
                  {this.state.helpful === false &&
                    ` on how we can improve this ${this.props.type}`}
                  , you can provide it below (optional):
                </div>
                <div className="relative">
                  <ControlTextarea
                    id={this.createId('text')}
                    themeControlWrapper="bg-white mb6"
                    onChange={this.handleText}
                    value={this.state.feedback}
                  />
                  <FeedbackCounter
                    createId={this.createId}
                    feedbackOverLimit={feedbackOverLimit}
                    feedbackLength={feedbackLength}
                  />
                </div>
                <div className="mb12">
                  <button
                    id={this.createId('submit')}
                    disabled={
                      this.state.feedback === undefined ||
                      this.state.feedback.length < 3 || // disable button unless more than 3 characters are typed
                      feedbackOverLimit
                    }
                    className="btn btn--s mb6 mr12 inline-block"
                    onClick={this.handleSubmitFeedback}
                  >
                    Send feedback
                  </button>
                  {feedbackOverLimit && (
                    <FeedbackOverlimitWarning
                      createId={this.createId}
                      feedbackLimit={feedbackLimit}
                    />
                  )}
                </div>

                <div className="txt-s txt-em">
                  This form is for documentation feedback. If you have a
                  technical question about how to use a Mapbox product,{' '}
                  <a
                    href="https://support.mapbox.com/hc/en-us"
                    className="link"
                  >
                    contact Support
                  </a>
                  .
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

// character counter that appears in the bottom-right of the feedback textarea
class FeedbackCounter extends React.Component {
  render() {
    return (
      <div
        id={this.props.createId('counter')}
        className={classnames(
          'absolute bottom right mb6 mr18 txt-mono bg-lighten75 px3 txt-s',
          {
            'color-red': this.props.feedbackOverLimit
          }
        )}
      >
        {this.props.feedbackLength}
      </div>
    );
  }
}

FeedbackCounter.propTypes = {
  createId: PropTypes.func.isRequired,
  feedbackOverLimit: PropTypes.bool.isRequired,
  feedbackLength: PropTypes.number.isRequired
};

// inline warning message that will appear if the user enters > 1000 characters in the feedback textarea
class FeedbackOverlimitWarning extends React.Component {
  render() {
    return (
      <span
        id={this.props.createId('overlimit')}
        className="color-red txt-s bg-red-faint round inline-block py3 px12"
      >
        <Icon name="alert" inline={true} /> Your message is over the{' '}
        {this.props.feedbackLimit} character limit.
      </span>
    );
  }
}

FeedbackOverlimitWarning.propTypes = {
  createId: PropTypes.func.isRequired,
  feedbackLimit: PropTypes.number.isRequired
};

Feedback.propTypes = {
  type: PropTypes.string, // type of content the user is a evaluating
  site: PropTypes.string.isRequired, // the site name, same value as the `site` value passed to ReactPageShell
  section: PropTypes.string, // name of section the feedack component falls under
  location: PropTypes.object.isRequired, // this prop is generated by batfish and provides context for the current page
  webhook: PropTypes.shape({
    staging: PropTypes.string.isRequired,
    production: PropTypes.string.isRequired
  }), // staging and production webhook URLs to send forward event data to
  user: PropTypes.shape({
    // user object if available
    id: PropTypes.string,
    email: PropTypes.string,
    plan: PropTypes.shape({ id: PropTypes.string })
  }),
  preferredLanguage: PropTypes.string, // preferred code language if available
  feedbackSentryDsn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]) // Sentry DSN (URL) to send text feedback to for issue management or "false" to not send feedback to Sentry
};

Feedback.defaultProps = {
  type: 'page',
  feedbackSentryDsn:
    'https://eccc8b561b9a461990309b01d33d54e3@sentry.io/1848287'
};

export default Feedback;
