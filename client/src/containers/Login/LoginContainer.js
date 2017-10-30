import React, { Component } from 'react';
import PropTypes from 'prop-types';
import newUserForm from '../NewUserForm/NewUserForm'
import * as firebase from 'firebase'

import Login from './Login';

class LoginContainer extends Component {

    static propTypes = {
    };

    login = (e, email, password, userBio, fullname) => {
        e.preventDefault();
        console.log(e);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => firebase.database().ref(`users/${user.uid}`)
            .set({
              email,
              fullname,
              userBio
            }).then(() => {
                
            }) 
          ).catch((e) => {
            alert("no user exists", newUserForm);
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
