import React, { Component } from "react"
import { SelectField, MenuItem } from "material-ui"

const tags = [
    { value: 0, name: "Electronics" },
    { value: 1, name: "Household Items" },
    { value: 2, name: "Musical Instruments" },
    { value: 3, name: "Physical Media" },
    { value: 4, name: "Recreational Equipment" },
    { value: 5, name: "Sporting Goods" },
    { value: 6, name: "Tools" }
]

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: []
        }
    }

    handleChange = (event, index, values) => {
        console.log(values)
        this.setState({ values })
    }

    menuItems(values) {
        return tags.map(tag => (
            <MenuItem
                key={tag.value}
                insetChildren={true}
                checked={values && values.indexOf(tag.value) > -1}
                value={tag.value}
                primaryText={tag.name}
            />
        ))
    }

    render() {
        const { values } = this.props
        return (
            <SelectField
                multiple={true}
                floatingLabelText="Filtered by Tag"
                value={values}
                style={{ top: -24, margin: "0px 20px" }}
                onChange={this.props.submitValues}
            >
                {this.menuItems(values)}
            </SelectField>
        )
    }
}

export default Search
