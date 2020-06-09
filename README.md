# @mapbox/dr-ui

[![Build Status](https://travis-ci.com/mapbox/dr-ui.svg?branch=master)](https://travis-ci.com/mapbox/dr-ui)

Pronounced "Doctor UI". **D**ocumentation **R**eact **UI** components. See [@mapbox/mr-ui](https://github.com/mapbox/mr-ui).

UI components for Mapbox documentation projects.

**This project is for internal Mapbox usage.** The code is open source and we appreciate bug reports; but we will only consider feature requests and pull requests from Mapbox developers.

## Installation

```
npm install @mapbox/dr-ui
```

On Mapbox projects, pair these components with version 0.26.0 of Mapbox's custom [Assembly](https://labs.mapbox.com/assembly/) build. (This is not in `peerDependencies` because you might use `<link>` and `<script>` tags instead of the npm package.)

The public Assembly build should work fine, with maybe one or two hiccups.

## Usage

**Import individual components!** All components are exposed at `@mapbox/dr-ui/{component-name}`. For example:

```js
import Card from '@mapbox/dr-ui/card';
import BackToTopButton from '@mapbox/dr-ui/back-to-top-button';
```

Only the component itself and whatever *it* depends on will be drawn into your bundle.

## Development

Here are some commands you'll probably want to use:

```bash
# Start the test-cases app.
npm start
```

Docs build process and automated testing coming soon.

When making changes to the build script, test that the module builds correctly by running `npm run build` and then linking the local package with another local repo. Make sure you are able to run the local repo without errors from dr-ui.

## Tests

Each component should have a `__tests__` directory with the following files:

### `/[component-name]-test-cases.js`

- The `*test-cases.js` file should include variations of the component in use to demonstrate the different capabilities and properties for the component.
- The first test case should be a basic, or common, usage of the component. The code for this test case is shared with the [catalog site](#catalog-site) and will live in the `examples/basic.js`. An example of importing an example into a test case:

```js
import React from 'react';
import Basic from '../examples/basic';

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};
```
- Add test cases for more examples as needed.

### `/[component-name].test.js`

- The `*.test.js` file should create a unit test for each test case found in `*test-cases.js`.

### Run the tests:

```
npm test
```

Update snapshots (run when making changes to `*.test.js`):

```
npm test -- -u
```

### Publishing

The `build` command creates a `pkg/` directory that contains the code we want to publish, organized the way we want it. So `pkg/` is the directory that we publish. `pkg/package.json` is a clone of `package.json` but with `private: true` removed.

1. Document changes in the CHANGELOG.
1. Increment the version key in package.json and package-lock.json.
1. Make sure all this is committed, typically with a commit message like `Prepare 0.0.11`.
1. Create a tag. No message is necessary, since the changelog includes explanations of changes. For example: `git tag -a 0.0.11 -m ""`.
1. Push the tag: `git push --tags`.
1. Push your commit.
1. Build the `pkg/` directory: `npm run build`.
1. `cd` into the `pkg/` directory and publish the new version on npm.

## Catalog site

To run the catalog site at https://mapbox.github.io/dr-ui/:

```
npm run start-docs
```

### Deploy

To deploy the site. Run this if you've made changes to `src/docs/*` or any `src/components/*/examples/*` file.

```
npm run deploy-docs
```

### To add or edit the catalog site:

1. Find the component's `examples/` folder.
2. Edit the existing files or create a new file. Run `npm run start-docs` to see the updated example locally.

You can also import an example into the [component's test cases app](#tests) if you want to add tests and to help prevent duplicated code between the catalog and test cases app site.
