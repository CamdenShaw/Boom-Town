"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pg = require("pg");

var initPostgres = function initPostgres(app) {
    var pgClient = new _pg.Pool({
        host: app.get("PG_HOST"),
        USER: app.get("PG_USER"),
        password: app.get("PG_PASSWORD"),
        database: app.get("PG_DATABASE"),
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 20000
    });

    return {
        getItem: function getItem(id) {
            return pgClient.query("SELECT * FROM items WHERE id = " + id).then(function (res) {
                return res.rows;
            });
        },
        getItemByOwner: function getItemByOwner(id) {
            return pgClient.query("SELECT * FROM items WHERE itemowner = '" + id + "'").then(function (res) {
                return res.rows;
            });
        },
        getItemByBorrowed: function getItemByBorrowed(id) {
            return pgClient.query("SELECT * FROM items WHERE borrower = '" + id + "'").then(function (res) {
                return res.rows;
            });
        },
        getItems: function getItems() {
            return pgClient.query("SELECT * FROM items").then(function (res) {
                return res.rows;
            });
        },

        // getTags() {
        //     return pgClient.query(`SELECT * FROM tags`).then(res => res.rows)
        // },
        getTag: function getTag(id) {
            return pgClient.query("SELECT * FROM tags WHERE id = '" + id + "'").then(function (res) {
                return res.rows;
            });
        },
        getTags: function getTags(id) {
            return pgClient.query("SELECT *, tags.tag FROM items INNER JOIN correlation_table ON items.id=correlation_table.item_id INNER JOIN tags ON correlation_table.tag_id=tags.id WHERE correlation_table.item_id=" + id + ";").then(function (res) {
                return res.rows;
            });
        }
    };
};

exports.default = initPostgres;