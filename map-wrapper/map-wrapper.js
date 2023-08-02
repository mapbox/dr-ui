function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import { supported, notSupportedReason } from '@mapbox/mapbox-gl-supported';
import Note from '../note';

/* set height of map to prevent content shift while mapbox-gl-support makes its decision */
export default class MapWrapper extends React.PureComponent {
  render() {
    const {
      reason,
      children,
      height
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: height
      }
    }, /*#__PURE__*/React.createElement(Map, {
      reason: reason
    }, children));
  }
}
class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    _defineProperty(this, "renderIEMessage", () => {
      return /*#__PURE__*/React.createElement(React.Fragment, null, "Starting with v2.0.0, Mapbox GL JS is no longer compatible with any version of Internet Explorer. If you need to support Internet Explorer, consider using the", ' ', /*#__PURE__*/React.createElement("a", {
        href: "https://docs.mapbox.com/api/maps/static-images/"
      }, "Mapbox Static Images API"), ' ', "for non-interactive maps or using the", ' ', /*#__PURE__*/React.createElement("a", {
        href: "https://docs.mapbox.com/api/maps/static-tiles/"
      }, "Mapbox Static Tiles API"), ' ', "with another library (for example,", ' ', /*#__PURE__*/React.createElement("a", {
        href: "https://docs.mapbox.com/mapbox.js/"
      }, "Mapbox.js"), " or", ' ', /*#__PURE__*/React.createElement("a", {
        href: "https://leafletjs.com/"
      }, "Leaflet"), ") for interactive maps.");
    });
    _defineProperty(this, "renderGLMessage", () => {
      return /*#__PURE__*/React.createElement(React.Fragment, null, "Mapbox GL requires", ' ', /*#__PURE__*/React.createElement("a", {
        className: "link",
        href: "https://caniuse.com/#feat=webgl"
      }, "WebGL support"), ". Please check that you are using a supported browser and that", ' ', /*#__PURE__*/React.createElement("a", {
        className: "link",
        href: "https://get.webgl.org/"
      }, "WebGL is enabled"), ".");
    });
    _defineProperty(this, "determineReason", () => {
      const reason = this.props.reason ? this.props.reason : notSupportedReason();
      if (reason === 'insufficient ECMAScript 6 support') return this.renderIEMessage();
      if (reason === 'insufficient WebGL support') return this.renderGLMessage();else return `Mapbox GL is unsupported due to ${reason}.`;
    });
    this.state = {
      supported: undefined
    };
  }
  componentDidMount() {
    this.setState({
      supported: supported()
    });
  }
  render() {
    // wait for supported() to push to state
    if (this.state.supported === undefined) return /*#__PURE__*/React.createElement("div", null);
    return this.state.supported ? this.props.children : /*#__PURE__*/React.createElement(Note, {
      title: "Mapbox GL unsupported",
      theme: "warning"
    }, this.determineReason());
  }
}