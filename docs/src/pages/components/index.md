---
title: Components
description: UI components for Mapbox documentation projects.
navOrder: 1
layout: page
contentType: reference
products:
  - Documentation
unProse: true
prependJs:
  - "import Note from '../../../../src/components/note'"
  - "import App from '../../app.js'"
overviewHeader:
  title: 'Dr. UI'
  features:
    - 'React components to build documentation sites'
    - 'Support for IE 11 and all modern browsers'
  changelogLink: /dr-ui/changelog/
  installLink: https://github.com/mapbox/dr-ui/blob/main/README.md
  ghLink: https://github.com/mapbox/dr-ui
  background: bg-purple-faint
  # lightText: true
  # version: "" dynamic version is set in pages-shell.js
  # image: "" set in page-shell.js
---

Pronounced "Doctor UI". **D**ocumentation **R**eact **UI** components. [See `@mapbox/mr-ui`](https://mapbox.github.io/mr-ui/).

UI components for Mapbox documentation projects.

{{<Note>}}
This project is for internal Mapbox usage. The code is open source and we appreciate bug reports; but we will only consider feature requests and pull requests from Mapbox developers.
{{</Note>}}

{{<App {...this.props} />}}
