import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import home from '../../images/home-tr.svg'
import image from '../../images/item-placeholder.jpg'
import CardFetch from './CardFetch'
import Gravatar from 'react-gravatar'

export const ItemCard = ({ fetchItem, users }) => {
  const userName = users.map(user => (user.id === fetchItem.itemowner && user.fullname))
  const userEmail = users.map(user => (user.id === fetchItem.itemowner && user.email))
  console.log(userName, userEmail)
  return (
    <Card containerStyle={{ maxHeight: '100%', padding: 0, margin: 0 }}>
      <CardMedia style={{margin: 0}}
        overlay={!fetchItem.available && <CardTitle 
                                            style={{ margin: 0 }}
                                            subtitle={ fetchItem.available ? '' : "Unavailable" }
                                         />}
      >
        <img src={ fetchItem.imageurl ? fetchItem.imageurl : '../../images/item-placeholder.jpg' } alt="" />
      </CardMedia>
      <CardHeader
        title={ userName ? userName : "Default Avatar Name" }
        subtitle={ fetchItem.created ? fetchItem.created : "Default Avatar Bio" }
        avatar={userEmail ? <Gravatar
                              style={{borderRadius: '50%'}}
                              email={`${userEmail}`}
                            /> : home}
      />
      <CardTitle
        title={fetchItem.title ? fetchItem.title :"test Card title" }
        subtitle={  fetchItem.tags ? fetchItem.tags : "test Card subtitle" }
      />
      <CardText>
        { fetchItem.description ? fetchItem.description :
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`}
        </CardText>
      <CardActions> {
                    fetchItem.available && <RaisedButton
                                              secondary={true}
                                              label="Borrow"
                                              backgroundColor='#343434'
                                              onClick={ (fetchItem) => {
                                                console.log('click')
                                                return fetchItem = {...fetchItem, "available": false}
                                                }}
                                            />
      } </CardActions>
    </Card>
  )
}