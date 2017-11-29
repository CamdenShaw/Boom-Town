import React, { Component } from 'react'

class Footer extends Component {

  constructor() {
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
    console.log(this.state.checkUrl, this.urlSlicer())
    return this.state.checkUrl === this.urlSlicer()
  }

  render() {
    let { checkUrl } = this.state
    if(checkUrl === 'share' || checkUrl === 'login') return null
    else return (
      <p> &copy; 2017 Boomtown Corp. All Rights Reserved </p>
    )
  }
}

export default Footer