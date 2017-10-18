import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { HeaderLeft, HeaderRight } from './'

class HeaderContainer extends Component {
  render() {
    return (
      <AppBar
        titleStyle={{display: 'none'}}
        style={{
          backgroundColor: 'white',
          display: 'flex',
          width: '100vw',
          height: 64,
          justifyContent: 'space-between'
        }}
        iconElementLeft={<HeaderLeft />}
        iconElementRight={<HeaderRight /> }
      />
    )
  }
}

export default HeaderContainer