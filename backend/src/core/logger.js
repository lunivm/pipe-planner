import winston from 'winston';

const logLevel = Object.freeze({
  error: 'error',
  warn: 'warn',
  info: 'info',
  debug: 'debug'
});

const commonFileOpts = opts => Object.assign(opts, {
  maxsize: 5242880, // 5MB;
  maxFiles: 5,
  handleExceptions: true,
});

const winstonLogger = winston.createLogger({
  transports: [
    new winston.transports.File(commonFileOpts({
      level: 'info',
      filename: 'logs/combined.log',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    })),
    new winston.transports.File(commonFileOpts({
      level: 'error',
      filename: 'logs/error.log',
    })),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      format: winston.format.cli()
    })
  ]
});

const logger = level => msg => winstonLogger[level](msg);

export default Object.freeze({
  error: logger(logLevel.error),
  warn: logger(logLevel.warn),
  info: logger(logLevel.info),
  debug: logger(logLevel.debug),
});

