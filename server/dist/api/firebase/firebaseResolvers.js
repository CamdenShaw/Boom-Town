'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../index');

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _firebaseHelpers = require('./firebaseHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var resolversFunction = {
  Query: {
    users: function users() {
      try {
        return (0, _firebaseHelpers.getUsers)('users');
      } catch (e) {
        console.log(e);
      }
    },
    user: function user(root, _ref, context) {
      var id = _ref.id;

      try {
        return context.loaders.User.load(id);
      } catch (e) {
        console.log(e);
      }
    },
    items: function items() {
      try {
        return _index.database.getItems();
      } catch (e) {
        console.log(e);
      }
    },
    item: function item(root, _ref2) {
      var id = _ref2.id;

      try {
        return context.loader.Item.load(id);
      } catch (e) {
        console.log(e);
      }
    }
  },
  Item: {
    itemowner: function itemowner(item) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (item.itemowner) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', null);

              case 2:
                _context.next = 4;
                return (0, _firebaseHelpers.getUsers)(item.itemowner);

              case 4:
                return _context.abrupt('return', _context.sent);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    borrower: function borrower(item, arg, context) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (item.borrower) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', null);

              case 2:
                _context2.next = 4;
                return (0, _firebaseHelpers.getUsers)(item.borrower);

              case 4:
                return _context2.abrupt('return', _context2.sent);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  },
  User: {
    itemsowned: function itemsowned(user, arg, context) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (user.id) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return', null);

              case 2:
                _context3.next = 4;
                return context.loaders.UserOwnedItems.load(user.id);

              case 4:
                return _context3.abrupt('return', _context3.sent);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    itemsborrowed: function itemsborrowed(user, arg, context) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (user.id) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt('return', null);

              case 2:
                _context4.next = 4;
                return context.loaders.UserBorrowedItems.load(user.id);

              case 4:
                return _context4.abrupt('return', _context4.sent);

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    }
  },
  Tag: {
    itemstagged: function itemstagged(item, arg, context) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (item.id) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return', null);

              case 2:
                _context5.next = 4;
                return context.loaders.TaggedItems.load(item.id);

              case 4:
                return _context5.abrupt('return', _context5.sent);

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    }
  },
  Mutation: {
    addItem: function addItem(root, _ref3) {
      var title = _ref3.title,
          imageurl = _ref3.imageurl,
          description = _ref3.description,
          itemowner = _ref3.itemowner;

      return (0, _firebaseHelpers.createNewItem)(title, imageurl, description, itemowner);
    }
  }
};

exports.default = resolversFunction;