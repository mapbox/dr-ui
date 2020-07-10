/*
Topbar with ProductMenu and Search.
*/
import React from 'react';
import Topbar from '../topbar';
import ProductMenu from '../../product-menu/product-menu';
import Search from '../../search/search';

export default class Basic extends React.Component {
  render() {
    return (
      <Topbar>
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
      </Topbar>
    );
  }
}
