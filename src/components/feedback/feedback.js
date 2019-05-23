import React from 'react';

// TODO:
// [ ] can we pull user is segment, are they submitting multiple times?
// [ ] hook up segment

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  sendToSegment(response) {
    console.log(`Updated in segement: ${response}`);
    // MOCK FUNCTION
    // WHAT INFO DO WE WANT TO COLLECT?
    // IS page path, title already included or do we need to add them with the event?
    /*
    analytics.track('Sent feedback', {
      response: response,
      page: null, // page path
      title: null// page title
    });
    */
  }

  yes() {
    this.setState({ response: 'yes' });
    this.sendToSegment('yes');
  }
  no() {
    this.setState({ response: 'no' });
    this.sendToSegment('no');
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
              <a className="link" href="">
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
