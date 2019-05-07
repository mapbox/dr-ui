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
      <div>
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
            trackClickThrough
          }) => {
            return (
              <div className="App">
                <div className="relative">
                  <div className="absolute flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
                    <label htmlFor="docs-search">
                      <svg className="icon color-gray">
                        <use xlinkHref="#icon-search" />
                      </svg>
                    </label>
                  </div>
                  {isLoading ? (
                    <div className="absolute top right flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
                      <span className="loading loading--s" />
                    </div>
                  ) : (
                    ''
                  )}
                  <SearchBox
                    searchTerm={searchTerm}
                    trackClickThrough={trackClickThrough}
                    setSearchTerm={setSearchTerm}
                    results={results}
                  />
                </div>
              </div>
            );
          }}
        </SearchProvider>
      </div>
    );
  }
}

Search.propTypes = {
  site: PropTypes.string
};

export default Search;
