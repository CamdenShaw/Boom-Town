import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import home from '../../images/home-tr.svg'
import image from '../../images/item-placeholder.jpg'
import Gravatar from 'react-gravatar'

export const ItemCard = ({ fetchItem }) => {
  const userName = fetchItem.itemowner.fullname
  const userEmail = fetchItem.itemowner.email
  let x = true
  let y = ""
  let tags = ""
  if(fetchItem.tags) {
    Object.values(fetchItem.tags).forEach(tag => {
      console.log(tag.tag)
      if(x === false) y = ', '
      if(x === true) x = false
      tags += `${y}${tag.tag}` 
    }) 
  } else {
    tags = "No Tags"
  }
  console.log(tags)
  return (
    <Card containerStyle={{ maxHeight: '100%', padding: 0, margin: 0 }}>
      <CardMedia style={{margin: 0}}
        overlay={fetchItem.borrower && <CardTitle 
                                            style={{ margin: 0 }}
                                            subtitle={ fetchItem.borrower && "Unavailable" }
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
        subtitle={ tags }
      />
      <CardText>
        { fetchItem.description ? fetchItem.description :
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`}
        </CardText>
      <CardActions> {
                    !fetchItem.borrower && <RaisedButton
                                              secondary={true}
                                              label="Borrow"
                                              backgroundColor='#343434'
                                              onClick={ (fetchItem) => {
                                                console.log('click')
                                                return fetchItem = {...fetchItem, "borrower": "this.user"}
                                                }}
                                            />
      } </CardActions>
    </Card>
  )
}