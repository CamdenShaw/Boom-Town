import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

class Logout extends Component {

  render() {
    return (
      <Link to="/login"><RaisedButton label='Logout' labelColor='white' backgroundColor='#343434' /></Link>
    )
  }

}

export default Logout