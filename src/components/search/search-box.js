import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import SearchResult from './search-result';

class SearchBox extends React.Component {
  render() {
    const { props } = this;

    return (
      <Downshift
        id="docs-search"
        inputValue={props.searchTerm}
        onChange={selection => {
          props.trackClickThrough(selection.id.raw); // track selection click through
          window.open(selection.url.raw, '_self'); // open selection in current window
        }}
        onInputValueChange={newValue => {
          if (props.searchTerm === newValue) return;
          props.setSearchTerm(newValue);
        }}
        itemToString={() => props.searchTerm}
      >
        {downshiftProps => {
          const { getInputProps, isOpen, getLabelProps } = downshiftProps;

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
                id="docs-search"
                placeholder={props.placeholder}
                className="input px30 bg-white"
                {...getInputProps()}
              />
              {isOpen && props.searchTerm && (
                <div className="color-text shadow-darken25 round mt3 absolute bg-white scroll-auto scroll-styled hmax360 absolute z4 w-full align-l">
                  {props.results.length ? (
                    <ul style={{ fontSize: '13px', lineHeight: '19px' }}>
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
                    <div className="py12 px12">
                      Sorry, we didn't find anything.
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        }}
      </Downshift>
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
