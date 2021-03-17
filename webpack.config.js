/* Allow aliases on PHPStorm */
/* Got it from https://youtrack.jetbrains.com/issue/WEB-23221 */

const path = require('path');
import metroConfig from './metro.config';

module.exports = {
    resolve: {
        alias: metroConfig.resolver.extraNodeModules,
        modules: [path.resolve(__dirname, 'src')],
    },
};
