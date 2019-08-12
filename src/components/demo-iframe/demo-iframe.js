import React from 'react';
import PropTypes from 'prop-types';
import ChevronousText from '@mapbox/mr-ui/chevronous-text';
import GLWrapper from '../gl-wrapper/gl-wrapper';

export default class DemoIframe extends React.Component {
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
    const { props } = this;
    // check to see if the src is making a request to mapbox api
    const makeRequest = props.src.indexOf('MapboxAccessToken') > -1;
    // if it's making a request and the mapboxAccessToken hasn't loaded yet
    // return null (nothing) until it has loaded
    if (makeRequest && !this.state.mapboxAccessToken) {
      return null;
    }
    // if the src has an `access_token` value, replace it with mapboxAccessToken
    // otherwise use the src as is
    const src = makeRequest
      ? props.src.replace('MapboxAccessToken', this.state.mapboxAccessToken)
      : props.src;

    return (
      <GLWrapper>
        <iframe src={src} width="100%" height="400px" />
        <a href={src} className="link">
          <ChevronousText text="View fullscreen demo" />
        </a>
      </GLWrapper>
    );
  }
}

DemoIframe.propTypes = {
  src: PropTypes.string.isRequired,
  MapboxAccessToken: PropTypes.string
};
