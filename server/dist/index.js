'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _apolloServerExpress = require('apollo-server-express');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _loaders = require('./api/loaders');

var _loaders2 = _interopRequireDefault(_loaders);

var _pgResource = require('./api/psql-server/pgResource');

var _pgResource2 = _interopRequireDefault(_pgResource);

var _config = require('./api/psql-server/config');

var _config2 = _interopRequireDefault(_config);

var _schema = require('./api/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import fbLoaders from './api/firebase/firebaseLoaders'
var app = (0, _express2.default)();
var PORT = process.env.PORT;

(0, _config2.default)(app);
var database = exports.database = (0, _pgResource2.default)(app);

var GQL_PORT = 3010;

app.use('*', (0, _cors2.default)());

app.use(_express2.default.static(__dirname));

app.use('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({
  schema: _schema2.default,
  context: { loaders: (0, _loaders2.default)() }
}));

app.use('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: '/graphql' }));

app.listen(PORT, init);

function init(err) {
  !err && console.log('Express was started on port ' + PORT);
}

app.listen(GQL_PORT, function () {
  return console.log('GraphQL is loaded on http://localhost:' + GQL_PORT + '/graphql');
});