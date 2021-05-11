import React from 'react';
import PropTypes from 'prop-types';
import { SearchFacade } from './search-facade';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import debounce from 'debounce';
import classnames from 'classnames';

export default class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      SearchProvider: undefined,
      useModal: !this.props.disableModal || !this.props.resultsOnly
    };
  }

  /* Wait to load the full Search component */
  loadSearch = () => {
    import(
      /* webpackChunkName: "search-provider" */
      './search-provider.js'
    ).then((component) => {
      this.setState({ SearchProvider: component.default });
    });
  };

  /* Use SearchInput on smaller screens, SearchButton on larger screens (unless disableModal) */
  checkWidth = debounce(() => {
    const width = document.body.clientWidth;
    this.setState({
      useModal: width > 640 && !this.props.disableModal
    });
  }, 200);

  componentDidMount() {
    this.checkWidth();
    window.addEventListener('resize', this.checkWidth, { passive: true });
  }

  /* If using `overrideSearchTerm`, don't load the full Search component until overrideSearchTerm is set */
  componentDidUpdate(prevProps) {
    if (
      prevProps.overrideSearchTerm !== this.props.overrideSearchTerm &&
      this.state.SearchProvider === undefined
    ) {
      this.loadSearch();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidth);
  }

  render() {
    const { SearchProvider, useModal } = this.state;
    /* Show SearchFacade until the user clicks or focuses on it */
    /* Then load the SearchComponent */
    return (
      <div
        className={classnames('relative', {
          h36: !this.props.resultsOnly
        })}
      >
        {SearchProvider ? (
          <SearchProvider useModal={useModal} {...this.props} />
        ) : (
          <SearchFacade
            useModal={useModal}
            loadSearch={this.loadSearch}
            {...this.props}
          />
        )}
      </div>
    );
  }
}

Search.propTypes = {
  /** Replace the input placehoder with a different string */
  placeholder: PropTypes.string,
  /** Collapse input to fit in a crowded space */
  narrow: PropTypes.bool,
  /** Choose from `light` or `dark`. */
  background: PropTypes.oneOf(['light', 'dark']),
  /** Override default id for input/label, used for testing */
  inputId: PropTypes.string,
  /** Disable modal if you always want an input */
  disableModal: PropTypes.bool,
  /** Add current site filter toggle */
  site: PropTypes.string,
  /** Option to connect to a custom search engine */
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
    documentType: ['page'],
    beforeSearchCall: (
      // if no results, retry with spelling suggestion
      existingSearchOptions,
      next
    ) =>
      next({
        ...existingSearchOptions,
        spelling: 'retry'
      })
  }),
  resultsOnly: false,
  segmentTrackEvent: 'Searched docs',
  themeCompact: false,
  disableModal: false,
  emptyResultMessage: (
    <p>
      Hmmm, we didn't find anything. Reword your search, or{' '}
      <a href="https://support.mapbox.com/hc/en-us">contact Support</a>.
    </p>
  )
};
