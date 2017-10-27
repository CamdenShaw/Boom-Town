import { Pool } from 'pg';

const initPostgres = (app) => {

  const pgClient = new Pool({
    host: app.get('PG_HOST'),
    USER: app.get('PG_USER'),
    password: app.get('PG_PASSWORD'),
    database: app.get('PG_DATABASE'),
    max: 20,
    idleTimeoutMillis: 3000,
    connectionTimeoutMillis: 2000,
  })
  console.log(pgClient)

  return{
    getItems(){
        return pgClient.query('SELECT * FROM items').then(res => res.rows)
    }
  }
  
}

export default initPostgres