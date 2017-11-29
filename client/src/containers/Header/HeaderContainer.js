import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { HeaderLeft, HeaderRight } from './'

class HeaderContainer extends Component {
  render() {
    let { auth, loading } = this.props
    return (
      <AppBar
          titleStyle={{display: 'none'}}
          style={{
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