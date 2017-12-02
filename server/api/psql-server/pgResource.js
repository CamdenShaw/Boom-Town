import { Pool } from "pg"

const initPostgres = app => {
    const pgClient = new Pool({
        host: app.get("PG_HOST"),
        USER: app.get("PG_USER"),
        password: app.get("PG_PASSWORD"),
        database: app.get("PG_DATABASE"),
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 20000
    })

    return {
        getItem(id) {
            return pgClient
                .query(`SELECT * FROM items WHERE id = ${id}`)
                .then(res => res.rows)
        },
        getItemByOwner(id) {
            return pgClient
                .query(`SELECT * FROM items WHERE itemowner = '${id}'`)
                .then(res => res.rows)
        },
        getItemByBorrowed(id) {
            return pgClient
                .query(`SELECT * FROM items WHERE borrower = '${id}'`)
                .then(res => res.rows)
        },
        getItems() {
            return pgClient.query(`SELECT * FROM items`).then(res => res.rows)
        },
        // getTags() {
        //     return pgClient.query(`SELECT * FROM tags`).then(res => res.rows)
        // },
        getTag(id) {
            return pgClient
                .query(`SELECT * FROM tags WHERE id = '${id}'`)
                .then(res => res.rows)
        },
        getTags(id) {
            return pgClient
                .query(
                    `SELECT *, tags.tag FROM items INNER JOIN correlation_table ON items.id=correlation_table.item_id INNER JOIN tags ON correlation_table.tag_id=tags.id WHERE correlation_table.item_id=${id};`
                )
                .then(res => res.rows)
        }
    }
}

export default initPostgres
