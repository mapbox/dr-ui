# Contributing

This repo has two sites:

- **The [catalog site](https://mapbox.github.io/dr-ui/) built with Batfish.**
  - The catalog contains examples of most common uses for each component and lists all available properties.
  - Our CI runs `npm run build` to make sure that the catalog site can build without failures, which also helps make sure that all components are production ready.
- **The test cases app available locally.**
  - The test cases app builds a local development site and snapshot tests for each component. The test cases app also includes less common use cases.
  - Every catalog example must have a test case to help make sure both sites stay up-to-date.

## Commands

To run the catalog site at https://mapbox.github.io/dr-ui/:

```
npm run start-docs
```

To build the test cases app:

```bash
npm start
```

To run the tests:

```
npm test
```

## Tests

Every component should have a `__tests__` directory with the following files:

### `/[component-name]-test-cases.js`

- The `*test-cases.js` file includes variations of the component in use to demonstrate the different capabilities and properties for the component.
- Every catalog example must have a test case. An example of importing an example into a test case:

```js
import React from 'react';
import Basic from '../examples/basic';

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};
```

### `/[component-name].test.js`

- The `*.test.js` file should create a unit test for each test case found in `*test-cases.js`.


## Publish a new dr-ui version

The `build` command creates a `pkg/` directory that contains the code we want to publish, organized the way we want it. So `pkg/` is the directory that we publish. `pkg/package.json` is a clone of `package.json` but with `private: true` removed.

1. Document changes in the CHANGELOG.
1. Increment the version key in package.json and package-lock.json.
1. Make sure all this is committed, typically with a commit message like `Prepare 0.0.11`.
1. Create a tag. No message is necessary, since the changelog includes explanations of changes. For example: `git tag -a 0.0.11 -m ""`.
1. Push the tag: `git push --tags`.
1. Push your commit.
1. Build the `pkg/` directory: `npm run build`.
1. `cd` into the `pkg/` directory and publish the new version on npm.
1. `cd` back to the root directory and run `npm run deploy-docs` to deploy the catalog site.
