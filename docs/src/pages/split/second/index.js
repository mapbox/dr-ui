/*---
title: Second section
description: This is the second section.
splitPages: true
order: 3
layout: accordion
contentType: API
hideFeedback: true
---*/

import React from 'react';
import SubOne from './sections/sub-one.md';
import SubTwo from './sections/sub-two.md';
import SubThree from './sections/sub-three.md';
import PageShell from '../../../components/page-shell';
import splitPages from '@mapbox/batfish/data/split-pages'; // eslint-disable-line

export default class Page extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <PageShell
        headings={splitPages[location.pathname].headings}
        {...this.props}
      >
        <SubOne location={location} />
        <SubTwo location={location} />
        <SubThree location={location} />
      </PageShell>
    );
  }
}
