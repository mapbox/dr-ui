<!-- List what changes this PR introduces. -->

## How to test

<!-- List steps on how the reviewer can test this change. Make sure the user can test the component properly by creating a test case or adding an example to the catalog site. -->

## QA checklist

<!-- Complete this checklist when adding a new component or package. -->

- [ ] No errors logged to console.
- [ ] Accessibility score in [Chrome DevTools Audit/Lighthouse](https://developers.google.com/web/tools/lighthouse#devtools) is 100% with Lighthouse version: `#.#.#`.
- [ ] Component is accessible at mobile-size viewport.
- [ ] Component is accessible at tablet-size viewport.
- [ ] Component is accessible at laptop-size viewport.
- [ ] Component is accessible at big-monitor-size viewport.

Open the test cases app locally on:

- [ ] Chrome, no errors logged to console.
- [ ] Firefox, no errors logged to console.
- [ ] Safari, no errors logged to console.
- [ ] Edge, no errors logged to console.
- [ ] Mobile Safari, no errors logged to console.
- [ ] Android Chrome, no errors logged to console.

## Before merge

- [ ] Add entry to CHANGELOG.md to describe changes.
- [ ] If updating dependencies or creating a release, run `npx browserslist@latest --update-db` to update the [browser data](https://github.com/browserslist/browserslist#browsers-data-updating) and commit any changes to package-lock.json.
