"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firebaseInit = firebaseInit;

var _firebase = require("firebase");

var firebase = _interopRequireWildcard(_firebase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function firebaseInit() {
  var config = {
    apiKey: "AIzaSyCacootitVuGBMMLraKExCak9LGqgdb-LE",
    authDomain: "boomtown-52ff4.firebaseapp.com",
    databaseURL: "https://boomtown-52ff4.firebaseio.com",
    projectId: "boomtown-52ff4",
    storageBucket: "boomtown-52ff4.appspot.com",
    messagingSenderId: "24265605984"
  };

  return firebase.initializeApp(config);
}