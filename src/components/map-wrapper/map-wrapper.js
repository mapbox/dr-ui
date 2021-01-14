import React from 'react';
import PropTypes from 'prop-types';
import { supported, notSupportedReason } from '@mapbox/mapbox-gl-supported';
import Note from '../note';

export default class MapWrapper extends React.Component {
  render() {
    const { reason, children, height } = this.props;
    return (
      <div style={{ minHeight: height }}>
        <Map reason={reason}>{children}</Map>
      </div>
    );
  }
}

MapWrapper.propTypes = {
  /* The content that should be displayed if the browser supports Mapbox GL. */
  children: PropTypes.node.isRequired,
  /* Override the GL supported reason (often used for testing). */
  reason: PropTypes.string,
  /* The height of map. Required to prevent layout shift. */
  height: PropTypes.number.isRequired
};

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supported: undefined
    };
  }
  componentDidMount() {
    this.setState({ supported: supported() });
  }
  renderIEMessage = () => {
    return (
      <React.Fragment>
        Starting with v2.0.0, Mapbox GL JS is no longer compatible with any
        version of Internet Explorer. If you need to support Internet Explorer,
        consider using the{' '}
        <a href="https://docs.mapbox.com/api/maps/static-images/">
          Mapbox Static Images API
        </a>{' '}
        for non-interactive maps or using the{' '}
        <a href="https://docs.mapbox.com/api/maps/static-tiles/">
          Mapbox Static Tiles API
        </a>{' '}
        with another library (for example,{' '}
        <a href="https://docs.mapbox.com/mapbox.js/">Mapbox.js</a> or{' '}
        <a href="https://leafletjs.com/">Leaflet</a>) for interactive maps.
      </React.Fragment>
    );
  };
  renderGLMessage = () => {
    return (
      <React.Fragment>
        Mapbox GL requires{' '}
        <a className="link" href="https://caniuse.com/#feat=webgl">
          WebGL support
        </a>
        . Please check that you are using a supported browser and that{' '}
        <a className="link" href="https://get.webgl.org/">
          WebGL is enabled
        </a>
        .
      </React.Fragment>
    );
  };

  determineReason = () => {
    const reason = this.props.reason ? this.props.reason : notSupportedReason();
    if (reason === 'insufficient ECMAScript 6 support')
      return this.renderIEMessage();
    if (reason === 'insufficient WebGL support') return this.renderGLMessage();
    else return `Mapbox GL is unsupported due to ${reason}.`;
  };
  render() {
    // wait for supported() to push to state
    if (this.state.supported === undefined) return <div />;
    return this.state.supported ? (
      this.props.children
    ) : (
      <Note title="Mapbox GL unsupported" theme="warning">
        {this.determineReason()}
      </Note>
    );
  }
}

Map.propTypes = {
  /* The content that should be displayed if the browser supports Mapbox GL. */
  children: PropTypes.node.isRequired,
  /* Override the GL supported reason (often used for testing). */
  reason: PropTypes.string
};
