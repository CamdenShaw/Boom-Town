'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewItem = exports.getItem = exports.getItems = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _pgResource = require('./pgResource');

var _pgResource2 = _interopRequireDefault(_pgResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getItems = exports.getItems = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, items;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _pgResource2.default.query('SELECT * FROM items');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            items = _context.sent;
            return _context.abrupt('return', items);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getItems() {
    return _ref.apply(this, arguments);
  };
}();

var getItem = exports.getItem = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var response, items;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _pgResource2.default.query('SELECT ' + id + ' FROM items');

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return response.json();

          case 5:
            items = _context2.sent;
            return _context2.abrupt('return', items);

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getItem(_x) {
    return _ref2.apply(this, arguments);
  };
}();

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