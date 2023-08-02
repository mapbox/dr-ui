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
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.props.reset();
    this.setState({ modalOpen: false });
  }

  singleLinksFacet = ({
    className, // eslint-disable-line
    label, // eslint-disable-line
    onRemove,
    onSelect,
    options,
    values = []
  }) => {
    const value = values[0];
    const siteFilter = options.filter(
      (opt) => opt.value === this.props.site
    )[0];

    const { segmentTrackEvent, searchTerm, site } = this.props;

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

    return siteFilter ? (
      <div className="py12 border-b border--gray-faint mx6">
        <div className="toggle-group">
          <div className="toggle-container">
            <button
              key={getFilterValueDisplay(siteFilter.value)}
              className={`toggle py3 ${
                value === siteFilter.value ? 'bg-gray color-white' : ''
              }`}
              onClick={handleSiteFilter}
            >
              {getFilterValueDisplay(siteFilter.value)}
            </button>
          </div>

          <div className="toggle-container">
            <button
              onClick={handleAllFilter}
              className={`toggle py3 ${!value ? 'bg-gray color-white' : ''}`}
            >
              All docs
            </button>
          </div>
        </div>
      </div>
    ) : (
      ''
    );
  };

  componentDidUpdate(prevProps) {
    const { isLoading, results, searchTerm } = this.props;

    if (
      results !== prevProps.results &&
      !isLoading &&
      searchTerm &&
      !results.length
    ) {
      // if no results, send query to Sentry
      Sentry.init({
        dsn: 'https://cbf0479a2c93421db53d4dd20df6dc52@o5937.ingest.sentry.io/5736949',
        environment: 'main'
      });
      Sentry.configureScope((scope) => {
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
      setSearchTerm(newValue, { debounce: 200 });
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
    return (
      <Downshift
        id={inputId}
        inputValue={searchTerm}
        onChange={handleSelection}
        onInputValueChange={handleInputChange}
        itemToString={handleItemToString}
      >
        {(downshiftProps) => {
          const { getInputProps, isOpen, getLabelProps, openMenu } =
            downshiftProps;

          return (
            <div>
              {!resultsOnly && (
                <React.Fragment>
                  <SearchInput
                    autoFocus={true}
                    isLoading={isLoading}
                    useModal={useModal}
                    placeholder={placeholder}
                    getLabelProps={getLabelProps}
                    getInputProps={getInputProps({
                      onFocus: openMenu,
                      onKeyDown: (e) => {
                        // clear value on escape
                        if (e.keyCode === 27) {
                          this.props.reset();
                        }
                      }
                    })}
                  />
                </React.Fragment>
              )}
              {(isOpen || resultsOnly) && searchTerm && (
                <React.Fragment>
                  <div
                    className={classnames(
                      'color-text round mt3 bg-white w-full align-l',
                      {
                        'hmax360 overflow-auto scroll-styled absolute shadow-darken25 z4':
                          !resultsOnly
                      }
                    )}
                  >
                    <React.Fragment>
                      <Facet
                        show={20}
                        field="site"
                        label="Site"
                        view={this.singleLinksFacet}
                      />
                      {wasSearched &&
                        (this.props.results.length ? (
                          <ul>
                            {this.props.results.map((result, index) => (
                              <SearchResult
                                key={index}
                                result={result}
                                index={index}
                                downshiftProps={downshiftProps}
                                themeCompact={themeCompact}
                              />
                            ))}
                          </ul>
                        ) : (
                          <div
                            className={classnames('px12', {
                              'py6 txt-s': themeCompact,
                              'py12 prose': !themeCompact
                            })}
                          >
                            {emptyResultMessage}
                          </div>
                        ))}
                    </React.Fragment>
                  </div>
                </React.Fragment>
              )}
            </div>
          );
        }}
      </Downshift>
    );
  }

  renderModal() {
    const { props } = this;
    if (!this.state.modalOpen) {
      return null;
    }
    return (
      <SearchModal
        accessibleTitle="Search bar"
        onExit={this.closeModal}
        initialFocus={`#${props.inputId}-input`}
        isLoading={this.props.isLoading}
      >
        <div>{this.renderSearchBar()}</div>
      </SearchModal>
    );
  }

  render() {
    // hide results until overrideSearchTerm not null
    const hideResultsOnly = this.props.resultsOnly
      ? this.props.overrideSearchTerm === undefined
      : false;
    return (
      <div>
        {!this.props.useModal ? (
          !hideResultsOnly && (
            <div className="w-full">{this.renderSearchBar()}</div>
          )
        ) : (
          <div>
            <SearchButton
              isFacade={false}
              onClick={this.openModal}
              background={this.props.background}
              narrow={this.props.narrow}
              placeholder={this.props.placeholder}
            />
            {this.renderModal()}
          </div>
        )}
      </div>
    );
  }
}

SearchBox.defaultProps = {
  initialModalOpen: false
};

SearchBox.propTypes = {
  searchTerm: PropTypes.string,
  trackClickThrough: PropTypes.func,
  isLoading: PropTypes.bool,
  setSearchTerm: PropTypes.func,
  reset: PropTypes.func,
  results: PropTypes.array,
  placeholder: PropTypes.string,
  background: PropTypes.oneOf(['light', 'dark']).isRequired,
  inputId: PropTypes.string,
  narrow: PropTypes.bool,
  site: PropTypes.string,
  wasSearched: PropTypes.bool,
  resultsOnly: PropTypes.bool,
  segmentTrackEvent: PropTypes.string,
  overrideSearchTerm: PropTypes.string,
  themeCompact: PropTypes.bool,
  emptyResultMessage: PropTypes.node,
  useModal: PropTypes.bool.isRequired,
  initialModalOpen: PropTypes.bool
};

export class SearchButton extends React.PureComponent {
  render() {
    const { background, narrow, isFacade, onClick, placeholder } = this.props;
    const Element = isFacade ? 'div' : 'button';
    const buttonProps = {
      ...(!isFacade && { onClick })
    };
    return (
      <Element
        className={classnames(
          'flex flex--center-cross btn--gray color-gray-light bg-white btn--stroke py6 pl6 pr12 round mb6 txt-s',
          {
            'btn--white': background !== 'light',
            wmax30: narrow,
            'w-full': !narrow
          }
        )}
        {...buttonProps}
        style={narrow ? { paddingLeft: '12px', paddingRight: '12px' } : {}}
      >
        <span
          className={classnames('', {
            mr6: !narrow,
            'color-gray': background === 'light'
          })}
        >
          <svg className="icon w18 h18 block">
            {narrow && <title>Search</title>}
            <use xlinkHref="#icon-search" />
          </svg>
        </span>{' '}
        {!narrow && (
          <span
            className={classnames('', {
              'color-gray': background === 'light'
            })}
          >
            {placeholder || 'Search'}
          </span>
        )}
      </Element>
    );
  }
}

SearchButton.defaultProps = {
  background: 'light',
  isFacade: true
};

SearchButton.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  narrow: PropTypes.bool,
  isFacade: PropTypes.bool,
  onClick: PropTypes.func,
  placeholder: PropTypes.string
};

export const SearchInput = (props) => {
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

  const { value, onChange } = inputProps;

  function handleCloseButtonClick() {
    // clear the input
    onChange({
      target: {
        value: ''
      }
    });
  }

  return (
    <>
      <label className="cursor-pointer" {...labelProps} htmlFor="searchInput">
        <div
          className={classnames(
            'absolute flex flex--center-cross flex--center-main',
            {
              'w60 h60': useModal
            }
          )}
          style={{
            height: !useModal && 48,
            width: !useModal && 48
          }}
        >
          <svg className={classnames('icon color-darken50 w24 h24')}>
            <title>Search</title>
            <use xlinkHref="#icon-search" />
          </svg>
        </div>
      </label>
      <input
        id="searchInput"
        autoFocus={autoFocus}
        placeholder={placeholder}
        className={classnames('input bg-white txt-color round-bold', {
          'px60 h60': useModal,
          'border border--gray-lighter border--gray-on-hover border--blue-on-active':
            !useModal,
          'is-active': isFocused
        })}
        {...inputProps}
        style={{
          height: !useModal && 48,
          paddingLeft: !useModal && 48,
          paddingRight: !useModal && 48,
          boxShadow: 'none'
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {!isLoading && value && value.length && (
        <div
          className={classnames('absolute top right', {
            mt12: !useModal,
            mt18: useModal
          })}
        >
          <button
            type="button"
            className="link px12 link--gray"
            onClick={handleCloseButtonClick}
          >
            <Icon name="close" size={24} />
          </button>
        </div>
      )}
      {isLoading && (
        <div
          className={classnames('absolute top right', {
            mt12: !useModal,
            mt18: useModal
          })}
        >
          <div className="px12 h24 flex flex--center-cross">
            <div className="loading loading--s"></div>
          </div>
        </div>
      )}
    </>
  );
};

SearchInput.propTypes = {
  autoFocus: false
};

SearchInput.propTypes = {
  getLabelProps: PropTypes.func,
  getInputProps: PropTypes.object,
  useModal: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  isLoading: PropTypes.bool
};
