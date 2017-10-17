import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';

const tags = [
  {value: 0, name:'Electronics'},
  {value: 1, name:'Household Items'},
  {value: 2, name:'Musical Instruments'},
  {value: 3, name:'Physical Media'},
  {value: 4, name:'Recreational Equipment'},
  {value: 5, name:'Sporting Goods'},
  {value: 6, name:'Tools'}
]

class Search extends Component {

  state = {
    values: [] 
  }

  handleChange = (event, index, values) => this.setState({values})

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return ''
      case 1:
        return tags[values[0]].name
      default:
        return `${values.length} names selected`
    }
  }

  menuItems(tags) {
    return tags.map((tag) => (
      <MenuItem
        key={tag.value}
        insetChildren={true}
        checked={this.state.values.indexOf(tag.value) > -1}
        value={tag.value}
        primaryText={tag.name}
      />
    ))
  }
  render() {
    return (
      <SelectField
        multiple={true}
        floatingLabelText='Filtered by Tag'
        value={this.state.tags}
        style={{top: -24}}
      >
        {this.menuItems(tags)}
      </SelectField>

    )
  }

}

export default Search