const extend = require('node.extend');
const mode = require('yargs').argv.mode;
// Configs
const commonConfig = require(`./../../config`);
const modeConfig = require(`./../../config.${mode}`);
// const package = require('./package.json');

const config = extend(true, {}, commonConfig, modeConfig);

module.exports = {
  ...config,
  // Include props from package.json
  // package,
};
