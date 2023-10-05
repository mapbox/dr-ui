function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
import ToggleableCodeBlock from '../toggleable-code-block/toggleable-code-block';
import { highlightSwift } from '../highlight/swift';
import { highlightObjectivec } from '../highlight/objectivec';
export default class ContextlessIosViewControllerToggle extends React.PureComponent {
  render() {
    const {
      id,
      context,
      objectiveC,
      swift,
      limitHeight
    } = this.props;
    let selectedCode = '';
    if (context) {
      selectedCode = this.props.context.preferredLanguage.ios === 'objectiveC' ? objectiveC : swift;
    }
    const snippetProps = {
      copyRanges: this.props.copyRanges || undefined,
      filename: this.props.filename || undefined,
      link: this.props.link || undefined,
      options: objectiveC && swift ? [{
        label: 'Swift',
        language: 'swift',
        preferredLanguage: this.props.context.preferredLanguage.ios === 'swift'
      }, {
        label: 'Objective-C',
        language: 'objectiveC',
        preferredLanguage: this.props.context.preferredLanguage.ios === 'objectiveC'
      }] : undefined
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "my24 prose"
    }, /*#__PURE__*/React.createElement(ToggleableCodeBlock, _extends({}, snippetProps, {
      id: id,
      code: selectedCode,
      highlightedCode: this.props.context.preferredLanguage.ios === 'objectiveC' ? highlightObjectivec(selectedCode) : highlightSwift(selectedCode),
      changeLanguage: context.changeLanguage['ios'],
      limitHeight: limitHeight,
      selectedLanguage: context.preferredLanguage.ios
    })));
  }
}
ContextlessIosViewControllerToggle.defaultProps = {
  limitHeight: true
};