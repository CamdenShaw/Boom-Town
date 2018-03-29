"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.database = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _apolloServerExpress = require("apollo-server-express");

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _jsonLoaders = require("../json-server/jsonLoaders");

var _jsonLoaders2 = _interopRequireDefault(_jsonLoaders);

var _pgLoaders = require("./pgLoaders");

var _pgLoaders2 = _interopRequireDefault(_pgLoaders);

var _pgResource = require("./pg-resource");

var _pgResource2 = _interopRequireDefault(_pgResource);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _schema = require("../schema");

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT;

(0, _config2.default)(app);
var database = exports.database = (0, _pgResource2.default)(app);

var GQL_PORT = 3010;

app.use("*", (0, _cors2.default)());

app.use(_express2.default.static(__dirname));

app.use("/graphql", _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({
    schema: _schema2.default,
    context: { loaders: [(0, _pgLoaders2.default)(), (0, _jsonLoaders2.default)()] }
}));

app.use("/graphiql", (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: "/graphql" }));

app.listen(PORT, init);

function init(err) {
    !err && console.log("Express was started on port " + PORT);
}

app.listen(GQL_PORT, function () {
    return console.log("GraphQL is loaded on http://localhost:" + GQL_PORT + "/graphql");
});