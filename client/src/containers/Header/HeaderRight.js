import React, { Component } from 'react'
import { MyProfile, Logout } from '../../components/common'



class HeaderRight extends Component {
  render() {
    return (
      <div className='right-container' style={{
          display: 'flex', 
          width: '250px', 
          justifyContent: 'space-around'}}
        >
        <div className='my-profile-container'><MyProfile /></div>
        <div className='logout-container'><Logout /> </div>
      </div>
    )
  }
}

export default HeaderRight