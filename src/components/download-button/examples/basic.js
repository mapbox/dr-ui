/*
Basic.
*/
import React from 'react';
import DownloadButton from '../download-button';

// eslint-disable-next-line react/prefer-stateless-function
export default class Basic extends React.Component {
  render() {
    return <DownloadButton fileType="CSV" href="../files/airports.csv" />;
  }
}
