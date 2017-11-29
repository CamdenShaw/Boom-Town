import fetch from 'node-fetch' 
import pool from './psql-server/pgResource' 

const jsonServer = 'http://localhost:3001'
const expressServer = 'http://localhost:3011'

export const fetchFunction = (stuff, uri = '') => {
    let x = fetch(`${jsonServer}/${stuff}/${uri}`)
                .then(response => response.json())
                .catch(err => console.log(err))
    return x
}

export const fetchStacked = (stuff, stack = '', uri = '') => {
    return fetch(`${jsonServer}/${stuff}/${stack}=${uri}`)
}

export const fetchStackedLoader = (stuff, stack = '', uri = '') => {
    //http://localhost:3001/items/?borrower=wtC3mP5BIuNLHKa0gcOdTzsIRwC2
    return fetch(`${jsonServer}/${stuff}/?${stack}=${uri}`)
                .then(response => response.json())
                .catch(err => console.log(err))
}

export const createNewItem = (title, imagurl, description, itemowner, tags) => {
    const tzOffset = (new Date()).getTimezoneOffset() * 60000
    const localTime = `${(new Date(Date.now() - tzOffset)).toISOString().slice(0, -1).replace('T', ' ')}-07`

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
        }).then(response => response.json())
        .catch(err => console.log(err))
}