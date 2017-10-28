import * as firebase from 'firebase'

export default firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => firebase.database().ref(`users/${user.uid}`)
    .set({
      email,
      fullname,
      bio: userBio
    }).then(() => {

    }) 
  ).catch((e) => {
    console.log(e);
  }
);