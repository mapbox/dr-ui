import React from 'react';
import ControlTextarea from '@mapbox/mr-ui/control-textarea';
import PropTypes from 'prop-types';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: undefined,
      feedback: undefined
    };
    this.handleFeedback = this.handleFeedback.bind(this);
    this.sendFeedback = this.sendFeedback.bind(this);
  }

  handleFeedback(feedback) {
    this.setState({ feedback });
  }

  sendFeedback() {
    console.log(`Sent feedback to zendesk: ${this.state.feedback}`);
  }

  // track feedback response (BOOL)
  sendToSegment(response) {
    console.log(`Updated in segement: ${response}`);
    /*
    // TODO:
    analytics.track('Sent docs feedback', {
      helpful: response
    });
    */
  }

  yes() {
    this.setState({ response: 'yes' });
    this.sendToSegment(true);
  }
  no() {
    this.setState({ response: 'no' });
    this.sendToSegment(false);
  }
  render() {
    return (
      <div className="bg-gray-faint py12 px18 round color-gray">
        <div>
          {!this.state.response && (
            <div>
              <div className="mb6">Was this {this.props.type} helpful?</div>
              <button onClick={() => this.yes()} className="btn btn--s">
                Yes
              </button>
              <button onClick={() => this.no()} className="btn btn--s ml6">
                No
              </button>
            </div>
          )}
          {this.state.response !== undefined && (
            <div>
              <div className="mb3">
                {this.state.response === 'no'
                  ? 'What can we do to improve this?'
                  : 'Thanks for your feedback!'}
              </div>
              <ControlTextarea
                id="zendesk-feedback"
                themeControlWrapper="bg-white"
                onChange={this.handleFeedback}
                value={this.state.feedback}
              />
              <button className="btn btn--s mt6" onClick={this.sendFeedback}>
                Send feedback
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  type: PropTypes.oneOf(['section', 'page'])
};

Feedback.defaultProps = {
  type: 'page'
};

export default Feedback;
