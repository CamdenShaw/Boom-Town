"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        UserOwnedItems: new _dataloader2.default(function (ids) {
            return Promise.all(ids.map(function (id) {
                return _index.database.getItemByOwner(id);
            }));
        }),
        UserBorrowedItems: new _dataloader2.default(function (ids) {
            return Promise.all(ids.map(function (id) {
                return _index.database.getItemByBorrowed(id);
            }));
        }),
        GetItem: new _dataloader2.default(function (ids) {
            return Promise.all(ids.map(function (id) {
                return _index.database.getItem(id);
            }));
        }),
        GetUser: new _dataloader2.default(function (ids) {
            return Promise.all(ids.map(function (id) {
                return (0, _firebaseHelpers.getUser)(id);
            }));
        }),
        GetTag: new _dataloader2.default(function (ids) {
            return Promise.all(ids.map(function (id) {
                return _index.database.GetTags(id);
            }));
        })
    };
};

var _dataloader = require("dataloader");

var _dataloader2 = _interopRequireDefault(_dataloader);

var _index = require("../index");

var _firebaseHelpers = require("./firebase/firebaseHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }