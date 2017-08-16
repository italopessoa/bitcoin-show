class Log {
  constructor(name) {
    this.isDev = process.env.NODE_ENV === 'development';
    this.logName = name;
    this.info = this.info.bind(this);
    this.error = this.error.bind(this);
    this.log = this.log.bind(this);
    this.warn = this.warn.bind(this);
    this.colors = { HOMEPAGE: 'blue', QUESTIONPANEL: 'green', TIMER: 'pink', QUESTIONTITLEPANEL: 'orange', QUESTIONOPTIONSPANEL: 'brown' };
  }
  info(message) {
    if (this.isDev) console.info(`%c${this.logName.toUpperCase()} - ${new Date().toLocaleTimeString()}: ${message}`, `color:${this.colors[this.logName.toUpperCase()]}`);
  }
  error(message) {
    if (this.isDev) console.error(`${this.logName.toUpperCase()} - ${new Date().toLocaleTimeString()}: ${message}`);
  }
  log(message) {
    if (this.isDev) console.log(`%c${this.logName.toUpperCase()} - ${new Date().toLocaleTimeString()}: ${message}`, `color:${this.colors[this.logName.toUpperCase()]}`);
  }
  warn(message) {
    if (this.isDev) console.warn(`${this.logName.toUpperCase()} - ${new Date().toLocaleTimeString()}: ${message}`, 'color:purle');
  }
}

export default Log;
