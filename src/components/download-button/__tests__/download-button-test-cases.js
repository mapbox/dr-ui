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
    fileType: 'PDF',
    href: '../files/atlas-architecture-diagram.pdf'
  }
};

testCases.png = {
  component: DownloadButton,
  description: 'DownloadButton for PNG',
  props: {
    fileType: 'PNG',
    href: '../files/shop-15.png'
  }
};

export { testCases, noRenderCases };
