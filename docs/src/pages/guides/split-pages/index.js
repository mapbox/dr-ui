/*---
title: Split pages
description: This is the first section
splitPages: true
order: 3
layout: accordion
contentType: API
---*/

import React from 'react';

// Import each markdown file.
import Intro from './sections/intro.md';
import HowTo from './sections/how-to.md';
import Limitations from './sections/limitations.md';
import TagDebugger from './sections/tag-debugger.md';
import PageShell from '../../../components/page-shell';

// Import splitPage function
import splitPages from '@mapbox/batfish/data/split-pages'; // eslint-disable-line

export default class Page extends React.Component {
  render() {
    const { location } = this.props;
    // Override the combines headings in the sidebar
    const headings = splitPages[location.pathname].headings;
    return (
      <PageShell headings={headings} {...this.props}>
        <Intro {...this.props} />
        <HowTo {...this.props} />
        <Limitations {...this.props} />
        <TagDebugger {...this.props} />
      </PageShell>
    );
  }
}
