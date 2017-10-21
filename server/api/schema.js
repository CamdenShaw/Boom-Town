import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolver'

const typeDefs = `
  type User {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    itemsowned: [Item]
    itemsborrowed: [Item]
  }

  type Item {
    id: ID!
    title: String!
    description: String
    imageurl: String
    tags: [String]
    itemowner: User!
    created: String
    available: Boolean!
    borrower: User
  }
  type Query {
    items: [Item]
    item(id: ID!): Item
    users: [User]
    user(id: ID!): User 
  }
  type Mutation {
    addItem (
      title: String!
      description: String
      imageurl: String
      tags: [String]
      itemowner: ID!
    ): Item
  }
`
export default makeExecutableSchema({
  typeDefs,
  resolvers
})