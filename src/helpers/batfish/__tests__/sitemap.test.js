const prepareSitemap = require('../sitemap');
const { pages } = require('./fixtures/data.json');
const { existsSync, readFileSync } = require('fs');

const siteMap = './docs/_site/sitemap.xml';
const siteBasePath = '/dr-ui';

describe('prepareSitemap', () => {
  it('works', () => {
    const ignoreFile = prepareSitemap({ pages, siteBasePath }).map((f) =>
      f.replace(process.cwd(), '')
    );
    expect(ignoreFile).toEqual([
      '/_site/guides/split-pages/sections/how-to/',
      '/_site/guides/split-pages/sections/intro/',
      '/_site/guides/split-pages/sections/limitations/',
      '/_site/guides/split-pages/sections/tag-debugger/',
      '/_site/index.html'
    ]);
  });

  it('advanced, exclude demos generated by webpack loader', () => {
    const ignoreFile = [
      ...prepareSitemap({ pages, siteBasePath }),
      `${process.cwd()}/_site/assets/`
    ].map((f) => f.replace(process.cwd(), ''));
    expect(ignoreFile).toEqual([
      '/_site/guides/split-pages/sections/how-to/',
      '/_site/guides/split-pages/sections/intro/',
      '/_site/guides/split-pages/sections/limitations/',
      '/_site/guides/split-pages/sections/tag-debugger/',
      '/_site/index.html',
      '/_site/assets/'
    ]);
  });

  it('with docsPath', () => {
    const ignoreFile = prepareSitemap({
      pages,
      siteBasePath,
      docsPath: 'docs'
    }).map((f) => f.replace(process.cwd(), ''));
    expect(ignoreFile).toEqual([
      '/docs/_site/guides/split-pages/sections/how-to/',
      '/docs/_site/guides/split-pages/sections/intro/',
      '/docs/_site/guides/split-pages/sections/limitations/',
      '/docs/_site/guides/split-pages/sections/tag-debugger/',
      '/docs/_site/index.html'
    ]);
  });

  it('with outputDirectory', () => {
    const ignoreFile = prepareSitemap({
      pages,
      siteBasePath,
      outputDirectory: '_batfish_site'
    }).map((f) => f.replace(process.cwd(), ''));
    expect(ignoreFile).toEqual([
      '/_batfish_site/guides/split-pages/sections/how-to/',
      '/_batfish_site/guides/split-pages/sections/intro/',
      '/_batfish_site/guides/split-pages/sections/limitations/',
      '/_batfish_site/guides/split-pages/sections/tag-debugger/',
      '/_batfish_site/index.html'
    ]);
  });

  it('append index.html to files ending in index.js', () => {
    const ignoreFile = prepareSitemap({
      pages: [
        {
          filePath: '/android-docs/src/pages/index.js',
          path: '/android/',
          frontMatter: {
            hideFromSearchEngines: true
          }
        },
        {
          filePath: '/android-docs/src/pages/core/index.js',
          path: '/android/core/',
          frontMatter: {
            hideFromSearchEngines: true
          }
        },
        {
          filePath: '/android-docs/src/pages/java/index.js',
          path: '/android/java/',
          frontMatter: {
            hideFromSearchEngines: true
          }
        },
        {
          filePath: '/android-docs/src/pages/core/api-reference/index.md',
          path: '/android/core/api-reference/',
          frontMatter: {
            title: 'API Reference'
          }
        },
        {
          filePath: '/android-docs/src/pages/core/guides/hidden.md',
          path: '/android/core/guides/hidden/',
          frontMatter: {
            hideFromSearchEngines: true
          }
        }
      ],
      siteBasePath: '/android'
    }).map((f) => f.replace(process.cwd(), ''));
    expect(ignoreFile).toEqual([
      '/_site/index.html',
      '/_site/core/index.html',
      '/_site/java/index.html',
      '/_site/core/guides/hidden/'
    ]);
  });

  // travis is configured to run this test file again after build
  // this test asserts the URLs in the sitemap
  if (existsSync(siteMap)) {
    it('sitemap', () => {
      const contents = readFileSync(siteMap, 'utf-8')
        .match(
          /(?<=(<loc>))(.*)+?(?=(<\/loc>))/gm // eslint-disable-line
        )
        .sort();
      expect(contents).toEqual([
        'https://mapbox.github.io/dr-ui/changelog',
        'https://mapbox.github.io/dr-ui/components',
        'https://mapbox.github.io/dr-ui/examples',
        'https://mapbox.github.io/dr-ui/examples/example-1',
        'https://mapbox.github.io/dr-ui/examples/example-2',
        'https://mapbox.github.io/dr-ui/examples/example-3',
        'https://mapbox.github.io/dr-ui/examples/example-4',
        'https://mapbox.github.io/dr-ui/examples/example-5',
        'https://mapbox.github.io/dr-ui/guides',
        'https://mapbox.github.io/dr-ui/guides/batfish-helpers',
        'https://mapbox.github.io/dr-ui/guides/grouped-guides',
        'https://mapbox.github.io/dr-ui/guides/grouped-guides/file-structure',
        'https://mapbox.github.io/dr-ui/guides/grouped-guides/frontmatter',
        'https://mapbox.github.io/dr-ui/guides/grouped-guides/resulting-ui',
        'https://mapbox.github.io/dr-ui/guides/multi-structured',
        'https://mapbox.github.io/dr-ui/guides/page-layout',
        'https://mapbox.github.io/dr-ui/guides/split-pages',
        'https://mapbox.github.io/dr-ui/guides/test-pages',
        'https://mapbox.github.io/dr-ui/guides/test-pages/a11y',
        'https://mapbox.github.io/dr-ui/guides/test-pages/headings'
      ]);
    });
  }
});
