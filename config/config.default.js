module.exports = (appInfo) => {
  return {
    keys: 'a',
    logger: {
      // dir: path.resolve(appInfo.root, '/logs/demoapp'),
      level: 'DEBUG', // console all logs to logfile
      consoleLevel: 'DEBUG' // console all logs to terminal
    },
    sequelize: {
      dialect: 'mysql',
      // host: '62.234.68.217',
      // port: 3306,
      // database: 'test_db',
      host: '45.79.65.203',
      port: 3306,
      password: '123456',
      database: 'egg-sequelize-doc-default'
    }
  }
}
