import React from 'react';
import Button from '@mapbox/mr-ui/button';
import IconText from '@mapbox/mr-ui/icon-text';
import PropTypes from 'prop-types';
export default class DownloadButton extends React.PureComponent {
  render() {
    const {
      href,
      text
    } = this.props;
    let fileType = href.split('.').pop().toUpperCase();
    const fileName = href.split('/').pop();
    if (fileType === 'GEOJSON') {
      fileType = 'GeoJSON';
    }
    return /*#__PURE__*/React.createElement(Button, {
      href: href,
      passthroughProps: {
        download: fileName,
        className: 'unprose btn btn--blue round-full py12 px24 txt-s my18'
      }
    }, /*#__PURE__*/React.createElement(IconText, {
      iconBefore: "arrow-down"
    }, text || 'Download ' + fileType));
  }
}