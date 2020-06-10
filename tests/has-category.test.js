const components = require('../docs/src/data/components');
const categories = require('../docs/src/data/categories.json');

components.map(component => {
  it(`add "${
    component.name
  }" to category in docs/src/data/categories.json`, () => {
    const isListed = Object.keys(categories).filter(
      f => categories[f].indexOf(component.name) > -1
    ).length;
    expect(isListed).toBeTruthy();
  });
});
