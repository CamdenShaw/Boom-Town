'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _jsonResolvers = require('../json-server/jsonResolvers');

var _jsonResolvers2 = _interopRequireDefault(_jsonResolvers);

var _pgResolvers = require('./pgResolvers');

var _pgResolvers2 = _interopRequireDefault(_pgResolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = '\n  type User {\n    id: ID!\n    email: String!\n    fullname: String!\n    bio: String\n    itemsowned: [Item]\n    itemsborrowed: [Item]\n  }\n\n  type Tag {\n    id: ID\n    title: String\n  }\n\n  type Item {\n    id: ID!\n    title: String!\n    description: String\n    imageurl: String\n    itemowner: User!\n    created: String\n    borrower: User\n  }\n  type Query {\n    items: [Item]\n    item(id: ID!): Item\n    users: [User]\n    user(id: ID!): User \n  }\n  type Mutation {\n    addItem (\n      title: String!\n      description: String\n      imageurl: String\n      itemowner: ID!\n    ): Item\n  }\n';
exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  jsonResolvers: _jsonResolvers2.default,
  pgResolvers: _pgResolvers2.default
});