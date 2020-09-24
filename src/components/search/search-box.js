import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import SearchModal from './search-modal';
import SearchResult from './search-result';
import debounce from 'debounce';
import { getFilterValueDisplay } from '@elastic/react-search-ui-views/lib/view-helpers';
import { Facet } from '@elastic/react-search-ui';
import classnames from 'classnames';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      useModal: !this.props.disableModal
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.renderSearchBar = this.renderSearchBar.bind(this);
    this.singleLinksFacet = this.singleLinksFacet.bind(this);
    this.checkWidth = debounce(() => {
      const width = document.body.clientWidth;
      this.setState({
        useModal: width > 640 && !this.props.disableModal
      });
    }, 200);

    // if resultsOnly and overrideSearchTerm, set the search term
    if (this.props.resultsOnly && this.props.overrideSearchTerm) {
      props.setSearchTerm(this.props.overrideSearchTerm);
    }
  }

  componentDidMount() {
    this.checkWidth();
    window.addEventListener('resize', this.checkWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidth);
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

    return siteFilter ? (
      <div className="py12 border-b border--gray-faint mx6">
        <div className="toggle-group">
          <div className="toggle-container">
            <button
              key={getFilterValueDisplay(siteFilter.value)}
              className={`toggle py3 ${
                value === siteFilter.value ? 'bg-gray color-white' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                // track click
                if (window && window.analytics) {
                  analytics.track(this.props.segmentTrackEvent, {
                    query: this.props.searchTerm,
                    toggle: true,
                    site: this.props.site
                  });
                }
                onSelect(siteFilter.value);
              }}
            >
              {getFilterValueDisplay(siteFilter.value)}
            </button>
          </div>

          <div className="toggle-container">
            <button
              onClick={(e) => {
                e.preventDefault();
                onRemove(value);
              }}
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

  renderSearchBar() {
    const { props } = this;
    return (
      <Downshift
        id={this.props.inputId}
        inputValue={this.props.searchTerm}
        onChange={(selection) => {
          // track click
          if (window && window.analytics) {
            analytics.track(this.props.segmentTrackEvent, {
              query: this.props.searchTerm,
              clicked: selection.url.raw
            });
          }
          this.props.trackClickThrough(selection.id.raw); // track selection click through
          window.open(selection.url.raw, '_self'); // open selection in current window
        }}
        onInputValueChange={(newValue) => {
          if (props.searchTerm === newValue) return;
          props.setSearchTerm(newValue, { debounce: 1500 });
          // track query
          if (window && window.analytics) {
            analytics.track(this.props.segmentTrackEvent, {
              query: newValue
            });
          }
        }}
        itemToString={() => props.searchTerm}
      >
        {(downshiftProps) => {
          const {
            getInputProps,
            isOpen,
            getLabelProps,
            openMenu
          } = downshiftProps;

          return (
            <div>
              {!props.resultsOnly && (
                <React.Fragment>
                  <label className="cursor-pointer" {...getLabelProps()}>
                    <div
                      className={classnames(
                        'absolute flex-parent flex-parent--center-cross flex-parent--center-main',
                        {
                          'w60 h60': this.state.useModal,
                          'w36 h36': !this.state.useModal
                        }
                      )}
                    >
                      <svg
                        className={classnames('icon color-gray', {
                          'w24 h24': this.state.useModal
                        })}
                      >
                        <title>Search</title>
                        <use xlinkHref="#icon-search" />
                      </svg>
                    </div>
                    {this.props.isLoading && (
                      <div
                        className="loading loading--s absolute bg-white"
                        style={{
                          top: this.state.useModal ? '21px' : '10px',
                          right: '26px',
                          zIndex: 5
                        }}
                      />
                    )}
                  </label>
                  <input
                    ref={(input) => {
                      this.docsSeachInput = input;
                    }}
                    placeholder={this.props.placeholder}
                    className={classnames('input bg-white', {
                      'px60 h60 txt-l': this.state.useModal,
                      'px36 h36': !this.state.useModal
                    })}
                    {...getInputProps({
                      onFocus: () => {
                        openMenu();
                      }
                    })}
                  />
                </React.Fragment>
              )}
              {(isOpen || props.resultsOnly) && props.searchTerm && (
                <React.Fragment>
                  {props.isLoading && (
                    <div className="w-full h360 bg-white opacity75 absolute">
                      <div className="loading mx-auto mt60" />
                    </div>
                  )}
                  <div
                    className={classnames(
                      'color-text round mt3 bg-white w-full align-l',
                      {
                        'hmax360 scroll-auto scroll-styled absolute shadow-darken25 z4': !props.resultsOnly
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

                      {props.wasSearched &&
                        (this.props.results.length ? (
                          <ul>
                            {this.props.results.map((result, index) => (
                              <SearchResult
                                key={index}
                                result={result}
                                index={index}
                                downshiftProps={downshiftProps}
                                themeCompact={props.themeCompact}
                                resultBorder={props.resultBorder}
                              />
                            ))}
                          </ul>
                        ) : (
                          <div
                            className={classnames('px12', {
                              'py6 txt-s': props.themeCompact,
                              'py12 prose': !props.themeCompact
                            })}
                          >
                            {props.emptyResultMessage}
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
        {!this.state.useModal ? (
          !hideResultsOnly && (
            <div className="w-full">{this.renderSearchBar()}</div>
          )
        ) : (
          <div>
            <button
              className={classnames(
                'flex-parent flex-parent--center-cross flex-parent--center-main btn btn--stroke',
                {
                  'btn--white': this.props.background !== 'light'
                }
              )}
              style={
                this.props.narrow
                  ? { paddingLeft: '12px', paddingRight: '12px' }
                  : {}
              }
              onClick={this.openModal}
            >
              <span
                className={classnames('', {
                  mr6: !this.props.narrow
                })}
              >
                <svg className="icon w18 h18">
                  {this.props.narrow && <title>Search</title>}
                  <use xlinkHref="#icon-search" />
                </svg>
              </span>{' '}
              {!this.props.narrow && 'Search'}
            </button>
            {this.renderModal()}
          </div>
        )}
      </div>
    );
  }
}

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
  disableModal: PropTypes.bool,
  site: PropTypes.string,
  wasSearched: PropTypes.bool,
  resultsOnly: PropTypes.bool,
  segmentTrackEvent: PropTypes.string,
  overrideSearchTerm: PropTypes.string,
  themeCompact: PropTypes.bool,
  emptyResultMessage: PropTypes.node,
  resultBorder: PropTypes.bool
};

export default SearchBox;
