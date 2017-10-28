import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase'

import Login from './Login';

class LoginContainer extends Component {

    static propTypes = {
    };

    login = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
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
        console.log('You clicked the login button.');
    }

    render() {
        return (
            <Login login={this.login} />
        );
    }
}

export default LoginContainer;
