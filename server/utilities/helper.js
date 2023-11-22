'use strict'

const Joi = require('joi')
const uniqid = require('uniqid')

const generateUniqueCode = () => {
  return uniqid()
}

const apiHeaders = () => {
  return Joi.object({
    authorization: Joi.string()
  }).options({
    allowUnknown: true
  })
}

const generateOTP = async length => {
  const digits = '0123456789'
  let OTP = ''
  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)]
  }
  return OTP
}

const generateRandomString = length => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let result = ''
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const encodeBase64 = string => {
  return Buffer.from(string).toString('base64')
}

const decodeBase64 = string => {
  return Buffer.from(string, 'base64').toString()
}

module.exports = {
  apiHeaders,
  encodeBase64,
  decodeBase64,
  generateUniqueCode,
  generateOTP,
  generateRandomString
}
