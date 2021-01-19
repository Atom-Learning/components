module.exports = {
  // your Storybook configuration
  refs: {
    'design-system': {
      title: 'Atom Learning Design System',
      url: 'https://storybook.atomlearning.technology'
    }
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials']
}
