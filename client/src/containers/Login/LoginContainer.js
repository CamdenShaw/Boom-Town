import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NewUserForm } from '../NewUserForm/NewUserForm'
import * as firebase from 'firebase'
import { Redirect } from 'react-router-dom'
import { store } from '../../index'
import { userAuthorized, notAuthorized } from '../../redux/modules/authReducer'

import Login from './Login';

class LoginContainer extends Component {

    static propTypes = {
    };

    login = (e) => {
        e.preventDefault();
        console.log('You clicked the login button.', e);

      //   firebase.auth().onAuthStateChanged(function(user) { 
      //     user ? store.dispatch(userAuthorized(user)) : store.dispatch(notAuthorized())
      //   }).then( <Redirect to='/' />)

        firebase.auth().createUserWithEmailAndPassword()
        .then((user) => firebase.database().ref(`users/${user.uid}`)
          .set({
            // email,
            // fullname,
            // userBio
          }).then(() => (
              <Redirect to="/" />
          )) 
        ).catch((e) => {
          alert("no user exists", <NewUserForm />);
          console.log(e);
        }
      );
    }

    render() {
        return (
            <Login login={this.login} />
        );
    }
}

export default LoginContainer;
