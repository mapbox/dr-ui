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
    let { src } = this.props;
    const { title, gl, height } = this.props;
    const { mapboxAccessToken } = this.state;
    // check to see if the src is making a request to mapbox api
    const makeRequest = src.indexOf('MapboxAccessToken') > -1;
    // if it's making a request and the mapboxAccessToken hasn't loaded yet
    // return null (nothing) until it has loaded
    if (makeRequest && !mapboxAccessToken) {
      return null;
    }
    // if the src has an `access_token` value, replace it with mapboxAccessToken
    // otherwise use the src as is
    src = makeRequest
      ? src.replace('MapboxAccessToken', mapboxAccessToken)
      : src;

    const iframeHeight = height || 400;

    const contents = (
      <div>
        <iframe title={title} src={src} width="100%" height={iframeHeight} />
        <a href={src} className="link">
          <ChevronousText text="View fullscreen demo" />
        </a>
      </div>
    );

    return gl ? (
      <MapWrapper height={iframeHeight + 30 /* add space for demo link */}>
        {contents}
      </MapWrapper>
    ) : (
      contents
    );
  }
}

DemoIframe.defaultProps = {
  gl: true
};

DemoIframe.propTypes = {
  /** The absolute url to the iframe. */
  src: PropTypes.string.isRequired,
  /** The iframe content contains Mapbox GL. Default `true`. */
  gl: PropTypes.bool,
  /** Replace instance of `MapboxAccessToken` in the `src` prop with the value of this Mapbox access token. */
  MapboxAccessToken: PropTypes.string,
  /** Height of the iframe in pixels. */
  height: PropTypes.number,
  /** A title to describe the content of the iframe. */
  title: PropTypes.string.isRequired
};
