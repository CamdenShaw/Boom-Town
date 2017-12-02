import React, { Component } from "react"
import AppBar from "material-ui/AppBar"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import HeaderLeft from './HeaderLeft'
import HeaderRight from "./HeaderRight"
import { getUser } from "../../redux/modules/authReducer"
import userIdFetch from '../../redux/modules/authReducer'

class HeaderContainer extends Component {
  constructor(){
    super()
    this.state = {
      thisUrl: window.location.href,
      url: 'http://localhost:3000',
      checkUrl: '',
      userId: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(userIdFetch())
  }

  urlSlicer = () => {
    let checkerUrl = window.location.href.slice(this.state.url.length+1)
    let checker = checkerUrl.slice(0, 5)
    if(this.state.checkUrl === checker) return checker
    else {
      this.setState({
        checkUrl: checker
      })
      return checker
    }
  }

  setUrl = () => {
    if(this.state.thisUrl === window.location.href) return ''
    else this.setState({
      thisUrl: window.location.href
    })
  }

  componentWillReceiveProps(nextProps){
    if(this.state.usrId === '' && nextProps.userId) this.setState({
      userId: nextProps.userId
    })
  }

  componentDidMount() {
    this.setUrl()
    this.urlSlicer()
  }

  componentWillUpdate() {
    this.setUrl()
    this.urlSlicer()
  }

  componentDidUpdate(){
    console.log(this.state.thisUrl, window.location.href)
    if(this.state.thisUrl !== window.location.href){
      this.setUrl()
      this.urlSlicer()
    }
    // if(this.props.userId == undefined) this.props.dispatch(userIdFetch)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.thisUrl !== window.location.href && this.props.userId == undefined || !this.props.userId || this.state.thisUrl !== window.location.href) 
  }

  componentWillUnmount(){
    console.log('unmount header')
  }

  render() {
    let { checkUrl } = this.state
    let { userId, auth } = this.props
    if( checkUrl === 'login') return null
    else return (
        userId ? <AppBar
          titleStyle={{display: 'none'}}
          style={{
            display: 'flex',
            width: '100vw',
            height: 64,
            justifyContent: 'space-between'
          }}
          iconElementLeft={<HeaderLeft />}
          iconElementRight={<HeaderRight curUrl={this.urlSlicer} userId={userId} /> }
        /> : <p>loading</p>
    )
  }
}


HeaderContainer.propTypes = {
  user: PropTypes.object
}

function mapStateToProps(state) {
  return {
      userId: state.auth.userId,
      auth: state.auth.auth
  }
}

export default connect(mapStateToProps)(HeaderContainer)
