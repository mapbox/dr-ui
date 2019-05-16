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
      'w36-mm': props.collapse,
      'absolute-mm wmax360 wmin300-mm top right':
        props.collapse && this.state.isUncollapse
    });

    const loaderClasses = classnames('loading loading--s', {
      'none-mm': props.collapse && !this.state.isUncollapse
    });

    return (
      <div className={searchContainerClasses || undefined}>
        {props.isLoading && (
          <div className="absolute top right flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
            <span className={loaderClasses} />
          </div>
        )}
        <Downshift
          id={props.inputId}
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
                <label className="cursor-pointer" {...getLabelProps()}>
                  <div className="absolute flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
                    <svg className="icon color-gray">
                      <title>Search</title>
                      <use xlinkHref="#icon-search" />
                    </svg>
                  </div>
                </label>

                <input
                  ref={input => {
                    this.docsSeachInput = input;
                  }}
                  placeholder={props.placeholder}
                  className={inputClasses}
                  {...getInputProps({
                    onFocus: () => {
                      openMenu();
                      if (props.collapse) this.handleCollapse();
                    },
                    onBlur: () => {
                      if (props.collapse) this.handleCollapse();
                    }
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
