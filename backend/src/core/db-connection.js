import mongoose from 'mongoose';

import config from '../config';
import logger from './logger';

export default function connectMongoose() {
  mongoose.set('useCreateIndex', true);

  mongoose.connect(config.mongodbUri, {
    useNewUrlParser: true
  });

  const dbConnection = mongoose.connection;

  dbConnection.on('error', err => {
    logger.error(`db connection error ${err}`);
  });

  dbConnection.on('open', () => {
    logger.info('db connection opened');
  });

  process.on('SIGINT', function(){
    mongoose.connection.close(() => {
      logger.info('Termination, mongoose default connection is disconnected due to application termination');
      process.exit(0)
    });
  });
}
