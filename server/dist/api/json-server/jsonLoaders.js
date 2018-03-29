'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    UserOwnedItems: new _dataloader2.default(function (ids) {
      return Promise.all(ids.map(function (id) {
        return (0, _jsonHelpers.fetchStackedLoader)('items', 'itemowner', id);
      }));
    }),
    UserBorrowedItems: new _dataloader2.default(function (ids) {
      return Promise.all(ids.map(function (id) {
        return (0, _jsonHelpers.fetchStackedLoader)('items', 'borrower', id);
      }));
    }),
    ItemBorrower: new _dataloader2.default(function (ids) {
      return Promise.all(ids.map(function (id) {
        return (0, _jsonHelpers.fetchFunction)('users', id);
      }));
    }),
    ItemOwner: new _dataloader2.default(function (ids) {
      return Promise.all(ids.map(function (id) {
        return (0, _jsonHelpers.fetchFunction)('users', id);
      }));
    })
  };
};

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

var _jsonHelpers = require('./jsonHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;