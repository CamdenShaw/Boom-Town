import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';

const tags = [
  'Electronics',
  'Household Items',
  'Musical Instruments',
  'Physical Media',
  'Recreational Equipment',
  'Sporting Goods',
  'Tools'
]

class Search extends Component {

  state = {
    values: [] 
  }

  render() {
    return (
      <SelectField multiple={true} floatingLabelText='Filtered by Tag' value={this.state.tags} />
    )
  }

}

export default Search