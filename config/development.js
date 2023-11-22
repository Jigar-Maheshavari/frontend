module.exports = {
  appName: 'buz',
  port: 1333,
  debug: {
    request: ['error', 'info'],
    log: ['info', 'error', 'warning']
  },
  connections: {
    db: process.env.DB
  }
}
