import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import SearchResult from './search-result';
import classnames from 'classnames';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      isUncollapse: false
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }
  handleCollapse() {
    this.setState(prevState => ({
      isUncollapse: !prevState.isUncollapse
    }));
  }

  render() {
    const { props } = this;

    const inputClasses = classnames('input bg-white px30', {
      'px0-mm color-transparent-mm': props.collapse && !this.state.isUncollapse // turn off padding and hide input color on larger screens (allows us to disable collapse on mobile)
    });

    const searchContainerClasses = classnames('', {
      'w36-mm cursor-pointer': props.collapse,
      'absolute-mm wmax360 wmin300-mm':
        props.collapse && this.state.isUncollapse
    });

    const loaderClasses = classnames('loading loading--s', {
      'none-mm': props.collapse && !this.state.isUncollapse
    });

    return (
      <div
        className={searchContainerClasses}
        onClick={() => {
          this.docsSeachInput.focus();
        }}
        style={{ top: 0, right: 0 }}
      >
        <div className="cursor-pointer absolute flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
          <label htmlFor="docs-search">
            <svg className="icon color-gray cursor-pointer ">
              <use xlinkHref="#icon-search" />
            </svg>
          </label>
        </div>

        {props.isLoading && (
          <div className="absolute top right flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
            <span className={loaderClasses} />
          </div>
        )}
        <Downshift
          id="docs-search"
          inputValue={props.searchTerm}
          onChange={selection => {
            props.trackClickThrough(selection.id.raw); // track selection click through
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
                <label
                  style={{
                    // allow screenreaders to read the label
                    // but hides it for everyone else
                    position: 'absolute',
                    width: '0.1px',
                    height: '0.1px',
                    margin: '-0.1px',
                    padding: '0',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    border: '0',
                    clip: 'rect(0 0 0 0)',
                    clipPath: 'inset(100%)'
                  }}
                  {...getLabelProps()}
                >
                  Search
                </label>
                <input
                  ref={input => {
                    this.docsSeachInput = input;
                  }}
                  id="docs-search"
                  placeholder={props.placeholder}
                  className={inputClasses}
                  {...getInputProps({
                    onFocus: () => {
                      openMenu();
                      this.handleCollapse();
                    },
                    onBlur: this.handleCollapse
                  })}
                />
                {isOpen && props.searchTerm && props.wasSearched && (
                  <div className="color-text shadow-darken25 round mt3 bg-white scroll-auto scroll-styled hmax360 absolute z4 w-full align-l">
                    <div style={{ fontSize: '13px', lineHeight: '19px' }}>
                      {props.results.length ? (
                        <ul>
                          {props.results.map((result, index) => (
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
                            Hmmm, we didn't find anything. Reword your search,
                            or{' '}
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
      </div>
    );
  }
}

SearchBox.propTypes = {
  searchTerm: PropTypes.string,
  trackClickThrough: PropTypes.func,
  setSearchTerm: PropTypes.func,
  results: PropTypes.array,
  placeholder: PropTypes.string
};

export default SearchBox;
