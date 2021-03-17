module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  resolver: {
    extraNodeModules: {
      '~app': `${__dirname}/src`,
      '~components': `${__dirname}/src/components`,
      '~screens': `${__dirname}/src/screens`,
      '~theme': `${__dirname}/src/theme`,
      '~navigation': `${__dirname}/src/navigation`,
      '~assets': `${__dirname}/assets`,
      '~store': `${__dirname}/src/store`,
    },
  },
};
