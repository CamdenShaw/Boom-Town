import fetch from 'node-fetch'

const url = 'http://localhost:3001/'

const resolversFunction = {
  Query: {
    items() {
      return fetch(`${url}items`)
                  .then( response => response.json())
                  .catch( err => console.log(err))
    },
    item(root, { id }) {
      return  fetch(`${url}items/${id}`)
                    .then( response => response.json())
                    .catch( err => console.log(err))
    },
    users() {
      return fetch(`${url}users`)
                  .then( response => response.json())
                  .catch( err => console.log(err))
    },
    user(root, { id }) {
      return fetch(`${url}users/${id}`)
                  .then( response => response.json())
                  .catch( err => console.log(err))
    }
  },
  Item: {
    itemowner(item) {
      return fetch(`${url}users/${item.itemowner}`)
                  .then( response => response.json())
                  .catch( err => console.log(err))
    },
    
    borrower(item) {
      if( !item.borrower ) return null
      return fetch(`${url}users/${item.borrower}`)
                  .then( response => response.json())
                  .catch( err => console.log(err))
    }
  },
  User: {
    async itemsowned(user) {
      const response = await fetch(`${url}items/?itemowner=${user.id}`)
      const items = await response.json()
      return items
    },
    async itemsborrowed(user) {
      const response = await fetch(`${url}items/?borrower=${user.id}`)
      const items = await response.json()
      return items
    }
  }
}

export default resolversFunction