const fs = require('fs');
const path = require('path');
const {
  indexJs,
  componentJs,
  testCasesJs,
  testJs,
  basicJs
} = require('./templates');

// process arguments sent with the script
if (process.argv[2] === undefined) {
  throw new Error(
    'Missing component name. \n\nExamples: \n\nnode scripts/new.js responsive accordion\nnode scripts/new.js button\n\n'
  );
}

function CamelCase(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

const args = process.argv.splice(2, process.argv.length - 1).join(' ');
const componentName = CamelCase(args);
const componentFileName = args.replace(/\s+/g, '-').toLowerCase();

// declare future directories for the new playground
const compDir = path.join('src/components', componentFileName, '/');
const compDirTests = path.join(
  'src/components',
  componentFileName,
  '/',
  '__tests__',
  '/'
);
const compDirExamples = path.join(
  'src/components',
  componentFileName,
  '/',
  'examples',
  '/'
);

// create components dir
if (!fs.existsSync(compDir)) {
  fs.mkdirSync(compDir);
  fs.writeFileSync(`${compDir}index.js`, indexJs(componentFileName));
  fs.writeFileSync(
    `${compDir}${componentFileName}.js`,
    componentJs(componentName)
  );
  console.log(
    `📂 created ${compDir}, ${compDir}index.js, ${compDir}${componentFileName}.js`
  );
}

// create __tests__ dir
if (!fs.existsSync(compDirTests)) {
  fs.mkdirSync(compDirTests);
  fs.writeFileSync(
    `${compDirTests}${componentFileName}-test-cases.js`,
    testCasesJs()
  );
  fs.writeFileSync(
    `${compDirTests}${componentFileName}.test.js`,
    testJs(componentFileName, componentName)
  );
  console.log(`📂 created ${compDirTests}`);
}

// create examples dir
if (!fs.existsSync(compDirExamples)) {
  fs.mkdirSync(compDirExamples);
  fs.writeFileSync(
    `${compDirExamples}basic.js`,
    basicJs(componentFileName, componentName)
  );
  console.log(`📂 created ${compDirExamples}, ${compDirExamples}basic.js`);
}

console.log(`🧙‍♂️ Created ${componentName} component`);
