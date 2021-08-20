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

testCases.zip = {
  component: DownloadButton,
  description: 'DownloadButton for ZIP',
  props: {
    fileType: 'ZIP',
    href: '../files/test-zip.gz'
  }
};

testCases.prose = {
  description: 'DownloadButton with prose class',
  props: {
    fileType: 'PNG',
    href: '../files/shop-15.png'
  },
  element: (
    <div className="prose">
      <DownloadButton href="../files/shop-15.png" />
    </div>
  )
};

export { testCases, noRenderCases };
