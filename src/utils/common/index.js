const indexModule = require('index-module');
const _ = require('lodash');

indexModule(
  module,
  (fileName, fileExt) => ['.js'].includes(fileExt),
  (fileName, fileExt) => _.camelCase(fileName)
);
