'use strict'

const Joi = require('joi')
const config = require('config')
Joi.objectId = require('joi-objectid')(Joi)
Joi.objectId = Joi.string
const moment = require('moment');
const helper = require('@utilities/helper')
const db = require('@plugins/mysql.plugin'); // Assuming you've registered the MySQL plugin

module.exports = {

  createUser: {
    validate: {
      payload: Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
      }),
    },
    handler: async (request, h) => {

      return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        console.log('db: ', db);
        const connection = request.server.app.db;

        connection.execute(query, [request.payload.username, request.payload.email, request.payload.password], (err, result) => {
          if (err) {
            reject(err);
            return;
          }

          // Retrieve the ID of the newly created user
          const userId = result.insertId;

          // Fetch the newly created user from the database and return it
          this.getUserById(userId)
            .then(resolve)
            .catch(reject);
        });
      });
    }
  }

}
