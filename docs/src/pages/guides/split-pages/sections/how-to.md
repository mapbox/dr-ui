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

Before you begin using this pattern, read about its [limitations](#limitations) to make sure it's the right option for your site.

### 1. Create the main page

The main page is where you will combine all the partial markdown files.

1. Create an `index.js` file, this is the main page. It must be a JavaScript file so that the sidebar scroll spy will work correctly.
2. In the frontmatter of the main page:
   - Add `splitPages: true` to the frontmatter.
   - Add `order` to choose the order in which it will appear in the `NavgiationAccordion`.
   - Set `hideFeedback: true` (usually). If the partial files will have feedback enabled, you'll want to disable the feedback from also appearing at the bottom of the page.
3. Once created, import each partial file in the main page.
4. Import the `splitPages` function to override the page's headings. (Depending on your set-up, this step may happen in the site's page-shell instead.)

#### Example

{{ <div className="mb18"><CodeSnippet code={`${MainPage}`} highlighter={highlightJsx} filename="src/pages/guides/split-pages/index.js" /></div>}}

### 2. Create the split pages

1. Create a new directory, `sections/`, in the same folder as the `index.js` you created in the previous step.
2. In the `sections/` directory, compose your markdown files.
3. In each markdown file:
   - Add `splitPage: true` to the frontmatter.
   - Add `order:` to chose the order in which each section (or partial markdown file) will appear on the main page - this is necessary in generating the headings. You will need to make sure this is the same order as the imported partial files in the main page.

#### Example

{{ <CodeSnippet code={`${SubOne}`} highlighter={highlightHtml} filename="src/pages/guides/split-pages/sections/intro.md" />}}

### 3. Update the Batfish configuration

You will need to update the Batfish configuration to define the wrapper component for the partial markdown files and load the [`split-pages`](/dr-ui/guides/batfish-helpers/#split-pages) Batfish helper function.

#### SplitPage wrapper

Use the [SplitPage component](https://github.com/mapbox/dr-ui/blob/main/src/components/page-layout/split-page.js) (`@mapbox/dr-ui/page-layout/split-page`) as the wrapper for each markdown partial file. You will likely also need to create a local wrapper component to pass the page's constants file to the component since the Feedback component requires data from the constants file.

1. Create a local component: `src/components/split-page-shell.js`.
2. Import the SplitPage component: `import SplitPage from '@mapbox/dr-ui/page-layout/split-page';`
3. Import the site's local constant's file.
4. Pass all props and the `constants` to the SplitPage component.

##### Example

{{ <CodeSnippet code={`${SplitPageShell}`} highlighter={highlightJsx} filename="src/components/split-page-shell.js" />}}

#### Define SplitPage wrapper in the Batfish configuration

1. Update `batfish.config.js` to define the new wrapper and using a logic, only apply the wrapper to files in the `sections/` directory:

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
}`} highlighter={highlightJsx} filename="batfish.config.js" />}}

- If you do not want the Feedback component to appear after each section (or partial markdown file), you can reference `@mapbox/dr-ui/page-layout/split-page` instead of the local `split-page-shell.js` in `batfish.config.js`.
- You can turn off the Feedback component from any partial markdown file by setting `hideFeedback: true` in the frontmatter of the desired section.

#### Use the split-pages Batfish data selector

The [`split-pages`](/dr-ui/guides/batfish-helpers/#split-pages) Batfish data selector will combine metadata and headings for all partial markdown files and create a single source for the main page to reference.

1. Import the `buildSplitPages` function in `batfish.config.js`.
2. Create a new `splitPages` dataSelector that returns the `buildSplitPages` function.

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
};`} highlighter={highlightJsx} filename="batfish.config.js" />}}

### 4. Create redirects

You will need to create redirects in [subdomain-docs](https://github.com/mapbox/subdomain-docs) to redirect the partial files to the main file. The redirects will prevent users, or more likely web crawlers, from accessing the page partials.

See [Redirects for Studio Manual reference "sections" pages #75](https://github.com/mapbox/subdomain-docs/pull/75) for a similar example.
