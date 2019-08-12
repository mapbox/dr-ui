---
title: Frontmatter
description: Learn about all the options for adding data to your page.
contentType: guide
order: 6
---

Frontmatter is enforced through [remark-lint-mapbox/frontmatter](https://github.com/mapbox/remark-lint-mapbox/tree/master/frontmatter), which is already installed on this repo.

Frontmatter looks like this on markdown pages:

```
---
title: Frontmatter
description: Learn about all the options for adding data to your page.
contentType: guide
order: 6
---
```

And like this on JS pages:

```js
/*---
title: Frontmatter
description: Learn about all the options for adding data to your page.
contentType: guide
order: 6
---*/
```

💡 Every page must have a `title`, `description`, and `contentType`. For a complete list of frontmatter items and available values, see the [enforced values and rules](https://github.com/mapbox/remark-lint-mapbox/tree/master/frontmatter#enforced-values-and-rules) list.
