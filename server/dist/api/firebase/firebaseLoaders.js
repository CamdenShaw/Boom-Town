'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    UserOwnedItems: new _dataloader2.default(function (ids) {
      return Promise.all(ids.map(function (id) {
        return (0, _firebaseHelpers.getItems)(id);
      }));
    }),
    UserBorrowedItems: new _dataloader2.default(function (ids) {
      return Promise.all(ids.map(function (id) {
        return (0, _firebaseHelpers.getItems)(id);
      }));
    }),
    User: new _dataloader2.default(function (ids) {
      return Promise.all(user.map(function (id) {
        return (0, _firebaseHelpers.getUser)(id);
      }));
    }),
    Item: new _dataloader2.default(function (ids) {
      return Promise.all(item.map(function (id) {
        return (0, _firebaseHelpers.getItem)(id);
      }));
    }),
    TaggedItems: new _dataloader2.default(function (ids) {
      return Promise.all(tag.map(function (id) {
        return (0, _firebaseHelpers.getTag)(id);
      }));
    })
    // ItemBorrower: new DataLoader(ids => (
    //   Promise.all(ids.map(id => getUsers(id)))
    // )),
    // ItemOwner: new DataLoader(ids => (
    //   Promise.all(ids.map(id => getUsers(id)))
    // )),
  };
};

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

var _firebaseHelpers = require('./firebaseHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;