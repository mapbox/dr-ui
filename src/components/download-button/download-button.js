import React from 'react';
import Button from '@mapbox/mr-ui/button';
import IconText from '@mapbox/mr-ui/icon-text';
import PropTypes from 'prop-types';

export default class DownloadButton extends React.PureComponent {
  render() {
    const { href } = this.props;
    const fileType = href.split('.').pop().toUpperCase();
    console.log(fileType);
    const fileName = href
      .split('/')
      .pop()
      .replace(/\.\w+$/, '');

    return (
      <Button
        href={href}
        {...(fileType === 'csv'
          ? {}
          : { passthroughProps: { download: fileName } })}
      >
        <IconText iconBefore="arrow-down">Download {fileType} file</IconText>
      </Button>
    );
  }
}

DownloadButton.propTypes = {
  href: PropTypes.string.isRequired
};
