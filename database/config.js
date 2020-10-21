const nconf = require('nconf');

nconf
  .argv()
  .env()
  .file({file: '../backend/src/config/local.json'})
  .file({file: '../backend/src/config/default.json'});

const mongodbUri = nconf.get('MONGODB_URI');

const uriParts = mongodbUri.split('/');
const dbName = uriParts[uriParts.length - 1];

module.exports = { mongodbUrl: uriParts.slice(0, -1).join('/'), dbName };
