// plugins/mysql.js

const mysql = require('mysql2/promise'); // We're using the 'mysql2' package


const plugin = {
  name: 'mysql-plugin',

  register: async (server, options) => {
    const pool = await mysql.createPool(options.connections);
    // return pool
    // Expose the database connection to the server and other plugins
    server.decorate('request', 'mysql', pool);
    server.app.db = pool;
    // Close the database connection when the server stops
    server.ext('onPreStop', () => {
      pool.end((err) => {
        if (err) {
          console.error('Error closing database connection:', err);
        } else {
          console.log('Closed MySQL database connection');
        }
      });
    });
  },
};

module.exports = plugin;
