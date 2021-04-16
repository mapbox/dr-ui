const path = require('path');
const glob = require('glob');
const pascalCase = require('pascal-case');
const execa = require('execa');

// set true if lighthouse should only check files in the diff
const filterByDiff = false;

function getComponents() {
  let diff;
  if (filterByDiff) {
    const { stdout } = execa.sync('git diff --name-only main src/components/', {
      shell: true
    });
    diff = stdout.split('\n');
  }
  return glob
    .sync(path.join('./src/components', '**/*-test-cases.js'))
    .reduce((arr, component) => {
      const itemBaseName = path.basename(component, '.js');
      const kebabCaseName = itemBaseName.replace(/-test-cases$/, '');
      const pascalCaseName = pascalCase(kebabCaseName);
      const file = `http://localhost:9966/${pascalCaseName}`;
      if (filterByDiff) {
        const hasChanged = diff.filter((d) => d.includes(kebabCaseName));
        if (hasChanged.length) {
          arr.push(file);
        }
      } else {
        arr.push(file);
      }

      return arr;
    }, []);
}

const urls = getComponents();

// https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm start',
      startServerReadyPattern: 'LiveReload running',
      url: urls,
      numberOfRuns: 1 // only need 1 run for non-performance assertions
    },
    assert: {
      assertMatrix: [
        {
          matchingUrlPattern: '.*',
          preset: 'lighthouse:no-pwa',
          assertions: {
            // KEEP A WATCH ON THESE
            deprecations: 'off',
            'dom-size': 'off',
            // TURN OFF AUDITS THAT WILL BE FIXED UPSTREAM
            'font-display': 'off', // in assembly
            'uses-passive-event-listeners': 'off', // in mr-ui
            // TURN OFF AUDITS THAT DO NOT APPLY TO TEST CASES APP
            'meta-description': 'off',
            canonical: 'off',
            // TURN OFF PERFORMANCE AUDITS
            'unsized-images': 'off',
            'uses-responsive-images': 'off',
            'preload-lcp-image': 'off',
            'uses-long-cache-ttl': 'off',
            'speed-index': 'off',
            'render-blocking-resources': 'off',
            'max-potential-fid': 'off',
            'mainthread-work-breakdown': 'off',
            'legacy-javascript': 'off',
            'largest-contentful-paint': 'off',
            interactive: 'off',
            'first-meaningful-paint': 'off',
            'first-cpu-idle': 'off',
            'first-contentful-paint': 'off',
            'bootup-time': 'off',
            'uses-text-compression': 'off',
            'uses-rel-preconnect': 'off',
            'unused-javascript': 'off',
            'unused-css-rules': 'off',
            'unminified-javascript': 'off',
            'total-byte-weight': 'off',
            'duplicated-javascript': 'off',
            'cumulative-layout-shift': 'off',
            'uses-webp-images': 'off',
            'server-response-time': 'off',
            // SEE OVERRIDES BELOW
            'errors-in-console': 'off'
          }
        },
        // OVERRIDES
        // turn on errors-in-console for all components, except ErrorBoundary
        {
          matchingUrlPattern: 'http://localhost:9966/(?!ErrorBoundary).*',
          assertions: {
            'errors-in-console': 'error'
          }
        }
      ]
    }
  }
};
