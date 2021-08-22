import React from 'react';
import Button from '@mapbox/mr-ui/button';
import IconText from '@mapbox/mr-ui/icon-text';
import PropTypes from 'prop-types';

export default class DownloadButton extends React.PureComponent {
  render() {
    const { href, text } = this.props;
    const fileType = href.split('.').pop().toUpperCase();
    const fileName = href.split('/').pop();

    return (
      <Button
        href={href}
        passthroughProps={{
          download: fileName,
          className: 'unprose btn btn--blue round-full py12 px24 txt-s my18'
        }}
      >
        <IconText iconBefore="arrow-down">
          {text || 'Download ' + fileType + ' file'}
        </IconText>
      </Button>
    );
  }
}

DownloadButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string
};
