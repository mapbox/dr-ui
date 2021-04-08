const { NODE_ENV } = process.env;

const inDevelopment = NODE_ENV === 'development';

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    !inDevelopment && '@loadable/babel-plugin' // this plugin fails on `npm start`
  ].filter(Boolean)
};
