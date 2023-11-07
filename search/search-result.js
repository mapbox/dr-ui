function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import LevelIndicator from '../level-indicator/level-indicator';
import ReactHtmlParser from 'react-html-parser';
import Icon from '@mapbox/mr-ui/icon';
import { titleGenerator } from './title-generator';
class SearchResult extends React.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "returnRaw", item => {
      if (item && item.raw && typeof item.raw !== 'string') return item.raw.join(', ');else return item && item.raw ? item.raw : '';
    });
  }
  render() {
    const {
      props
    } = this;
    const getItemProps = props.downshiftProps ? props.downshiftProps.getItemProps : () => {};
    const highlighted = props.downshiftProps && props.downshiftProps.highlightedIndex === props.index;
    const site = this.returnRaw(props.result.site);
    const subsite = this.returnRaw(props.result.subsite);
    const type = this.returnRaw(props.result.contentType);
    const level = this.returnRaw(props.result.level);
    const language = this.returnRaw(props.result.codeLanguage);
    const title = this.returnRaw(props.result.title);
    const url = this.returnRaw(props.result.url);
    const excerpt = props.result.excerpt ? props.result.excerpt.snippet || props.result.excerpt.raw : '';
    const resultTitle = titleGenerator(title, subsite, site).reverse();
    return /*#__PURE__*/React.createElement("div", getItemProps({
      key: props.result.id.raw,
      item: props.result,
      className: `${highlighted && 'bg-gray-faint'} px12 ${props.themeCompact ? 'py6 txt-s' : 'py12'} link--gray cursor-pointer`
    }), title && url && /*#__PURE__*/React.createElement("div", {
      className: "block link--gray"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb3 txt-s"
    }, /*#__PURE__*/React.createElement("span", {
      className: "txt-bold"
    }, resultTitle.map((t, index) => {
      return /*#__PURE__*/React.createElement("span", {
        key: `${props.result.id.raw}-${t}`
      }, t, resultTitle.length !== index + 1 && /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        inline: true
      }));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mb6 txt-ms"
    }, ReactHtmlParser(excerpt, {
      transform: (node, i) => {
        if (node.name === 'em') {
          return /*#__PURE__*/React.createElement("em", {
            key: i,
            className: "txt-bold",
            style: {
              color: '#4264fb'
            }
          }, ' ', node.children[0].data);
        }
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "txt-s"
    }, type ? /*#__PURE__*/React.createElement("div", {
      className: "inline-block"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      size: 12,
      name: "book",
      inline: true
    })), /*#__PURE__*/React.createElement("span", {
      className: "ml3 txt-capitalize"
    }, type)) : '', language ? /*#__PURE__*/React.createElement("div", {
      className: "ml12 inline-block"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      size: 12,
      name: "code",
      inline: true
    })), /*#__PURE__*/React.createElement("span", {
      className: "ml6"
    }, language)) : '', level ? /*#__PURE__*/React.createElement("div", {
      className: "ml12 inline-block"
    }, /*#__PURE__*/React.createElement(LevelIndicator, {
      level: parseInt(level)
    })) : '')));
  }
}
export default SearchResult;