const indexModule = require('index-module');
const _ = require('lodash');

indexModule(
  module,
  (fileName, fileExt) => {
    // Allowed filetypes
    return ['.js'].includes(fileExt);
  },
  (fileName, fileExt) => {
    // Cut "Ctrl" part from module name
    return _.camelCase(fileName).replace('Ctrl', '');
  }
);
