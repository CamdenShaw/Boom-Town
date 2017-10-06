import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { HeaderLeft, HeaderRight } from './'



class HeaderContainer extends Component {
  render() {
    return (
      <AppBar
        titleStyle={{display: 'none'}}
        style={{backgroundColor: 'ivory',
          display: 'flex',
          width: '100vw',
          height: '64px',
          justifyContent: 'space-between'
        }}
        iconElementLeft={<HeaderLeft />}
        iconElementRight={<HeaderRight /> }
      />
    )
  }
}

export default HeaderContainer