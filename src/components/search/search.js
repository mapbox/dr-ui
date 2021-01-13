import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import PropTypes from 'prop-types';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import { SearchButton } from './search-box';
import Lazy from '../lazy/lazy';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchComponent: undefined
    };
  }
  openModal = () => {
    this.setState({
      searchComponent: (
        <Lazy
          lazyClasses="h30-mm h36"
          openModal={true}
          {...this.props}
          lazyComponent={() => import('./search-provider')}
        />
      )
    });
  };
  render() {
    const { background, narrow } = this.props;
    const { searchComponent } = this.state;
    return (
      searchComponent || (
        <div className="h36 relative">
          <SearchButton
            openModal={this.openModal}
            background={background}
            narrow={narrow}
          />
        </div>
      )
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
