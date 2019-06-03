/*
Basic.
*/
import React from 'react';
import TopbarSticker from '../topbar-sticker';

export default class Example extends React.Component {
  render() {
    return (
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
    );
  }
}
