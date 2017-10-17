import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import home from '../../images/home-tr.svg'
import image from '../../images/item-placeholder.jpg'
import CardFetch from './CardFetch'

export const ItemCard = ({ fetchItem, users }) => {
  const userName = users.map(user => (user.id === fetchItem.itemOwner && user.fullName))
  const userBio = users.map(user => (user.id === fetchItem.itemOwner && user.bio ))
  console.log(userName)
  return (
    <Card containerStyle={{ width: 320, maxHeight: '100%', padding: 0, margin: 0 }}>
      <CardMedia style={{margin: 0}}
        overlay={!fetchItem.available && <CardTitle style={{margin: 0}} title={ fetchItem.available ? '' : fetchItem.title } subtitle={ fetchItem.available ? '' : "Item borrowed" } />}
      >
        <img src={ fetchItem.imageUrl ? fetchItem.imageUrl : '../../images/item-placeholder.jpg' } alt="" />
      </CardMedia>
      <CardHeader
        title={ userName ? userName : "Default Avatar Name" }
        subtitle={ userBio ? userBio : "Default Avatar Bio" }
        avatar={ home }
      />
      <CardTitle title={fetchItem.title ? fetchItem.title :"test Card title" } subtitle={  fetchItem.subtitle ? fetchItem.subtitle : "test Card subtitle" } />
      <CardText>
        { fetchItem.description ? fetchItem.description :
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`}
        </CardText>
      <CardActions>
      { fetchItem.available && <RaisedButton label="Borrow" labelColor='white' backgroundColor='#343434' /> }
      </CardActions>
    </Card>
  )
}