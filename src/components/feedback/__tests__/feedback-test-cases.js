import Feedback from '../feedback';

import React from 'react';
import PageLayout from '../../page-layout/page-layout';
import NavigationAccordion from '../../navigation-accordion/navigation-accordion';
import TopbarSticker from '../../topbar-sticker/topbar-sticker';
import ProductMenu from '../../product-menu/product-menu';

const testCases = {};

testCases.basic = {
  component: Feedback,
  description: 'Basic',
  props: {
    site: 'Help',
    webhook: {
      staging:
        'https://fbtme2z025.execute-api.us-east-1.amazonaws.com/hookshot/webhook',
      production:
        'https://2n40g6lyc9.execute-api.us-east-1.amazonaws.com/hookshot/webhook'
    },
    location: {}
  }
};

testCases.type = {
  component: Feedback,
  description: 'Change type',
  props: {
    type: 'section',
    site: 'Help',
    webhook: {
      staging:
        'https://fbtme2z025.execute-api.us-east-1.amazonaws.com/hookshot/webhook',
      production:
        'https://2n40g6lyc9.execute-api.us-east-1.amazonaws.com/hookshot/webhook'
    },
    location: {}
  }
};

testCases.common = {
  description: 'Feedback placement',
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

            <Feedback
              site="Help"
              location={{}}
              webhook={{
                staging:
                  'https://fbtme2z025.execute-api.us-east-1.amazonaws.com/hookshot/webhook',
                production:
                  'https://2n40g6lyc9.execute-api.us-east-1.amazonaws.com/hookshot/webhook'
              }}
            />
          </div>
        </PageLayout>
      </div>
    </div>
  )
};

export { testCases };
