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
    const defaultResults = [
      {
        codeLanguage: { raw: 'Varies' },
        contentType: { raw: 'Tutorial' },
        excerpt: {
          raw:
            'There are many ways to add markers to the map. This guide will help you identify the best method for your use case'
        },
        id: { raw: '1' },
        level: { raw: '1' },
        site: { raw: 'Help' },
        title: { raw: 'Add markers to a map' },
        url: { raw: 'https://docs.mapbox.com/help/tutorials/markers/' }
      }
    ];
    return (
      <div>
        <select
          defaultValue=""
          value={this.state.query}
          onChange={this.handleSelect}
        >
          <option value="" disabled>
            Select a product
          </option>
          <option value="">Blank</option>
          <option value="Studio">Studio</option>
          <option value="Geocoding">Geocoding</option>
        </select>
        <div className="hmax360 scroll-auto scroll-styled">
          <Search
            inputId="search6"
            overrideSearchTerm={this.state.query}
            resultsOnly={true}
            defaultResults={defaultResults}
          />
        </div>
      </div>
    );
  }
}
