import React from 'react';
import PropTypes from 'prop-types';
import supported from '@mapbox/mapbox-gl-supported';
import Note from '../note';
import WarningImage from '../warning-image';

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
  render() {
    // wait for supported() to push to state
    if (this.state.supported === undefined) return <div />;
    return this.state.supported ? (
      this.props.children
    ) : (
      <Note
        title="Mapbox GL unsupported"
        theme="warning"
        imageComponent={<WarningImage color="orange" size="60" />}
      >
        Mapbox GL requires <a href="http://caniuse.com/webgl">WebGL support</a>.
        Please check that you are using a supported browser and that WebGL is{' '}
        <a href="http://get.webgl.org/">enabled</a>.
      </Note>
    );
  }
}

GLWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
