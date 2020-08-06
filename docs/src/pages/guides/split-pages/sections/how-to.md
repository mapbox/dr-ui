---
title: How to use spit pages
description: An introduction to use split pages.
order: 2
splitPage: true
hideFeedback: true
contentType: guide
products:
  - Mapbox fundamentals
prependJs:
  - "import MainPage from '!raw-loader!../index.js'; //eslint-disable-line"
  - "import SubOne from '!raw-loader!./intro.md'; //eslint-disable-line"
  - "import SplitPageShell from '!raw-loader!../../../../components/split-page-shell.js'; //eslint-disable-line"
  - "import CodeSnippet from '../../../../../../src/components/code-snippet/code-snippet';"
  - "import { highlightJsx } from '../../../../../../src/components/highlight/jsx';"
  - "import { highlightHtml } from '../../../../../../src/components/highlight/html';"
---

## How to use split pages

Before you begin using this pattern, read through [the limitations](#limitations) to make sure this is the right option for your site.

### 1. Create the main page

The main page is where all the partial markdown files will be combined and displayed.

1. Create an `index.js` file. The main file must be a JavaScript file to make sure the scroll spy on the sidebar works correctly.
2. In the frontmatter of the page:
   - Add `splitPages: true` to the frontmatter.
   - Add `order` to choose the order of appears in the `NavgiationAccordion`.
   - Set `hideFeedback: true` (usually).
3. Import each markdown file in the main page.
4. Import the `splitPages` function to override the page's headings. (Depending on your set-up, this step may happen in the site's page-shell instead.)

#### Example

{{ <div className="mb18"><CodeSnippet code={`${MainPage}`} highlighter={() => highlightJsx} filename="src/pages/guides/split-pages/index.js" /></div>}}

### 2. Create the split pages

1. Create new directory, `sections/`, in the same folder of the `index.js` you create in the previous step.
2. Create markdown file for each page in the `sections/` directory.
3. To each markdown file:
   - Add `splitPage: true` to the frontmatter.
   - Add `order:` to chose the order of pages - this is necessary in generating the headings. You will need to make sure this is the same order as the imported partial files in the main page.

#### Example

{{ <CodeSnippet code={`${SubOne}`} highlighter={() => highlightHtml} filename="src/pages/guides/split-pages/sections/intro.md" />}}

### 3. Update the Batfish configuration

You will need to update the Batfish configuration to define the wrapper component for the partial markdown files and load the [`split-pages`](/dr-ui/guides/batfish-helpers/#split-pages) Batfish helper function.

#### SplitPage wrapper

Use the [SplitPage component](https://github.com/mapbox/dr-ui/blob/main/src/components/page-layout/split-page.js) (`@mapbox/dr-ui/page-layout/split-page`) to create a wrapper for each markdown partial file. You will likely also need to create a local wrapper component to pass the page's constants file to the component - the Feedback component requires data from the constants file.

1. Create a local component: `split-page-shel.js`.
2. Import the SplitPage component: `import SplitPage from '@mapbox/dr-ui/page-layout/split-page';`
3. Import the site's local constant's file.
4. Pass all props and the `constants` to the SplitPage component.

##### Example

{{ <CodeSnippet code={`${SplitPageShell}`} highlighter={() => highlightJsx} filename="src/components/split-page-shell.js" />}}

#### Define SplitPage wrapper in the Batfish configuration

1. Update `batfish.config.js` to define the new wrapper on the markdown partial files:

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

- If you do not want the Feedback component to appear after each partial markdown page, you can reference `@mapbox/dr-ui/page-layout/split-page` instead of the local `split-page-shell.js` in `batfish.config.js`.
- You can turn off the Feedback component from any partial markdown page by setting `hideFeedback: true` in the frontmatter of the desired page.

#### Use the split-pages Batfish data selector

The split-pages Batfish data selector will combine metadata and headings for all partial markdown files and create a single source for the main page to reference.

To add the split-pages data selector to your site:

1. Import the split-pages function in `batfish.config.js`.
2. Create a new `splitPages` dataSelector that references the `buildSplitPages` function.

<!-- copyeditor ignore mapbox -->

{{ <CodeSnippet code={`const {
buildSplitPages
} = require('@mapbox/dr-ui/helpers/batfish/split-pages.js');

module.exports = () => {
return {
dataSelectors: {
splitPages: (data) => buildSplitPages(data)
}
};
};`} highlighter={() => highlightJsx} filename="batfish.config.js" />}}

Learn more about the [`split-pages`](/dr-ui/guides/batfish-helpers/#split-pages) Batfish helper function.

### 4. Create redirects

You will need to create redirects in [subdomain-docs](https://github.com/mapbox/subdomain-docs) to redirect the partial files to the main file to prevent users, or more likely web crawlers from accessing the page partials.

See [Redirects for Studio Manual reference "sections" pages #75](https://github.com/mapbox/subdomain-docs/pull/75) for a similar example.
