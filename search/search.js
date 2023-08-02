function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import { SearchFacade } from './search-facade';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import debounce from 'debounce';
import classnames from 'classnames';
export default class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    /* Wait to load the full Search component */
    _defineProperty(this, "loadSearch", () => {
      import( /* webpackChunkName: "search-provider" */
      './search-provider.js').then(component => {
        this.setState({
          SearchProvider: component.default
        });
      });
    });
    /* Use SearchInput on smaller screens, SearchButton on larger screens (unless disableModal) */
    _defineProperty(this, "checkWidth", debounce(() => {
      const width = document.body.clientWidth;
      this.setState({
        useModal: width > 640 && !this.props.disableModal
      });
    }, 200));
    this.state = {
      SearchProvider: undefined,
      useModal: !this.props.disableModal || !this.props.resultsOnly
    };
  }
  componentDidMount() {
    this.checkWidth();
    window.addEventListener('resize', this.checkWidth, {
      passive: true
    });
  }

  /* If using `overrideSearchTerm`, don't load the full Search component until overrideSearchTerm is set */
  componentDidUpdate(prevProps) {
    if (prevProps.overrideSearchTerm !== this.props.overrideSearchTerm && this.state.SearchProvider === undefined) {
      this.loadSearch();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidth);
  }
  render() {
    const {
      SearchProvider,
      useModal
    } = this.state;
    /* Show SearchFacade until the user clicks or focuses on it */
    /* Then load the SearchComponent */
    return /*#__PURE__*/React.createElement("div", {
      className: classnames('relative')
    }, SearchProvider ? /*#__PURE__*/React.createElement(SearchProvider, _extends({
      useModal: useModal
    }, this.props)) : /*#__PURE__*/React.createElement(SearchFacade, _extends({
      useModal: useModal,
      loadSearch: this.loadSearch
    }, this.props)));
  }
}
Search.defaultProps = {
  background: 'light',
  placeholder: 'Search',
  inputId: 'docs-search',
  connector: new SiteSearchAPIConnector({
    engineKey: 'zpAwGSb8YMXtF9yDeS5K',
    // public engine key
    engineName: 'docs',
    documentType: ['page'],
    beforeSearchCall: (
    // if no results, retry with spelling suggestion
    existingSearchOptions, next) => next({
      ...existingSearchOptions,
      spelling: 'retry'
    })
  }),
  resultsOnly: false,
  segmentTrackEvent: 'Searched docs',
  themeCompact: false,
  disableModal: false,
  emptyResultMessage: /*#__PURE__*/React.createElement("p", null, "Hmmm, we didn't find anything. Reword your search, or", ' ', /*#__PURE__*/React.createElement("a", {
    href: "https://support.mapbox.com/hc/en-us"
  }, "contact Support"), ".")
};