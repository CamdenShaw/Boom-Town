import { makeExecutableSchema } from 'graphql-tools'

// import fbResolvers from './firebase/firebaseResolvers'
// import ResolverFunctions from "./psql-server/pgResolvers"
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

  type Tag {
    id: ID
    title: String
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
// export default makeExecutableSchema({
//   typeDefs,
//   ResolverFunctions
// })
// export default makeExecutableSchema({
//   typeDefs,
//   fbResolvers
// })
export default makeExecutableSchema({
  typeDefs,
  resolvers
})