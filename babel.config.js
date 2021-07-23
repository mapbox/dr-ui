'use strict';

module.exports = {
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-transform-react-remove-prop-types'
  ],
  env: {
    // When running `test` Jest will enable compilation from ECMAScript modules to CommonJS automatically
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  }
};
