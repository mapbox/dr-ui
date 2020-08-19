import React from 'react';
import ProductMenu from '../product-menu';

import Search from '../../search';
import PageLayout from '../../page-layout/page-layout';
import NavigationAccordion from '../../navigation-accordion/navigation-accordion';
import Topbar from '../../topbar/topbar';
import TabList from '@mapbox/mr-ui/tab-list';
import Basic from '../examples/basic';
import Beta from '../examples/beta';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.locationMenu = {
  component: ProductMenu,
  description: "Fake items, but one matches this test case's location",
  props: {
    productName: 'Items in here',
    homePage: '/api-documentation/'
  }
};

testCases.arbitraryElement = {
  component: ProductMenu,
  description: 'Product menu with something arbitrary in it',
  props: {
    productName: 'Pizza pie',
    homePage: '/api-documentation/'
  }
};

testCases.customStyle = {
  description: 'Custom trigger style - display only',
  element: (
    <div className="bg-gray-dark py6">
      <ProductMenu
        productName="Light on dark"
        lightText={true}
        homePage="/api-documentation/"
      />
    </div>
  )
};

testCases.beta = {
  description: 'Beta product',
  element: <Beta />
};

testCases.betaLong = {
  component: ProductMenu,
  description: 'Beta product',
  props: {
    productName: 'Navigation SDK for Android',
    tag: 'beta',
    homePage: '/vision/'
  }
};

testCases.withLayout = {
  description: 'with page layout',
  element: (
    <div>
      <Topbar>
        <div className="grid">
          <div className="col col--4-mm col--12">
            <div className="ml24-mm pt12">
              <ProductMenu
                productName="Navigation SDK for Android"
                tag="beta"
                homePage="/api/"
              />
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

testCases.customTag = {
  component: ProductMenu,
  description: 'Beta product',
  props: {
    productName: 'Potato SDK',
    tag: 'custom',
    customTagProps: {
      customLabel: 'Custom',
      customTooltipText: 'This is a custom tag.',
      customStyles: {
        background: '#FEDADA',
        color: '#bb2224',
        borderColor: '#FD8383'
      }
    },
    homePage: '#'
  }
};

export { testCases };
