/*---
title: Marsupials
description: This is the first section
splitPages: true
order: 2
layout: accordion
contentType: API
hideFeedback: true
---*/

import React from 'react';

// Import each markdown file.
import Kanagroos from './sections/kangaroos.md';
import Opposum from './sections/opposum.md';
import TasmanianDevil from './sections/tasmanian.md';
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
        <Kanagroos location={location} />
        <Opposum location={location} />
        <TasmanianDevil location={location} />
      </PageShell>
    );
  }
}
