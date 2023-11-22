module.exports = {
  appName: 'buz',
  port: 1333,
  console_url: 'http://localhost:4200',
  debug: {
    request: ['error', 'info'],
    log: ['info', 'error', 'warning']
  },

  constants: {
    EXPIRATION_PERIOD: '730h',
    JWT_SECRET: 'jwtsecret',
    CATEGORY_TYPE: {
      BUSINESS: 'business',
      FLYER: 'flyer',
      TEMPLATE: 'template'
    },
    VERIFICATION_EXPIRATION_PERIOD: '24',
  },

  connections: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  }
}
