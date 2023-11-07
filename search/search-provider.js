function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
    const {
      connector,
      resultsOnly,
      useModal
    } = this.props;
    const {
      firstRender
    } = this.state;
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
    return /*#__PURE__*/React.createElement(SearchProvider, {
      config: {
        apiConnector: connector,
        initialState: {
          resultsPerPage: 10
        },
        trackUrlState: resultsOnly ? false : true,
        // do not push search query to URL if using resultsOnly
        searchQuery: {
          facets: {
            site: {
              type: 'value'
            }
          }
        }
      }
    }, /*#__PURE__*/React.createElement(WithSearch, {
      mapContextToProps: handleMapContext
    }, ({
      isLoading,
      searchTerm,
      setSearchTerm,
      results,
      trackClickThrough,
      wasSearched,
      reset
    }) => {
      return /*#__PURE__*/React.createElement(SearchBox, _extends({
        searchTerm: searchTerm,
        trackClickThrough: trackClickThrough,
        setSearchTerm: setSearchTerm,
        results: results,
        wasSearched: wasSearched,
        isLoading: isLoading,
        reset: reset
      }, this.props, {
        useModal: useModal && !resultsOnly // disable modal if resultsOnly === true
        ,
        initialModalOpen: firstRender
      }));
    }));
  }
}
export default Search;