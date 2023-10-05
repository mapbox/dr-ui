import React from 'react';
import PropTypes from 'prop-types';
import ChevronousText from '@mapbox/mr-ui/chevronous-text';
import MapWrapper from '../map-wrapper/map-wrapper';
export default class DemoIframe extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mapboxAccessToken: this.props.MapboxAccessToken || undefined
    };
  }
  componentDidMount() {
    if (typeof MapboxPageShell !== 'undefined') {
      MapboxPageShell.afterUserCheck(() => {
        this.setState({
          mapboxAccessToken: MapboxPageShell.getMapboxAccessToken()
        });
      });
    }
  }
  render() {
    let {
      src
    } = this.props;
    const {
      title,
      gl,
      height
    } = this.props;
    const {
      mapboxAccessToken
    } = this.state;
    // check to see if the src is making a request to mapbox api
    const makeRequest = src.indexOf('MapboxAccessToken') > -1;
    // if it's making a request and the mapboxAccessToken hasn't loaded yet
    // return null (nothing) until it has loaded
    if (makeRequest && !mapboxAccessToken) {
      return null;
    }
    // if the src has an `access_token` value, replace it with mapboxAccessToken
    // otherwise use the src as is
    src = makeRequest ? src.replace('MapboxAccessToken', mapboxAccessToken) : src;
    const contents = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("iframe", {
      title: title,
      src: src,
      width: "100%",
      height: height
    }), /*#__PURE__*/React.createElement("a", {
      href: src,
      className: "link"
    }, /*#__PURE__*/React.createElement(ChevronousText, {
      text: "View fullscreen demo"
    })));
    return gl ? /*#__PURE__*/React.createElement(MapWrapper, {
      height: height + 30 /* add space for demo link */
    }, contents) : contents;
  }
}
DemoIframe.defaultProps = {
  gl: true,
  height: 400
};