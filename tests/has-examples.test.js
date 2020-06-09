const fs = require('fs');
const folder = './src/components/';
const components = fs.readdirSync(folder);

components.forEach(component => {
  it(`missing examples for "${component}" component`, () => {
    const files = fs.readdirSync(`${folder}${component}`);
    expect(files.indexOf('examples') > -1).toBeTruthy();
  });
});
