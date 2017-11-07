import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NewUserForm } from '../NewUserForm/NewUserForm'
import * as firebase from 'firebase'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector, Field } from 'redux-form'
import { Route, Redirect } from 'react-router-dom'
import { store } from '../../index'
import { userAuthorized, notAuthorized } from '../../redux/modules/authReducer'

import Login from './Login';


function authStateChanged() {
  firebase.auth().onAuthStateChanged(function(user) { 
    user ? store.dispatch(userAuthorized(user)) : store.dispatch(notAuthorized())
    user && <Redirect to='/' />
  })
}

function newUser(email, password) {
  try {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => firebase.database().ref(`users/${user.uid}`)
      .set({
        email: 'email@email.email',
        fullname: 'Email McGigger',
        userBio: 'I like emailing',
        id: `${user.uid}`
      })
    ).catch((e) => {
      let errorCode = e.code;
      let errorMessage = e.message;
      alert("no user exists", <NewUserForm />);
    });
  } catch(e) {
    console.log(e)
  }
}

class LoginContainer extends Component {

  static propTypes = {
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('You clicked the login button.', e);
    const {email, password} =  this.props.newUser;
    console.log(email, password, this.props.newUser, firebase)
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((err) => {
          let errorCode = err.code
          let errorMessage = err.message
        }
      )
    } catch(e) {
      console.log(e)
    }
    authStateChanged();
    newUser(email, password);
    authStateChanged();
  }

    state = {}

    render() {
      console.log(this.props.newUser);
        return (
            <Login login={this.handleSubmit} />
        );
    }
}

function mapStateToProps(state) {
  const values = formValueSelector("loginForm")
  return {
    newUser: values(state, "email", "password")
  }
}

export default connect(mapStateToProps)(LoginContainer);
