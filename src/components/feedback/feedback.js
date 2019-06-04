import React from 'react';
import ControlTextarea from '@mapbox/mr-ui/control-textarea';
import PropTypes from 'prop-types';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: undefined,
      feedback: undefined
    };
    this.handleText = this.handleText.bind(this);
    this.handleYesNo = this.handleYesNo.bind(this);
    this.sendToZendesk = this.sendToZendesk.bind(this);
    this.sendToSegment = this.sendToSegment.bind(this);
  }

  handleText(feedback) {
    this.setState({ feedback });
  }

  handleYesNo(helpful) {
    this.setState({ helpful }, () => {
      // track helpful
      this.sendToSegment();
    });
  }

  sendToZendesk() {
    // TODO: Send feedback to zendesk
    // track response
    this.sendToSegment();
  }

  sendToSegment() {
    // TODO: finish analytics
    console.log(this.state);
    /*
      if (window && window.analytics) {
        analytics.track('Sent docs feedback', {
          zendesk: this.state.feedback,
          helpful: this.state.helpful,
          site: this.props.site,
          section: this.props.section || null
        });
    }
    */
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
              <div className="mb3">
                {this.state.helpful === false
                  ? `What can we do to improve this ${this.props.type}?` // Response to "No" click
                  : 'Thanks for your feedback!' // Reponse to "Yes" click
                }
              </div>
              <ControlTextarea
                id="zendesk-feedback"
                themeControlWrapper="bg-white"
                onChange={this.handleText}
                value={this.state.feedback}
              />
              <button
                disabled={
                  this.state.feedback === undefined ||
                  this.state.feedback.length < 3
                }
                className="btn btn--s mt6"
                onClick={this.sendToZendesk}
              >
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
  type: PropTypes.oneOf(['section', 'page']),
  site: PropTypes.string.isRequired, // the site name
  section: PropTypes.string // name of section the feedack component falls under
};

Feedback.defaultProps = {
  type: 'page'
};

export default Feedback;
