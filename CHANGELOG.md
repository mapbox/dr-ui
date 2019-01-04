## Master

- Removes ProductMenuDropdown and ProductMenuItems and refactors ProductMenu as a link. ([#73](https://github.com/mapbox/dr-ui/pull/73))

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
- Remove `ProductMenuDropdown` and refactor `ProductMenu` as a navigation link. ([#73](https://github.com/mapbox/dr-ui/pull/73))

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
