function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import ToggleableCodeBlock from '../toggleable-code-block/toggleable-code-block';
import { highlightJava } from '../highlight/java';
import { highlightKotlin } from '../highlight/kotlin';
export function findSelectedCode(kotlin, java, preference) {
  let selectedCode = '';
  if (kotlin === undefined) {
    /* If there is no kotlin code, use java. */
    selectedCode = java;
  } else if (java === undefined) {
    /* If there is no java code, use kotlin. */
    selectedCode = kotlin;
  } else if (preference === 'kotlin') {
    /** If there is both java and kotlin code,
     * use the preferred language. */
    selectedCode = kotlin;
  } else {
    selectedCode = java;
  }
  return selectedCode;
}
export default class ContextlessAndroidActivityToggle extends React.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "checkPreference", language => {
      return this.props.context.preferredLanguage.android === language;
    });
  }
  render() {
    const {
      context,
      id,
      java,
      kotlin,
      copyRanges,
      filename,
      link,
      limitHeight
    } = this.props;
    const selectedCode = findSelectedCode(kotlin, java, context.preferredLanguage.android);
    const snippetProps = {
      copyRanges: copyRanges || undefined,
      filename: filename || undefined,
      link: link || undefined,
      options: kotlin && java ? [{
        label: 'Java',
        language: 'java',
        preferredLanguage: this.checkPreference('java')
      }, {
        label: 'Kotlin',
        language: 'kotlin',
        preferredLanguage: this.checkPreference('kotlin')
      }] : undefined
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "my24 prose"
    }, /*#__PURE__*/React.createElement(ToggleableCodeBlock, _extends({}, snippetProps, {
      id: id,
      code: selectedCode,
      highlightedCode: this.checkPreference('kotlin') ? highlightKotlin(selectedCode) : highlightJava(selectedCode),
      changeLanguage: context.changeLanguage['android'],
      limitHeight: limitHeight,
      selectedLanguage: context.preferredLanguage.android
    })));
  }
}