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
    const { props } = this;
    return (
      <SearchProvider
        config={{
          apiConnector: connector,
          initialState: {
            resultsPerPage: 10
          },
          searchQuery: {
            facets: {
              site: { type: 'value' }
            }
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
            <div className="h36 relative">
              <SearchBox
                searchTerm={searchTerm}
                trackClickThrough={trackClickThrough}
                setSearchTerm={setSearchTerm}
                results={results}
                wasSearched={wasSearched}
                placeholder={props.placeholder}
                isLoading={isLoading}
                inputId={props.inputId}
                background={props.background}
                narrow={props.narrow}
                disableModal={props.disableModal}
                site={props.site}
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
  narrow: PropTypes.bool, // option to collapse input to fit in a crowded space
  background: PropTypes.oneOf(['light', 'dark']),
  inputId: PropTypes.string, // option to override default id for input/label, used for testing
  disableModal: PropTypes.bool, // option to completely disable modal if you always want an input
  site: PropTypes.string
};

Search.defaultProps = {
  background: 'light',
  placeholder: 'Search docs.mapbox.com',
  inputId: 'docs-search'
};

export default Search;
