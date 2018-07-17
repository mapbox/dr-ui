import React from 'react';
import TopbarSticker from '../topbar-sticker';

const testCases = {};

testCases.display = {
  description: 'For display only',
  element: (
    <div style={{ background: 'pink', height: 3000 }}>
      <div className="px24 py12">Above the bar.</div>
      <TopbarSticker>
        <div className="px24 py12">
          Here's some content that sticks to the top.
        </div>
      </TopbarSticker>
      <div className="px24 py12">
        Below the bar, with lots of space to scroll.
      </div>
    </div>
  )
};

export { testCases };
