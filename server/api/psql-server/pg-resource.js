const { Pool } = require('pg');

module.exports = function(app) {

  const pgClient = new Pool({
    host: app.get('PG_HOST'),
    USER: app.get('PG_USER'),
    password: app.get('PG_PASSWORD'),
    max: 20,
    idleTimeoutMillis: 3000,
    connectionTimeoutMillis: 2000,
  })

  return pgClient;
}