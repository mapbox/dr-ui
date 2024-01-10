'use strict';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { themes as prismThemes } from 'prism-react-renderer';
import path from 'path';
import mergeOptions from 'merge-options';

// default options for the various docusaurus plugins used across all docs sites
const DEFAULT_OPTIONS = {
  docs: {
    path: 'src/docs',
    routeBasePath: '/',
    sidebarPath: './sidebars.js'
  },
  theme: {
    customCss: [
      'node_modules/@mapbox/mbx-assembly-docs/dist/assembly.css',
      'node_modules/@mapbox/docusaurus-packages/theme-mapbox/lib/css/docs-prose.css',
      'node_modules/@mapbox/docusaurus-packages/theme-mapbox/lib/css/page-shell.css'
    ]
  }
};

Object.defineProperty(exports, '__esModule', { value: true });
function makePluginConfig(source, options) {
  if (options) {
    return [require.resolve(source), options];
  }
  return require.resolve(source);
}
function preset(context, opts = {}) {
  const mergeOptionsConfig = {
    concatArrays: true
  };
  const mergedOpts = mergeOptions.apply(mergeOptionsConfig, [
    DEFAULT_OPTIONS,
    opts
  ]);

  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { algolia } = themeConfig;
  const isProd = process.env.NODE_ENV === 'production';
  const { debug, docs, pages, sitemap, theme, ...rest } = mergedOpts;
  const themes = [];
  themes.push(
    makePluginConfig('@mapbox/docusaurus-packages/theme-mapbox', theme)
  );
  if ('gtag' in themeConfig) {
    throw new Error(
      'The "gtag" field in themeConfig should now be specified as option for plugin-google-gtag. For preset-classic, simply move themeConfig.gtag to preset options. More information at https://github.com/facebook/docusaurus/pull/5832.'
    );
  }
  if ('googleAnalytics' in themeConfig) {
    throw new Error(
      'The "googleAnalytics" field in themeConfig should now be specified as option for plugin-google-analytics. For preset-classic, simply move themeConfig.googleAnalytics to preset options. More information at https://github.com/facebook/docusaurus/pull/5832.'
    );
  }
  const plugins = [];
  if (docs !== false) {
    plugins.push(makePluginConfig('@docusaurus/plugin-content-docs', docs));
  }
  if (pages !== false) {
    plugins.push(makePluginConfig('@docusaurus/plugin-content-pages', pages));
  }
  if (debug || (debug === undefined && !isProd)) {
    plugins.push(require.resolve('@docusaurus/plugin-debug'));
  }
  if (isProd && sitemap !== false) {
    plugins.push(makePluginConfig('@docusaurus/plugin-sitemap', sitemap));
  }
  if (Object.keys(rest).length > 0) {
    throw new Error(
      `Unrecognized keys ${Object.keys(rest).join(
        ', '
      )} found in preset-mapbox configuration. The allowed keys are debug, docs, pages, sitemap, theme. Check the documentation: https://docusaurus.io/docs/using-plugins#docusauruspreset-classic for more information on how to configure individual plugins.`
    );
  }
  return { themes, plugins };
}
exports.default = preset;
