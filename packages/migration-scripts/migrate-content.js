const fs = require('fs-extra');
const path = require('path');
const parseMarkdown = require('front-matter-markdown');
const yaml = require('js-yaml');
const { replaceDrUiImports } = require('./util');

// use like node docs-packages/migration-scripts/migrate-content.js ~/Sites/mts-docs/src/pages src/docs
const SOURCE_CONTENT_PATH = process.argv[2];
const DESTINATION_CONTENT_PATH = process.argv[3];

// walk the pages directory and copy each file
// https://gist.github.com/lovasoa/8691344

function walk(dir, callback) {
  console.log(`walking ${dir}`);
  fs.readdir(dir, function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      var filepath = path.join(dir, file);
      fs.stat(filepath, function (err, stats) {
        if (stats.isDirectory()) {
          walk(filepath, callback);
        } else if (stats.isFile()) {
          callback(filepath, stats);
        }
      });
    });
  });
}

const stringifyFrontMatter = (frontMatter) => {
  return `---
${yaml.dump(frontMatter, {
  noRefs: true
})}
---`;
};

walk(`${SOURCE_CONTENT_PATH}`, (filePath) => {
  console.log(`processing ${filePath}`);
  let fileContent = fs.readFileSync(filePath).toString();
  const isMarkdownFile = filePath.includes('.md');

  let newFile = '';
  if (isMarkdownFile) {
    // replace dr-ui imports with @theme imports
    fileContent = replaceDrUiImports(fileContent);

    // parse frontmatter
    const frontMatter = parseMarkdown(fileContent);
    // isolate content (remove frontmatter)
    let content = fileContent.replace(/(---(?:.|\n)*?---)/m, '');

    const { prependJs } = frontMatter;
    delete frontMatter.prependJs;

    // copy some frontMatter to sidebar_custom_props for use in index pages
    if (frontMatter.thumbnail) {
      const {
        description,
        thumbnail,
        topic,
        contentType,
        layout,
        language,
        products
      } = frontMatter;

      frontMatter.sidebar_custom_props = {
        description,
        thumbnail,
        topic,
        contentType,
        layout,
        language,
        products
      };
    }

    if (filePath.includes('install.md')) {
      frontMatter.id = 'install';
    }

    const newFrontMatter = stringifyFrontMatter(frontMatter);

    // update relative paths to components directory in imports
    let updatedPrependJs = [];
    if (prependJs) {
      updatedPrependJs = prependJs.map((importPath) => {
        // mts-docs don't import local CodeSnippet component
        if (importPath.includes('CodeSnippet')) return '';

        // mts docs replace require()
        importPath = importPath.replace(
          "const { CodeHtml, CodeCss, CodeHooks, CodeClasses, CodePackage, CodeIndex } = require('../../components/examples/rmts-basic-recipe/code'); // eslint-disable-line",
          "import { CodeHtml, CodeCss, CodeHooks, CodeClasses, CodePackage, CodeIndex } from '../../components/examples/rmts-basic-recipe/code'"
        );

        return (
          importPath
            // common
            // .replace('../components/', '../../src/components/')
            // studio-manual
            .replace('../video/', '../../src/video/')
            .replace('../constants.json', '../../src/constants.json')
            // gl-js-docs
            .replace('/../data', '/../../src/data')
            .replace('/../util', '/../../src/util')
        );
      });
    }

    // replace opening double curly brackets
    content = content.replace(/({{)(\s*?<)/gms, '$2');
    // replace closing double curly brackets
    content = content.replace(/(\/>\s*?)(}})/gms, '$1');
    // replace end of opening/close bracket followed by double curly brackets (e.g. ...<Note>}})
    content = content.replace(/(>\s*?)(}})/gms, '$1');
    // replace template brackets with template literal PUNTING
    content = content.replace(/({{)(?!\n)(.*?)(}})(?!\n)/gms, '""');

    // de-indent outer jsx
    content = content.replace(/^(.{4})(<\/?[A-Z])/gm, '$2');

    // remove newlines within <Note> component
    content = content.replace(/<Note[\S\s]*?<\/Note>/gm, (match) => {
      return `${match.replace(/\n/gms, '')}`;
    });

    // relative links to other docs sites get flagged as broken links
    content = content.replace(
      /\/help\/glossary\/projection\//gm,
      'https://docs.mapbox.com/help/glossary/projection/'
    );
    content = content.replace(
      /(\()(\/api|\/help)(.*?\))/gm,
      '$1https://docs.mapbox.com$2$3'
    );

    // MDX comments must use {/**/} syntax
    content = content.replace(/<!--/gm, '{/*');
    content = content.replace(/-->/gm, '*/}');

    // update gl-js example props
    content = content.replace(
      /(<Example.*)({\.\.\.this\.props})(.*\/>)/gm,
      "$1frontMatter={frontMatter} location={{ pathname: '' }}$3"
    );

    // no explicit react import in markdown files
    content = content.replace("import React from 'react';", '');

    // fixes isolated stray closing p tags
    content = content.replace('.</p></Note>', '.</Note>');

    // special handling for specific repos

    if (SOURCE_CONTENT_PATH.includes('/mts-docs')) {
      // convert <CodeSnippet/> instances into MDX codeblocks
      content = content.replace(
        /<CodeSnippet.*?`([\S\s]*?)`.*\/>/gm,
        `\`\`\`\n$1\n\`\`\``
      );

      // replace <job_id> with :job_id for placeholders in urls (mdx thinks they are tags)
      content = content.replace(/<job_id>/gm, ':job_id');
      content = content.replace(/<tileset_id>/gm, ':tileset_id');
    }

    if (SOURCE_CONTENT_PATH.includes('/studio-manual')) {
      // inject leading path segment in markdown links
      content = content.replace(
        /(\[.*?\]\(\/)(.*?\))/gms,
        `$1${DESTINATION_CONTENT_PATH}/$2`
      );

      // replace leading path segment in img urls
      content = content.replace(/\(\/studio-manual\//gms, '(/');

      // fixes isolated stray closing p tags in styles.md and toolbar.md
      content = content.replace('</p></Note></p>', '</Note></p>');

      // access images from the special trove of studio-manual images
      content = content.replace(/\(\/img\//gms, '(/img/studio-manual/');

      // only this file has markdown images
      if (filePath.includes('dataset-editor.md')) {
        content = content.replace(
          /studio-manual\/img\/studio/gms,
          'img/studio-manual/studio'
        );
      }
    }
    if (SOURCE_CONTENT_PATH.includes('/mapbox-gl-js-docs')) {
      // inject leading path segment in markdown links
      content = content.replace(
        /(\()(\/reference)/gms,
        `$1/${DESTINATION_CONTENT_PATH}$2`
      );

      // no html styles in jsx TODO: actually convert these to jsx styles
      content = content.replace(
        /(style=)'.*?'>/gms,
        "$1{{ display: 'block' }}>"
      );

      // fix for sources.md in gl-js-docs
      content = content.replace(
        '<Note title="Specify a style"><p>',
        '<Note title="Specify a style">'
      );
      // sprite.md
      content = content.replace('highlighting.\n</div>', 'highlighting.');

      content = content.replace(
        /(<Example.*?\/>)/gms,
        '<BrowserOnly>{() => $1}</BrowserOnly>'
      );

      // if BrowserOnly was added above, add it to the imports list
      if (content.match('<BrowserOnly>')) {
        updatedPrependJs.push(
          "import BrowserOnly from '@docusaurus/BrowserOnly';"
        );
      }

      // fix outlier issues in install.md
      if (filePath.includes('install.md')) {
        content = content.replace('this.props.location', "{ pathname: '' }");
      }

      // dead link
      content = content.replace('example/globe/', 'example/globe-spin/');
    }

    newFile = `${newFrontMatter}

${updatedPrependJs?.join('\n')}



${content}
`;
  } else {
    let content = fileContent;

    // update relative import paths from components directory
    content = content.replace('../components/', '../../src/components/');

    newFile = content;
  }

  const newFileRelativePath = filePath.split(`${SOURCE_CONTENT_PATH}`)[1];
  const newFilePath = `${DESTINATION_CONTENT_PATH}${newFileRelativePath}`;
  fs.outputFileSync(newFilePath, newFile);

  // if (isMarkdownFile) {
  //     process.exit()
  // }
});
