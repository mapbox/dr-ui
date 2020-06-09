import React from 'react';
import TopbarSticker from '../topbar-sticker';
import ProductMenu from '../../product-menu/product-menu';
import Search from '../../search/search';

const testCases = {};

testCases.basic = {
  description: 'For display only',
  element: (
    <div style={{ background: 'pink', height: 3000 }}>
      <div className="px24 py12">Above the bar.</div>
      <TopbarSticker>
        <div className="limiter">
          <div className="grid">
            <div className="col col--4-mm col--12">
              <div className="ml24-mm pt12" style={{ height: 52 }}>
                <ProductMenu productName="Dr. UI" homePage="/dr-ui/" />
              </div>
            </div>
            <div className="col col--8-mm col--12">
              <div className="flex-parent-mm flex-parent--center-cross flex-parent--end-main h-full-mm wmax300 wmax-full-mm mb0-mm mb12">
                <Search site="dr-ui" />
              </div>
            </div>
          </div>
        </div>
      </TopbarSticker>
      <div className="px24 py12">
        Below the bar, with lots of space to scroll.
      </div>
    </div>
  )
};

testCases.unStickSooner = {
  description: 'Unsticks at 900px',
  element: (
    <div style={{ background: 'blue', height: 3000 }}>
      <div className="px24 py12">Above the bar.</div>
      <TopbarSticker unStickWidth={900}>
        <div className="limiter">
          <div className="px24 py12">
            I'm going to unstick at 900px wide or less!
          </div>
        </div>
      </TopbarSticker>
      <div className="px24 py12">
        Below the bar, with lots of space to scroll.
      </div>
    </div>
  )
};

export { testCases };
