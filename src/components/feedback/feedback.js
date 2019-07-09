import React from 'react';
import ControlTextarea from '@mapbox/mr-ui/control-textarea';
import PropTypes from 'prop-types';
import forwardEvent from './forward-event';
import uuidv4 from 'uuid/v4';
import Icon from '@mapbox/mr-ui/icon';

const anonymousId = uuidv4(); // creates an anonymousId fallback if user is not logged or we cant get their info

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: undefined,
      feedback: undefined,
      feedbackSent: undefined
    };
    this.handleText = this.handleText.bind(this);
    this.handleYesNo = this.handleYesNo.bind(this);
    this.submitFeedback = this.submitFeedback.bind(this);
    this.sendToSegment = this.sendToSegment.bind(this);
  }

  // pushes the text feedback to the state as the user types
  handleText(feedback) {
    this.setState({ feedback });
  }
  // when user clicks YES or NO, the value is pushed to the state and then sent to segment
  handleYesNo(helpful) {
    this.setState({ helpful }, () => {
      // track helpful rating
      this.sendToSegment();
    });
  }
  // when user click submit feedback button, the value is pushed to the state and then sent to segment
  submitFeedback() {
    this.setState({ feedbackSent: true }, () => {
      // Track response to Segement
      this.sendToSegment();
    });
  }

  // sends all available data to segment
  sendToSegment() {
    const event = {
      event: 'Sent docs feedback',
      properties: {
        helpful: this.state.helpful, // true, false
        site: this.props.site, // name of current site, helpful for filtering in Mode
        section: this.props.section || undefined, // (optional) name of section for longer pagers, helpful for fitering in Mode and identifying section areas
        feedback: this.state.feedback, // (optional) textarea feedback
        page: this.props.location || undefined, // get page context
        userId: this.props.userName || undefined // set user if available
      }
    };
    // if user is logged in then associate feedback with them
    // otherwise use the a random/anonymousId
    if (this.props.userName) event.userId = this.props.userName;
    else event.anonymousId = anonymousId;
    // sends event to segment via forward event webhook
    forwardEvent(event, this.props.webhook, err => {
      if (err) {
        console.log(err); // eslint-disable-line
      }
    });
  }

  render() {
    return (
      <div className="bg-gray-faint py12 px18 round color-gray">
        <div>
          {this.state.helpful === undefined && (
            <div>
              <div className="mb6">Was this {this.props.type} helpful?</div>
              <button
                onClick={() => this.handleYesNo(true)}
                className="btn btn--s"
              >
                Yes
              </button>
              <button
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
                <ControlTextarea
                  id={`${this.props.section || 'docs'}-feedback`}
                  themeControlWrapper="bg-white mb6"
                  onChange={this.handleText}
                  value={this.state.feedback}
                />

                <button
                  disabled={
                    this.state.feedback === undefined ||
                    this.state.feedback.length < 3 // disable button unless more than 3 characters are typed
                  }
                  className="btn btn--s mb18"
                  onClick={this.submitFeedback}
                >
                  Send feedback
                </button>

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

Feedback.propTypes = {
  type: PropTypes.string, // type of content the user is a evaluating
  site: PropTypes.string.isRequired, // the site name, same value as the `site` value passed to ReactPageShell
  section: PropTypes.string, // name of section the feedack component falls under
  location: PropTypes.object.isRequired, // this prop is generated by batfish and provides context for the current page
  webhook: PropTypes.shape({
    staging: PropTypes.string.isRequired,
    production: PropTypes.string.isRequired
  }), // staging and production webhook URLs to send forward event data to
  userName: PropTypes.string // userid if available
};

Feedback.defaultProps = {
  type: 'page'
};

export default Feedback;
