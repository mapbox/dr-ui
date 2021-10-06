# Changelog

## Unreleased

- Handle `NavigiationAccordion` when there is no `activeItem`. [#495](https://github.com/mapbox/dr-ui/pull/495)
- Move "I like..." category to bottom in `Feedback` component. [#518](https://github.com/mapbox/dr-ui/pull/518)
- Decrease Sentry `tracesSampleRate` to `0.05`. [#517](https://github.com/mapbox/dr-ui/pull/517)
- Updates `GuideGroupIndex` in `PageLayout` to use `CardContainer` to display full width cards. [#519](https://github.com/mapbox/dr-ui/pull/519)
- Do not clear `Search` filter, reset Search when modal closes. [#528](https://github.com/mapbox/dr-ui/pull/528)

## 4.2.3

- Fix casing for `DownloadButton` with GeoJSON filetype. [#484](https://github.com/mapbox/dr-ui/pull/484)

## 4.2.2

- Fix issue in `NavigationAccordion` to handle pages that do not have a parent. [#479](https://github.com/mapbox/dr-ui/pull/479)

## 4.2.1

- Fix release

## 4.2.0

- Add `DownloadButton` component. [#474](https://github.com/mapbox/dr-ui/pull/474).
- Add [grouped guides functionality](https://mapbox.github.io/mr-ui/dr-ui/guides/grouped-guides/) to `NavigationAccordion`. [#453](https://github.com/mapbox/dr-ui/pull/453).
- Fix bug in `Feedback` textarea where the cursor jumped to end of text. [#477](https://github.com/mapbox/dr-ui/pull/477).

## 4.1.2

- Update `Feedback` to only send an event to Sentry if feedback exists. [#475](https://github.com/mapbox/dr-ui/pull/475)

## 4.1.1

- Fix error handling in `Feedback` component to only send error to Sentry if `forwardEvent` returns one. [#473](https://github.com/mapbox/dr-ui/pull/473)

## 4.1.0

- 🚨 Redesign `Feedback` component to introduce categories. [#462](https://github.com/mapbox/dr-ui/pull/462)
- Update prismjs, rehype-prism. [#466](https://github.com/mapbox/dr-ui/pull/466)
- Fix `Video` to use a promise when handling `play()`. [#459](https://github.com/mapbox/dr-ui/pull/459)
- Update search-ui dependencies. [#467](https://github.com/mapbox/dr-ui/pull/467)
- Update devDependencies. [#468](https://github.com/mapbox/dr-ui/pull/468)
- Add `babel-plugin-transform-react-remove-prop-types` to babel.config.js and use ES6 modules. [#456](https://github.com/mapbox/dr-ui/pull/456)
- Add Sentry tracing to the `AnalyticsShell` with added `sentryPerformance` prop. [#469](https://github.com/mapbox/dr-ui/pull/469)
- Make `sortVersions` a common JS module. [#470](https://github.com/mapbox/dr-ui/pull/470)

## 4.0.2

- Fix `sortVersions` for prerelease versions greater than 10. [#464](https://github.com/mapbox/dr-ui/pull/464)

## 4.0.1

- In `Search` component, fix logic to prevent queries with results from being sent to Sentry.

## 4.0.0

- Enforce use of React PureComponents to improve performance. [#414](https://github.com/mapbox/dr-ui/pull/414)
- Improve color contrast on code and anchor elements. [#434](https://github.com/mapbox/dr-ui/pull/434)
- Enable eslint-plugin-jsx-a11y. [#435](https://github.com/mapbox/dr-ui/pull/435)
- Enable react/jsx-no-bind. [#442](https://github.com/mapbox/dr-ui/pull/442)
- Replace `id` with `aria-label` in `VimeoPlayImage` to prevent duplicated `id`s when more than one instance is on the same page. [#438](https://github.com/mapbox/dr-ui/pull/438)
- Make `filename` optional for `CodeSnippetTitle`.
- Use passive event listeners on `Search`, `NumberedCodeSnippet`, and `OnThisPage` to improve performance. [#437](https://github.com/mapbox/dr-ui/pull/437)
- Make `Video` disable autoplay by default. [#276](https://github.com/mapbox/dr-ui/pull/276)
- Load the `Search` component with a facade to improve performance. [#430](https://github.com/mapbox/dr-ui/pull/430)
- 🚨 The `NumberedCodeSnippet` prop `onCopy` is deprecated and will automatically send a track event to Segment. [#442](https://github.com/mapbox/dr-ui/pull/442)
- 🚨 The `CodeSnippet` prop `highlighter` no longer accepts an arrow function. [#442](https://github.com/mapbox/dr-ui/pull/442)
  - Before: `highlighter={() => highlightJson}`
  - After: `highlighter={highlightJson}`
- Update devDependencies.
- Configure `Search` to use the [Swiftype API's `spelling` option](https://swiftype.com/documentation/site-search/searching/spelling) to retry in cases where a typo is suspected.
- Send issue to Sentry when a search query does not return a result in the `Search` component. [#452](https://github.com/mapbox/dr-ui/pull/452)
- Create `prepareSitemap` Batfish helper to improve sitemap. [#427](https://github.com/mapbox/dr-ui/pull/427). See [`prepareSitemap`](https://mapbox.github.io/dr-ui/guides/batfish-helpers/#prepare-sitemap) for instructions on how to add the `dataSelector` to your Batfish configuration. You will also want to add the following to the top of any redirect files so that they will be excluded from the sitemap:

```js
/*---
hideFromSearchEngines: true
---*/
```

## 3.3.1

- The `edit.css` prop is optional when displaying `Edit` in `CodeSnippet`. [#421](https://github.com/mapbox/dr-ui/pull/421)

## 3.3.0

- When `maxHeight` is set, move `Edit` buttons in `CodeSnippet` above the code. [#420](https://github.com/mapbox/dr-ui/pull/420)

## 3.2.0

- Add `pricing` theme to `Note`. [#416](https://github.com/mapbox/dr-ui/pull/416)

## 3.1.0

- Update prismjs, rehype-prism. [#411](https://github.com/mapbox/dr-ui/pull/411)
- 🚨 Deprecates `HelpPage`, `NavigationDropdown`, `SectionedNavigation`, `TopbarSticker`, and `Topbar` components. [#407](https://github.com/mapbox/dr-ui/pull/407)
- Make `css` optional in `Edit` and `CodeSnippet` components. [#293](https://github.com/mapbox/dr-ui/pull/293)
- Make `filename` required for `CodeSnippetTitle`. [#413](https://github.com/mapbox/dr-ui/pull/413)

## 3.0.1

- Fix docs-prose.css to not apply blue color to code elements that are descendants of elements with `anchor` class (headings). [#409](https://github.com/mapbox/dr-ui/pull/409)

## 3.0.0

This release drops support for Internet Explorer and makes small performance and accessibility improvements. [#393](https://github.com/mapbox/dr-ui/issues/393)

- 🚨 Remove support for IE 11.
- 🚨 Rename `GLWrapper` as `MapWrapper`.
  - You must define the `height` of the map. This will set the height of the loader to prevent a content layout shift after the map loads.
- `DemoIframe` has a required `title` prop to provide a description of the iframe's content.
- 🚨The `vimeoThumbnail` prop in `RelatedPage` no longer accepts a string. It must be an `AppropriateImage` instance. Example: `vimeoThumbnail='./img/map-image.jpg'` becomes `vimeoThumbnail={<AppropriateImage alt='' imageId='map-image' />}`
- Add `position` prop to `Feedback` component to identify place on page.
- Improve color contrast on syntax highlighting.

## 2.3.0

- Update `GlWrapper` component to check for Internet Explorer and provide reason for when the issue is not Internet Explorer or WebGL support. [#387](https://github.com/mapbox/dr-ui/pull/387)

## 2.2.0

- Remove `mbxMetadata` when the component unmounts in `AnalyticsShell`. [#383](https://github.com/mapbox/dr-ui/pull/383).

## 2.1.1

- Fix `pageSorter` function in filter Batfish helper to sort "まず始めに" (Getting started) to top of the list.

## 2.1.0

- Update the filter Batfish helper to sort "まず始めに" (Getting started) to start of the topic list. [#381](https://github.com/mapbox/dr-ui/pull/381).

## 2.0.0

- Add `Breadcrumb` component. This component is included as a feature in `PageLayout`. [#331](https://github.com/mapbox/dr-ui/pull/331).
- Add `OnThisPage` component. This component displays headings on the page and performs scroll spy to indicate where you are on the page.
  - 🚨This update removes the need for the `@mapbox/dr-ui/plugins/create-sections` plugin and it is now deprecated. You can safely remove it from your `batfish.config.js`.
  - 🚨All h2 and h3 elements that will appear as links in the `OnThisPage` component must have the class `anchor`. The `add-links-to-headings` plugin will automatically add this class to markdown headings, but if you add HTML headings to the page, then you must add the `anchor` class to each h2 and h3 element to make sure the scroll spy can detect these headings.
- 🚨Update `PageLayout` component.
  - Add aside feature which includes the `OnThisPage` and `Feedback` components. On larger devices, the aside is stuck to the right-side of the screen. On smaller devices, `OnThisPage` moves inline below the page's title and `Feedback` will appear at the bottom of the page. The aside feature does not stick on IE 11 and remains static, but still performs the core functionality of providing anchor links.
  - `OnThisPage` will appear on all pages with `layout: page` by default, but nowhere else. If a boolean `onThisPage` frontmatter property is supplied, this can be overridden for any page.
  - Remove `TopbarSticker` from `PageLayout`. The main navigation now uses the `NavigationAccordion` on the sidebar to display main pages and subpages.
  - 🚨Redesigned `NavigationAccordion` to work as site navigation menu. The component will no longer track headings. We deprecated several props and introduced new ones, please consult the [NavigationAccordion documentation](https://mapbox.github.io/dr-ui/components/#navigationaccordion).
  - Add option to add `OverviewHeader` component to the page by passing the component's properties in the frontMatter. When `overviewHeader` is defined in the frontMatter, then the title (h1) will not show on the page.
  - Add filter functionality to `exampleIndex` layout. All page cards will be displayed in order of the `order` frontMatter property and then alphabetically by title. Filters will automatically appear for topics, levels, languages, and video if the pages have at least more than one unique option for each filter category. Filter selections are pushed to the query param and are set by a rendered query string.
- Update `Feedback` component.
  - Remove background color and use `AsideHeading` component to style the component's heading.
- Update `docs-prose.css`.
  - You can now use `.unprose` class on `#docs-content h2` elements to remove the styling.
  - Add `sticky-mxl` and `scroll-auto-mxl` classes to enable a sticky position and scrolling on displays >= 1200 pixels.
- 🚨 Rename `ExamplePage` component to `HelpPage` to better reflect that the component will display tutorial and troubleshooting page cards for Help pages. Adds `data` prop that accepts JSON to display cards.
- 🚨 Update Batfish helpers:
  - 🚨 Remove `topics` Batfish helper and replace with `filters`.
  - 🚨 Remove `formatTopics` Batfish helper. Use the `HelpPage` component.
  - 🚨 Remove `accordion` object from `navigation` and moved the dataset into `navTabs` as `pages` array.
  - 🚨 Add `addPages` parameter to `buildNavigation` helper function to support appending arbitrary items to site navigation.
  - 🚨 Switches to named parameters for `buildNavigation`.
- Add `small` prop and variant to `Tag`.
- Remove truncation on `ProductMenu` and moves tag above the title.
- Replace bottom `Feedback` component on examples pages with an `Aside`.
- Allow passing children to the `ExamplesIndex` component.
- Add theming options to `OverviewHeader`: `theme` to accept CSS classes to customize the container, `lightText` to enable white text, `description` to add a text description. The `features` prop is now optional.
- 🚨Deprecate `GlossaryCard`, `GlossaryPage`, and `GlossarySection` components.
- Improve color contrast on `LevelIndicator`.

## 1.3.0

- Add new props to `Search` to allow further customization by other subdomains. [#329](https://github.com/mapbox/dr-ui/pull/329)
  - Add `resultsOnly` and `overrideSearchTerm` that will display only the Swiftype results for the given search term.
  - Add `themeCompact` to condense result padding when enabled.
  - Add `emptyResultMessage` to change the message when Swiftype returns no results for a query.
  - Add `segmentTrackEvent` to change the name of the Segment event that is capture during a search.

## 1.2.0

- Set new `referrer` tag in `Feedback`.
- Bump Sentry version to `5.24.2`.

## 1.1.6

- Add `hideSearch` prop to `PageLayout` to remove the `Search` component in `PageLayoutTopbar`.

## 1.1.5

- Add `hideTopBar` prop to `PageLayout` to completely remove `PageLayoutTopbar`.

## 1.1.4

- Fix truncation on `ProductMenu`.

## 1.1.3

- Fix xhr headers in ForwardEvent function.

## 1.1.2

- Set `minHeight` on `PageLayoutTopbar` to prevent layout shift as the `Search` component loads.

## 1.1.1

- Fix margin on `Search` in `PageLayout`.

## 1.1.0

- Fix element spacing within `PageLayoutTopbar`.
- Add `formatTopics` Batfish helper function. [#328](https://github.com/mapbox/dr-ui/pull/328)

## 1.0.2

- Fix the `connector` prop in `PageLayout`.

## 1.0.1

- Fix the `type` prop in `PageLayout`'s `Feedback` component.

## 1.0.0

Introducing layouts in `PageLayout`. See the [`PageLayout`](http://mapbox.github.io/dr-ui/guides/page-layout/) guide for more information on building with this component.

- Add `AnalyticsShell` component. [#307](https://github.com/mapbox/dr-ui/pull/307)
- Add Batfish helpers: `navigation` and `topics`. [#310](https://github.com/mapbox/dr-ui/pull/310)
- Add Batfish helper: `split-pages`. [#317](https://github.com/mapbox/dr-ui/pull/317)
- Update `PageLayout` to accept layouts. [#309](https://github.com/mapbox/dr-ui/pull/309)
  - The added layouts: `page`, `accordion`, `example`, `full`, `exampleIndex`.
  - 🚨 The following props are deprecated and are no longer configurable: `sidebarTitle`, `sidebarContent`, `sidebarContentStickyTop`, `sidebarContentStickyTopNarrow`, `sidebarStackedOnNarrowScreens`, `sideBarColSize`, `interactiveClass`.
  - `sidebarTheme` is now defined from the `frontMatter` object.
  - Component now includes `TopbarSticker/Topbar`, `Search`, and `Feedback` components.
- 🚨 The `user` props is deprecated in `Feedback`. The component will now fetch this data and you can safely remove the `user` prop from this component. [#324](https://github.com/mapbox/dr-ui/pull/324)
- Update dependencies. [#326](https://github.com/mapbox/dr-ui/pull/326)
- Add `cardColSize` prop to `CardContainer` to adjust size of cards.

## 0.30.0

- Add `ErrorBoundary` component. [#272](https://github.com/mapbox/dr-ui/pull/272)
- Pin the version numbers for all search-ui dependencies. [#321](https://github.com/mapbox/dr-ui/pull/321)

## 0.29.2

- Add aria-label to `BackToTopButton`. [#290](https://github.com/mapbox/dr-ui/pull/290)
- Update `@sentry/browser` and add it as a peer dependency along with `react`, `react-dom`, `@mapbox/mr-ui`, and `@mapbox/mbx-assembly`. [#292](https://github.com/mapbox/dr-ui/pull/292)

## 0.29.1

- Remove `limiter` from `Topbar`. [#282](https://github.com/mapbox/dr-ui/pull/282)

## 0.29.0

- Allow Kotlin-only activities in `ContextlessAndroidActivityToggle`. [#278](https://github.com/mapbox/dr-ui/pull/278)

## 0.28.0

- Fix padding, background, and color contrast in `NumberedCodeSnippet` component. [#269](https://github.com/mapbox/dr-ui/pull/269)
- Fix a bug in `NumberedCodeSnippet` where if the last line was included in `copyRanges` that code chunk would not be highlighted. [#268](https://github.com/mapbox/dr-ui/pull/268)
- Add `Topbar` component. [#274](https://github.com/mapbox/dr-ui/pull/274)
- Update mr-ui and other dependencies for security fixes. [#266](https://github.com/mapbox/dr-ui/pull/266)
- Prevent `ProductMenu` from truncating `tag`. [#277](https://github.com/mapbox/dr-ui/pull/277)

## 0.27.0

- Add feature to scroll to active item in `SectionedNavigation` onload. [#249](https://github.com/mapbox/dr-ui/pull/249)
- Add feature to scroll to active item in `NavigationAccordion` onload. [#247](https://github.com/mapbox/dr-ui/pull/247)
- Improve text alignment of sidebar including `NavigationAccordion`, `SectionedNavigation`, and `PageLayout` `sidebarTitle`. [#254](https://github.com/mapbox/dr-ui/pull/254)
  - 🚨Check the `sidebarTitle` value of `PageLayout`, you should not need additional margin or padding classes. The sidebar text should line up with the `PageLayout` title text.
- Add `icon` option for third level items in `NavigationAccordion`. [#252](https://github.com/mapbox/dr-ui/pull/252)
- Add Sentry to `Feedback` to catch failed forward-event events. [#256](https://github.com/mapbox/dr-ui/pull/256)
- Set character limit on `Feeback` text feedback to 1000 characters and set Sentry's `maxValueLength` to the same to prevent truncated feedback. [#244](https://github.com/mapbox/dr-ui/pull/244)
- Send basic user metadata to Sentry through the `Feedback` component. [#255](https://github.com/mapbox/dr-ui/pull/255)
  - 🚨 The `userName` prop has been replaced by `user` object.

## 0.26.0

- Updates to `RelatedPage` component:
  - 🚨 Replace `description` with children and make it required. [#239](https://github.com/mapbox/dr-ui/pull/239)
  - Fix overflow issue in IE11. [#238](https://github.com/mapbox/dr-ui/pull/238)
  - Create Vimeo modal option (`vimeoId` and `vimeoThumbnail`) . [#236](https://github.com/mapbox/dr-ui/pull/236)
  - Add playground theme. [#234](https://github.com/mapbox/dr-ui/pull/234)
- Updates to `Note` component. [#240](https://github.com/mapbox/dr-ui/pull/240)
  - 🚨 Remove `image` option, every Note will use the theme's defined image.
  - Improve color contrast on elements inside the component.

## 0.25.5

- Fix icons in `Note` by setting `size` as a number to correct their size in Firefox. [#233](https://github.com/mapbox/dr-ui/pull/233)

## 0.25.4

- Remove code formatter (Indent.js) from `Edit` component. [#228](https://github.com/mapbox/dr-ui/pull/228)

## 0.25.3

- Replace Prettier (in browser) for Indent.js to fix IE 11 compatibility issue. [#226](https://github.com/mapbox/dr-ui/pull/226)

## 0.25.2

- Darken text color for `Note` and `Tag` themes. [#223](https://github.com/mapbox/dr-ui/pull/223)

## 0.25.1

- Add IE11 compatibility for the `Search` component. [#203](https://github.com/mapbox/dr-ui/pull/203)
- Add `beta` and `download` themes to `Note`. [#202](https://github.com/mapbox/dr-ui/pull/202)
- 🚨Remove `imageComponent` option from `Note`. The theme will select the accompanying image or you can pass `image={false}` to prevent the theme's image from appearing in `Note`. [#202](https://github.com/mapbox/dr-ui/pull/202)
- Add `RelatedPage` component. [#213](https://github.com/mapbox/dr-ui/pull/213)
- Add `GlossaryImage` component. [#213](https://github.com/mapbox/dr-ui/pull/213)
- Add `ExampleImage` component. [#213](https://github.com/mapbox/dr-ui/pull/213)
- 🚨 Refactor how tags are defined and applied to other components ([#216](https://github.com/mapbox/dr-ui/pull/216)).
  - Add generic `Tag` component with several `theme` options.
  - Remove `BetaFlag`. Use `<Tag theme="beta" />` instead.
  - Update existing components ( `OverviewHeader`, `NavigationAccordion` `ProductMenu`). Pass a string to the `tag` prop to use a predefined `theme`. To use a custom theme, pass `custom` to the `theme` prop and add a `customTagProps` prop. `customTagProps` is required when using the `custom` theme.
- Add an optional `tag` prop for second and third level headings in `NavigationAccordion`. [#212](https://github.com/mapbox/dr-ui/pull/212)
- Update `NumberedCodeSnippet` to include the option to hide lines not included in `copyRanges`. Lines are hidden by default. [#206](https://github.com/mapbox/dr-ui/pull/206)
- 🚨 Update `Feedback` component's Sentry integration. [#209](https://github.com/mapbox/dr-ui/pull/209)
  - Conditionally set `section` and `preferredLanguage`.
  - Set the `environment`.
  - 🚨 Allow `feedbackSentryDsn` to accept boolean (false) to disable sending text feedback to Sentry. If you're using the Feedback component, but not using Sentry to triage feedback, set this value to false.
- Create `Themes` component to hold shared styles for `Tag` and `Note`. [#217](https://github.com/mapbox/dr-ui/pull/217)
- Create `highlight/theme-css` which exports prism.css as string and allows us to easily import prism.css into mr-ui `CodeSnippet` and other components. [#218](https://github.com/mapbox/dr-ui/pull/218)
- Create `Edit` component to add "Edit in JSFiddle" and "Edit in CodePen" buttons to code blocks. [#197](https://github.com/mapbox/dr-ui/pull/197)
- Create `CodeSnippet` component as a wrapper to mr-ui's `CodeSnippet` with options to use `Edit` or `CodeSnippetTitle` components. [#197](https://github.com/mapbox/dr-ui/pull/197)
- Update dependencies: @elastic/react-search-ui@1.3.1, @elastic/react-search-ui-views@1.3.1, @elastic/search-ui-site-search-connector@1.3.1, @mabpox/mr-ui@0.7.4, @sentry/browser@5.10.2, prismjs@1.18.0, react-aria-model@4.0.0. [#220](https://github.com/mapbox/dr-ui/pull/220)
- Remove `cursor: pointer` rule from H2 and H3 elements. [#222](https://github.com/mapbox/dr-ui/pull/222)

## 0.24.0

- Add Sentry to `Feedback` component for text feedback issue management. [#198](https://github.com/mapbox/dr-ui/pull/198)
- Add support for `groovy` syntax highlighting. [#201](https://github.com/mapbox/dr-ui/pull/201)

## 0.23.0

- Allow caller to provide a custom `connector` to the `Search` component. [#200](https://github.com/mapbox/dr-ui/pull/200)

## 0.22.0

- Add a CSS highlighter option to the `Highlight` component. [#191](https://github.com/mapbox/dr-ui/pull/191)
- Add `GlossaryCard`, `GlossarySection`, and `GlossaryPage` components. [#192](https://github.com/mapbox/dr-ui/pull/192)
- Creates new theme for `Search` button. [#189](https://github.com/mapbox/dr-ui/pull/189)
- Add `Phone` component. [#195](https://github.com/mapbox/dr-ui/pull/195)
- Add `cleanAndroidActivity` and `cleanIosViewController` helper functions. [#194](https://github.com/mapbox/dr-ui/pull/194)

## 0.21.2

- Fix build error in `Video` component. [#186](https://github.com/mapbox/dr-ui/pull/186)
- Fix window evaluation in `Feedback` component. [#187](https://github.com/mapbox/dr-ui/pull/187)

## 0.21.1

- Add `environment` and `location` to the request in `Feedback`. [#184](https://github.com/mapbox/dr-ui/pull/184)

## 0.21.0

- Add `Video` component. [#176](https://github.com/mapbox/dr-ui/pull/176)
- Add `Browser` component. [#177](https://github.com/mapbox/dr-ui/pull/177)
- Add `CodeSnippetTitle` component. [#179](https://github.com/mapbox/dr-ui/pull/179)
- Modify the `CodeToggle` component to allow for the toggle labels to be different from the values and remove restrictions on specific strings for the `language` prop. [#179](https://github.com/mapbox/dr-ui/pull/179)

* Add `ContextlessAndroidActivityToggle` component that styles the `ToggleableCodeSnippet` component specifically for toggling between Activity code written in Java and Kotlin. It should be used with [context](https://reactjs.org/docs/context.html) defined in the repo where it is being used. [#179](https://github.com/mapbox/dr-ui/pull/179)
* Add `ContextlessIosViewControllerToggle` component that styles the `ToggleableCodeSnippet` component specifically for toggling between ViewController code written in Swift and Objective-C. It should be used with [context](https://reactjs.org/docs/context.html) defined in the repo where it is being used. [#179](https://github.com/mapbox/dr-ui/pull/179)
* Add `NumberedCodeSnippet` component for displaying line numbers and styling designated `copyRanges` inside snippets. [#179](https://github.com/mapbox/dr-ui/pull/179)
* Add `AndroidLayoutCodeBlock` component. [#179](https://github.com/mapbox/dr-ui/pull/179)
* Modify `prism.css` to add styling for numbered lines in the `NumberedCodeSnippet` component. [#179](https://github.com/mapbox/dr-ui/pull/179)
* Add `highlight/kotlin.js` to add syntax highlighting for Kotlin code snippets. [#179](https://github.com/mapbox/dr-ui/pull/179)

- Add `preferredLanguage` as prop for `Feedback` and include browser name, version, and operating system with the event. [#183](https://github.com/mapbox/dr-ui/pull/183)

- 🚨Breaking changes:

  - Move all syntax highlighter functions from helpers directory to highlight component and simplifies each highlighter file name. [#180](https://github.com/mapbox/dr-ui/pull/180)
  - Modify the `ToggleableCodeBlock` component to include the code toggle when more than one `option` exists. Changes to props include:

    - Removes the `codeSnippet`
    - Replaces `codeSnippet.language` with `selectedLanguage`
    - Replaces `codeSnippet.rawCode` with `code`
    - Replaces `codeSnippet.highlightedCode` with `highlightedCode`
    - Removes `codeSnippet.preferredLanguage`
    - Adds a required `id`
    - Adds an optional `copyRanges`
    - Adds an optional `options`
    - Adds an optional `changeLanguage`
    - Adds an optional `filename`
    - Adds an optional `link`
    - Adds an optional `limitHeight` (defaults to `true`)

    See [#179](https://github.com/mapbox/dr-ui/pull/179)

## 0.20.1

- Add core-js as a dependency.

## 0.20.0

- Add syntax highlighting helper functions for HTML, Java, JSON, JSX, Objective-C, Swift, and XML. [#172](https://github.com/mapbox/dr-ui/pull/172)
- Add a new `Note` style with a green background that will be used to show off new or updated products or features. [#162](https://github.com/mapbox/dr-ui/pull/162)
- Fix `window.scroll()` on `BackToTopButton`. [#167](https://github.com/mapbox/dr-ui/pull/167)
- Enable babel polyfill on `Search` component. [#165](https://github.com/mapbox/dr-ui/pull/165)
- Add babel config to helpers and plugins, add eslint plugins to catch new JavaScript features. [#164](https://github.com/mapbox/dr-ui/pull/164)
- Add `GLWrapper` and `DemoIframe` components. [#166](https://github.com/mapbox/dr-ui/pull/166)
- Refactor image components to fix IE11 bug and set default size. [#171](https://github.com/mapbox/dr-ui/pull/171)

## 0.19.3

- Fix `Note` in IE11 by replacing Object.assign with a function. [#159](https://github.com/mapbox/dr-ui/pull/159)

## 0.19.2

- Fix logic for window and document in `Search`. [#160](https://github.com/mapbox/dr-ui/pull/160)

## 0.19.1

- Fix errors generated by `Search` by preventing the component from loading on IE11. [#158](https://github.com/mapbox/dr-ui/pull/158)

## 0.19.0

- Add create-redirect.js helper function. [#144](https://github.com/mapbox/dr-ui/pull/144)
- Update to v1.0.0 of search-ui for `Search`. [#156](https://github.com/mapbox/dr-ui/pull/144)

## 0.18.2

- Fix missing proptype for `Search`. [#151](https://github.com/mapbox/dr-ui/pull/151)

## 0.18.1

- Update security vulnerabilities in dependencies. [#152](https://github.com/mapbox/dr-ui/pull/152)

## 0.18.0

- Add `Feedback` component. [#135](https://github.com/mapbox/dr-ui/pull/135)

## 0.17.0

- Add data attribute to prevent Swiftype from indexing sidebar content on `PageLayout`. [#146](https://github.com/mapbox/dr-ui/pull/146)
- Add compare-versions as a dependency to support `helpers/version-sort.js`. [#142](https://github.com/mapbox/dr-ui/pull/142)
- Fix `version-sort` helper function so it does not push pre-releases of the latest stable version. [#148](https://github.com/mapbox/dr-ui/pull/148)

## 0.16.2

- Fix bug where `Search` filter was not displaying with the first query.

## 0.16.1

- Fix build that was improperly pushed to npm in 0.16.0.

## 0.16.0

- Update search-ui, add loader, increase debounce length, and reset search when modal is closed for `Search` component. [#145](https://github.com/mapbox/dr-ui/pull/145)

## 0.15.2

- Fix build to remove `optionalDependencies` and `jest` from package.json. [#143](https://github.com/mapbox/dr-ui/pull/143)

## 0.15.1

- Fix toggle in `Search` to be a button and track toggle event.

## 0.15.0

- Fix z-index issue with `Search` modal and `TopbarSticker`. [#139](https://github.com/mapbox/dr-ui/pull/139)
- Add ability to filter `Search` results by current site or all docs. [#138](https://github.com/mapbox/dr-ui/pull/138)
- Add Segment events for tracking queries and clicks in the `Search` component. [#140](https://github.com/mapbox/dr-ui/pull/14)

## 0.14.0

- Refactors the `Search` component to use a modal on larger screens. [#133](https://github.com/mapbox/dr-ui/pull/133).
- Increase z-index for sticky sidebar in `PageLayout` and `TopbarSticker`. [#134](https://github.com/mapbox/dr-ui/pull/134)

## 0.13.0

- Use [`compare-versions`](https://www.npmjs.com/package/compare-versions) in the version-sort helper function. [#132](https://github.com/mapbox/dr-ui/pull/132)

## 0.12.2

- Debounce `Search` results. [#129](https://github.com/mapbox/dr-ui/pull/129)

## 0.12.1

- Move `titleGenerator` to `Search` component directory.

## 0.12.0

- Add ability to revisit a search query when the input has focus for the `Search` component. [#127](https://github.com/mapbox/dr-ui/pull/127)
- Add style JSON for minimal styles used to illustrate the contents of Mapbox-maintained tilesets. [#125](https://github.com/mapbox/dr-ui/pull/125)
- Add `titleGenerator` helper function to format title meta tags and search result titles. [#128](https://github.com/mapbox/dr-ui/pull/128)

## 0.11.1

- Wrap `LevelIndicator` in `txt-s txt-bold` classes in `Card`. [#/](https://github.com/mapbox/dr-ui/pull/126)

## 0.11.0

- Add `Search` component. [#121](https://github.com/mapbox/dr-ui/pull/121)
- 🚨 Remove `txt-bold` and `txt-s` from `LevelIndicator` component to make it more flexible. [#121](https://github.com/mapbox/dr-ui/pull/121)

## 0.10.0

- Add Swiftype attribute to ignore content blocks in `CardContainer`, `SectionedNavigation`, and `TopbarSticker`. (#119)(https://github.com/mapbox/dr-ui/pull/119)
- Fix bug in Firefox where arrow was not vertically centered in `BackToTopButton`. (#122)(https://github.com/mapbox/dr-ui/pull/122)
- Fix prerelease order in `sortVersion` helper function. (#124)(https://github.com/mapbox/dr-ui/pull/124)

## 0.9.0

- Add `BetaFlag` component, `beta` prop to OverviewHeader, `beta` prop to ProductMenu; update mr-ui to v0.7.0. (#123)(https://github.com/mapbox/dr-ui/pull/123)

## 0.8.1

- [Patch] Use babel.config.js and update build-package.js to output components to directories during `npm run build`.(#118)(https://github.com/mapbox/dr-ui/pull/118)

## 0.8.0

- Add versionSort helper function to sort version numbers for API reference dropdowns. (#117)(https://github.com/mapbox/dr-ui/pull/117)

## 0.7.0

- Add an optional prop in `NavigationAccordion` to add tags to first level items. (#115)(https://github.com/mapbox/dr-ui/pull/115)

## 0.6.0

- Add ability to filter the description if it's available in `SectionedNavigation`. (#111)(https://github.com/mapbox/dr-ui/pull/111)
- Add `mb24` to `OverviewHeader`. [#112](https://github.com/mapbox/dr-ui/pull/#112)
- Fix `.prose pre` rules in docs-prose.css to make specific to code blocks with `.language-` prefixed classes. [#113](https://github.com/mapbox/dr-ui/pull/#113)

## 0.5.0

- Add prism.css to create shared syntax styles [#108](https://github.com/mapbox/dr-ui/pull/108)
- Add new styles for fullwidth `Card` and `CardContainer`. [#104](https://github.com/mapbox/dr-ui/pull/104)
- Add CSS to set max-height and style scrollbars for prose code examples. [#103](https://github.com/mapbox/dr-ui/pull/103)
- Add warning, error, and default themes to `Note` and removes ability to pass `padding`, `background`, `fontSize`, `lineHeight`, and `color` to `Note`. [#102](https://github.com/mapbox/dr-ui/pull/102)
- Add `WarningImage` for primary use with `Note`. [#102](https://github.com/mapbox/dr-ui/pull/102)
- 🚨 Replace `width` and `height` props with `size` on `BookImage`, `BookletImage`, `ContactImage`, `TroubleshootImage`. [#102](https://github.com/mapbox/dr-ui/pull/102)

## 0.4.0

- Update to mr-ui 0.5.0. ([#95](https://github.com/mapbox/dr-ui/pull/95))
- Add `contactLink` prop to `OverviewHeader` to create Contact us button. ([#105](https://github.com/mapbox/dr-ui/pull/105))

## 0.3.0

- Add optional `unStickWidth` prop to `TopbarSticker`. ([#100](https://github.com/mapbox/dr-ui/pull/100))

## 0.2.0

- Add optional prop (`sideBarColSize`) to change the column size of the sidebar in `PageLayout`. ([#96](https://github.com/mapbox/dr-ui/pull/96))
- Add additional selectors for `#docs-content .prose`. ([#91](https://github.com/mapbox/dr-ui/pull/91))
- Add make-table-scroll plugin. ([#90](https://github.com/mapbox/dr-ui/pull/90))
- Remove `px12` on content element in `PageLayout`. ([#98](https://github.com/mapbox/dr-ui/pull/98))
- Add optional `interactiveClass` prop to watch for changes on click in `PageLayout` to adjust the sidebar height. ([#97](https://github.com/mapbox/dr-ui/pull/97))

## 0.1.1

- Fix `bottomBoundaryValue` on `PageLayout`'s sticky sidebar to account for slimmer docs-page-shell footer. ([#88](https://github.com/mapbox/dr-ui/pull/88))

## 0.1.0

- Removes `ProductMenuDropdown` and `ProductMenuItems` and refactors `ProductMenu` as a link. ([#73](https://github.com/mapbox/dr-ui/pull/73))

## 0.0.13

- Add scrollspy feature to `NavigationAccordion` and add plugin to create sections in markdown files based on h2 and h3 headings. ([#66](https://github.com/mapbox/dr-ui/pull/66))

## 0.0.12

- Fix a bug where `NavigationDropdown` did not appear on mobile. ([#79](https://github.com/mapbox/dr-ui/pull/79))
- Fix a bug where `BackToTopButton` did not, in fact, go back to top on mobile. ([#80](https://github.com/mapbox/dr-ui/pull/80))
- Add `borderRadius` class and give text color high contrast on `Note`. ([#78](https://github.com/mapbox/dr-ui/pull/78))

## 0.0.10

- Remove `pt60` class from `ExamplesPage` component. ([#70](https://github.com/mapbox/dr-ui/pull/70))
- Update styles for `Card` and `CardContainer` components for consistent padding and spacing. ([#71](https://github.com/mapbox/dr-ui/pull/71))
- Fix z-index on `TopbarSticker` to prevent overlap with Mapbox logo on maps. ([#67](https://github.com/mapbox/dr-ui/pull/67))
- Add `hideSubItems` option to `SectionedNavigation` and active class to current page. ([#69](https://github.com/mapbox/dr-ui/pull/69))

## 0.0.9

- Add missing `index.js` file for the `LevelIndicator` component.
- Add Mapbox Style Specification to `ProductMenuItems`. ([#62](https://github.com/mapbox/dr-ui/pull/62))
- Fix a bug where the sidebar in `PageLayout` was sticking when navigating directly to a hash at the bottom of the page. ([#63](https://github.com/mapbox/dr-ui/pull/63))
- Fix a bug where the arrow icon in `BackToTopButton` was not centered. ([#63](https://github.com/mapbox/dr-ui/pull/63))
- Add the option to include a filter bar to `SectionedNavigation` via the `includeFilterBar` prop. ([#60](https://github.com/mapbox/dr-ui/pull/60))
- Add a third level of headings (`thirdLevelItems`) to `NavigationAccordion`. ([#58](https://github.com/mapbox/dr-ui/pull/58))

## 0.0.8

- Add Atlas to `ProductMenuItems`. ([#48](https://github.com/mapbox/dr-ui/pull/48/))
- Show scroll bar automatically in `PageLayout` when the sidebar contents overflow vertically. ([#54](https://github.com/mapbox/dr-ui/pull/54))
- In `PageLayout`, remove `activeClass` from the `Sticky` component to prevent temporary faint gray background when `sidebarTheme` is set to something other than the default. ([#54](https://github.com/mapbox/dr-ui/pull/54))
- Add new `LevelIndicator` component. ([#55](https://github.com/mapbox/dr-ui/pull/55))
- Add optional `level` and `language` props to `Card`. ([#55](https://github.com/mapbox/dr-ui/pull/55))
- Add China Plugin for iOS to `ProductMenuItems`. ([#56](https://github.com/mapbox/dr-ui/pull/56))

## 0.0.7

- Change the `sidebarTitle` prop type in the `PageLayout` component from string to string or node. ([#43](https://github.com/mapbox/dr-ui/pull/43))
- Add `lightText` prop for styling the `ProductMenu` popover trigger on dark backgrounds. ([#52](https://github.com/mapbox/dr-ui/pull/52))
- Update Mapbox Studio link in product menu items data file from /help/studio-manual/ to /studio-manual/. ([#50](https://github.com/mapbox/dr-ui/pull/50))
- Add the option to make an item active in `SectionedNavigtion`. Note: This should be used to indicate which example you're currently viewing when displaying `SectionedNavigation` on individual examples pages. ([#45](https://github.com/mapbox/dr-ui/pull/45))
- Prevent an empty array from being passed to `secondLevelItems` in `NavigationAccordion`. ([#44](https://github.com/mapbox/dr-ui/pull/44))
- Add image components for commonly used SVG illustrations. ([#49](https://github.com/mapbox/dr-ui/pull/49))
