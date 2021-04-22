import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchButton } from './search-box';

export class SearchFacade extends React.PureComponent {
  render() {
    /* When the button is clicked or input is clicked or focused, load the full Search component */
    const buttonProps = {
      ...(!this.props.useModal && { onFocus: this.props.loadSearch })
    };
    if (this.props.resultsOnly) return <div />;
    return (
      <button
        className="w-full block"
        onClick={this.props.loadSearch}
        {...buttonProps}
      >
        {this.props.useModal ? (
          <SearchButton {...this.props} />
        ) : (
          <SearchInput {...this.props} />
        )}
      </button>
    );
  }
}

SearchFacade.propTypes = {
  loadSearch: PropTypes.func.isRequired,
  resultsOnly: PropTypes.bool.isRequired,
  useModal: PropTypes.bool.isRequired
};
