import React from 'react';
import Button from '@mapbox/mr-ui/button';
import IconText from '@mapbox/mr-ui/icon-text';
import PropTypes from 'prop-types';

export default class DownloadButton extends React.PureComponent {
  render() {
    const { href, text } = this.props;
    let fileType = href.split('.').pop().toUpperCase();
    const fileName = href.split('/').pop();

    if (fileType === 'GEOJSON') {
      fileType = 'GeoJSON';
    }

    return (
      <Button
        href={href}
        passthroughProps={{
          download: fileName,
          className: 'unprose btn btn--blue round-full py12 px24 txt-s my18'
        }}
      >
        <IconText iconBefore="arrow-down">
          {text || 'Download ' + fileType}
        </IconText>
      </Button>
    );
  }
}

DownloadButton.propTypes = {
  /** File path to resource that will be downloaded. */
  href: PropTypes.string.isRequired,
  /** Optional custom button text. If this prop is not used, the text will default to "Download {file type}". */
  text: PropTypes.string
};
