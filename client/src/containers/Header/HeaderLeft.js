import React, { Component } from 'react'
import { Logo, Search } from '../../components/common'



class HeaderLeft extends Component {
  render() {
    return (
      <div className='left-container' style={{display: 'flex'}}>
        <div className='logo-container'><Logo /></div>
        <div className='search-container'><Search /></div>
      </div>
    )
  }
}

export default HeaderLeft