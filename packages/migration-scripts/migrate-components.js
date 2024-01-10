var fs = require('fs-extra');
var path = require('path');
var camelCase = require('./camel-case');
var { replaceDrUiImports } = require('./util');

// use like node scripts/migrate-components.js ../mapbox-gl-js-docs/docs/content
const SOURCE_COMPONENTS_PATH = process.argv[2];
const DESTINATION_COMPONENTS_PATH = process.argv[3];

// walk the pages directory and copy each file
// https://gist.github.com/lovasoa/8691344

function walk(dir, callback) {
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

walk(`${SOURCE_COMPONENTS_PATH}`, (filePath) => {
  console.log(filePath);
  let fileContent = fs.readFileSync(filePath).toString();
  const isMarkdownFile = filePath.includes('.md');
  fileContent = replaceDrUiImports(fileContent);

  const newFileRelativePath = filePath.split(`${SOURCE_COMPONENTS_PATH}`)[1];
  const newFilePath = `${DESTINATION_COMPONENTS_PATH}/${newFileRelativePath}`;

  fs.outputFileSync(newFilePath, fileContent);

  // if (isMarkdownFile) {
  //     process.exit()
  // }
});
