import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

class MyProfile extends Component {
  render() {
    return (
      <Link to="/profile"><RaisedButton label='My Profile' primary /></Link>
    )
  }
}

export default MyProfile