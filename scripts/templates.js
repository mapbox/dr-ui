module.exports = {
  indexJs: (componentFileName) => {
    return `import main from './${componentFileName}';

export default main;
    `;
  },

  componentJs: (componentName) => {
    return `import React from 'react';
import PropTypes from 'prop-types';

export default class ${componentName} extends React.Component {
  render() {
    return (
      <div>Hello world!</div>
    )
  }
}

${componentName}.propTypes = {

};`;
  },

  testCasesJs: () => {
    return `import React from 'react';
import Basic from '../examples/basic';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
description: 'Basic',
element: <Basic />
};

export { testCases, noRenderCases };`;
  },

  testJs: (componentFileName, componentName) => {
    return `import renderer from 'react-test-renderer';
import { testCases } from './${componentFileName}-test-cases.js';

describe('${componentName}', () => {
describe(testCases.basic.description, () => {
  let testCase;
  let wrapper;
  let tree;

  beforeEach(() => {
    testCase = testCases.basic;
    wrapper = renderer.create(testCase.element);
    tree = wrapper.toJSON();
  });

  test('renders as expected', () => {
    expect(tree).toMatchSnapshot();
  });
});
});
`;
  },

  basicJs: (componentFileName, componentName) => {
    return `/*
Basic.
*/
import React from 'react';
import ${componentName} from '../${componentFileName}';

export default class Basic extends React.Component {
render() {
  return <${componentName} />;
}
}
`;
  }
};
