const srcDir = `${__dirname}/src`

module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  resolver: {
    extraNodeModules: {
      '~app'        : srcDir,
      '~components' : `${srcDir}/components`,
      '~screens'    : `${srcDir}/screens`,
      '~theme'      : `${srcDir}/theme`,
      '~navigation' : `${srcDir}/navigation`,
      '~store'      : `${srcDir}/store`,
      '~assets'     : `${__dirname}/assets`,
      '~swoosh'     : `${__dirname}/assets/images/swoosh`,
    },
  },
};
