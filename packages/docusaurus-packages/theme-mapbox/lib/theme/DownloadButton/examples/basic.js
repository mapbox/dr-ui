/*
Basic.
*/
import React from 'react';
import DownloadButton from '../download-button';

export default class Basic extends React.PureComponent {
  render() {
    return <DownloadButton href="../files/airports.csv" />;
  }
}
