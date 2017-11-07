import * as firebase from 'firebase'

import fetch from 'node-fetch'
import pool from '../psql-server/pgResource'

const config = {
  apiKey: "AIzaSyCacootitVuGBMMLraKExCak9LGqgdb-LE",
  authDomain: "boomtown-52ff4.firebaseapp.com",
  databaseURL: "https://boomtown-52ff4.firebaseio.com",
  projectId: "boomtown-52ff4",
  storageBucket: "boomtown-52ff4.appspot.com",
  messagingSenderId: "24265605984"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    firebaseDB.ref('/users/${id}')
            .once('value')
            .then((snapshot) => {
              resolve({
              ...snapshot.val(),
              id:id
              })
            }).catch(e => console.log(e))
  })
}

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    firebaseDB.ref('/users')
            .once('value')
            .then((snapshot) => {
              const userList = [];
              const users = snapshot.val();

              Object.keys(users).forEach(id => userList.push({
                 ...user[id], id
              }))
              resolve(userList)
            }).catch(e => console.log(e))
  })
}

export const getItems = async () => {
  const response = await pool.query(`SELECT * FROM items`)
  const items = await response.json();
  return items
}

export const getItem = async (id) => {
  const response = await pool.query(`SELECT ${id} FROM items`)
  const items = await response.json();
  return items
}

export const getTags = async (id) => {
  const response = await pool.query(`SELECT * FROM tags`)
  const tags = await response.json();
  return tags
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