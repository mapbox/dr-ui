import React from 'react';
import Basic from '../examples/basic';
import DownloadButton from '../download-button';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Default DownloadButton',
  element: <Basic />
};

testCases.pdf = {
  component: DownloadButton,
  description: 'DownloadButton for PDF',
  props: {
    href: '../files/atlas-architecture-diagram.pdf'
  }
};

testCases.png = {
  component: DownloadButton,
  description: 'DownloadButton for PNG',
  props: {
    href: '../files/shop-15.png'
  }
};

testCases.zip = {
  component: DownloadButton,
  description: 'DownloadButton with optional text',
  props: {
    href: '../files/test-gzip.csv.gz',
    text: 'Download for iOS'
  }
};

testCases.geojson = {
  component: DownloadButton,
  description: 'DownloadButton for GeoJSON',
  props: {
    href: '../files/sample.geojson'
  }
};

testCases.prose = {
  description: 'DownloadButton with prose class',
  element: (
    <div className="prose">
      <DownloadButton href="../files/shop-15.png" />
    </div>
  )
};

export { testCases, noRenderCases };
