/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const srcDir = `${__dirname}/src`;

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: {
      '~app': srcDir,
      '~components': `${srcDir}/components`,
      '~locale': `${srcDir}/locale`,
      '~screens': `${srcDir}/screens`,
      '~theme': `${srcDir}/theme`,
      '~navigation': `${srcDir}/navigation`,
      '~shared': `${srcDir}/shared`,
      '~store': `${srcDir}/store`,
      '~assets': `${__dirname}/assets`,
      '~swoosh': `${__dirname}/assets/images/swoosh`,
    },
  },
};
