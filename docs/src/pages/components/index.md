---
title: Components
description: UI components for Mapbox documentation projects.
navOrder: 1
layout: example
contentType: reference
products:
  - Documentation
hideSubItems: false
showCards: false
includeFilterBar: true
hideTitle: true
unProse: true
prependJs:
  - "import Note from '../../../../src/components/note'"
  - "import OverviewHeader from '../../../../src/components/overview-header'"
  - "import App from '../../app.js'"
  - "const version = require('../../../../package.json').version; // eslint-disable-line"
---

{{<OverviewHeader
  features={[
    'React components',
    'Support for IE 11 and all modern browsers'
  ]}
  image={<div />}
  title="Dr. UI"
  version={version}
  changelogLink="/dr-ui/changelog/"
  installLink="https://github.com/mapbox/dr-ui/blob/main/README.md"
  ghLink="https://github.com/mapbox/dr-ui"
/>}}

Pronounced "Doctor UI". **D**ocumentation **R**eact **UI** components. [See `@mapbox/mr-ui`](https://mapbox.github.io/mr-ui/).

UI components for Mapbox documentation projects.

{{<Note>}}
This project is for internal Mapbox usage. The code is open source and we appreciate bug reports; but we will only consider feature requests and pull requests from Mapbox developers.
{{</Note>}}

{{<App {...this.props} />}}
