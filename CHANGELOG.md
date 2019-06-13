## Master

* Fix build to remove `optionalDependencies` and `jest` from package.json. [#143](https://github.com/mapbox/dr-ui/pull/143)

## 0.15.1

* Fix toggle in `Search` to be a button and track toggle event.

## 0.15.0

* Fix z-index issue with `Search` modal and `TopbarSticker`. [#139](https://github.com/mapbox/dr-ui/pull/139)
* Add ability to filter `Search` results by current site or all docs. [#138](https://github.com/mapbox/dr-ui/pull/138)
* Add Segment events for tracking queries and clicks in the `Search` component. [#140](https://github.com/mapbox/dr-ui/pull/14)

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
