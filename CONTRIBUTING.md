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

## Local development in a documentation site

To test local changes to dr-ui in a documentation site, use `npx link`:

1. Build dr-ui with `npm run build`. The `/pkg` directory will be populated with the built files.
2. From the root of the consuming documentation site, run `npx link ../dr-ui/pkg` (this assumes the docs site and dr-ui share the same parent directory).
3. Start the development server on the consuming docs site: `npm start`. You should see any dr-ui changes that were built in step 1.
4. After making changes to dr-ui, save and build (step 1). The changes will be available when the consuming site is reloaded.

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

```
src/components/[component-name]/
  index.js
  [component-name].js
  examples/
    basic.js
  __tests__/
    [component-name]-test-cases.js
    [component-name].test.js
```

## Publish a new dr-ui version

The `build` command creates a `pkg/` directory that contains the code we want to publish, organized the way we want it. So `pkg/` is the directory that we publish. `pkg/package.json` is a clone of `package.json` but with `private: true` removed.

Once all changes are on the main branch, follow these steps:

1. Update CHANGELOG.md with a commit like "Prepare vX.X.X"
2. From the `main` branch, make sure you pulled the latest.
3. Run `npm version <major|minor|patch>` to increment the version number in package.json and package-lock.json. This will automatically create a commit and tag for the release.
4. Push your commit.
5. Run `npm ci` and then `npm run build`.
6. Run `cd pkg/` to change into the pkg directory and then publish the new version on npm: `mbx npm publish`.
7. `cd` back to the root directory and run `npm run deploy-docs` to deploy the catalog site.

## Automatically create Pull Requests for docs sites

A new release needs to be deployed on the various docs sites that consume `dr-ui`. Two scripts have been configured to perform this task. Both scripts do the same task, so please choose one option and run that only.


### Pull Request Script

`scripts/create-pull-request.sh` includes a sequence of shell commands to navigate to a docs repo on your local dev environment, run `npm install @mapbox/dr-ui` to install a specific version of `dr-ui`, commit `package.json` and `package.lock` to a new branch, and create a github pull request.

This script should be run from the root of this repository, and requires you to have [github cli](https://cli.github.com/) installed.

To use:

- Authenticate with github cli by running `gh login`
- From the root of this repository, run `sh scripts/create-pull-request.sh [dr-ui version] [docs-repo]`

`docs-repo` is the name of the directory for a docs repo that is already cloned to your local environment and is in the same directory as this repository.

Example: `sh scripts/create-pull-request.sh 5.1.12 mapbox-gl-js-docs`

Repeat for all docs sites that need the update, and merge PRs through your normal workflow.


### Bulk Pull Request Script

`scripts/update-dr-ui-all.sh`, iterates over the repositories listed in `scripts/target-repositories.json` and runs `create-pull-request.sh` for each one. Make sure you have each of the target repositories cloned to your local machine.

This script should be run from the root of this repository, and requires you to have [github cli](https://cli.github.com/) installed.

To use:

- Authenticate with github cli by running `gh login`
- From the root of this repository, run `sh scripts/update-dr-ui-all.sh [dr-ui version]`

Example: `sh scripts/update-dr-ui-all.sh 5.1.12`

