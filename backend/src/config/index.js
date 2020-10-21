import nconf from 'nconf';

// Setup nconf to use (in-order):
//   1. Command-line arguments
//   2. Environment variables
//   3. A file located at 'path/to/config.json'
nconf
  .argv()
  .env()
  .file({file: 'src/config/local.json'})
  .file({file: 'src/config/default.json'});

const config = Object.freeze({
  host: nconf.get('HOST'),
  port: nconf.get('PORT'),
  version: nconf.get('VERSION'),
  name: nconf.get('NAME'),
  mongodbUri: nconf.get('MONGODB_URI')
});

export default config;
