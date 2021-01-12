---
title: Lazy loading
description: Learn when to use lazy loading.
order: 5
layout: page
contentType: guide
products:
  - Documentation
prependJs:
  - "import Lazy from '../../../../src/components/lazy/lazy';"
---

{{<Lazy lazyClasses="h30-mm h36" lazyComponent={() => import('../../../../src/components/search/examples/basic.js')} />}}
