const path = require('path')



module.exports = (appInfo) => {
    return {
        keys: 'a',
        logger: {
            // dir: path.resolve(appInfo.root, '/logs/demoapp'),
            level: 'DEBUG', // console all logs to logfile
            consoleLevel: 'DEBUG',  // console all logs to terminal
        },
    }
}