import React from 'react';
import PropTypes from 'prop-types';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import { SearchProvider } from '@elastic/react-search-ui';
import SearchBox from './search-box';

const connector = new SiteSearchAPIConnector({
  engineKey: 'zpAwGSb8YMXtF9yDeS5K', // public engine key
  engineName: 'docs',
  documentType: ['page']
});

class Search extends React.Component {
  render() {
    return (
      <SearchProvider
        config={{
          apiConnector: connector,
          initialState: {
            resultsPerPage: 10
          }
        }}
      >
        {({
          isLoading,
          searchTerm,
          setSearchTerm,
          results,
          trackClickThrough,
          wasSearched
        }) => {
          return (
            <div className="h36 relative" style={{ minWidth: '36px' }}>
              <SearchBox
                searchTerm={searchTerm}
                trackClickThrough={trackClickThrough}
                setSearchTerm={setSearchTerm}
                results={results}
                wasSearched={wasSearched}
                placeholder={
                  this.props.collapse
                    ? ''
                    : this.props.placeholder || 'Search docs.mapbox.com'
                }
                collapse={this.props.collapse || false}
                isLoading={isLoading}
              />
            </div>
          );
        }}
      </SearchProvider>
    );
  }
}

Search.propTypes = {
  placeholder: PropTypes.string, // option to replace the input placehoder with a different string,
  collapse: PropTypes.bool // option collapse input
};

export default Search;
