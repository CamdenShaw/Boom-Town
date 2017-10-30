import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NewUserForm } from '../NewUserForm/NewUserForm'
import * as firebase from 'firebase'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector, Field } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { store } from '../../index'
import { userAuthorized, notAuthorized } from '../../redux/modules/authReducer'

import Login from './Login';
import validator from '../../components/ValidatedTextField/Validator'

class LoginContainer extends Component {

    static propTypes = {
    };

    login = async (e) => {
        e.preventDefault();
        console.log('You clicked the login button.', e);
      try {
        await firebase.auth().createUserWithEmailAndPassword()
        .then((user) => firebase.database().ref(`users/${user.uid}`)
          .set({
            // email,
            // fullname,
            // userBio
          }).then(() => (
              <Redirect to="/" />
          )) 
        ).catch((e) => {
          let errorCode = e.code;
          let errorMessage = e.message;
          alert("no user exists", <NewUserForm />);
        });
      } catch(e) {
        console.log(e)
      }
      //   firebase.auth().onAuthStateChanged(function(user) { 
      //     user ? store.dispatch(userAuthorized(user)) : store.dispatch(notAuthorized())
      //   }).then( <Redirect to='/' />)

    }

    state = {}

    render() {
        return (
            <Login login={this.login} />
        );
    }
}

const loginForm = reduxForm({
  form: "loginForm",
  validator
})

function mapStateToProps(state) {
  const values = formValueSelector("loginForm")
  return {
    newUser: values(state, "email", "password")
  }
}

export default connect(mapStateToProps)(loginForm);
