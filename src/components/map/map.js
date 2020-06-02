import React from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import GLWrapper from '../gl-wrapper/gl-wrapper';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }

  // wait for GLWrapper to let us know if we can load the map
  loadMap = status => {
    if (status) {
      this.initMap();
    }
  };

  initMap() {
    const {
      style,
      center,
      zoom,
      accessToken,
      navControls,
      onMapLoad
    } = this.props;

    if (accessToken) {
      mapboxgl.accessToken = accessToken;
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: style,
        center: center,
        zoom: zoom
      });

      if (navControls) {
        this.map.addControl(new mapboxgl.NavigationControl());
      }

      if (onMapLoad) {
        this.map.on('load', () => {
          onMapLoad(this.map); // pass `map` to onMapLoad function to perform changes to it
        });
      }
    }
  }

  renderMap() {
    const { height, width, accessToken } = this.props;
    if (!accessToken) return <div>Missing access token.</div>;
    return (
      <div style={{ width: width, height: height }} ref={this.mapContainer} />
    );
  }

  render() {
    return (
      <GLWrapper loadMapCallback={this.loadMap}>{this.renderMap()}</GLWrapper>
    );
  }
}

Map.defaultProps = {
  height: 400,
  width: '100%',
  style: `mapbox://styles/mapbox/streets-v11`,
  zoom: 16,
  center: [-73.989, 40.733],
  navControls: false
};

Map.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.string,
  zoom: PropTypes.number,
  center: PropTypes.array,
  accessToken: PropTypes.string,
  onMapLoad: PropTypes.func, // function to perform on map load
  navControls: PropTypes.bool // enable navigation controls
};

export default Map;
