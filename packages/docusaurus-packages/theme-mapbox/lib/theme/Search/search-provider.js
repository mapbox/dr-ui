import React from 'react';
import PropTypes from 'prop-types';
import { SearchProvider, WithSearch } from '@elastic/react-search-ui';
import { SearchBox } from './search-box';

class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstRender: true // used to trigger the search modal only on the first click of SearchFacade
    };
  }

  componentWillReceiveProps() {
    this.setState({
      firstRender: false
    });
  }

  render() {
    const { connector, resultsOnly, useModal } = this.props;
    const { firstRender } = this.state;

    function handleMapContext({
      isLoading,
      searchTerm,
      setSearchTerm,
      results,
      trackClickThrough,
      wasSearched,
      reset
    }) {
      return {
        isLoading,
        searchTerm,
        setSearchTerm,
        results,
        trackClickThrough,
        wasSearched,
        reset
      };
    }

    return (
      <SearchProvider
        config={{
          apiConnector: connector,
          initialState: {
            resultsPerPage: 10
          },
          trackUrlState: resultsOnly ? false : true, // do not push search query to URL if using resultsOnly
          searchQuery: {
            facets: {
              site: { type: 'value' }
            }
          }
        }}
      >
        <WithSearch mapContextToProps={handleMapContext}>
          {({
            isLoading,
            searchTerm,
            setSearchTerm,
            results,
            trackClickThrough,
            wasSearched,
            reset
          }) => {
            return (
              <SearchBox
                searchTerm={searchTerm}
                trackClickThrough={trackClickThrough}
                setSearchTerm={setSearchTerm}
                results={results}
                wasSearched={wasSearched}
                isLoading={isLoading}
                reset={reset}
                {...this.props}
                useModal={useModal && !resultsOnly} // disable modal if resultsOnly === true
                initialModalOpen={firstRender}
              />
            );
          }}
        </WithSearch>
      </SearchProvider>
    );
  }
}

Search.propTypes = {
  connector: PropTypes.object.isRequired,
  resultsOnly: PropTypes.bool.isRequired,
  useModal: PropTypes.bool.isRequired
};

export default Search;
