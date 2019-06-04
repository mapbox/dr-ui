import React from 'react';
import Search from '../search';
import PageLayout from '../../page-layout/page-layout';
import NavigationAccordion from '../../navigation-accordion/navigation-accordion';
import TopbarSticker from '../../topbar-sticker/topbar-sticker';
import ProductMenu from '../../product-menu/product-menu';

const testCases = {};

testCases.basic = {
  component: Search,
  description: 'Basic search',
  props: {}
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
  component: Search,
  description: 'Search with `disableModal` option set',
  props: {
    inputId: 'search3',
    disableModal: true
  }
};

testCases.narrow = {
  component: Search,
  description: 'Search with `narrow` option set',
  props: {
    inputId: 'search4',
    narrow: true
  }
};

testCases.withLayout = {
  description: 'Search with `narrow` option set',
  element: (
    <div>
      <TopbarSticker>
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
            <div className="col col--7-mm col--12 flex-parent flex-parent--main-mm flex-parent--center-cross align-r mb12 mb0-mm">
              <div className="inline-block">Overview</div>
              <div className="ml18 inline-block">Examples</div>
              <div className="ml18 inline-block">Help</div>
              <div className="ml18 inline-block">API Reference</div>
            </div>

            <div className="col col--1-mm col--12 flex-parent flex-parent--end-main-mm flex-parent--center-cross">
              <div className="w-full mb12 mb0-mm mr36">
                <Search inputId="search4" />
              </div>
            </div>
          </div>
        </div>
      </TopbarSticker>
      <div className="limiter">
        <PageLayout
          sidebarTitle={<div className="ml36">Section title</div>}
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
              onDropdownChange={() => {}}
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

export { testCases };
