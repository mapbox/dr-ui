import React from 'react';
import Search from '../search';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import Basic from '../examples/basic';
import DisableModal from '../examples/disabled';
import Narrow from '../examples/narrow';
import Results from './results';

let testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Basic search.',
  element: <Basic />
};

testCases.site = {
  component: Search,
  description: 'Basic search with `site` set to show filter toggle.',
  props: {
    site: 'API'
  }
};

testCases.dark = {
  description: 'Search with dark background, custom placeholder.',
  element: (
    <div className="py24 px24 bg-gray-dark">
      <div className="w-full">
        <Search inputId="search2" placeholder="SEARCH!" background="dark" />
      </div>
    </div>
  )
};

testCases.disableModal = {
  description: 'Search with `disableModal` option set.',
  element: (
    <div className="py6 px6">
      <DisableModal />
    </div>
  )
};

testCases.narrow = {
  description: 'Search with `narrow` option set.',
  element: <Narrow />
};

noRenderCases.withConnector = {
  component: Search,
  description: 'Search with custom connector.',
  props: {
    inputId: 'search5',
    connector: new SiteSearchAPIConnector({
      engineKey: '123',
      engineName: 'find-it',
      documentType: ['hams']
    })
  }
};

testCases.resultsOnly = {
  component: Search,
  description:
    'Set `resultsOnly: true` to true. Select an item to see search results, with a custom message when there are no search results for a particular query.',
  element: <Results />
};

testCases = Object.keys(testCases).reduce((obj, item) => {
  obj[item] = {
    ...testCases[item],
    description: `${testCases[item].description} Open https://app.swiftype.com/engines/docs/analytics/live while developing to watch query usage.`
  };
  return obj;
}, {});

export { testCases, noRenderCases };
