import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import SearchModal from './search-modal';
import SearchResult from './search-result';
import debounce from 'debounce';
import { getFilterValueDisplay } from '@elastic/react-search-ui-views/lib/view-helpers';
import { Facet } from '@elastic/react-search-ui';

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
    const siteFilter = options.filter(opt => opt.value === this.props.site)[0];

    return siteFilter ? (
      <div className="py12 border-b border--gray-faint mx6">
        <div className="toggle-group">
          <div className="toggle-container">
            <a
              key={getFilterValueDisplay(siteFilter.value)}
              className={`toggle py3 ${
                value === siteFilter.value ? 'bg-gray color-white' : ''
              }`}
              href="/"
              onClick={e => {
                e.preventDefault();
                onSelect(siteFilter.value);
              }}
            >
              {getFilterValueDisplay(siteFilter.value)}
            </a>
          </div>

          <div className="toggle-container">
            <a
              onClick={e => {
                e.preventDefault();
                onRemove(value);
              }}
              className={`toggle py3 ${!value ? 'bg-gray color-white' : ''}`}
              href="/"
            >
              All docs
            </a>
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
        onChange={selection => {
          this.props.trackClickThrough(selection.id.raw); // track selection click through
          window.open(selection.url.raw, '_self'); // open selection in current window
        }}
        onInputValueChange={newValue => {
          if (props.searchTerm === newValue) return;
          props.setSearchTerm(newValue, { debounce: 300 });
        }}
        itemToString={() => props.searchTerm}
      >
        {downshiftProps => {
          const {
            getInputProps,
            isOpen,
            getLabelProps,
            openMenu
          } = downshiftProps;

          return (
            <div>
              <label className="cursor-pointer" {...getLabelProps()}>
                <div
                  className={`absolute flex-parent flex-parent--center-cross flex-parent--center-main ${
                    this.state.useModal ? 'w60 h60' : 'w36 h36'
                  }`}
                >
                  <svg
                    className={`icon color-gray ${
                      this.state.useModal ? 'w24 h24' : ''
                    }`}
                  >
                    <title>Search</title>
                    <use xlinkHref="#icon-search" />
                  </svg>
                </div>
              </label>

              <input
                ref={input => {
                  this.docsSeachInput = input;
                }}
                placeholder={this.props.placeholder}
                className={`input bg-white ${
                  this.state.useModal ? 'px60 h60 txt-l' : 'px36 h36'
                }`}
                {...getInputProps({
                  onFocus: () => {
                    openMenu();
                  }
                })}
              />
              {isOpen && props.searchTerm && props.wasSearched && (
                <div className="color-text shadow-darken25 round mt3 bg-white scroll-auto scroll-styled hmax360 absolute z4 w-full align-l">
                  <div>
                    <Facet
                      field="site"
                      label="Site"
                      view={this.singleLinksFacet}
                    />
                    {this.props.results.length ? (
                      <ul>
                        {this.props.results.map((result, index) => (
                          <SearchResult
                            key={index}
                            result={result}
                            index={index}
                            downshiftProps={downshiftProps}
                          />
                        ))}
                      </ul>
                    ) : (
                      <div className="py12 px12 prose">
                        <p>
                          Hmmm, we didn't find anything. Reword your search, or{' '}
                          <a href="https://support.mapbox.com/hc/en-us">
                            contact Support
                          </a>
                          .
                        </p>
                      </div>
                    )}
                  </div>
                </div>
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
    return (
      <div>
        {!this.state.useModal ? (
          <div className="w-full">{this.renderSearchBar()}</div>
        ) : (
          <div>
            <button
              className={`flex-parent flex-parent--center-cross flex-parent--center-main h36  px12 round ${
                this.props.background === 'light'
                  ? 'color-gray color-gray-dark-on-hover bg-gray-faint'
                  : 'color-white color-lighten50-on-hover bg-lighten10'
              }`}
              onClick={this.openModal}
            >
              <span className={!this.props.narrow ? 'mr6' : ''}>
                <svg className="icon">
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
  setSearchTerm: PropTypes.func,
  results: PropTypes.array,
  placeholder: PropTypes.string,
  background: PropTypes.oneOf(['light', 'dark']).isRequired,
  inputId: PropTypes.string,
  narrow: PropTypes.bool,
  disableModal: PropTypes.bool,
  site: PropTypes.string
};

export default SearchBox;
