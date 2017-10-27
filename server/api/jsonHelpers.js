import fetch from 'node-fetch'
import pool from './psql-server/pg-resource'

const jsonServer = 'http://localhost:3001'

export const fetchFunction = (stuff, uri = '') => {
  return fetch(`${jsonServer}/${stuff}/${uri}/`)
              .then( response => response.json())
              .catch( err => console.log(err))
}

export const fetchStacked = (stuff, stack = '', uri = '') => {
  return fetch(`${jsonServer}/${stuff}/?${stack}=${uri}`)
}

export const fetchStackedLoader = (stuff, stack = '', uri = '') => {
  return fetch(`${jsonServer}/${stuff}/?${stack}=${uri}`)
              .then( response => response.json())
              .catch( err => console.log(err))
}

export const getItems = async () => {
  const response = await pool.query(`SELECT * FROM items`)
  const items = await response.json();
  return items
}

export const createNewItem = ( title, imageurl, description, itemowner, tags ) => {
  const tzOffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
  const localTime = `${(new Date(Date.now() - tzOffset)).toISOString().slice(0, -1).replace('T', ' ')}-07`;

  const newItem = {
    title,
    description,
    imageurl,
    itemowner,
    created: localTime,
    borrower: null
  }
  return fetch(`${jsonServer}/items`, {
            method: "POST",
            headers: {
              "accept": "application/json, text/plain, */*",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
          }).then( response => response.json())
            .catch( err => console.log(err))
}