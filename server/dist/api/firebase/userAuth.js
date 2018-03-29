'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = require('firebase');

var firebase = _interopRequireWildcard(_firebase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
  return firebase.database().ref('users/' + user.uid).set({
    email: email,
    fullname: fullname,
    bio: userBio
  }).then(function () {});
}).catch(function (e) {
  console.log(e);
});