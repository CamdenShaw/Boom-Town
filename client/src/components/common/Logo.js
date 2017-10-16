import React, { Component } from 'react'
import logo from '../../images/boomtown-logo.svg'

class Logo extends Component {
  render() {
    return (
      <img src={logo} style={{height: 50}} />
    )
  }
}

export default Logo