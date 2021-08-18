/*
Basic.
*/
import React from 'react';
import DownloadButton from '../download-button';

// eslint-disable-next-line react/prefer-stateless-function
export default class Basic extends React.Component {
  render() {
    return (
      <DownloadButton
        href="../files/atlas-architecture-diagram.pdf"
        fileName="atlas-architecture-diagram"
        fileType="PDF"
      />
    );
  }
}
