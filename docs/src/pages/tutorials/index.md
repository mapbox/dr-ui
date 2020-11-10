---
title: Tutorials
description: Example of a Help page.
contentType: example
navOrder: 4
layout: full
hideFeedback: true
products:
  - Documentation
prependJs:
  - "import HelpPage from '../../../../src/components/help-page/help-page';"
  - "import data from '../../../../src/helpers/batfish/__tests__/fixtures/related-mts.json'"
---

{{<HelpPage data={[{pages: data[0].pages}]} />}}
