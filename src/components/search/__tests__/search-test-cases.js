import React from 'react';
import Search from '../search';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import Basic from '../examples/basic';
import DisableModal from '../examples/disabled';
import Narrow from '../examples/narrow';

const testCases = {};

testCases.basic = {
  description: 'Basic search',
  element: <Basic />
};

testCases.site = {
  component: Search,
  description: 'Basic search with `site` set to show filter toggle',
  props: {
    site: 'API'
  }
};

testCases.dark = {
  description: 'Search with dark background, custom placeholder',
  element: (
    <div className="py24 px24 bg-gray-dark">
      <div className="w-full">
        <Search inputId="search2" placeholder="SEARCH!" background="dark" />
      </div>
    </div>
  )
};

testCases.disableModal = {
  description: 'Search with `disableModal` option set',
  element: <DisableModal />
};

testCases.narrow = {
  description: 'Search with `narrow` option set',
  element: <Narrow />
};

testCases.withConnector = {
  component: Search,
  description: 'Search with custom connector',
  props: {
    inputId: 'search5',
    connector: new SiteSearchAPIConnector({
      engineKey: '123',
      engineName: 'find-it',
      documentType: ['hams']
    })
  }
};

export { testCases };
