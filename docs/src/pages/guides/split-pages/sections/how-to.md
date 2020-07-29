---
title: How to use spit pages
description: An introduction to use split pages.
order: 2
splitPage: true
prependJs:
  - "import Note from '../../../../../../src/components/note/note';"
  - "import MainPage from '!raw-loader!../index.js';"
  - "import SubOne from '!raw-loader!./intro.md';"
  - "import SplitPageShell from '!raw-loader!../../../../components/split-page-shell.js';"
  - "import CodeSnippet from '../../../../../../src/components/code-snippet/code-snippet';"
  - "import { highlightJsx } from '../../../../../../src/components/highlight/jsx';"
  - "import { highlightHtml } from '../../../../../../src/components/highlight/html';"
---

## How to use split pages

### 1. Create the main page

- You must add `splitPages: true` to the frontMatter.
- Add `order` to designate the order of appears in the `NavgiationAccordion`.
- Import each markdown file in the main page.
- Import the splitPages function to override the page's headings.
- It's usually a good idea to set `hideFeedback: true`.

{{ <div className="mb18"><CodeSnippet code={`${MainPage}`} highlighter={() => highlightJsx} filename="src/pages/guides/sections/index.js" /></div>}}

{{ <Note> }}
The main file must be a JavaScript file to make sure the scroll spy on the sidebar works correctly.
{{</Note>}}

### 2. Create the split pages

- Create a folder, `sections`, adjacent to the main page.
- Create markdown file for each page.
- Add `splitPage: true` to the frontMatter.
- Add `order` to designate the order the page appears.

{{ <CodeSnippet code={`${SubOne}`} highlighter={() => highlightHtml} filename="src/pages/guides/sections/intro.md" />}}

### 3. Create split-page-shell

You will need a wrapper to handle each split page and update the batfish.config.js to use that page shell:

{{ <CodeSnippet code={`jsxtremeMarkdownOptions: {
getWrapper: resource => {
  if (/\/sections\//.test(resource)) {
    return path.join(
      __dirname,
      './src/components/split-page-shell.js'
    );
  } else {
    return path.join(__dirname, 'src/components/page-shell.js')
  }
}`} highlighter={() => highlightJsx} filename="batfish.config.js" />}}

In `split-page-shell`, it's a usually a good idea to add the Feedback module with the `section` prop set to the title of the split page.

{{ <CodeSnippet code={`${SplitPageShell}`} highlighter={() => highlightJsx} filename="src/components/split-page-shell.js" />}}

### 4. Create redirects

You will need to create redirects in [subdomain-docs](https://github.com/mapbox/subdomain-docs).

See [Redirects for Studio Manual reference "sections" pages #75](https://github.com/mapbox/subdomain-docs/pull/75) for a similiar example.
