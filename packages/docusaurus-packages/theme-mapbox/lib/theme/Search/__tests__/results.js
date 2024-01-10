import React from 'react';
import Search from '../search';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: undefined
    };
  }
  handleSelect = (e) => {
    this.setState({ query: e.target.value });
  };
  render() {
    return (
      <div>
        <select
          aria-label="Select a product"
          defaultValue=""
          value={this.state.query}
          onChange={this.handleSelect}
          onBlur={this.handleSelect}
        >
          <option value="" disabled>
            Select a product
          </option>
          <option value="Studio">Studio</option>
          <option value="Geocoding">Geocoding</option>
          <option value="Banana">Banana</option>
        </select>
        <div className="hmax360 overflow-auto scroll-styled">
          <Search
            inputId="search6"
            overrideSearchTerm={this.state.query}
            resultsOnly={true}
            themeCompact={true}
            emptyResultMessage={
              <p>
                Hmmm, we didn't find anything. We'll help you take a closer look
                once you get in touch!
              </p>
            }
          />
        </div>
      </div>
    );
  }
}
