// TODO: when we move away from storybook, yarn remove tsconfig-paths-webpack-plugin
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')


module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  }
}
