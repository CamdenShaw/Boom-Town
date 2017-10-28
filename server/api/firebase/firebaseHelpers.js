import fetch from 'node-fetch'
import pool from '../psql-server/pgResource'
import * as firebase from 'firebase'

const firebaseDB = firebase.database();

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    firebaseDB.refs('/users/${id}')
            .once('values')
            .then((snapshot) => {
              resolve({
                ...snapshot.val()
              })
            })
            .catch(e => console.log(e))
  })
}