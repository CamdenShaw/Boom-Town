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

export const getUser = () => {
  return new Promise((resolve, reject) => {
    firebaseDB.refs('/users/${id}')
            .once('values')
            .then((snapshot) => {
              resolve({
              ...snapshot.val()
              })
            }).catch(e => console.log(e))
  })
}

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    firebaseDB.refs('/users')
            .once('values')
            .then((snapshot) => {
              resolve({
                ...snapshot.val()
              })
            }).catch(e => console.log(e))
  })
}