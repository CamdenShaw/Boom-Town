import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import * as firebase from 'firebase'
import { connect } from 'react-redux'

class Logout extends Component {

  logOut = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <RaisedButton onClick={() => this.logOut()} secondary={true} label='Logout' />
    )
  }
}

export default connect()(Logout)