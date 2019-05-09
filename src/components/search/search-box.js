import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import SearchResult from './search-result';

class SearchBox extends React.Component {
  render() {
    const { props } = this;

    return (
      <Downshift
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
          const { closeMenu, getInputProps, isOpen } = downshiftProps;

          return (
            <form
              onSubmit={() => {
                closeMenu();
              }}
            >
              <input
                id="docs-search"
                {...getInputProps({
                  placeholder: 'Search docs',
                  className: `input px30 bg-white`
                })}
              />
              {isOpen && props.searchTerm && (
                <div className="color-text shadow-darken25 round mt3 absolute bg-white scroll-auto scroll-styled hmax360 absolute z4 w-full align-l">
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
                </div>
              )}
            </form>
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
  results: PropTypes.array
};

export default SearchBox;
