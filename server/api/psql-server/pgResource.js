import { Pool } from 'pg';

const initPostgres = (app) => {

  const pgClient = new Pool({
    host: app.get('PG_HOST'),
    USER: app.get('PG_USER'),
    password: app.get('PG_PASSWORD'),
    database: app.get('PG_DATABASE'),
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 20000,
  })

  return {
    getItems() {
        return pgClient.query('SELECT * FROM items').then(res => res.rows)
    }
  }
  
}

export default initPostgres