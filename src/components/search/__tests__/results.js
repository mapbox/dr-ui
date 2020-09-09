import React from 'react';
import Search from '../search';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: undefined
    };
  }
  handleBtn = (query) => this.setState({ query: query });
  render() {
    return (
      <div>
        <button
          className="btn btn--s mr3"
          onClick={() => this.handleBtn('Studio')}
        >
          Studio
        </button>
        <button
          className="btn btn--s"
          onClick={() => this.handleBtn('Geocoding')}
        >
          Geocoding
        </button>
        <div className="hmax360 scroll-auto scroll-styled">
          <Search
            inputId="search6"
            overrideSearchTerm={this.state.query}
            resultsOnly={true}
          />
        </div>
      </div>
    );
  }
}
