'use strict'

const errorHelper = require('@utilities/error-helper')
const { errors } = require('@utilities/constants')
const moment = require('moment')

const sessionPolicy = async (request, h) => {
  const SessionModel = require('@models/session.model').schema
  if (request.headers.session) {
    const session = await SessionModel.findOne({
      session: request.headers.session
    })
    if (session) {
      const now = moment()
      if (now > session.exipreTime) {
        errorHelper.handleError(errors.session.expired)
      }
    } else {
      errorHelper.handleError(errors.session.notFound)
    }
  } else {
    errorHelper.handleError(errors.session.notFound)
  }
  return h.continue
}

sessionPolicy.applyPoint = 'onPreHandler'
module.exports = sessionPolicy
