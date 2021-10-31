module.exports = {
  stories: ['../src/components/**/index.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
