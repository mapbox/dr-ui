import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import PropTypes from 'prop-types';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import { SearchProvider, WithSearch } from '@elastic/react-search-ui';
import SearchBox from './search-box';

class Search extends React.Component {
  render() {
    const { props } = this;
    return (
      <SearchProvider
        config={{
          apiConnector: props.connector,
          initialState: {
            resultsPerPage: 10
          },
          trackUrlState: props.resultsOnly ? false : true, // do not push search query to URL if using resultsOnly
          searchQuery: {
            facets: {
              site: { type: 'value' }
            }
          }
        }}
      >
        <WithSearch
          mapContextToProps={({
            isLoading,
            searchTerm,
            setSearchTerm,
            results,
            trackClickThrough,
            wasSearched,
            reset
          }) => ({
            isLoading,
            searchTerm,
            setSearchTerm,
            results,
            trackClickThrough,
            wasSearched,
            reset
          })}
        >
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
              <div
                className={`${this.props.resultsOnly ? '' : 'h36 '}relative`}
              >
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
                  disableModal={props.disableModal || props.resultsOnly} // disable modal if resultsOnly === true
                  site={props.site}
                  reset={reset}
                  resultsOnly={props.resultsOnly}
                  segmentTrackEvent={props.segmentTrackEvent}
                  overrideSearchTerm={props.overrideSearchTerm}
                  themeCompact={props.themeCompact}
                  emptyResultMessage={props.emptyResultMessage}
                />
              </div>
            );
          }}
        </WithSearch>
      </SearchProvider>
    );
  }
}

Search.propTypes = {
  /** replace the input placehoder with a different string */
  placeholder: PropTypes.string,
  /** collapse input to fit in a crowded space */
  narrow: PropTypes.bool, //
  background: PropTypes.oneOf(['light', 'dark']),
  /** override default id for input/label, used for testing */
  inputId: PropTypes.string,
  /** disable modal if you always want an input */
  disableModal: PropTypes.bool,
  /** add current site filter toggle */
  site: PropTypes.string,
  /** option to connect to a custom search engine */
  connector: PropTypes.instanceOf(SiteSearchAPIConnector),
  /** If true, only show results from search */
  resultsOnly: PropTypes.bool,
  /** If `resultsOnly: true` set `overrideSearchTerm` to set the search term */
  overrideSearchTerm: PropTypes.string,
  /** Segment track event, default is (Searched docs) */
  segmentTrackEvent: PropTypes.string,
  /** If true, enable compact mode utilizing smaller text and padding, default false */
  themeCompact: PropTypes.bool,
  /** Node to display when there are no search results for the given query */
  emptyResultMessage: PropTypes.node
};

Search.defaultProps = {
  background: 'light',
  placeholder: 'Search docs.mapbox.com',
  inputId: 'docs-search',
  connector: new SiteSearchAPIConnector({
    engineKey: 'zpAwGSb8YMXtF9yDeS5K', // public engine key
    engineName: 'docs',
    documentType: ['page']
  }),
  resultsOnly: false,
  segmentTrackEvent: 'Searched docs',
  themeCompact: false,
  emptyResultMessage: (
    <p>
      Hmmm, we didn't find anything. Reword your search, or{' '}
      <a href="https://support.mapbox.com/hc/en-us">contact Support</a>.
    </p>
  )
};

export default Search;
