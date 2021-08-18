/*
Basic.
*/
import React from 'react';
import DownloadButton from '../download-button';

export default class Basic extends React.PureComponent {
  render() {
    return <DownloadButton fileType="CSV" href="../files/airports.csv" />;
  }
}
