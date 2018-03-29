'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = undefined;

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _apolloServerExpress = require('apollo-server-express');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _jsonLoaders = require('./api/json-server/jsonLoaders');

var _jsonLoaders2 = _interopRequireDefault(_jsonLoaders);

var _schema = require('../schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = express();
var PORT = process.env.PORT;

initConfigs(app);
var database = exports.database = initPostgres(app);

var GQL_PORT = 3010;

app.use('*', (0, _cors2.default)());

app.use(express.static(__dirname));

app.use('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({
  schema: _schema2.default,
  context: { loaders: (0, _jsonLoaders2.default)() }
}));

app.use('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: '/graphql' }));

app.listen(PORT, init);

function init(err) {
  !err && console.log('Express was started on port ' + PORT);
}

app.listen(GQL_PORT, function () {
  return console.log('GraphQL is loaded on http://localhost:' + GQL_PORT + '/graphql');
});