var fs = require('fs-extra');
var parseMarkdown = require('front-matter-markdown');
var _ = require('underscore');
const yaml = require('js-yaml');

// process these directories
const splitPagesDirectories = [
  'studio-manual/reference/datasets',
  'studio-manual/reference/styles',
  'studio-manual/reference/tilesets'
];

// iterate over each directory containing splitPages
splitPagesDirectories.forEach((splitPagesDirectory, i) => {
  // TODO: parse the title and description from index.js and build out the frontMatter

  const splitPagesDirectoryPath = `${__dirname}/../docs/${splitPagesDirectory}`;
  // get the filenames from the directory
  const files = fs.readdirSync(`${splitPagesDirectoryPath}/sections`);

  // TODO: parse the title and description from index.js and build out the frontMatter
  let newFileContent = '';
  let imports = [];
  let contentChunks = [];

  let title = splitPagesDirectory.split('/')[2];

  let topLevelFrontMatter = {
    title: title.charAt(0).toUpperCase() + title.slice(1)
  };

  files.forEach((file, i) => {
    const fileContent = fs
      .readFileSync(`${splitPagesDirectoryPath}/sections/${file}`)
      .toString();
    const isMarkdownFile = file.includes('.md');

    if (isMarkdownFile) {
      const frontMatter = parseMarkdown(fileContent);
      if (i === 0) {
        topLevelFrontMatter.description = frontMatter.description;
        topLevelFrontMatter.contentType = frontMatter.contentType;
      }
      const { order } = frontMatter;
      let content = fileContent.split('---')[2];

      // get the import statements
      const importRegex = /(import\s[A-Z].*?\n)/gm;
      let importLines = content.match(importRegex);
      importLines = importLines.map((d) => d.replace("'../../..", "'.."));

      // append these lines to the other import lines for this directory
      imports = [...imports, ...importLines];

      // remove the import statements from the content
      content = content.replace(importRegex, '');

      contentChunks.push({
        order,
        content
      });
    }
  });

  imports = _.uniq(imports);

  console.log(imports);

  contentChunks.sort(function (a, b) {
    return a.order - b.order;
  });

  newFileContent += `
    ${imports.join('')}
    
    ${contentChunks
      .map(({ content }) => {
        return `${content}\n`;
      })
      .join('')}

`;

  const newFile = `---
${yaml.dump(topLevelFrontMatter)}
---
    ${newFileContent}
`;

  fs.remove(splitPagesDirectoryPath);
  fs.outputFileSync(`${splitPagesDirectoryPath}.md`, newFile);
});
