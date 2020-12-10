import React from 'react';
import PropTypes from 'prop-types';
import supported from '@mapbox/mapbox-gl-supported';
import Note from '../note';

export default class GLWrapper extends React.Component {
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
  render() {
    // wait for supported() to push to state
    if (this.state.supported === undefined) return <div />;
    const isIe11 =
      typeof window !== 'undefined' && window.document.documentMode;
    return this.state.supported ? (
      this.props.children
    ) : (
      <Note title="Mapbox GL unsupported" theme="warning">
        {isIe11 ? this.renderIEMessage() : this.renderGLMessage()}
      </Note>
    );
  }
}

GLWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
