import { makeExecutableSchema } from "graphql-tools"

import resolvers from "./resolver"

const typeDefs = `
  type User {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    itemsowned: [Item]
    itemsborrowed: [Item]
  }

  type Tag {
    id: ID
    tag: String
    itemstagged: [Item]
  }

  type Item {
    id: ID!
    title: String!
    description: String
    imageurl: String
    itemowner: User!
    created: String
    borrower: User
    tags: [Tag]
  }
  type Query {
    items: [Item]
    item(id: ID!): [Item]
    users: [User]
    user(id: ID!): User 
    tags: [Tag]
    tag(id: ID!): [Tag]
  }
  type Mutation {
    addItem (
      title: String!
      description: String
      imageurl: String
      itemowner: ID!
    ): Item
  }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
})
