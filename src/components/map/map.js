import React from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import GLWrapper from '../gl-wrapper/gl-wrapper';

/*
`Map` performs the following checks to make sure it's safe to load the map:
1. Display a loader.
2. Check with GLWrapper to make sure the user's browser supports GL.
3. Attempt to get the `MapboxPageShell` then checks for an `accessToken` prop.
4. If the user has GL enabled and an accessToken are avilable: remove the loader and load the map.
*/

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.mapContainer = React.createRef();
  }

  // wait for GLWrapper to let us know if we can load the map
  loadMap = status => {
    // if loadMap returns true, we can load the map
    if (status) {
      // make sure there is an accessToken prop or a token from MapboxPageShell
      this.handleToken();
    }
  };

  handleToken = () => {
    const { accessToken } = this.props;
    // check if `MapboxPageShell` is available
    const hasMapboxPageShell = typeof MapboxPageShell !== 'undefined';
    if (hasMapboxPageShell) {
      MapboxPageShell.afterUserCheck(() => {
        this.setToken(MapboxPageShell.getMapboxAccessToken());
      });
    } else if (accessToken) {
      this.setToken(accessToken);
    } else {
      // send error to Sentry?
    }
  };

  // turn off loader and set the token
  setToken = token => {
    this.setState({ loading: false }, () => {
      mapboxgl.accessToken = token;
      // once we have the token, we can load the map
      this.initMap();
    });
  };

  initMap() {
    const {
      style,
      center,
      zoom,
      navControls,
      onMapLoad,
      scrollZoom
    } = this.props;

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: style,
      center: center,
      zoom: zoom
    });

    // add navigation controls
    if (navControls) {
      this.map.addControl(new mapboxgl.NavigationControl());
    }

    // disable scrollZoom
    if (!scrollZoom) {
      this.map.scrollZoom.disable();
    }

    // handle custom function on map load
    if (onMapLoad) {
      this.map.on('load', () => {
        // pass `map` to the custom onMapLoad function to perform changes to it
        onMapLoad(this.map);
      });
    }
  }

  renderMap() {
    const { height, width, themeMapContainer } = this.props;
    return (
      <div
        className={themeMapContainer}
        style={{ width: width, height: height }}
        ref={this.mapContainer}
      />
    );
  }

  renderLoader() {
    const { height } = this.props;
    // height of the loader matches height of map to prevent layout reflow
    return (
      <div style={{ height: height }} className="relative">
        <div className="flex-parent flex-parent--center-cross flex-parent--center-main absolute top right bottom left bg-darken10 z5">
          <div className="flex-child loading" />
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <GLWrapper loadMapCallback={this.loadMap}>
        {loading ? this.renderLoader() : this.renderMap()}
      </GLWrapper>
    );
  }
}

Map.defaultProps = {
  height: 400,
  width: '100%',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 16,
  center: [-73.989, 40.733],
  navControls: false,
  themeMapContainer: '',
  scrollZoom: true
};

Map.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.string,
  zoom: PropTypes.number,
  center: PropTypes.array,
  accessToken: PropTypes.string,
  onMapLoad: PropTypes.func, // function to perform on map load
  navControls: PropTypes.bool, // enable navigation controls
  themeMapContainer: PropTypes.string,
  scrollZoom: PropTypes.bool
};

export default Map;
