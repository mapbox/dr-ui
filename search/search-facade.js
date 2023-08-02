function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchButton } from './search-box';
export class SearchFacade extends React.PureComponent {
  render() {
    /* When the button is clicked or input is clicked or focused, load the full Search component */
    const buttonProps = {
      ...(!this.props.useModal && {
        onFocus: this.props.loadSearch
      })
    };
    if (this.props.resultsOnly) return /*#__PURE__*/React.createElement("div", null);
    return /*#__PURE__*/React.createElement("button", _extends({
      className: "w-full block",
      onClick: this.props.loadSearch
    }, buttonProps), this.props.useModal ? /*#__PURE__*/React.createElement(SearchButton, this.props) : /*#__PURE__*/React.createElement(SearchInput, this.props));
  }
}