import React from 'react';
import Button from '@mapbox/mr-ui/button';
import IconText from '@mapbox/mr-ui/icon-text';
import PropTypes from 'prop-types';

export default class DownloadButton extends React.PureComponent {
  render() {
    const { fileType, href } = this.props;
    const fileName = href
      .toString()
      .split('/')
      .pop()
      .replace(/\.\w+$/, '');

    return (
      <Button
        href={href}
        {...(fileType === 'CSV'
          ? {}
          : { passthroughProps: { download: fileName } })}
      >
        <IconText iconBefore="arrow-down">Download {fileType} file</IconText>
      </Button>
    );
  }
}

DownloadButton.propTypes = {
  href: PropTypes.string.isRequired,
  fileType: PropTypes.oneOf(['CSV', 'PDF', 'PNG', 'ZIP']).isRequired
};
