import React from 'react';
import propTypes from 'prop-types';

// button used by Edit and JsxEdit for exporting code to jsfiddle, codesandbox, etc
class Button extends React.PureComponent {
  render() {
    const platform = this.props.platform;
    const btnClass = 'btn btn--s cursor-pointer round';
    function onClick() {
      if (window && window.analytics) {
        analytics.track(`Clicked Edit in ${platform}`);
      }
    }
    return /*#__PURE__*/React.createElement("input", {
      style: {
        border: 0
      },
      type: "submit",
      className: btnClass,
      value: `Edit in ${platform}`,
      onClick: onClick
    });
  }
}
export default Button;