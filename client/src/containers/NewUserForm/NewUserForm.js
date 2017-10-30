import React, { Component } from "react"

class NewUserForm extends Component {
  state = {  }
  render() {
    return (
      <form onSubmit="submit">
        <label className="name">
          Name
          <input className="name-input" type="text" />
          <input classNam="name-input" type="text" />
        </label>
       </form>

    );
  }
}

export default NewUserForm;