## Master

- Remove `pt60` class from `ExamplesPage` component. ([#70](https://github.com/mapbox/dr-ui/pull/70))

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
