class Log {
  constructor(name) {
    this.isDev = process.env.NODE_ENV === 'development';
    this.logName = name;
    this.info = this.info.bind(this);
    this.error = this.error.bind(this);
    this.log = this.log.bind(this);
    this.warn = this.warn.bind(this);
  }
  info(message) {
    if (this.isDev) console.info(`${this.logName.toUpperCase()} - ${new Date().toLocaleTimeString()}: ${message}`);
  }
  error(message) {
    if (this.isDev) console.info(`${this.logName.toUpperCase()} - ${new Date().toLocaleTimeString()}: ${message}`);
  }
  log(message) {
    if (this.isDev) console.info(`${this.logName.toUpperCase()} - ${new Date().toLocaleTimeString()}: ${message}`);
  }
  warn(message) {
    if (this.isDev) console.info(`${this.logName.toUpperCase()} - ${new Date().toLocaleTimeString()}: ${message}`);
  }
}

export default Log;
