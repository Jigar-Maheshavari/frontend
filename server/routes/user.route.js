'use strict'
// Never take constants here
module.exports = {
  plugin: {
    async register(server, options) {
      const API = require('./../api/user.api')
      server.route([
        {
          method: 'POST',
          path: '/signup',
          config: {
            auth: null,
            plugins: {
              policies: ['log.policy']
            },
            tags: ['api', 'Timer'],
            description: 'Create Timer User',
            notes: 'Create Timer User',
            validate: API.createUser.validate,
            pre: API.createUser.pre,
            handler: API.createUser.handler
          }
        },
      ])
    },
    version: require('../../package.json').version,
    name: 'timer-routes'
  }
}
