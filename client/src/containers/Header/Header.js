import React, { Component } from 'react'
import { MyProfile, Logo, Logout, Search } from '../../components/common/'
import AppBar from 'material-ui/AppBar'



class Header extends Component {
  render() {
    return (
      <AppBar showMenuIconButton={false}
        titleStyle={{display: 'none'}}
        style={{backgroundColor: 'ivory', display: 'flex', width: '100vw', height: '64px', justifyContent: 'space-between'}}>
        <div className='left-container' style={{display: 'flex'}}>
          <div className='logo-container'><Logo /></div>
          <div className='search-container'><Search /></div>
        </div>
        <div className='right-container' style={{display: 'flex', width: '250px', justifyContent: 'space-around'}}>
          <div className='my-profile-container'><MyProfile /></div>
          <div className='logout-container'><Logout /> </div>
        </div>
      </AppBar>
    )
  }
}

export default Header