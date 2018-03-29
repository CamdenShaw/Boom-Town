"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require("graphql-tools");

var _resolver = require("./resolver");

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = "\n  type User {\n    id: ID!\n    email: String!\n    fullname: String!\n    bio: String\n    itemsowned: [Item]\n    itemsborrowed: [Item]\n  }\n\n  type Tag {\n    id: ID\n    tag: String\n    itemstagged: [Item]\n  }\n\n  type Item {\n    id: ID!\n    title: String!\n    description: String\n    imageurl: String\n    itemowner: User!\n    created: String\n    borrower: User\n    tags: [Tag]\n  }\n  type Query {\n    items: [Item]\n    item(id: ID!): [Item]\n    users: [User]\n    user(id: ID!): User \n    tags: [Tag]\n    tag(id: ID!): [Tag]\n  }\n  type Mutation {\n    addItem (\n      title: String!\n      description: String\n      imageurl: String\n      itemowner: ID!\n    ): Item\n  }\n";

exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolver2.default
});