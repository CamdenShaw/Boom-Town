'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewItem = exports.fetchStackedLoader = exports.fetchStacked = exports.fetchFunction = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsonServer = 'http://localhost:3001';

var fetchFunction = exports.fetchFunction = function fetchFunction(stuff) {
  var uri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return (0, _nodeFetch2.default)(jsonServer + '/' + stuff + '/' + uri + '/').then(function (response) {
    return response.json();
  }).catch(function (err) {
    return console.log(err);
  });
};

var fetchStacked = exports.fetchStacked = function fetchStacked(stuff) {
  var stack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var uri = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  return (0, _nodeFetch2.default)(jsonServer + '/' + stuff + '/?' + stack + '=' + uri);
};

var fetchStackedLoader = exports.fetchStackedLoader = function fetchStackedLoader(stuff) {
  var stack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var uri = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  return (0, _nodeFetch2.default)(jsonServer + '/' + stuff + '/?' + stack + '=' + uri).then(function (response) {
    return response.json();
  }).catch(function (err) {
    return console.log(err);
  });
};

var createNewItem = exports.createNewItem = function createNewItem(title, imageurl, description, itemowner, tags) {
  var tzOffset = new Date().getTimezoneOffset() * 60000; // offset in milliseconds
  var localTime = new Date(Date.now() - tzOffset).toISOString().slice(0, -1).replace('T', ' ') + '-07';

  var newItem = {
    title: title,
    description: description,
    imageurl: imageurl,
    itemowner: itemowner,
    created: localTime,
    borrower: null
  };
  return (0, _nodeFetch2.default)(jsonServer + '/items', {
    method: "POST",
    headers: {
      "accept": "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  }).then(function (response) {
    return response.json();
  }).catch(function (err) {
    return console.log(err);
  });
};