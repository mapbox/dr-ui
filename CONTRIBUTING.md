# Contributing

This repo has two sites:

- **The [catalog site](https://mapbox.github.io/dr-ui/) built with Batfish.**
  - The catalog contains examples of most common uses for each component and lists all available properties.
  - To make sure all our components are production ready with Batfish, CI runs the `npm run build-docs`.
  - Every catalog example must have a test case.
- **The test cases app available locally.**
  - The test cases app builds a local development site and snapshot tests for each component. The test cases app also includes less common use cases.

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

- `/[component-name]-test-cases.js`. The `*test-cases.js` file includes variations of the component to demonstrate different capabilities and properties for the component. Every catalog example must have a test case.
- `/[component-name].test.js`. The `*.test.js` file should create a unit test for each test case found in `*test-cases.js`.

## Add a new component

Run the `new` command to generate all the files and starter code to create a new component. The command accepts an argument with the name of the component:

```
node scripts/new.js Button
node scripts/new.js responsive button
```

The command will create the following folder structure:

`src/components/[component-name]/`
- `index.js`
- `[component-name].js`
- `examples`
  - `basic.js`
- `__tests__`
  - `[component-name]-test-cases.js`
  - `[component-name].test.js`


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
