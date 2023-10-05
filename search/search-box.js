function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable jsx-a11y/no-autofocus */
/* this component uses a facade and it must transfer the focus from SearchFacade to the SearchBox */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { getFilterValueDisplay } from '@elastic/react-search-ui-views/lib/view-helpers';
import { Facet } from '@elastic/react-search-ui';
import classnames from 'classnames';
import * as Sentry from '@sentry/browser';
import Icon from '@mapbox/mr-ui/icon';
import SearchModal from './search-modal';
import SearchResult from './search-result';
export class SearchBox extends React.PureComponent {
  constructor(props) {
    super(props);
    _defineProperty(this, "singleLinksFacet", _ref => {
      let {
        className,
        // eslint-disable-line
        label,
        // eslint-disable-line
        onRemove,
        onSelect,
        options,
        values = []
      } = _ref;
      const value = values[0];
      const siteFilter = options.filter(opt => opt.value === this.props.site)[0];
      const {
        segmentTrackEvent,
        searchTerm,
        site
      } = this.props;
      function handleSiteFilter(e) {
        e.preventDefault();
        // track click
        if (window && window.analytics) {
          analytics.track(segmentTrackEvent, {
            query: searchTerm,
            toggle: true,
            site: site
          });
        }
        onSelect(siteFilter.value);
      }
      function handleAllFilter(e) {
        e.preventDefault();
        onRemove(value);
      }
      return siteFilter ? /*#__PURE__*/React.createElement("div", {
        className: "py12 border-b border--gray-faint mx6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "toggle-group"
      }, /*#__PURE__*/React.createElement("div", {
        className: "toggle-container"
      }, /*#__PURE__*/React.createElement("button", {
        key: getFilterValueDisplay(siteFilter.value),
        className: `toggle py3 ${value === siteFilter.value ? 'bg-gray color-white' : ''}`,
        onClick: handleSiteFilter
      }, getFilterValueDisplay(siteFilter.value))), /*#__PURE__*/React.createElement("div", {
        className: "toggle-container"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: handleAllFilter,
        className: `toggle py3 ${!value ? 'bg-gray color-white' : ''}`
      }, "All docs")))) : '';
    });
    this.state = {
      // there is a new instance of SearchBox every time SearchProvider renders,
      // this lets us control whether the modal should appear on first render
      modalOpen: props.initialModalOpen
    };
    this.docsSeachInput = React.createRef;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.renderSearchBar = this.renderSearchBar.bind(this);
    this.singleLinksFacet = this.singleLinksFacet.bind(this);
    // if resultsOnly and overrideSearchTerm, set the search term
    if (this.props.resultsOnly && this.props.overrideSearchTerm) {
      props.setSearchTerm(this.props.overrideSearchTerm);
    }
  }
  openModal() {
    this.setState({
      modalOpen: true
    });
  }
  closeModal() {
    this.props.reset();
    this.setState({
      modalOpen: false
    });
  }
  componentDidUpdate(prevProps) {
    const {
      isLoading,
      results,
      searchTerm
    } = this.props;
    if (results !== prevProps.results && !isLoading && searchTerm && !results.length) {
      // if no results, send query to Sentry
      Sentry.init({
        dsn: 'https://cbf0479a2c93421db53d4dd20df6dc52@o5937.ingest.sentry.io/5736949',
        environment: 'main'
      });
      Sentry.configureScope(scope => {
        scope.setFingerprint(searchTerm);
        Sentry.captureMessage(searchTerm);
      });
    }
  }
  renderSearchBar() {
    const {
      inputId,
      searchTerm,
      trackClickThrough,
      segmentTrackEvent,
      setSearchTerm,
      resultsOnly,
      isLoading,
      wasSearched,
      themeCompact,
      emptyResultMessage,
      placeholder,
      useModal
    } = this.props;
    function handleSelection(selection) {
      // track click
      if (window && window.analytics) {
        analytics.track(segmentTrackEvent, {
          query: searchTerm,
          clicked: selection.url.raw
        });
      }
      trackClickThrough(selection.id.raw); // track selection click through
      window.open(selection.url.raw, '_self'); // open selection in current window
    }

    function handleInputChange(newValue) {
      if (searchTerm === newValue) return;
      setSearchTerm(newValue, {
        debounce: 200
      });
      // track query
      if (window && window.analytics) {
        analytics.track(segmentTrackEvent, {
          query: newValue
        });
      }
    }
    function handleItemToString() {
      return searchTerm;
    }
    return /*#__PURE__*/React.createElement(Downshift, {
      id: inputId,
      inputValue: searchTerm,
      onChange: handleSelection,
      onInputValueChange: handleInputChange,
      itemToString: handleItemToString
    }, downshiftProps => {
      const {
        getInputProps,
        isOpen,
        getLabelProps,
        openMenu
      } = downshiftProps;
      return /*#__PURE__*/React.createElement("div", null, !resultsOnly && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchInput, {
        autoFocus: true,
        isLoading: isLoading,
        useModal: useModal,
        placeholder: placeholder,
        getLabelProps: getLabelProps,
        getInputProps: getInputProps({
          onFocus: openMenu,
          onKeyDown: e => {
            // clear value on escape
            if (e.keyCode === 27) {
              this.props.reset();
            }
          }
        })
      })), (isOpen || resultsOnly) && searchTerm && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: classnames('color-text round mt3 bg-white w-full align-l', {
          'hmax360 overflow-auto scroll-styled absolute shadow-darken25 z4': !resultsOnly
        })
      }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Facet, {
        show: 20,
        field: "site",
        label: "Site",
        view: this.singleLinksFacet
      }), wasSearched && (this.props.results.length ? /*#__PURE__*/React.createElement("ul", null, this.props.results.map((result, index) => /*#__PURE__*/React.createElement(SearchResult, {
        key: index,
        result: result,
        index: index,
        downshiftProps: downshiftProps,
        themeCompact: themeCompact
      }))) : /*#__PURE__*/React.createElement("div", {
        className: classnames('px12', {
          'py6 txt-s': themeCompact,
          'py12 prose': !themeCompact
        })
      }, emptyResultMessage))))));
    });
  }
  renderModal() {
    const {
      props
    } = this;
    if (!this.state.modalOpen) {
      return null;
    }
    return /*#__PURE__*/React.createElement(SearchModal, {
      accessibleTitle: "Search bar",
      onExit: this.closeModal,
      initialFocus: `#${props.inputId}-input`,
      isLoading: this.props.isLoading
    }, /*#__PURE__*/React.createElement("div", null, this.renderSearchBar()));
  }
  render() {
    // hide results until overrideSearchTerm not null
    const hideResultsOnly = this.props.resultsOnly ? this.props.overrideSearchTerm === undefined : false;
    return /*#__PURE__*/React.createElement("div", null, !this.props.useModal ? !hideResultsOnly && /*#__PURE__*/React.createElement("div", {
      className: "w-full"
    }, this.renderSearchBar()) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchButton, {
      isFacade: false,
      onClick: this.openModal,
      background: this.props.background,
      narrow: this.props.narrow,
      placeholder: this.props.placeholder
    }), this.renderModal()));
  }
}
SearchBox.defaultProps = {
  initialModalOpen: false
};
export class SearchButton extends React.PureComponent {
  render() {
    const {
      background,
      narrow,
      isFacade,
      onClick,
      placeholder
    } = this.props;
    const Element = isFacade ? 'div' : 'button';
    const buttonProps = {
      ...(!isFacade && {
        onClick
      })
    };
    return /*#__PURE__*/React.createElement(Element, _extends({
      className: classnames('flex flex--center-cross bg-white border--gray-lighter border border--gray-on-hover border--blue-on-active py6 pl6 pr12 round txt-s', {
        'btn--white': background !== 'light',
        wmax30: narrow,
        'w-full': !narrow
      })
    }, buttonProps, {
      style: narrow ? {
        paddingLeft: '12px',
        paddingRight: '12px'
      } : {}
    }), /*#__PURE__*/React.createElement("span", {
      className: classnames('', {
        mr6: !narrow,
        'color-gray': background === 'light'
      })
    }, /*#__PURE__*/React.createElement("svg", {
      className: "icon w18 h18 block"
    }, narrow && /*#__PURE__*/React.createElement("title", null, "Search"), /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#icon-search"
    }))), ' ', !narrow && /*#__PURE__*/React.createElement("span", {
      className: classnames('', {
        'color-gray': background === 'light'
      })
    }, placeholder || 'Search'));
  }
}
SearchButton.defaultProps = {
  background: 'light',
  isFacade: true
};
export const SearchInput = props => {
  const {
    placeholder,
    getLabelProps,
    useModal,
    getInputProps,
    autoFocus,
    isLoading
  } = props;
  const [isFocused, setIsFocused] = useState(autoFocus);
  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
  }
  const labelProps = {
    ...(getLabelProps && getLabelProps())
  };
  const inputProps = {
    ...(getInputProps && getInputProps)
  };
  const {
    value,
    onChange
  } = inputProps;
  function handleCloseButtonClick() {
    // clear the input
    onChange({
      target: {
        value: ''
      }
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", _extends({
    className: "cursor-pointer"
  }, labelProps, {
    htmlFor: "searchInput"
  }), /*#__PURE__*/React.createElement("div", {
    className: classnames('absolute flex flex--center-cross flex--center-main', {
      'w60 h60': useModal
    }),
    style: {
      height: !useModal && 48,
      width: !useModal && 48
    }
  }, /*#__PURE__*/React.createElement("svg", {
    className: classnames('icon color-darken50 w24 h24')
  }, /*#__PURE__*/React.createElement("title", null, "Search"), /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#icon-search"
  })))), /*#__PURE__*/React.createElement("input", _extends({
    id: "searchInput",
    autoFocus: autoFocus,
    placeholder: placeholder,
    className: classnames('input bg-white txt-color round-bold', {
      'px60 h60': useModal,
      'border border--gray-lighter border--gray-on-hover border--blue-on-active': !useModal,
      'is-active': isFocused
    })
  }, inputProps, {
    style: {
      height: !useModal && 48,
      paddingLeft: !useModal && 48,
      paddingRight: !useModal && 48,
      boxShadow: 'none'
    },
    onFocus: handleInputFocus,
    onBlur: handleInputBlur
  })), !isLoading && value && value.length && /*#__PURE__*/React.createElement("div", {
    className: classnames('absolute top right', {
      mt12: !useModal,
      mt18: useModal
    })
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "link px12 link--gray",
    onClick: handleCloseButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 24
  }))), isLoading && /*#__PURE__*/React.createElement("div", {
    className: classnames('absolute top right', {
      mt12: !useModal,
      mt18: useModal
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "px12 h24 flex flex--center-cross"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loading loading--s"
  }))));
};