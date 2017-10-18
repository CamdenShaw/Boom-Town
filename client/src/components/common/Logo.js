import React, { Component } from 'react'
import logo from '../../images/boomtown-logo.svg'

class Logo extends Component {
  render() {
    return (
      <img src={logo} style={{height: 50, margin: '0 5px', padding: 6}} />
    )
  }
}

export default Logo