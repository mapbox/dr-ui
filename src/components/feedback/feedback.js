import React from 'react';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  // track users who click send feedback link
  contentIntent() {
    console.log(`Intent to submit feedback`);
    /*
    // TODO: 
    analytics.track('Intent to submit docs feedback');
    */
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
              <div className="mb6">Was this page helpful?</div>
              <button onClick={() => this.yes()} className="btn btn--s">
                Yes
              </button>
              <button onClick={() => this.no()} className="btn btn--s ml6">
                No
              </button>
            </div>
          )}
          {this.state.response === 'no' && (
            <div>
              What can we do to improve this?{' '}
              <a onClick={() => this.contactIntent()} className="link" href="">
                contact blargb
              </a>
            </div>
          )}
          {this.state.response === 'yes' && (
            <div>Thanks for your feedback!</div>
          )}
        </div>
      </div>
    );
  }
}

export default Feedback;
