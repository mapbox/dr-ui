# @mapbox/dr-ui

Pronounced "Doctor UI". **D**ocumentation **R**eact **UI** components. See [@mapbox/mr-ui](https://github.com/mapbox/mr-ui).

UI components for Mapbox documentation projects.

**This project is for internal Mapbox usage.** The code is open source and we appreciate bug reports; but we will only consider feature requests and pull requests from Mapbox developers.

## Installation

```
npm install @mapbox/dr-ui
```

On Mapbox projects, pair these components with version 0.26.0 of Mapbox's custom [Assembly](https://www.mapbox.com/assembly/) build. (This is not in `peerDependencies` because you might use `<link>` and `<script>` tags instead of the npm package.)

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

### Publishing

The `build` command creates a `pkg/` directory that contains the code we want to publish, organized the way we want it. So `pkg/` is the directory that we publish. `pkg/package.json` is a clone of `package.json` but with `private: true` removed.

- Update all version numbers and create a Git tag.
- Build the `pkg/` directory: `npm run build`.
- `cd` into the `pkg/` directory and `npm run publish` from there.


