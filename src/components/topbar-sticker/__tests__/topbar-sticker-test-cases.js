import React from 'react';
import TopbarSticker from '../topbar-sticker';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'For display only',
  element: <Basic />
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
