import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { HeaderLeft, HeaderRight } from './'

class HeaderContainer extends Component {
  constructor(){
    super()
    this.state = {
      thisUrl: window.location.href,
      url: 'http://localhost:3000',
      checkUrl: ''
    }
  }

  urlSlicer = () => {
    let checkUrl = this.state.thisUrl.slice(this.state.url.length+1)
    if(this.state.checkUrl === checkUrl) return checkUrl
    else {
      this.setState({
        checkUrl: checkUrl.slice(0, 5)
      })
      return checkUrl
    }
  }

  setUrl = () => {
    if(this.state.thisUrl === window.location.href) return ''
    else this.setState({
      thisUrl: window.location.href
    })
  }

  componentWillMount() {
    this.setUrl()
    this.urlSlicer()
  }

  componentDidUpdate() {
    this.setUrl()
    this.urlSlicer()
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.thisUrl)
    return this.state.checkUrl !== this.urlSlicer
  }

  render() {
    let { checkUrl } = this.state
    console.log(checkUrl)
    if(checkUrl  === 'share' || checkUrl === 'login') return null
    else return (
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