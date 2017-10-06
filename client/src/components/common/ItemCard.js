import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import home from '../../images/home-tr.svg'
import image from '../../images/item-placeholder.jpg'

class ItemCard extends Component {
  render() {
    return (
      <Card containerStyle={{width: 300, maxHeight: '100%', padding: 0, margin: 0}}>
        <CardMedia
          overlay={<CardTitle title="test Overlay title" subtitle="test Overlay subtitle" />}
        >
          <img src={image} alt="" />
        </CardMedia>
        <CardHeader
          title="test Avatar"
          subtitle="test Subtitle"
          avatar={home}
        />
        <CardTitle title="test Card title" subtitle = "test Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <RaisedButton label="Borrow" />
        </CardActions>
      </Card>
    )
  }
}

export default ItemCard