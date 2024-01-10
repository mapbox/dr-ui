var fs = require('fs-extra');
var path = require('path');
var parseMarkdown = require('front-matter-markdown');
var camelCase = require('./camel-case');

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

function replaceDrUiImports(fileContent) {
  // change all dr-ui imports to @theme imports
  // convert kabob-case to PascalCase
  let drUiImports = fileContent.match(/@mapbox\/dr-ui\/([^']*)/gm);
  if (drUiImports) {
    console.log(drUiImports);
    const themeImports = drUiImports.map((d) => {
      let component = d.split('/')[2];
      component = camelCase(component, { pascalCase: true });

      // replace CodeSnippet with CodeBlock
      if (component === 'CodeSnippet') {
        component = 'CodeBlock';
      }

      return `@theme/${component}`;
    });

    drUiImports.forEach((d, i) => {
      fileContent = fileContent.replace(d, themeImports[i]);
    });
  }

  return fileContent;
}

module.exports = {
  walk,
  replaceDrUiImports
};
