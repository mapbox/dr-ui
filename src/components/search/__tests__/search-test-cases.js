import React from 'react';
import Search from '../search';
import PageLayout from '../../page-layout/page-layout';
import NavigationAccordion from '../../navigation-accordion/navigation-accordion';
import Topbar from '../../topbar/topbar';
import ProductMenu from '../../product-menu/product-menu';
import TabList from '@mapbox/mr-ui/tab-list';
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

testCases.withLayout = {
  description: 'Search with `narrow` option set',
  element: (
    <div>
      <Topbar>
        <div className="limiter">
          <div className="grid grid--gut36 mr-neg36 mr0-mm">
            <div className="col col--4-mm col--12">
              <div
                className="ml24-mm  flex-parent flex-parent--center-cross"
                style={{ height: 52 }}
              >
                <ProductMenu productName="API Documentation" homePage="/api/" />
              </div>
            </div>
            <div className="col col--6-mm col--12 flex-parent flex-parent--main-mm flex-parent--center-cross align-r mb12 mb0-mm">
              <TabList
                items={[
                  { id: 'one', label: 'Label one' },
                  { id: 'two', label: 'Label two' },
                  { id: 'three', label: 'Label three' },
                  { id: 'four', label: 'Label four' }
                ]}
              />
            </div>

            <div className="col col--2-mm col--12 flex-parent flex-parent--end-main-mm flex-parent--center-cross">
              <div className="w-full mb12 mb0-mm mr36">
                <Search inputId="search4" />
              </div>
            </div>
          </div>
        </div>
      </Topbar>
      <div className="limiter">
        <PageLayout
          sidebarTitle="Section title"
          sidebarContent={
            <NavigationAccordion
              currentPath="page-one"
              contents={{
                firstLevelItems: [
                  {
                    title: 'Title one',
                    path: 'page-one'
                  },
                  {
                    title: 'Title two',
                    path: 'page-two'
                  }
                ],
                secondLevelItems: [
                  {
                    title: 'Heading one',
                    path: 'heading-one'
                  },
                  {
                    title: 'Heading two',
                    path: 'heading-two'
                  }
                ]
              }}
            />
          }
          sidebarContentStickyTop={60}
          sidebarContentStickyTopNarrow={0}
          sidebarStackedOnNarrowScreens={true}
        >
          <div className="prose">
            <h1>Title</h1>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
          </div>
        </PageLayout>
      </div>
    </div>
  )
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
