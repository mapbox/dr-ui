/*
Basic.
*/
import React from 'react';
import TopbarSticker from '../topbar-sticker';
import ProductMenu from '../../product-menu/product-menu';
import Search from '../../search/search';

export default class Example extends React.Component {
  render() {
    return (
      <div className="h300">
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
    );
  }
}
