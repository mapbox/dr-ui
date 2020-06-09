/*
Basic.
*/
import React from 'react';
import PageLayout from '../page-layout';

export default class Basic extends React.Component {
  render() {
    return (
      <PageLayout
        sidebarContent={<div>Some content</div>}
        sidebarTitle="Some title"
        sidebarContentStickyTop={0}
        sidebarContentStickyTopNarrow={0}
        stickyEnabled={false} // Set this to {true}. It's disabled for the purposes of the catalog layout.
      >
        <div>Doc content</div>
      </PageLayout>
    );
  }
}
