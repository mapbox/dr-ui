'use strict';

module.exports = {
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-transform-react-remove-prop-types'
  ],
  env: {
    // When running `test` and `start` Jest and ReactTestKitchen will enable compilation from ECMAScript modules to CommonJS automatically
    test: {
      presets: [['@babel/preset-env'], '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  }
};
