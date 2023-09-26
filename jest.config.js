const appDir = '<rootDir>/src';

module.exports = {
  preset: 'react-native',
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'node'
    ],
    transformIgnorePatterns: [
      'node_modules/(?!(react-native',
      '@react-native-community/masked-view',
      '@react-native-community/netinfo',
      '@react-native',
      '|axios',
      '|lodash',
      '|react',
      '|react-native',
      '|react-native-root-siblings',
      '|react-native-geolocation-service',
      '|react-navigation',
      '|react-navigation-stack',
      ')/)'
    ],
    moduleNameMapper: {
      '~app': appDir,
      '~components': `${appDir}/components`,
      '~locale': `${appDir}/locale`,
      '~screens': `${appDir}/screens`,
      '~theme': `${appDir}/theme`,
      '~navigation': `${appDir}/navigation`,
      '~shared': `${appDir}/shared`,
      '~store': `${appDir}/store`,
      '~assets': '<rootDir>/assets',
      '~swoosh': '<rootDir>/assets/images/swoosh',
    },
    setupFiles: ['<rootDir>/jest.setup.js', './node_modules/react-native-gesture-handler/jestSetup.js'],
};