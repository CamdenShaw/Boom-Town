import * as firebase from 'firebase'

export function firebaseInit() {
  const config = {
    apiKey: "AIzaSyCacootitVuGBMMLraKExCak9LGqgdb-LE",
    authDomain: "boomtown-52ff4.firebaseapp.com",
    databaseURL: "https://boomtown-52ff4.firebaseio.com",
    projectId: "boomtown-52ff4",
    storageBucket: "boomtown-52ff4.appspot.com",
    messagingSenderId: "24265605984"
  };
  
  return firebase.initializeApp(config);
}