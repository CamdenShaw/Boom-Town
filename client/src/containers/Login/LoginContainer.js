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
    const {email, password} =  this.props.newUser;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(console.log('success'))
        .catch((err) => {
          console.log('err1', err)
          newUser(email, password);
          authStateChanged();
        })
        .catch((err) => {
          console.log('err2', err)
          let errorCode = err.code
          let errorMessage = err.message
          console.log(errorCode, errorMessage)
        })
      } catch(e) {
        console.log(e)
      }
      authStateChanged();
  }

    state = {}

    render() {
      let { loading, auth } = this.props
      return loading ? <div>loading</div> : auth ? <Redirect to={'/'} /> : <Login login={this.handleSubmit} /> 
    }
}

function mapStateToProps(state) {
  const values = formValueSelector("loginForm")
  return {
    newUser: values(state, "email", "password"),
    auth: state.auth.auth,
    loading: state.auth.isLoading
  }
}

export default connect(mapStateToProps)(LoginContainer);