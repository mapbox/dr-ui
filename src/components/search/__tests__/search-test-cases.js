import React from 'react';
import Search from '../search';
import PageLayout from '../../page-layout/page-layout';
import NavigationAccordion from '../../navigation-accordion/navigation-accordion';
import TopbarSticker from '../../topbar-sticker/topbar-sticker';
import ProductMenu from '../../product-menu/product-menu';

const testCases = {};

testCases.basicNote = {
  component: Search,
  props: {},
  description: 'Search'
};

testCases.darkNote = {
  description: 'Search with dark background, custom placeholder',
  element: (
    <div className="py24 px24 bg-blue">
      <div className="wmax360">
        <Search placeholder="SEARCH!" />
      </div>
    </div>
  )
};

testCases.commonUseCase = {
  description: 'Search placement with `collapse` option set',
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
            <div className="col col--7-mm col--12 flex-parent flex-parent--end-main-mm flex-parent--center-cross align-r mb12 mb0-mm">
              <div className="inline-block">Navigation Link 1</div>
              <div className="ml12 inline-block">Navigation Link 2</div>
            </div>

            <div className="col col--1-mm col--12 flex-parent flex-parent--end-main-mm flex-parent--center-cross">
              <div className="wmax360 w-full mb12 mb0-mm">
                <Search collapse={true} />
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
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Curabitur blandit tempus porttitor. Duis
              mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio sem nec elit. Nullam quis risus eget urna mollis
              ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et. Duis mollis, est non commodo luctus, nisi
              erat porttitor ligula, eget lacinia odio sem nec elit.
            </p>
            <p>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem
              lacinia quam venenatis vestibulum. Integer posuere erat a ante
              venenatis dapibus posuere velit aliquet.
            </p>
          </div>
        </PageLayout>
      </div>
    </div>
  )
};

export default { testCases };
